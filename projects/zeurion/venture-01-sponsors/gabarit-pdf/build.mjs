#!/usr/bin/env node
/**
 * Gabarit PDF de livraison : markdown du rapport -> PDF au design « Salle de tri ».
 *
 * Usage :
 *   node build.mjs <rapport.md> [options]
 *
 * Options :
 *   -o, --out <fichier.pdf>   sortie (défaut : out/<nom-du-md>.pdf)
 *   --client "Nom"            nom du client sur la couverture
 *                             (défaut : partie du titre H1 après « : »)
 *   --contact "email"         email de contact au colophon
 *                             (défaut : placeholder [TO COMPLETE])
 *   --format letter|a4        format de page (défaut : letter, clients US)
 *   --keep-html               conserver le HTML intermédiaire pour débogage
 *
 * Conventions structurelles attendues du markdown (voir README.md) :
 *   - premier H1 = titre, paragraphes suivants = méta de couverture (jusqu'au 1er hr/H2)
 *   - H2 = sections (une page chacune), H2 contenant « tier N » = bascule de tier
 *   - H3 « N. Marque » = fiche sponsor (une page, ligne d'inbox, drapeau si tier 1)
 *   - blockquote dont la 1re ligne commence par « Subject: » = carte email
 *   - paragraphe ouvrant sur « **Étiquette** : » = champ étiqueté
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs';
import { dirname, join, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import puppeteer from 'puppeteer-core';

const HERE = dirname(fileURLToPath(import.meta.url));
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const FLAG_SVG =
  '<svg class="flag" viewBox="0 0 16 16" aria-label="Priority" role="img">' +
  '<path d="M3 1v14M3 2h9l-2.5 3L12 8H3" fill="none" stroke="currentColor" ' +
  'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* ---------- arguments ---------- */

const argv = process.argv.slice(2);
const opts = { format: 'letter', keepHtml: false, client: null, contact: null, out: null };
let input = null;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '-o' || a === '--out') opts.out = argv[++i];
  else if (a === '--client') opts.client = argv[++i];
  else if (a === '--contact') opts.contact = argv[++i];
  else if (a === '--format') opts.format = String(argv[++i]).toLowerCase();
  else if (a === '--keep-html') opts.keepHtml = true;
  else if (!a.startsWith('-') && !input) input = a;
  else { console.error(`Argument inconnu : ${a}`); process.exit(1); }
}
if (!input) { console.error('Usage : node build.mjs <rapport.md> [options]'); process.exit(1); }
if (!['letter', 'a4'].includes(opts.format)) { console.error('--format : letter ou a4'); process.exit(1); }
input = resolve(input);
if (!existsSync(input)) { console.error(`Fichier introuvable : ${input}`); process.exit(1); }
if (!existsSync(CHROME)) { console.error(`Chrome introuvable : ${CHROME}`); process.exit(1); }

const outPdf = resolve(opts.out ?? join(HERE, 'out', basename(input).replace(/\.md$/, '') + '.pdf'));
mkdirSync(dirname(outPdf), { recursive: true });

/* ---------- markdown -> html ---------- */

const md = readFileSync(input, 'utf8');
let html = marked.parse(md, { gfm: true });

/* Couverture : premier H1 + paragraphes jusqu'au premier hr ou h2. */
const coverMatch = html.match(/^\s*<h1>([\s\S]*?)<\/h1>\s*([\s\S]*?)(?=<hr\s*\/?>|<h2)/);
if (!coverMatch) { console.error('Structure inattendue : H1 de titre introuvable en tête.'); process.exit(1); }
const title = coverMatch[1].trim();
const coverMeta = coverMatch[2].trim();
let content = html.slice(coverMatch[0].length);

/* Fiches sponsors : suivi du tier courant au fil des H2, habillage des H3 numérotés. */
let currentTier = 1;
let sponsorCount = 0;
content = content.replace(/<h2>([\s\S]*?)<\/h2>|<h3>([\s\S]*?)<\/h3>/g, (m, h2, h3) => {
  if (h2 !== undefined) {
    const t = h2.match(/tier\s*(\d)/i);
    if (t) { currentTier = Number(t[1]); return `<h2 class="part">${h2}</h2>`; }
    return m;
  }
  const num = h3.match(/^(\d+)\.\s*([\s\S]+)$/);
  if (!num) return m;
  sponsorCount++;
  const flag = currentTier === 1 ? FLAG_SVG : '';
  return `<h3 class="sponsor tier-${currentTier}"><span class="row-dot"></span>` +
    `<span class="num">${num[1].padStart(2, '0')}</span>` +
    `<span class="name">${num[2].trim()}</span>${flag}</h3>`;
});

/* Champs étiquetés : « <p><strong>Étiquette</strong> : suite » -> étiquette mono. */
content = content.replace(
  /<p><strong>([^<:]{2,60})<\/strong>\s*:\s*/g,
  '<p class="field"><span class="field-label">$1</span>'
);

/* Cartes email : blockquote dont le premier paragraphe est « Subject: ... ». */
content = content.replace(
  /<blockquote>\s*<p>Subject:\s*([\s\S]*?)<\/p>/g,
  '<blockquote class="mail"><div class="mail-subject">' +
  '<span class="mail-subject-label">subject</span><span>$1</span></div>'
);

/* ---------- assemblage ---------- */

const css = readFileSync(join(HERE, 'template', 'report.css'), 'utf8');
const fontFace = [
  ['Space Grotesk', '500 700', 'space-grotesk-var.woff2'],
  ['Inter', '400 600', 'inter-var.woff2'],
  ['IBM Plex Mono', '400', 'ibm-plex-mono-400.woff2'],
  ['IBM Plex Mono', '500', 'ibm-plex-mono-500.woff2'],
].map(([family, weight, file]) => {
  const b64 = readFileSync(join(HERE, 'template', 'fonts', file)).toString('base64');
  return `@font-face { font-family: '${family}'; font-style: normal; font-weight: ${weight}; ` +
    `src: url(data:font/woff2;base64,${b64}) format('woff2'); }`;
}).join('\n');

const client = opts.client ?? (title.includes(':') ? title.split(':').pop().trim() : title);
const contact = opts.contact ?? '[TO COMPLETE : contact email]';
const kicker = title.split(':')[0].trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const coverMinHeight = opts.format === 'a4' ? '256mm' : '238mm';

const coverWindow = sponsorCount === 0 ? '' : `
  <div class="cover-window">
    <div class="cover-window-bar">
      <span class="dots"><span></span><span></span><span></span></span>
      <span class="label">inbox &middot; sponsor-opportunities</span>
    </div>
    <div class="cover-window-row">
      <span class="pill">${sponsorCount} unread</span>
      <span class="note">priority leads &middot; dated evidence</span>
    </div>
  </div>`;

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
${fontFace}
${css}
</style>
</head>
<body>
  <header class="cover" style="min-height: ${coverMinHeight};">
    <div class="cover-top">
      <span class="wordmark">zeurion<span class="dot">.</span></span>
      <span class="cover-kicker">${kicker}</span>
    </div>
    ${coverWindow}
    <h1>${title}</h1>
    <div class="cover-meta">${coverMeta}</div>
    <div class="cover-bottom">
      <span>Prepared exclusively for ${client}. One report, one newsletter: not for redistribution.</span>
      <span>zeurion.ai</span>
    </div>
  </header>
  <main class="content">
${content}
    <div class="colophon">
      <span class="wordmark">zeurion<span class="dot">.</span></span>
      <span class="colophon-note">report produced by zeurion &middot; every claim links to a public, dated source &middot; ${contact}</span>
    </div>
  </main>
</body>
</html>`;

const outHtml = outPdf.replace(/\.pdf$/, '.html');
writeFileSync(outHtml, page);

/* ---------- html -> pdf ---------- */

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
try {
  const tab = await browser.newPage();
  await tab.goto('file://' + outHtml, { waitUntil: 'networkidle0' });
  await tab.evaluateHandle('document.fonts.ready');
  await tab.pdf({
    path: outPdf,
    format: opts.format === 'a4' ? 'A4' : 'Letter',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate:
      '<div style="width:100%; font-family:Helvetica,Arial,sans-serif; font-size:7px; ' +
      'color:#6b7280; padding:0 15mm; display:flex; justify-content:space-between;">' +
      `<span>zeurion &middot; ${kicker.replace(/-/g, ' ')}</span>` +
      '<span>page <span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
    margin: { top: '18mm', bottom: '16mm', left: '15mm', right: '15mm' },
  });
} finally {
  await browser.close();
}
if (!opts.keepHtml) unlinkSync(outHtml);

console.log(`OK : ${outPdf}`);
console.log(`   ${sponsorCount} fiches sponsors, format ${opts.format}, client « ${client} »`);

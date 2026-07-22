#!/usr/bin/env node
/**
 * Génère les assets de marque du site : favicons PNG et image Open Graph.
 * Rendu par Chrome headless, tokens du design system « Salle de tri ».
 * Dépend de puppeteer-core installé dans ../gabarit-pdf (createRequire).
 * Usage : node generate-brand-assets.mjs   (sorties dans app/public/)
 */

import { writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(HERE, 'app', 'public');
const require = createRequire(join(HERE, '..', 'gabarit-pdf', 'package.json'));
const puppeteer = require('puppeteer-core');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const FONTS =
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
  '<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">';

const faviconHtml = `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>
  html, body { margin: 0; background: transparent; }
  .mark {
    width: 512px; height: 512px;
    background: #16181d;
    border-radius: 112px;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Space Grotesk', sans-serif; font-weight: 700;
    font-size: 330px; letter-spacing: -0.04em; color: #ffffff;
  }
  .mark span { transform: translateY(-6%); }
  .dot { color: #1d4ed8; }
</style></head><body><div class="mark"><span>z<span class="dot">.</span></span></div></body></html>`;

const ogHtml = `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: #fafbfc; color: #16181d;
    font-family: 'Inter', sans-serif;
    padding: 64px 72px;
    display: flex; flex-direction: column;
  }
  .top { display: flex; justify-content: space-between; align-items: baseline;
    border-bottom: 1px solid #e5e8ec; padding-bottom: 24px; }
  .wordmark { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 40px; letter-spacing: -0.02em; }
  .wordmark .dot { color: #1d4ed8; }
  .kicker { font-family: 'IBM Plex Mono', monospace; font-size: 19px; color: #4b5563; }
  .mid { flex: 1; display: flex; align-items: center; gap: 56px; }
  h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 63px;
    line-height: 1.08; letter-spacing: -0.02em; max-width: 560px; }
  .window { width: 430px; background: #ffffff; border: 1px solid #e5e8ec; border-radius: 14px;
    box-shadow: 0 24px 48px -30px rgba(22,24,29,0.35); overflow: hidden; flex-shrink: 0; }
  .bar { display: flex; align-items: center; gap: 12px; background: #f1f3f6;
    border-bottom: 1px solid #e5e8ec; padding: 12px 18px; }
  .dots { display: flex; gap: 6px; }
  .dots i { width: 10px; height: 10px; border-radius: 50%; background: #e5e8ec; display: block; }
  .label { font-family: 'IBM Plex Mono', monospace; font-size: 14px; color: #4b5563; white-space: nowrap; }
  .pill { margin-left: auto; font-family: 'IBM Plex Mono', monospace; font-size: 14px;
    background: #1d4ed8; color: #fff; border-radius: 999px; padding: 3px 13px; white-space: nowrap; }
  .row { display: flex; align-items: center; gap: 13px; padding: 15px 18px; border-bottom: 1px solid #e5e8ec; }
  .row:last-child { border-bottom: none; }
  .d { width: 10px; height: 10px; border-radius: 50%; background: #1d4ed8; flex-shrink: 0; }
  .brand { font-weight: 600; font-size: 18px; }
  .flag { margin-left: auto; }
  .tag { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; background: #f1f3f6;
    border: 1px solid #e5e8ec; border-radius: 5px; padding: 2px 8px; color: #16181d; }
  .foot { font-family: 'IBM Plex Mono', monospace; font-size: 18px; color: #4b5563;
    border-top: 1px solid #e5e8ec; padding-top: 24px; }
</style></head><body>
  <div class="top">
    <span class="wordmark">zeurion<span class="dot">.</span></span>
    <span class="kicker">sponsor-prospecting-report &middot; &euro;349</span>
  </div>
  <div class="mid">
    <h1>30 brands already sponsoring newsletters like yours.</h1>
    <div class="window">
      <div class="bar"><span class="dots"><i></i><i></i><i></i></span>
        <span class="label">inbox &middot; sponsor-opportunities</span>
        <span class="pill">30 unread</span></div>
      ${[
        ['Tines', 'PRIMARY ×5'],
        ['Sublime Security', 'TAKEOVER'],
        ['Corelight', 'PRIMARY ×3'],
        ['Nebulock', 'DEDICATED'],
      ].map(([b, t]) => `<div class="row"><span class="d"></span><span class="brand">${b}</span>
        <svg class="flag" viewBox="0 0 16 16" width="15" height="15"><path d="M3 1v14M3 2h9l-2.5 3L12 8H3" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="tag">${t}</span></div>`).join('')}
    </div>
  </div>
  <div class="foot">dated evidence &middot; verified contacts &middot; ready-to-send pitches &middot; zeurion.ai</div>
</body></html>`;

const tmp = mkdtempSync(join(tmpdir(), 'zeurion-assets-'));
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
try {
  const page = await browser.newPage();

  const favPath = join(tmp, 'favicon.html');
  writeFileSync(favPath, faviconHtml);
  await page.setViewport({ width: 512, height: 512 });
  await page.goto('file://' + favPath, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await page.screenshot({ path: join(PUBLIC, 'favicon-512.png'), omitBackground: true });

  const ogPath = join(tmp, 'og.html');
  writeFileSync(ogPath, ogHtml);
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto('file://' + ogPath, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await page.screenshot({ path: join(PUBLIC, 'og.png') });
} finally {
  await browser.close();
  rmSync(tmp, { recursive: true, force: true });
}

for (const size of [192, 180, 32]) {
  const name = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`;
  execFileSync('sips', ['-Z', String(size), join(PUBLIC, 'favicon-512.png'), '--out', join(PUBLIC, name)], { stdio: 'ignore' });
}
console.log('OK : favicon-512/192/32, apple-touch-icon, og.png dans app/public/');

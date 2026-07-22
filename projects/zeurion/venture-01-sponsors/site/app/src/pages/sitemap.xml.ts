import type { APIRoute } from 'astro';
import data from '../data/verticals.json';

const SITE = 'https://www.zeurion.ai';

export const GET: APIRoute = () => {
  const staticPages = ['/', '/sample', '/calculator', '/legal', '/terms', '/privacy'];
  const verticalPages = data.verticals.map((v) => `/who-sponsors/${v.slug}`);
  const urls = [...staticPages, ...verticalPages]
    .map((p) => `  <url><loc>${SITE}${p}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

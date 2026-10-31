import type { APIRoute } from 'astro';
import { getHome, getLocations, getPages, getPosts, getServices } from '../lib/content';
import { canonicalUrl } from '../lib/site';

const escapeXml = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const [home, pages, services, locations, posts] = await Promise.all([getHome(), getPages(), getServices(), getLocations(), getPosts()]);
  const entries: { path: string; lastmod?: Date }[] = [
    { path: '/', lastmod: home.data.updatedAt },
    ...pages.filter((p) => !p.data.noindex).map((p) => ({ path: p.data.path, lastmod: p.data.updatedAt })),
    ...(posts.length > 0 ? [{ path: '/blog', lastmod: posts[0].data.updatedAt ?? posts[0].data.date }] : []),
    ...services.map((s) => ({ path: `/services/${s.id}`, lastmod: s.data.updatedAt })),
    ...locations.map((l) => ({ path: `/locations/${l.id}`, lastmod: l.data.updatedAt })),
    ...posts.map((p) => ({ path: `/blog/${p.id}`, lastmod: p.data.updatedAt ?? p.data.date })),
  ];
  const urls = entries.map(({ path, lastmod }) => `  <url><loc>${escapeXml(canonicalUrl(path))}</loc>${lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}</url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

import { beaches } from './beaches-data';
import { restaurants } from './dining-data';
import { historicSites } from './historic-data';
import { attractions } from './attractions-data';

interface SitemapURL {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const baseUrl = 'https://charlestonguide.com';

export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

export function generateSitemapUrls(): SitemapURL[] {
  const staticPages: SitemapURL[] = [
    {
      url: '/',
      lastmod: getCurrentDate(),
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: '/historic-district',
      lastmod: getCurrentDate(),
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/beaches',
      lastmod: getCurrentDate(),
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/dining',
      lastmod: getCurrentDate(),
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/attractions',
      lastmod: getCurrentDate(),
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/blog',
      lastmod: getCurrentDate(),
      changefreq: 'daily',
      priority: 0.8
    }
  ];

  const beachUrls: SitemapURL[] = beaches.map(beach => ({
    url: `/beaches/${beach.slug}`,
    lastmod: getCurrentDate(),
    changefreq: 'weekly',
    priority: 0.8
  }));

  const restaurantUrls: SitemapURL[] = restaurants.map(restaurant => ({
    url: `/dining/${restaurant.slug}`,
    lastmod: getCurrentDate(),
    changefreq: 'weekly',
    priority: 0.8
  }));

  const historicUrls: SitemapURL[] = historicSites.map(site => ({
    url: `/historic-district/${site.slug}`,
    lastmod: getCurrentDate(),
    changefreq: 'weekly',
    priority: 0.8
  }));

  const attractionUrls: SitemapURL[] = attractions.map(attraction => ({
    url: `/attractions/${attraction.slug}`,
    lastmod: getCurrentDate(),
    changefreq: 'weekly',
    priority: 0.8
  }));

  return [
    ...staticPages,
    ...beachUrls,
    ...restaurantUrls,
    ...historicUrls,
    ...attractionUrls
  ];
}

export function generateSitemapXml(): string {
  const urls = generateSitemapUrls();
  
  const xmlUrls = urls
    .map(({ url, lastmod, changefreq, priority }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
}
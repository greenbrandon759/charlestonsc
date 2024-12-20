import { MetadataRoute } from 'next';
import { generateSitemapUrls } from '@/lib/sitemap-utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = generateSitemapUrls();
  
  return urls.map(({ url, lastmod, changefreq, priority }) => ({
    url: `https://charlestonguide.com${url}`,
    lastModified: new Date(lastmod),
    changeFrequency: changefreq,
    priority: priority,
  }));
}
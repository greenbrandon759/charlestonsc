import { NextResponse } from 'next/server';
import { generateSitemapXml } from '@/lib/sitemap-utils';

export async function GET() {
  const xml = generateSitemapXml();
  
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
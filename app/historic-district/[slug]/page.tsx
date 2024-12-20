import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/shared/PageHeader';
import { historicSites } from '@/lib/historic-data';
import { MapPin, Clock, Ticket } from 'lucide-react';

interface HistoricSitePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: HistoricSitePageProps): Promise<Metadata> {
  const site = historicSites.find((s) => s.slug === params.slug);
  
  if (!site) {
    return {
      title: 'Historic Site Not Found',
      description: 'The requested historic site could not be found.',
    };
  }

  return {
    title: `${site.name} - Charleston Historic District Guide`,
    description: site.description,
    keywords: `${site.name}, Charleston historic sites, Charleston landmarks, historic Charleston SC`,
  };
}

export default function HistoricSitePage({ params }: HistoricSitePageProps) {
  const site = historicSites.find((s) => s.slug === params.slug);

  if (!site) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={site.name}
        description={site.description}
        imageSrc={site.imageSrc}
        imageAlt={site.name}
      />

      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-8 not-prose">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              {site.address}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              {site.visitingHours}
            </div>
            <div className="flex items-center text-gray-600">
              <Ticket className="h-5 w-5 mr-2" />
              {site.admissionInfo}
            </div>
          </div>

          <p className="lead">{site.fullDescription}</p>

          <h2>Highlights</h2>
          <ul>
            {site.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <h2>Tour Options</h2>
          <ul>
            {site.tourOptions.map((tour) => (
              <li key={tour}>{tour}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
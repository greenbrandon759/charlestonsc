import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/shared/PageHeader';
import { attractions } from '@/lib/attractions-data';
import { MapPin, Clock, DollarSign, Globe, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AttractionPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: AttractionPageProps): Promise<Metadata> {
  const attraction = attractions.find((a) => a.slug === params.slug);
  
  if (!attraction) {
    return {
      title: 'Attraction Not Found',
      description: 'The requested attraction could not be found.',
    };
  }

  return {
    title: `${attraction.name} - Charleston SC Attractions Guide`,
    description: attraction.description,
    keywords: `${attraction.name}, Charleston attractions, things to do Charleston SC, ${attraction.category} Charleston`,
  };
}

export default function AttractionPage({ params }: AttractionPageProps) {
  const attraction = attractions.find((a) => a.slug === params.slug);

  if (!attraction) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={attraction.name}
        description={attraction.description}
        imageSrc={attraction.imageSrc}
        imageAlt={attraction.name}
      />

      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg mx-auto">
          <div className="flex flex-wrap gap-6 mb-8 not-prose">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              {attraction.address}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              {attraction.hours}
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-5 w-5 mr-2" />
              {attraction.admissionInfo}
            </div>
            <div className="flex items-center text-gray-600">
              <Star className="h-5 w-5 mr-2" />
              {attraction.rating} / 5
            </div>
          </div>

          <div className="mb-8">
            <Button asChild>
              <a href={attraction.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </Button>
          </div>

          <p className="lead">{attraction.fullDescription}</p>

          <h2>Highlights</h2>
          <ul>
            {attraction.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <h2>Features & Amenities</h2>
          <ul>
            {attraction.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h2>Visitor Tips</h2>
          <ul>
            {attraction.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
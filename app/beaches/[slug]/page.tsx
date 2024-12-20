import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/shared/PageHeader';
import { beaches } from '@/lib/beaches-data';

interface BeachPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BeachPageProps): Promise<Metadata> {
  const beach = beaches.find((b) => b.slug === params.slug);
  
  if (!beach) {
    return {
      title: 'Beach Not Found',
      description: 'The requested beach could not be found.',
    };
  }

  return {
    title: `${beach.name} - Charleston SC Beach Guide`,
    description: beach.description,
    keywords: `${beach.name}, Charleston beaches, ${beach.name} SC, Charleston SC beaches`,
  };
}

export default function BeachPage({ params }: BeachPageProps) {
  const beach = beaches.find((b) => b.slug === params.slug);

  if (!beach) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={beach.name}
        description={beach.description}
        imageSrc={beach.imageSrc}
        imageAlt={`${beach.name} Beach`}
      />

      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg mx-auto">
          <p className="lead">{beach.fullDescription}</p>
          
          <h2>Location & Access</h2>
          <p>{beach.distance}</p>
          <p>{beach.parkingInfo}</p>

          <h2>Best Time to Visit</h2>
          <p>{beach.bestTimeToVisit}</p>

          <h2>Amenities</h2>
          <ul>
            {beach.amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
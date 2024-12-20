import { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { BeachCard } from '@/components/beaches/BeachCard';
import { beaches } from '@/lib/beaches-data';

export const metadata: Metadata = {
  title: 'Best Beaches in Charleston SC - Complete Beach Guide',
  description: 'Discover Charleston\'s most beautiful beaches. From Folly Beach to Sullivan\'s Island, find the perfect spot for swimming, surfing, and sunbathing.',
  keywords: 'Charleston beaches, Folly Beach, Sullivan\'s Island, Isle of Palms, Charleston SC beaches, best beaches Charleston',
};

export default function BeachesPage() {
  return (
    <div>
      <PageHeader
        title="Charleston's Beautiful Beaches"
        description="Discover the perfect coastal getaway"
        imageSrc="https://images.unsplash.com/photo-1613744358026-c70c3c0a4c0d"
        imageAlt="Charleston Beach Sunset"
      />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">Explore Our Beaches</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            From the surfing waves of Folly Beach to the family-friendly shores of Isle of Palms,
            Charleston's beaches offer something for everyone. Each beach has its own unique character
            and charm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beaches.map((beach) => (
            <BeachCard
              key={beach.slug}
              name={beach.name}
              description={beach.description}
              imageSrc={beach.imageSrc}
              distance={beach.distance}
              amenities={beach.amenities}
              slug={beach.slug}
            />
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Beach Safety & Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Safety Guidelines</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Always swim near a lifeguard</li>
                <li>Check weather and tide conditions</li>
                <li>Stay hydrated and use sunscreen</li>
                <li>Follow posted signs and flags</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What to Bring</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Sunscreen and beach umbrella</li>
                <li>Water and snacks</li>
                <li>Beach chairs or blankets</li>
                <li>Cash for parking fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
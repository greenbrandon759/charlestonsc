import { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { HistoricSiteCard } from '@/components/historic/HistoricSiteCard';
import { historicSites } from '@/lib/historic-data';

export const metadata: Metadata = {
  title: 'Historic District Charleston SC - Walking Tours & Landmarks',
  description: 'Explore Charleston\'s Historic District with our comprehensive guide to landmarks, architecture, and walking tours. Discover centuries of history in the heart of Charleston.',
  keywords: 'Charleston Historic District, Charleston landmarks, Charleston architecture, Charleston walking tours, historic Charleston SC',
};

export default function HistoricDistrictPage() {
  return (
    <div>
      <PageHeader
        title="Charleston's Historic District"
        description="Step back in time through centuries of American history"
        imageSrc="https://images.unsplash.com/photo-1578774341147-1f8c23e8e72b"
        imageAlt="Charleston Historic District"
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">Explore Historic Landmarks</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Discover Charleston's rich history through its well-preserved architecture,
            historic homes, and cultural landmarks. Each site tells a unique story of
            the city's past.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {historicSites.map((site) => (
            <HistoricSiteCard
              key={site.slug}
              name={site.name}
              description={site.description}
              imageSrc={site.imageSrc}
              yearBuilt={site.yearBuilt}
              address={site.address}
              visitingHours={site.visitingHours}
              slug={site.slug}
            />
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Visitor Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Walking Tour Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Wear comfortable walking shoes</li>
                <li>Bring water and sun protection</li>
                <li>Start early to avoid heat</li>
                <li>Consider guided tours</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Best Times to Visit</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Spring (March-May)</li>
                <li>Fall (September-November)</li>
                <li>Early morning or late afternoon</li>
                <li>Weekdays for fewer crowds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
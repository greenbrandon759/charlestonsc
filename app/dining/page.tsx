import { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { RestaurantCard } from '@/components/dining/RestaurantCard';
import { restaurants } from '@/lib/dining-data';

export const metadata: Metadata = {
  title: 'Best Restaurants in Charleston SC - Local Dining Guide',
  description: 'Discover Charleston\'s best restaurants, from fine dining to local seafood spots. Your guide to Lowcountry cuisine and Charleston\'s food scene.',
  keywords: 'Charleston restaurants, best restaurants Charleston SC, Charleston fine dining, Charleston seafood, Lowcountry cuisine',
};

export default function DiningPage() {
  return (
    <div>
      <PageHeader
        title="Charleston's Culinary Scene"
        description="From Lowcountry cuisine to fine dining experiences"
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
        imageAlt="Charleston Restaurant Scene"
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Restaurants</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Experience Charleston's renowned culinary scene, from traditional Lowcountry
            cuisine to innovative fine dining. Our curated selection represents the
            best of Charleston's diverse food culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.slug}
              name={restaurant.name}
              description={restaurant.description}
              imageSrc={restaurant.imageSrc}
              cuisine={restaurant.cuisine}
              priceRange={restaurant.priceRange}
              address={restaurant.address}
              hours={restaurant.hours}
              slug={restaurant.slug}
            />
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Dining Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Reservations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Book fine dining 2-3 weeks ahead</li>
                <li>Many casual spots are walk-in only</li>
                <li>Consider dining at off-peak hours</li>
                <li>Sunday brunch is very popular</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Local Specialties</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>She-crab soup</li>
                <li>Shrimp and grits</li>
                <li>Lowcountry boil</li>
                <li>Fresh local oysters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
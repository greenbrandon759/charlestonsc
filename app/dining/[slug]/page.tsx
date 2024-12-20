import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { restaurants } from '@/lib/dining-data';
import { MapPin, Clock, Phone, Globe, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RestaurantPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: RestaurantPageProps): Promise<Metadata> {
  const restaurant = restaurants.find((r) => r.slug === params.slug);
  
  if (!restaurant) {
    return {
      title: 'Restaurant Not Found',
      description: 'The requested restaurant could not be found.',
    };
  }

  return {
    title: `${restaurant.name} - Charleston Restaurant Guide`,
    description: restaurant.description,
    keywords: `${restaurant.name}, Charleston restaurants, ${restaurant.cuisine} Charleston SC, best restaurants Charleston`,
  };
}

export default function RestaurantPage({ params }: RestaurantPageProps) {
  const restaurant = restaurants.find((r) => r.slug === params.slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={restaurant.name}
        description={restaurant.description}
        imageSrc={restaurant.imageSrc}
        imageAlt={restaurant.name}
      />

      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg mx-auto">
          <div className="flex flex-wrap gap-6 mb-8 not-prose">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              {restaurant.address}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              {restaurant.hours}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-2" />
              {restaurant.phoneNumber}
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-5 w-5 mr-2" />
              {restaurant.priceRange}
            </div>
          </div>

          <div className="mb-8">
            <Button
              asChild
              className="mr-4"
              variant={restaurant.reservations ? "default" : "secondary"}
            >
              <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
                {restaurant.reservations ? "Make Reservation" : "View Website"}
              </a>
            </Button>
          </div>

          <p className="lead">{restaurant.fullDescription}</p>

          <h2>Popular Dishes</h2>
          <div className="not-prose grid gap-6 mb-8">
            {restaurant.popularDishes.map((dish) => (
              <div key={dish.name} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            ))}
          </div>

          <h2>Features & Amenities</h2>
          <ul>
            {restaurant.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
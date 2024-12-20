import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1541777704-ce76e4c05a38"
          alt="Charleston South Carolina cityscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Charleston&#39;s Best Travel Destinations
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your guide to the most beautiful and historic city in South Carolina
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/attractions">Explore Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Top Destinations in Charleston</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1578774342019-187cc6d36dc4"
                alt="Historic District Charleston"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Historic District</h3>
              <p className="text-gray-600 mb-4">
                Explore centuries of history in Charleston&#39;s well-preserved historic district.
              </p>
              <Button asChild variant="outline">
                <Link href="/historic-district">Learn More</Link>
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1613744358026-c70c3c0a4c0d"
                alt="Folly Beach Charleston"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Folly Beach</h3>
              <p className="text-gray-600 mb-4">
                Relax on the pristine shores of Charleston&#39;s favorite beach destination.
              </p>
              <Button asChild variant="outline">
                <Link href="/beaches">Learn More</Link>
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1565793979206-e14454e49295"
                alt="Charleston Restaurants"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dining & Cuisine</h3>
              <p className="text-gray-600 mb-4">
                Savor the flavors of Lowcountry cuisine and fine dining experiences.
              </p>
              <Button asChild variant="outline">
                <Link href="/dining">Learn More</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest travel tips and updates about Charleston.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
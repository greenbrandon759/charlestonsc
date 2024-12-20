import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BeachCardProps {
  name: string;
  description: string;
  imageSrc: string;
  distance: string;
  amenities: string[];
  slug: string;
}

export function BeachCard({ name, description, imageSrc, distance, amenities, slug }: BeachCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={`${name} Beach`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <span className="text-sm text-gray-500">{distance}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity) => (
              <span
                key={amenity}
                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/beaches/${slug}`}>Learn More</Link>
        </Button>
      </div>
    </Card>
  );
}
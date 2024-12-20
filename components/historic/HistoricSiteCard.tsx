import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';

interface HistoricSiteCardProps {
  name: string;
  description: string;
  imageSrc: string;
  yearBuilt: string;
  address: string;
  visitingHours: string;
  slug: string;
}

export function HistoricSiteCard({
  name,
  description,
  imageSrc,
  yearBuilt,
  address,
  visitingHours,
  slug
}: HistoricSiteCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">Built in {yearBuilt}</p>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            {address}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            {visitingHours}
          </div>
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/historic-district/${slug}`}>View Details</Link>
        </Button>
      </div>
    </Card>
  );
}
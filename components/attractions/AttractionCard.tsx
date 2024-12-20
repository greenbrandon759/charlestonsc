"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, Star } from 'lucide-react';

interface AttractionCardProps {
  name: string;
  description: string;
  imageSrc: string;
  category: string;
  address: string;
  hours: string;
  admissionInfo: string;
  rating: number;
  slug: string;
}

export function AttractionCard({
  name,
  description,
  imageSrc,
  category,
  address,
  hours,
  admissionInfo,
  rating,
  slug
}: AttractionCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          {rating}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">{name}</h3>
            <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            {address}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            {hours}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <DollarSign className="h-4 w-4 mr-2" />
            {admissionInfo}
          </div>
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/attractions/${slug}`}>View Details</Link>
        </Button>
      </div>
    </Card>
  );
}
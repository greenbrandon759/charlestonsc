export interface Beach {
  name: string;
  slug: string;
  description: string;
  imageSrc: string;
  distance: string;
  amenities: string[];
  fullDescription: string;
  parkingInfo: string;
  bestTimeToVisit: string;
}

export const beaches: Beach[] = [
  {
    name: "Folly Beach",
    slug: "folly-beach",
    description: "A classic Charleston beach known for surfing and pier fishing.",
    imageSrc: "https://images.unsplash.com/photo-1613744358026-c70c3c0a4c0d",
    distance: "11.4 miles from downtown",
    amenities: ["Parking", "Restrooms", "Pier", "Surfing", "Restaurants"],
    fullDescription: "Folly Beach, nicknamed 'The Edge of America,' is a beloved barrier island that offers the perfect blend of beach fun and coastal charm. Known for its surfing spots and fishing pier, this 6-mile long beach provides endless opportunities for recreation and relaxation.",
    parkingInfo: "Public parking available at multiple access points. Parking fees apply.",
    bestTimeToVisit: "Early morning for surfing, late afternoon for spectacular sunsets."
  },
  {
    name: "Sullivan's Island",
    slug: "sullivans-island",
    description: "A pristine beach with historic lighthouse and coastal defense sites.",
    imageSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    distance: "9.1 miles from downtown",
    amenities: ["Free Parking", "Restaurants", "Historic Sites", "Kiteboarding"],
    fullDescription: "Sullivan's Island offers a more laid-back beach experience with its wide shores and historic charm. Home to Fort Moultrie and a distinctive lighthouse, this beach combines history with natural beauty.",
    parkingInfo: "Free street parking available throughout the island.",
    bestTimeToVisit: "Mid-morning to afternoon, perfect for history buffs and beach lovers alike."
  },
  {
    name: "Isle of Palms",
    slug: "isle-of-palms",
    description: "Family-friendly beach with resort amenities and water sports.",
    imageSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    distance: "12.5 miles from downtown",
    amenities: ["Parking", "Showers", "Volleyball", "Restaurants", "Water Sports"],
    fullDescription: "Isle of Palms is a family-friendly beach destination offering something for everyone. With its pristine shores, variety of water sports, and nearby amenities, it's perfect for a full day of beach activities.",
    parkingInfo: "Both metered and free parking available. Front beach parking requires payment.",
    bestTimeToVisit: "Perfect for full-day visits, especially during summer months."
  }
];
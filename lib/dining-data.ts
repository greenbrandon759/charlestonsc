export interface Restaurant {
  name: string;
  slug: string;
  description: string;
  imageSrc: string;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  address: string;
  hours: string;
  phoneNumber: string;
  website: string;
  features: string[];
  popularDishes: {
    name: string;
    description: string;
  }[];
  fullDescription: string;
  reservations: boolean;
  category: 'fine-dining' | 'casual' | 'seafood' | 'southern' | 'brunch';
}

export const restaurants: Restaurant[] = [
  {
    name: "Husk Restaurant",
    slug: "husk",
    description: "Refined Southern cuisine in a historic mansion setting.",
    imageSrc: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    cuisine: "Modern Southern",
    priceRange: "$$$$",
    address: "76 Queen St, Charleston, SC 29401",
    hours: "5:00 PM - 10:00 PM",
    phoneNumber: "(843) 577-2500",
    website: "https://huskrestaurant.com",
    features: ["Historic Setting", "Local Ingredients", "Seasonal Menu", "Full Bar"],
    popularDishes: [
      {
        name: "Southern Fried Chicken",
        description: "Heritage breed chicken with seasonal accompaniments"
      },
      {
        name: "Shrimp & Grits",
        description: "Charleston grits, local shrimp, seasonal vegetables"
      }
    ],
    fullDescription: "Located in a beautifully restored mansion on Queen Street, Husk celebrates the ingredients and traditions of the South. The menu changes daily based on the freshest local ingredients available.",
    reservations: true,
    category: "fine-dining"
  },
  {
    name: "167 Raw",
    slug: "167-raw",
    description: "Fresh seafood and raw bar in a casual atmosphere.",
    imageSrc: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    cuisine: "Seafood",
    priceRange: "$$$",
    address: "193 King St, Charleston, SC 29401",
    hours: "11:00 AM - 10:00 PM",
    phoneNumber: "(843) 579-4997",
    website: "https://167raw.com",
    features: ["Raw Bar", "Fresh Seafood", "Counter Service", "Wine Selection"],
    popularDishes: [
      {
        name: "Lobster Roll",
        description: "Fresh Maine lobster, butter, toasted roll"
      },
      {
        name: "Tuna Poke",
        description: "Sushi-grade tuna, avocado, soy sauce"
      }
    ],
    fullDescription: "167 Raw offers the freshest seafood in Charleston, with daily deliveries from local fishermen and select purveyors. The intimate setting and no-reservations policy create a lively atmosphere.",
    reservations: false,
    category: "seafood"
  },
  {
    name: "Halls Chophouse",
    slug: "halls-chophouse",
    description: "Premium steakhouse known for exceptional service.",
    imageSrc: "https://images.unsplash.com/photo-1544025162-d76694265947",
    cuisine: "Steakhouse",
    priceRange: "$$$$",
    address: "434 King St, Charleston, SC 29403",
    hours: "4:00 PM - 11:00 PM",
    phoneNumber: "(843) 727-0090",
    website: "https://hallschophouse.com",
    features: ["Prime Steaks", "Wine Cellar", "Live Music", "Sunday Gospel Brunch"],
    popularDishes: [
      {
        name: "Dry-Aged Tomahawk Ribeye",
        description: "42oz bone-in ribeye, dry-aged 28 days"
      },
      {
        name: "Seafood Tower",
        description: "Lobster, shrimp, oysters, crab claws"
      }
    ],
    fullDescription: "Halls Chophouse is a family-owned steakhouse offering the finest steaks, fresh seafood, and impeccable service. Known for their warm hospitality and live music, they've become a Charleston institution.",
    reservations: true,
    category: "fine-dining"
  }
];
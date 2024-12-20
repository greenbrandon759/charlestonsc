export interface HistoricSite {
  name: string;
  slug: string;
  description: string;
  imageSrc: string;
  yearBuilt: string;
  address: string;
  admissionInfo: string;
  tourOptions: string[];
  highlights: string[];
  fullDescription: string;
  visitingHours: string;
  category: 'mansion' | 'church' | 'museum' | 'garden';
}

export const historicSites: HistoricSite[] = [
  {
    name: "Rainbow Row",
    slug: "rainbow-row",
    description: "A series of historic Georgian row houses painted in pastel colors.",
    imageSrc: "https://images.unsplash.com/photo-1578774341147-1f8c23e8e72b",
    yearBuilt: "1740s",
    address: "83-107 East Bay Street",
    admissionInfo: "Free to view from street",
    tourOptions: ["Walking Tours", "Photography Tours", "Architecture Tours"],
    highlights: [
      "13 colorful historic houses",
      "Georgian architecture",
      "Waterfront location",
      "Historic preservation"
    ],
    fullDescription: "Rainbow Row represents the longest cluster of Georgian row houses in the United States. These buildings, originally constructed in the 1740s, served as merchants' stores with living quarters above. After falling into disrepair, they were restored in the 1930s and painted in their signature pastel colors.",
    visitingHours: "Viewable 24/7 from the street",
    category: "mansion"
  },
  {
    name: "St. Michael's Church",
    slug: "st-michaels-church",
    description: "The oldest church building in Charleston, featuring stunning colonial architecture.",
    imageSrc: "https://images.unsplash.com/photo-1578774341056-1b581c4c4c44",
    yearBuilt: "1761",
    address: "71 Broad Street",
    admissionInfo: "Free admission, donations welcome",
    tourOptions: ["Guided Tours", "Self-Guided Tours", "Group Tours"],
    highlights: [
      "Original colonial architecture",
      "Historic cemetery",
      "English-made bells",
      "Traditional services"
    ],
    fullDescription: "St. Michael's Church has served Charleston since 1751 and stands as a testament to colonial religious architecture. The church survived both the Revolutionary and Civil Wars, and its bells have marked significant moments in Charleston's history for over 250 years.",
    visitingHours: "Monday-Friday 9am-4pm, Sunday services",
    category: "church"
  },
  {
    name: "Nathaniel Russell House",
    slug: "nathaniel-russell-house",
    description: "A restored 1808 Federal-style mansion known for its free-flying staircase.",
    imageSrc: "https://images.unsplash.com/photo-1578774341098-1c2c4a160645",
    yearBuilt: "1808",
    address: "51 Meeting Street",
    admissionInfo: "$15 Adults, $8 Children",
    tourOptions: ["House Tours", "Garden Tours", "Architecture Tours"],
    highlights: [
      "Free-flying spiral staircase",
      "Period antiques",
      "Restored gardens",
      "Original architecture"
    ],
    fullDescription: "The Nathaniel Russell House Museum offers a glimpse into the lives of Charleston's merchant elite. This National Historic Landmark showcases three main floors of graceful architectural details and period furnishings, including the iconic free-flying staircase.",
    visitingHours: "Monday-Saturday 10am-5pm, Sunday 2pm-5pm",
    category: "mansion"
  }
];
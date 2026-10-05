export const BUSINESS_INFO = {
  name: "Sparkle Auto Spa Mobile Detailing",
  legalName: "Sparkle Auto Spa Detailing & C.Cortez Carwash Services LLC",
  tagline: "Professional wash and mobile auto detailing delivered directly to your home or office in San Jose & Silicon Valley.",
  requirementNote: "Mobile Service Requirement: Services performed on-site at residences or locations with an accessible outdoor water hookup.",
  loyaltyNote: "Loyalty Program: Earn points with every detail and receive exclusive discounts on your future services.",
  
  address: {
    street: "Serving Greater San Jose & Silicon Valley",
    city: "San Jose",
    state: "CA",
    zip: "95123",
    formatted: "San Jose, CA 95123 & Surrounding Areas",
  },
  
  serviceAreas: [
    "San Jose",
    "Santa Clara",
    "Sunnyvale",
    "Campbell",
    "Cupertino",
    "Los Gatos",
    "Milpitas",
    "Morgan Hill",
    "Saratoga"
  ],

  phone: "(408) 630-5775",
  rawPhone: "4086305775",
  secondaryPhone: "(360) 218-6714",
  secondaryRawPhone: "3602186714",
  website: "sparkle-auto-spa-mobile-detailing.square.site",
  email: "c.cortez.detailing@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61561726058079",
  facebookHandle: "C.Cortez.Carwash and Detailing Services",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Sparkle+Auto+Spa+Mobile+Detailing+San+Jose+CA",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=San%20Jose%2C%20CA%2095123&t=&z=12&ie=UTF8&iwloc=&output=embed",
  
  hours: [
    { day: "Monday", open: "8:00 AM", close: "6:00 PM", note: "Mobile Service Available" },
    { day: "Tuesday", open: "8:00 AM", close: "6:00 PM", note: "Mobile Service Available" },
    { day: "Wednesday", open: "8:00 AM", close: "6:00 PM", note: "Mobile Service Available" },
    { day: "Thursday", open: "Closed", close: "Closed", note: "Special Bookings by Request" },
    { day: "Friday", open: "Closed", close: "Closed", note: "Special Bookings by Request" },
    { day: "Saturday", open: "8:00 AM", close: "6:00 PM", note: "By Advance Appointment" },
    { day: "Sunday", open: "Closed", close: "Closed", note: "Weekend Advance Requests" },
  ],

  history: [
    {
      year: "2020",
      title: "Passionate Craftsmanship",
      description: "Carlos Cortez began perfecting high-end paint restoration, interior steam sanitization, and mobile carwash techniques across the South Bay."
    },
    {
      year: "2022",
      title: "Fully Outfitted Mobile Rig",
      description: "Upgraded to an industrial mobile detailing station carrying commercial pressure washers, dual-action orbital polishers, spot-free foam guns, and hot steam extractors."
    },
    {
      year: "2024",
      title: "Sparkle Auto Spa Rebranding",
      description: "Expanded under the Sparkle Auto Spa Mobile Detailing brand, serving luxury sportscars, daily commuters, and family fleets with doorstep convenience."
    },
    {
      year: "Present",
      title: "5-Star Silicon Valley Reputation",
      description: "Serving hundreds of satisfied car enthusiasts and families across San Jose with meticulous swirl-free gloss and showroom-grade interiors."
    }
  ],

  owner: {
    name: "Carlos Cortez",
    role: "Founder & Master Detailer",
    quote: "Buen día a todos! Every vehicle tells a story. Whether it is removing years of road grime, lifting stubborn coffee stains from floor mats, or buffing a clear coat to a mirror reflection, I treat every car in your driveway as if it were my own."
  },

  reviews: [
    {
      author: "David M.",
      location: "San Jose, CA",
      source: "Google Verified Review",
      rating: 5,
      date: "3 weeks ago",
      comment: "Carlos showed up right on time at my house in San Jose with his complete mobile setup. My Porsche 911 had swirl marks and brake dust caked on the wheels. He did the Executive Package with clay bar and sealant—the paint looks like liquid glass. Best mobile detailer in Silicon Valley!"
    },
    {
      author: "Maria S.",
      location: "Campbell, CA",
      source: "Facebook Recommendation",
      rating: 5,
      date: "1 month ago",
      comment: "We have two kids and a golden retriever, so our SUV interior was a disaster zone with pet hair and stains. Carlos worked magic with his steam extractor. The upholstery looks brand new and smells wonderfully fresh. Super professional and polite!"
    },
    {
      author: "Julian T.",
      location: "Santa Clara, CA",
      source: "Google Verified Review",
      rating: 5,
      date: "2 months ago",
      comment: "The Classic Package is phenomenal value. He spends serious time on the wheels, door jambs, and glass. Having someone come directly to your home while you work inside is unbeatable convenience. Carlos is honest, hardworking, and extremely meticulous."
    },
    {
      author: "Alejandro R.",
      location: "Sunnyvale, CA",
      source: "Facebook Recommendation",
      rating: 5,
      date: "3 months ago",
      comment: "Carlos Cortez hizo un trabajo increíble con mi camioneta. La pintura quedó brillante y el interior 100% desinfectado. Recomendadísimo para cualquiera en el área de la bahía!"
    }
  ]
};

export const isOpenNow = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  if (day === 1 || day === 2 || day === 3 || day === 6) {
    return hour >= 8 && hour < 18;
  }
  return false;
};

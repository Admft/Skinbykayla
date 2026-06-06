export const business = {
  name: 'SkinByKaylaa',
  legalName: 'SkinByKaylaa',
  tagline: 'Skin, brows, and self care in Royse City.',
  siteUrl: 'https://www.skinbykaylaa.com',
  phoneDisplay: '(214) 612-8225',
  phoneE164: '+12146128225',
  email: 'kpwindell46@gmail.com',
  reviewLink: 'https://share.google/OqmaBhc0F07svBO2a',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=SkinByKaylaa%20305%20E%20Main%20St%20Royse%20City%20TX%2075189',
  address: {
    street: '305 E Main St',
    city: 'Royse City',
    region: 'TX',
    postalCode: '75189-3726',
    country: 'US'
  },
  serviceArea: [
    'Royse City',
    'Fate',
    'Rockwall',
    'Caddo Mills',
    'Greenville',
    'Lavon',
    'Rowlett',
    'Wylie'
  ],
  hours: [
    { day: 'Monday', short: 'Mon', schemaDay: 'Monday', opens: '09:00', closes: '18:00' },
    { day: 'Tuesday', short: 'Tue', schemaDay: 'Tuesday', opens: '09:00', closes: '18:00' },
    { day: 'Wednesday', short: 'Wed', schemaDay: 'Wednesday', opens: '09:00', closes: '18:00' },
    { day: 'Thursday', short: 'Thu', schemaDay: 'Thursday', opens: '09:00', closes: '18:00' },
    { day: 'Friday', short: 'Fri', schemaDay: 'Friday', opens: '09:00', closes: '18:00' },
    { day: 'Saturday', short: 'Sat', schemaDay: 'Saturday', opens: '09:00', closes: '18:00' },
    { day: 'Sunday', short: 'Sun', schemaDay: 'Sunday', opens: '09:00', closes: '18:00' }
  ]
};

export type ServiceCategory = 'Brows' | 'Lashes' | 'Waxing';

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  price: number;
  durationMinutes: number;
  summary: string;
  details: string;
  searchPhrases: string[];
};

export const services: Service[] = [
  {
    slug: 'brow-tint',
    name: 'Brow Tint',
    category: 'Brows',
    price: 15,
    durationMinutes: 30,
    summary:
      'Semi-permanent brow color for softer definition, fuller-looking brows, and a polished no-makeup finish.',
    details:
      'Enhance the natural color and fullness of your brows with semi-permanent tinting. This is ideal for lighter or sparse brows that need more definition without daily makeup. Tint can last around 3 to 4 weeks on the skin and up to 6 weeks on brow hair, depending on skin type, aftercare, and routine.',
    searchPhrases: ['brow tint Royse City', 'eyebrow tint near me', 'semi permanent brow tint']
  },
  {
    slug: 'brow-wax-tint',
    name: 'Brow Wax + Tint',
    category: 'Brows',
    price: 40,
    durationMinutes: 45,
    summary:
      'The complete brow refresh: shaping, cleanup, and tint for a more sculpted, natural-looking brow.',
    details:
      'A complete brow service with a short consultation about your preferred shape. Brow mapping can be included when desired, followed by precise waxing and tinting to create a clean, defined finish. Tint adds depth and definition while lasting around 4 to 5 weeks for many clients.',
    searchPhrases: ['brow wax and tint Royse City', 'eyebrow waxing and tinting', 'brow shaping near me']
  },
  {
    slug: 'lash-lift-tint',
    name: 'Lash Lift & Tint',
    category: 'Lashes',
    price: 100,
    durationMinutes: 60,
    summary:
      'Lifted, curled natural lashes with black tint for an effortless eye-opening look.',
    details:
      'This gentle lash lift treatment enhances natural lashes by curling them upward from the base. A black tint is included for extra definition. Results commonly last 6 to 8 weeks depending on lash cycle and aftercare.',
    searchPhrases: ['lash lift Royse City', 'lash lift and tint near me', 'natural lash lift']
  },
  {
    slug: 'bikini-wax',
    name: 'Bikini Wax',
    category: 'Waxing',
    price: 35,
    durationMinutes: 30,
    summary:
      'A tidy bikini-line wax using gentle, skin-conscious technique for a smooth finish.',
    details:
      'A precise bikini wax for cleanup along the bikini line. Premium hypoallergenic waxes are used with pre- and post-care to support comfort and reduce irritation. Great before vacations, special occasions, or routine maintenance.',
    searchPhrases: ['bikini wax Royse City', 'bikini waxing near me', 'gentle bikini wax']
  },
  {
    slug: 'back-waxing',
    name: 'Back Waxing',
    category: 'Waxing',
    price: 45,
    durationMinutes: 30,
    summary: 'Back hair removal for a cleaner, smoother feel with efficient waxing technique.',
    details:
      'A smooth back wax designed to remove unwanted hair with careful prep and soothing aftercare. This service is a good fit for routine grooming, events, summer plans, or simply feeling more comfortable in your skin.',
    searchPhrases: ['back waxing Royse City', 'back wax near me', 'mens back waxing Royse City']
  },
  {
    slug: 'stomach-waxing',
    name: 'Stomach Waxing',
    category: 'Waxing',
    price: 30,
    durationMinutes: 30,
    summary: 'Targeted stomach waxing for smooth skin across the full stomach area or a smaller section.',
    details:
      'Remove unwanted hair from any part of the stomach area. The appointment includes cleansing, waxing, and calming post-wax care to leave skin looking clean and smooth.',
    searchPhrases: ['stomach waxing Royse City', 'stomach wax near me', 'body waxing Royse City']
  },
  {
    slug: 'full-face-wax',
    name: 'Full Face Wax',
    category: 'Waxing',
    price: 50,
    durationMinutes: 30,
    summary: 'Full facial waxing for a clean, soft finish with skin-soothing prep and aftercare.',
    details:
      'A full face wax for unwanted facial hair, finished with calming aftercare. This service helps create a smooth canvas while prioritizing gentle technique and comfort.',
    searchPhrases: ['full face wax Royse City', 'facial waxing near me', 'face wax esthetician']
  },
  {
    slug: 'brazilian-wax',
    name: 'Brazilian Wax',
    category: 'Waxing',
    price: 50,
    durationMinutes: 30,
    summary: 'Private Brazilian waxing in a calm, respectful space with gentle technique.',
    details:
      'A Brazilian wax appointment focused on privacy, comfort, and a smooth result. Pre-wax cleansing and post-wax soothing care are included to support the skin.',
    searchPhrases: ['Brazilian wax Royse City', 'Brazilian waxing near me', 'private waxing studio']
  },
  {
    slug: 'brow-shaping',
    name: 'Brow Shaping',
    category: 'Brows',
    price: 20,
    durationMinutes: 30,
    summary: 'Brow shaping with a razor cleanup for a fresh, natural arch. Tint can be added.',
    details:
      'Brow shaping creates cleaner lines and a more flattering shape using a razor cleanup. Add brow tint for $15 when you want extra definition.',
    searchPhrases: ['brow shaping Royse City', 'eyebrow shaping near me', 'brow cleanup']
  },
  {
    slug: 'brow-wax',
    name: 'Brow Wax',
    category: 'Brows',
    price: 20,
    durationMinutes: 30,
    summary: 'Precise brow waxing for clean lines, a flattering arch, and a polished finish.',
    details:
      'A precise brow wax shaped around your face shape and natural brow growth. Includes pre- and post-wax care to help minimize irritation and soothe the skin.',
    searchPhrases: ['brow wax Royse City', 'eyebrow wax near me', 'eyebrow shaping Royse City']
  },
  {
    slug: 'underarm-wax',
    name: 'Underarm Wax',
    category: 'Waxing',
    price: 35,
    durationMinutes: 20,
    summary: 'Quick underarm waxing for smooth underarms and less daily shaving hassle.',
    details:
      'A fast underarm wax with pre-wax cleansing and post-wax soothing lotion. Routine waxing may help hair appear softer and sparser over time for many clients.',
    searchPhrases: ['underarm wax Royse City', 'underarm waxing near me', 'armpit wax']
  },
  {
    slug: 'full-arm-wax',
    name: 'Full Arm Wax',
    category: 'Waxing',
    price: 45,
    durationMinutes: 30,
    summary: 'Full arm waxing from shoulder to wrist for smooth, soft arms.',
    details:
      'Remove unwanted hair from shoulder to wrist for a clean, smooth feel. Includes skin prep and soothing aftercare.',
    searchPhrases: ['full arm wax Royse City', 'arm waxing near me', 'body waxing']
  },
  {
    slug: 'half-arm-wax',
    name: 'Half Arm Wax',
    category: 'Waxing',
    price: 35,
    durationMinutes: 30,
    summary: 'Lower-arm waxing from below the elbow for a clean, hair-free look.',
    details:
      'The lower half of the arm below the elbow is waxed for a smooth finish. Soft wax is used when appropriate for efficient hair removal.',
    searchPhrases: ['half arm wax Royse City', 'lower arm wax near me', 'arm waxing']
  },
  {
    slug: 'full-leg-wax',
    name: 'Full Leg Wax',
    category: 'Waxing',
    price: 80,
    durationMinutes: 45,
    summary: 'Full leg waxing from upper thigh to ankles for silky, smooth skin.',
    details:
      'A full leg wax covering both legs from upper thigh to ankles. Includes pre-wax cleansing and post-wax moisturizing. Sensitive hard wax or soft wax may be used depending on what is best for the skin and service area.',
    searchPhrases: ['full leg wax Royse City', 'leg waxing near me', 'full leg wax']
  },
  {
    slug: 'half-leg-wax',
    name: 'Half Leg Wax',
    category: 'Waxing',
    price: 40,
    durationMinutes: 30,
    summary: 'Lower-leg waxing from knee down for smooth skin with careful aftercare.',
    details:
      'Remove hair from the knee down for smooth, silky skin. Soft wax and gentle hard wax options can be used depending on skin needs and hair type.',
    searchPhrases: ['half leg wax Royse City', 'lower leg waxing near me', 'leg wax esthetician']
  }
];

export type Review = {
  name: string;
  source: 'Groupon' | 'Google';
  text: string;
  meta?: string;
};

export const reviews: Review[] = [
  {
    name: 'Kim',
    source: 'Groupon',
    meta: '8 ratings | 4 reviews',
    text:
      'I absolutely love how comfortable she made me feel. Kaylaa is so down to earth our conversation was great. I will definitely be a return customer in the future.'
  },
  {
    name: 'Patricia',
    source: 'Groupon',
    meta: 'Top Reviewer',
    text:
      'She is unbelievably sweet, friendly, and fantastic at her job. The waxing was the most painless experience I have ever had! Definitely will be returning!'
  },
  {
    name: 'Ashley',
    source: 'Groupon',
    meta: 'Top Reviewer',
    text:
      'I was hesitant at first due to having to find a new wax lady, but I am so glad I found her. Very nice, listens, personable, professional, and good at what she does. TRY HER!'
  },
  {
    name: 'Claudia',
    source: 'Groupon',
    text: 'She is the best! She does a great job and is so sweet and personable!'
  },
  {
    name: 'cui',
    source: 'Groupon',
    meta: 'Top Reviewer',
    text: 'The best!'
  },
  {
    name: 'cui',
    source: 'Groupon',
    meta: 'Helpful Reviewer',
    text: 'Very kind and friendly.'
  },
  {
    name: 'Christina',
    source: 'Groupon',
    text: 'Kaylaa was amazing and I hope she continues to grow as a business owner!'
  },
  {
    name: 'Louise',
    source: 'Groupon',
    text: 'Kaylaa is great and very thorough! Definitely recommend booking with her.'
  },
  {
    name: 'Alessandra',
    source: 'Groupon',
    text: 'She was super sweet and it was an easy, simple process. She did a great job. I got a full leg wax!'
  },
  {
    name: 'Leah',
    source: 'Groupon',
    text: 'So kind and sweet, did amazing. Definitely coming back!'
  },
  {
    name: 'Rashmi',
    source: 'Groupon',
    text:
      'Kaylaa is amazing. She makes you comfortable. Very relaxing and painless service. I want to try her other services too. Highly recommended.'
  },
  {
    name: 'Adam Bobs',
    source: 'Google',
    meta: 'Local Guide',
    text:
      'Helped me with all my facial issues. Kayla helped me where others have let me down. She is really passionate about her work.'
  },
  {
    name: 'Yella Dickerson',
    source: 'Google',
    meta: 'Local Guide',
    text:
      'I was hesitant at first due to having to find a new wax lady, but I am so glad I found her. Very nice, listens, personable, professional, and good at what she does. I have decided that I will continue to use her. TRY HER!'
  },
  {
    name: 'Leticia Herrera',
    source: 'Google',
    text: 'Kaylaa is amazing. Her service is great. I love it and will most definitely return to her.'
  },
  {
    name: 'Stacey Windell',
    source: 'Google',
    text:
      'Made my first appointment for a consultation due to a new onset of adult acne. I got an acne facial which was amazing and was recommended products and a new daily skincare routine.'
  },
  {
    name: 'Cesar Del Rosario',
    source: 'Google',
    text:
      'Amazing esthetician. Kayla creates a very friendly and kind atmosphere. I am going back monthly!'
  },
  {
    name: 'matt windell',
    source: 'Google',
    meta: 'Local Guide',
    text:
      'I received an anti aging facial that left my face feeling refreshed and clean. Thank you for helping with my questions on skincare.'
  },
  {
    name: 'Kitchen Hub',
    source: 'Google',
    text: 'Great service, very gentle with my skin. Will be coming back for follow ups.'
  }
];

export const faqs = [
  {
    question: 'Where is SkinByKaylaa located?',
    answer:
      'SkinByKaylaa is located at 305 E Main St in Royse City, Texas 75189, serving Royse City, Fate, Rockwall, Caddo Mills, Greenville, Lavon, Rowlett, Wylie, and nearby communities.'
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Use the booking request form on this website or text SkinByKaylaa at (214) 612-8225. Kaylaa will confirm your service, day, and time.'
  },
  {
    question: 'What services are offered?',
    answer:
      'SkinByKaylaa offers brow tinting, brow waxing, brow wax and tint, brow shaping, lash lift and tint, Brazilian waxing, bikini waxing, face waxing, underarm waxing, arm waxing, leg waxing, back waxing, and stomach waxing.'
  },
  {
    question: 'Is this a good place for a first wax?',
    answer:
      'Many clients mention that Kaylaa makes them feel comfortable, heard, and relaxed. The studio focuses on private, gentle, respectful care for first-time and returning waxing clients.'
  },
  {
    question: 'How long does a lash lift and tint last?',
    answer:
      'A lash lift and tint commonly lasts 6 to 8 weeks depending on natural lash cycle, aftercare, products used at home, and individual lash growth.'
  }
];

export function formatMoney(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  return remaining ? `${hours} hr ${remaining} min` : `${hours} hr`;
}

export const serviceCategories = ['Brows', 'Lashes', 'Waxing'] as const;

export function servicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category);
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: business.address.street,
  addressLocality: business.address.city,
  addressRegion: business.address.region,
  postalCode: business.address.postalCode,
  addressCountry: business.address.country
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  '@id': `${business.siteUrl}/#business`,
  name: business.name,
  legalName: business.legalName,
  url: business.siteUrl,
  telephone: business.phoneE164,
  email: business.email,
  image: `${business.siteUrl}/social-card.svg`,
  priceRange: '$',
  address: postalAddress,
  areaServed: business.serviceArea.map((name) => ({ '@type': 'City', name })),
  openingHoursSpecification: business.hours.map((hours) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${hours.schemaDay}`,
    opens: hours.opens,
    closes: hours.closes
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SkinByKaylaa Service Menu',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.summary,
        serviceType: service.category,
        url: `${business.siteUrl}/services/${service.slug}/`
      }
    }))
  }
};

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${business.siteUrl}/services/${service.slug}/#service`,
    name: `${service.name} in Royse City, TX`,
    serviceType: service.category,
    description: service.details,
    provider: {
      '@id': `${business.siteUrl}/#business`
    },
    areaServed: business.serviceArea.map((name) => ({ '@type': 'City', name })),
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
      url: `${business.siteUrl}/services/${service.slug}/`,
      availability: 'https://schema.org/InStock'
    }
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${business.siteUrl}/#website`,
    url: business.siteUrl,
    name: business.name,
    description: business.tagline,
    publisher: {
      '@id': `${business.siteUrl}/#business`
    }
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

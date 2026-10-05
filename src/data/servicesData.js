export const SERVICES = [
  {
    id: 'classic-package',
    title: 'Classic Package',
    category: 'Essential Packages',
    subType: 'Mobile Wash & Maintenance Detail',
    price: 'Starting at $85',
    sedanPrice: '$85',
    suvPrice: '$105',
    duration: '1.5 - 2 Hours',
    image: '/images/service-classic.jpg',
    description: 'Our foundational mobile hand wash and interior refresher. Designed for regular maintenance to keep your daily driver crisp, sanitized, and gleaming without leaving your home.',
    icon: 'Sparkles',
    popular: true,
    features: [
      'Gentle pH-neutral snow foam bath & scratch-free hand wash',
      'Wheel faces, brake calipers, and tire barrel cleaning',
      'Non-sling premium tire dressing and satin finish',
      'Exterior & interior streak-free crystal glass cleaning',
      'Complete cabin blow-out and thorough vacuuming (seats, carpets, trunk)',
      'Dashboard, center console, and door panel damp-wipe dusting',
      'Door jambs, trunk sills, and gas cap cleaned and dried'
    ]
  },
  {
    id: 'executive-package',
    title: 'Executive Package',
    category: 'Essential Packages',
    subType: 'Full Interior Steam & Exterior Ceramic Gloss',
    price: 'Starting at $175',
    sedanPrice: '$175',
    suvPrice: '$225',
    duration: '3 - 4 Hours',
    image: '/images/hero-poster.jpg',
    description: 'The ultimate bumper-to-bumper mobile detailing experience. Combines full deep-cleaning interior hot-water steam extraction with paint decontamination, clay bar smoothing, and high-gloss ceramic spray sealant.',
    icon: 'Crown',
    popular: true,
    features: [
      'Everything included in the Classic Package',
      'Chemical iron decontamination & clay bar paint smoothing',
      'Hydrophobic ceramic spray sealant (3-6 month paint shield)',
      'Heated hot-water steam extraction on cloth seats, floor mats & carpets',
      'Deep leather deep scrub and nourishing UV conditioning',
      'Detailed steam cleaning of AC vents, cup holders & tight crevices',
      'Exterior black trim reconditioning & plastic UV UV restoration',
      'Engine bay dust-off and perimeter jamb wipe-down'
    ]
  },
  {
    id: 'full-exterior-detail',
    title: 'Full Exterior Detail (Clay Bar & Wax)',
    category: 'Exterior Detailing',
    subType: 'Decontamination, Clay Bar & Mirror Wax',
    price: 'Starting at $125',
    sedanPrice: '$125',
    suvPrice: '$155',
    duration: '2 - 2.5 Hours',
    image: '/images/service-clay-wax.jpg',
    description: 'Transform rough, gritty paint into liquid silk. Removes embedded industrial fallout, brake dust, and tree sap using specialized clay bar media, followed by hand-buffed carnauba wax or synthetic polymer sealant.',
    icon: 'Shield',
    popular: true,
    features: [
      '2-bucket scratch-safe citrus foam bath & bug/tar pre-soak',
      'Wheel wells, inner barrels, and lug nut cavity deep scrub',
      'Chemical iron remover to dissolve bonded brake dust particles',
      'Fine-grade clay bar treatment over 100% of painted panels and glass',
      'Machine application of premium Carnauba wax / synthetic sealant',
      'High-gloss water-beading coat that shields paint from UV rays and road film',
      'Deep tire dressing and rubber trim nourishment'
    ]
  },
  {
    id: 'full-interior-cleaning',
    title: 'Full Interior Cleaning & Sanitization',
    category: 'Interior Detailing',
    subType: 'Deep Steam Clean, Shampoo & Odor Neutralization',
    price: 'Starting at $115',
    sedanPrice: '$115',
    suvPrice: '$145',
    duration: '2 - 3 Hours',
    image: '/images/service-interior.jpg',
    description: 'A reset button for your vehicle cabin. Targeted steam cleaning and heated extraction remove deep-set spills, ground-in dirt, pet hair, and allergens, leaving your interior looking and smelling like new.',
    icon: 'Wind',
    popular: true,
    features: [
      'High-pressure air purge to dislodge crumbs from hidden tracks & seams',
      'Intensive carpet, upholstery, and floor mat shampoo & hot water extraction',
      'Pet hair eradication treatment using specialized rubber combs and extractors',
      'Delicate leather cleaning with pH-balanced foam and non-greasy conditioner',
      '220°F antibacterial steam sanitization through climate control vents',
      'Headliner spot cleaning and sun visor detailing',
      'Streak-free interior optical glass clarity with tint-safe cleaner'
    ]
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction & Swirl Mark Removal',
    category: 'Restoration Services',
    subType: 'Dual-Action Machine Compounding & Polishing',
    price: 'From $275',
    sedanPrice: '$275 - $375',
    suvPrice: '$350 - $495',
    duration: '4 - 6 Hours',
    image: '/images/service-clay-wax.jpg',
    description: 'Eliminates 75% to 90%+ of clear coat swirl marks, spiderwebs, light scratches, buffer trails, and water etchings using professional dual-action orbital polishers and precision micro-abrasives.',
    icon: 'Zap',
    popular: false,
    features: [
      'Multi-stage paint thickness measurement to ensure safe clear coat margins',
      'Single-stage or two-stage machine compounding with micro-polishing pads',
      'Removes oxidation, automated car wash scratches, and holograms',
      'Preps paint perfectly for long-term ceramic coatings or premium sealants',
      'Delivers jaw-dropping liquid mirror reflections and optical depth'
    ]
  },
  {
    id: 'headlight-restoration',
    title: 'Crystal Clear Headlight Restoration',
    category: 'Restoration Services',
    subType: 'Wet-Sanding, Compound & Ceramic UV Seal',
    price: '$65 / Pair',
    sedanPrice: '$65',
    suvPrice: '$65',
    duration: '45 Minutes',
    image: '/images/service-classic.jpg',
    description: 'Restores cloudy, yellowed, oxidized headlight lenses to crystal transparency, dramatically boosting night-time road visibility and overall vehicle aesthetics.',
    icon: 'Sun',
    popular: false,
    features: [
      'Surrounding paint masked and protected with automotive tape',
      'Progressive wet sanding (1000, 2000, 3000 grit) to remove yellowed oxidation layer',
      'Optical compound machine buff for glass-like optical clarity',
      'Ceramic UV clear sealant to prevent yellowing for 12+ months'
    ]
  },
  {
    id: 'engine-bay-detail',
    title: 'Engine Bay Steam Clean & Satin Dressing',
    category: 'Add-On Enhancements',
    subType: 'Degrease, Steam Rinse & Protective Dressing',
    price: '$50 Add-on',
    sedanPrice: '$50',
    suvPrice: '$50',
    duration: '30 - 45 Minutes',
    image: '/images/hero-poster.jpg',
    description: 'Safe, low-moisture degreasing of engine bay surfaces. Removes built-up oil film, road dirt, and leaves, finished with an OEM matte protective dressing.',
    icon: 'Wrench',
    popular: false,
    features: [
      'Sensitive electronics, alternator, and air intakes carefully shielded',
      'Citrus degreaser applied and agitated with soft horsehair detailing brushes',
      'Low-moisture steam rinse and forced warm air blow dry',
      'Non-silicone, dust-repellent OEM satin engine dressing'
    ]
  }
];

export const SERVICE_CATEGORIES = [
  'All Services',
  'Essential Packages',
  'Exterior Detailing',
  'Interior Detailing',
  'Restoration Services',
  'Add-On Enhancements'
];

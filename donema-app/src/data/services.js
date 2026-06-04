// One data object per service detail page. Rendered by <ServicePage>.
// Images are stable Unsplash URLs — swap for Donema's real project photos.

const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services = {
  renovations: {
    slug: 'renovations',
    index: '01',
    eyebrow: 'Home Renovations',
    title: 'Expert Home Renovations in Hoddesdon',
    lead: 'An established Hoddesdon construction company helping homeowners achieve premium renovation results — from cosmetic upgrades to full structural transformations.',
    intro:
      'At Donema Construction Vision Ltd, we are an established construction company based in Hoddesdon, assisting homeowners who are looking to improve their properties with premium renovation results. While we are based in Hoddesdon, we cover all surrounding areas in Hertfordshire, providing full property transformations.',
    hero: img('1503387762-592deb58ef4e', 2000),
    gallery: [img('1600585154340-be6161a56a0c'), img('1600607687939-ce8a6c25118c'), img('1493809842364-78817add7ffb')],
    sectionTitle: 'Why Choose Our Renovation Services?',
    pillars: [
      { k: 'Consultation', v: 'Bespoke & Rigorous', d: 'Plans tailored to your exact budget.' },
      { k: 'Materials', v: 'Industry-Leading Brands', d: 'Durable results that last for years.' },
      { k: 'Compliance', v: 'Full Safety Standards', d: 'Peace of mind & legal building compliance.' },
    ],
    includesTitle: 'Our Services Include',
    includes: [
      'Kitchen renovations',
      'Bathroom renovations',
      'Layout alterations',
      'Retrofitting',
      'Extensions',
      'Cosmetic upgrades',
    ],
    faqs: [
      {
        q: 'How long does a renovation take?',
        a: 'Timelines depend on the scale — from simple cosmetic upgrades taking a few days to full structural alterations taking several weeks. We give you a clear schedule before we start.',
      },
      {
        q: 'Do you cover areas outside Hoddesdon?',
        a: 'Yes. While we are based in Hoddesdon, we cover all surrounding areas in Hertfordshire, providing full property transformations.',
      },
      {
        q: 'Are you certified?',
        a: 'We are NICEIC registered and our tradesmen are City & Guilds qualified, so every project meets full safety and building compliance.',
      },
    ],
    ctaTitle: 'Ready to transform your Hoddesdon home?',
    ctaText: 'Join our list of satisfied clients in Hertfordshire. Let’s discuss your vision today.',
    ctaButton: 'Get My Free Consultation',
  },

  kitchens: {
    slug: 'kitchens',
    index: '02',
    eyebrow: 'Kitchen Fitting',
    title: 'Kitchen Fitting & Renovation in Hoddesdon',
    lead: 'Professional kitchen fitting and renovation — bespoke designs, structural alterations and installation of premium brands such as WREN.',
    intro:
      'Donema Construction Vision Ltd provides professional kitchen fitting and renovation services in Hoddesdon, specialising in bespoke designs, structural alterations, and the installation of premium brands like WREN. The company is fully accredited through NICEIC and City & Guilds.',
    hero: img('1600585154340-be6161a56a0c', 2000),
    gallery: [img('1600566753086-00f18fb6b3ea'), img('1556909114-f6e7ad7d3136'), img('1565538810643-b5bdb714032a')],
    sectionTitle: 'Benefits of a Professional Kitchen Renovation',
    pillars: [
      { k: 'Space Utilisation', v: 'Maximise Every Inch', d: 'Layouts that make the most of your room.' },
      { k: 'Functionality', v: 'Built for Modern Living', d: 'Custom layouts designed around how you cook.' },
      { k: 'Property Value', v: 'High ROI', d: 'Modern kitchens add lasting value to your home.' },
    ],
    includesTitle: 'Our Kitchen Renovation Process',
    includes: [
      'Bespoke design consultation',
      'Structural alterations',
      'Premium brand supply (WREN & more)',
      'Plumbing & electrics',
      'Tiling & splashbacks',
      'Final fit & finish',
    ],
    faqs: [
      {
        q: 'Do you work with specific kitchen brands?',
        a: 'We offer bespoke designs and are highly experienced in fitting high-quality brands such as WREN, ensuring professional installation and warranty compliance.',
      },
      {
        q: 'Will the renovation meet building regulations?',
        a: 'Yes — we adhere to strict building regulations and our team is NICEIC certified, so all electrical and structural work is fully compliant.',
      },
    ],
    ctaTitle: 'Start Your Hoddesdon Kitchen Transformation',
    ctaText: 'Schedule your bespoke consultation with our expert team today.',
    ctaButton: 'Book Consultation',
  },

  bathrooms: {
    slug: 'bathrooms',
    index: '03',
    eyebrow: 'Bathroom Fitting',
    title: 'Bespoke Bathroom Fitting in Hoddesdon',
    lead: 'Premium bathroom fitting and renovation — full redesigns, fixture upgrades and luxury installations finished to a flawless standard.',
    intro:
      'Donema Construction Vision Ltd offers premium bathroom fitting and renovation services in Hoddesdon. We specialise in full redesigns, fixture upgrades, and luxury installations — handling everything from plumbing and waterproofing to the final tile.',
    hero: img('1584622650111-993a426fbf0a', 2000),
    gallery: [img('1620626011761-996317b8d101'), img('1552321554-5fefe8c9ef14'), img('1507652313519-d4e9174996dd')],
    sectionTitle: 'Why Choose Donema Construction?',
    pillars: [
      { k: 'Design', v: 'Bespoke & Tailored', d: 'Optimised space utilisation for any size room.' },
      { k: 'Materials', v: 'Industry-Leading Sources', d: 'Durable, resilient, water-tight results.' },
      { k: 'Compliance', v: 'Certified Safety Standards', d: 'Full legal & building peace of mind.' },
    ],
    includesTitle: 'What We Handle',
    includes: [
      'Full bathroom redesigns',
      'Layout alterations',
      'Fixture & fitting upgrades',
      'Luxury installations',
      'Waterproofing & tiling',
      'NICEIC-certified electrics',
    ],
    faqs: [
      {
        q: 'How do you handle plumbing and electrical safety?',
        a: 'We adhere to strict building regulations and our team is NICEIC certified, so all plumbing and electrical work is signed off safely and legally.',
      },
      {
        q: 'Can you help with layout alterations?',
        a: 'Yes. As specialists in structural renovations, we can completely re-design your bathroom layout to make better use of the space.',
      },
    ],
    ctaTitle: 'Ready to Renovate Your Bathroom in Hoddesdon?',
    ctaText: 'Contact Donema Construction today for a free, no-obligation consultation.',
    ctaButton: 'Request a Free Consultation',
  },

  extensions: {
    slug: 'extensions',
    index: '04',
    eyebrow: 'Property Extensions',
    title: 'Property Extensions in Hoddesdon & Hertfordshire',
    lead: 'High-quality property extensions — end-to-end, from design consultation through construction, with full UK building-regulation compliance.',
    intro:
      'Donema Construction Vision Ltd specialises in high-quality property extensions in Hoddesdon, offering end-to-end services from design consultation through to construction with full UK building-regulations compliance. Our NICEIC-certified team delivers custom structural solutions for kitchen extensions, home offices, gyms, and additional bedrooms.',
    hero: img('1564013799919-ab600027ffc6', 2000),
    gallery: [img('1600210492493-0946911123ea'), img('1541888946425-d81bb19240f5'), img('1416331108676-a22ccb276e35')],
    sectionTitle: 'Our Extension Standards',
    pillars: [
      { k: 'Project Planning', v: 'Rigorous Consultation', d: 'Bespoke design tailored to your budget.' },
      { k: 'Material Quality', v: 'Industry-Leading Brands', d: 'A resilient & durable structure.' },
      { k: 'Safety & Regs', v: 'Full Building Compliance', d: 'Structural warranty & total peace of mind.' },
    ],
    includesTitle: 'Popular Extension Uses',
    includes: [
      'Kitchen expansions',
      'New home offices',
      'Garden gyms',
      'Additional bedrooms',
      'Single & double storey',
      'Open-plan living spaces',
    ],
    faqs: [
      {
        q: 'What can I use a home extension for?',
        a: 'Popular uses include kitchen expansions, new home offices, garden gyms, or additional bedrooms — we tailor the design to how you want to live.',
      },
      {
        q: 'Are your extensions built to building regulations?',
        a: 'Yes. We adhere to all strict UK building regulations and current safety standards, with a structural warranty for your peace of mind.',
      },
    ],
    ctaTitle: 'Start Your Extension Project in Hoddesdon',
    ctaText: 'Enquire online today and let’s plan the space your home is missing.',
    ctaButton: 'Enquire Online Today',
  },
};

export const serviceList = Object.values(services);

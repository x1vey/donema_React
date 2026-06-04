const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const stats = [
  { num: 18, suffix: '+', label: 'Years of experience' },
  { num: 400, suffix: '+', label: 'Projects completed' },
  { num: 100, suffix: '%', label: 'Local & insured' },
  { text: 'FREE', label: 'Consultations & surveys' },
];

// Real Google reviews from donema.uk/reviews.html
export const reviews = [
  {
    name: 'Kristina Pollitt',
    source: 'Google',
    text: 'We had a single storey extension done and reconstructed bedrooms upstairs. Domas and his team were great despite our last-minute changes and some issues with delayed deliveries.',
    project: 'Extension & Bedrooms',
  },
  {
    name: 'Godwin Okafor',
    source: 'Google',
    text: 'Domas and his team were phenomenal. My WREN kitchen was professionally installed and their price was affordable.',
    project: 'Kitchen Fitting',
  },
  {
    name: 'George Ts',
    source: 'Google',
    text: 'Fantastic service from Domas and Artur from start to finish! They fitted our kitchen with incredible attention to detail, and the result looks sleek and professional.',
    project: 'Kitchen Fitting',
  },
  {
    name: 'Rob T',
    source: 'Google',
    text: 'We recently hired Donema Construction to refurbish our bathroom and couldn’t be more pleased with the results. Domas and his team were professional, reliable, and impressively accommodating.',
    project: 'Bathroom Refurbishment',
  },
  {
    name: 'Frankie',
    source: 'Google',
    text: 'It was a great experience working with Donema Construction Vision Ltd. The entire project was completed very nicely and the quality of work was very good.',
    project: 'Full Project',
  },
  {
    name: 'Alex K',
    source: 'Google',
    text: 'Really impressed with the job they did. They were friendly, professional, and nothing was too much trouble. Even when the supplier caused a few problems, they just worked around it.',
    project: 'Renovation',
  },
];

export const process = [
  { no: '01', title: 'Free Consultation', text: 'We visit your home, listen to your vision, and carry out a no-obligation site survey.' },
  { no: '02', title: 'Transparent Quote', text: 'A clear, itemised quote with honest pricing — no surprises, no hidden extras.' },
  { no: '03', title: 'Skilled Build', text: 'Qualified tradesmen, locally-sourced materials, and tidy, respectful workmanship.' },
  { no: '04', title: 'Sign-Off & Care', text: 'Certified completion, a full walk-through, and aftercare you can actually rely on.' },
];

export const gallery = [
  { src: img('1564013799919-ab600027ffc6'), title: 'Rear Extension', place: 'Broxbourne', cat: 'Extensions', size: 'tall' },
  { src: img('1600566753086-00f18fb6b3ea'), title: 'Open-Plan Kitchen', place: 'Hoddesdon', cat: 'Kitchens', size: '' },
  { src: img('1584622650111-993a426fbf0a'), title: 'Family Bathroom', place: 'Ware', cat: 'Bathrooms', size: '' },
  { src: img('1600210492493-0946911123ea', 1700), title: 'Loft Conversion', place: 'Hertford', cat: 'Renovations', size: 'wide' },
  { src: img('1581094794329-c8112a89af12'), title: 'Structural Brickwork', place: 'Cheshunt', cat: 'Renovations', size: 'tall' },
  { src: img('1493809842364-78817add7ffb'), title: 'Full Refurbishment', place: 'Hoddesdon', cat: 'Renovations', size: '' },
  { src: img('1600585154340-be6161a56a0c'), title: 'Shaker Kitchen', place: 'Broxbourne', cat: 'Kitchens', size: '' },
  { src: img('1620626011761-996317b8d101'), title: 'Walk-In Wet Room', place: 'Hoddesdon', cat: 'Bathrooms', size: '' },
  { src: img('1416331108676-a22ccb276e35', 1700), title: 'Double-Storey Extension', place: 'Hertford', cat: 'Extensions', size: 'wide' },
];

export const galleryFilters = ['All', 'Kitchens', 'Bathrooms', 'Extensions', 'Renovations'];

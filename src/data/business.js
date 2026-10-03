// ─────────────────────────────────────────────────────────────
// Real business details live here, separate from layout code.
// Anything set to null is NOT shown as fact: the site displays a
// "to be confirmed" state instead. Fill these in before launch.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Alkaitan Restaurant',
  shortName: 'Alkaitan',

  // Contact (null = not yet verified)
  // Example (uncomment and edit):
  phone: '+2348012345678',        // e.g. '+2348012345678' (international format)
  whatsapp: '2349095405520',       // digits only with country code, e.g. '2348012345678'
  email: 'hello@alkaitan.com',     // e.g. 'hello@alkaitan.com'
  address: '12 Example Street, Port Harcourt, Rivers State', // e.g. '12 Example Street, Port Harcourt'
  // mapUrl: 'https://maps.google.com/?q=Alkaitan+Restaurant', // Google Maps share link
  // mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...', // Google Maps embed src (optional)
  // phone: null,
  // whatsapp: null,
  // email: null,
  // address: null,
  mapUrl: null,
  mapEmbedUrl: null,

  // Opening hours: [{ days: 'Monday to Friday', time: '10:00 – 22:00' }]
  // Example (uncomment and edit):
  // hours: [
  //   { days: 'Monday – Thursday', time: '11:00 – 22:00' },
  //   { days: 'Friday', time: '11:00 – 23:00' },
  //   { days: 'Saturday', time: '10:00 – 23:00' },
  //   { days: 'Sunday', time: '10:00 – 22:00' },
  // ],
  hours: [],

  // Only add profiles that really belong to the restaurant.
  // keys: instagram | facebook | tiktok | x
  // Example (uncomment and edit):
  // socials: [
  //   { key: 'instagram', label: 'Instagram', url: 'https://instagram.com/alkaitan' },
  //   { key: 'facebook', label: 'Facebook', url: 'https://facebook.com/alkaitan' },
  // ],
  socials: [],

  // Shown before every price on the menu
  currency: '₦',

  // While true, the menu shows a notice that dishes and prices are samples.
  // Set to false once the approved menu is in src/data/menu.js.
  sampleContent: true,
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Featured', href: '#featured' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

// Legal links for footer (optional)
export const legalLinks = [
  // { label: 'Privacy policy', href: '#privacy' },
  // { label: 'Terms of service', href: '#terms' },
  // { label: 'Accessibility', href: '#accessibility' },
]

// Draft copy: replace with approved brand wording before launch.
export const about = {
  title: 'Delicious food, made to share',
  paragraphs: [
    'Alkaitan is a place to sit down, slow down and share a good meal. Whether you are dropping in for lunch, meeting friends or planning a family gathering, we want you to feel looked after from the moment you arrive.',
    'Our kitchen focuses on well-prepared food served warmly. Browse the menu, then send a reservation request and we will get back to you to confirm.',
  ],
}

export const gallery = [
  { id: 'g1', caption: 'Signature plates', alt: 'A plated main course', src: null },
  { id: 'g2', caption: 'The dining room', alt: 'The restaurant dining area', src: null },
  { id: 'g3', caption: 'Fresh desserts', alt: 'A selection of desserts', src: null },
  { id: 'g4', caption: 'Drinks', alt: 'Cold drinks served at the table', src: null },
  { id: 'g5', caption: 'Group tables', alt: 'A large table set for a group', src: null },
  { id: 'g6', caption: 'From the kitchen', alt: 'A dish being prepared in the kitchen', src: null },
]

// Helpers ────────────────────────────────────────────────────
export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`
export const whatsappHref = (number, text) =>
  `https://wa.me/${number.replace(/\D/g, '')}${text ? `?text=${encodeURIComponent(text)}` : ''}`
export const directionsHref = (b) =>
  b.mapUrl ||
  (b.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`
    : null)
export const formatPrice = (price) =>
  `${business.currency}${Number(price).toLocaleString('en-NG')}`

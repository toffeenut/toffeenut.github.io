// All the words on the site live here. Edit this file to change copy.

export const person = {
  name: 'Angela Salud Chua',
  title: 'Head of Product Design',
  company: 'DigiValet',
  location: 'New York',
  email: 'angela@toffeenutdesign.com',
  linkedin: 'https://www.linkedin.com/in/angelasaludchua/',
  url: 'https://www.toffeenutdesign.com',
};

export const home = {
  headline: 'Twenty years, one hundred products, and still in the details.',
  sub: 'I design for brands where the experience is the product, and where nobody gets a second chance to make a first impression.',
  meta: ['Head of Product Design at DigiValet.', 'Based in New York.'],
  about:
    'I started out inside my clients’ teams, taking products from first idea to launch, and built an award-winning product design studio along the way. Twenty years later, I run the product function at DigiValet: strategy, design, and the bar details have to clear.',
  stats: [
    { value: '20', label: 'Years in the work' },
    { value: '100+', label: 'Projects start to finish' },
    { value: '10+', label: 'Industries and counting' },
  ],
  closing: 'Make it simple. Then make it simpler.',
  footnote: '© 2026 Angela Salud Chua \u{1F1F5}\u{1F1ED}',
};

export const about = {
  line: 'Head of Product Design at DigiValet. Based in New York.',
  story: [
    'Angela Salud Chua has been designing apps since 2008, starting in Manila, Philippines, back when the App Store was still in its infancy. Her visual design work grew into user experience design at a time when apps were still figuring out how to productize, scale and keep people coming back.',
    'She started out inside her clients’ teams, taking products from first sketch to launch day. That work grew into Toffeenut Design Studio, her independent product design and strategy studio, which she built into an agency, a fractional design partner and an embedded team, depending on what each client needed. In time, the studio shifted and became the design core of DigiValet. Over 20 years, she has worked with brands like Aman, Bvlgari, Wynn Resorts, Samsung, Salesforce, Stanford Medicine, Noteshelf, Tastemade, uHoo and MetroMart, among others, and the work picked up an Apple Editors’ Choice, a CES Innovation Awards honor, and Awwwards and CSSDA recognition, among others, along the way.',
    'Today she is Head of Product Design at DigiValet, the experience platform behind in-room technology at luxury hotels, branded residences, workspaces, senior living and health-tech properties around the world. She runs the product function end to end: strategy, design, and the bar every detail has to clear.',
    'Most of that work is quiet by design, and so is Angela. She’d rather let the products do the talking than be the loudest voice online. Quiet isn’t the same as agreeable, though: in the room, she’s the one asking why, and holding the line when a shortcut would cost the people using the product.',
    'Angela also holds a UX Analyst certification from Human Factors International.',
  ],
  brands: [
    'Aman', 'Bvlgari', 'Raffles', 'W Hotels', 'Okada Manila', 'Wynn Resorts', 'Aldar', 'Armani', 'Dior',
    'Samsung', 'Huawei', 'Salesforce', 'Stanford Medicine', 'Good Morning America', 'Tastemade', 'Mann+Hummel', 'Incentex',
    'Wavemaker', 'REinvent', 'Realmac', 'naked Hub', 'LiHO Tea', 'JustCo', 'Shiny Frog', 'MetroMart', 'uHoo', 'Noteshelf',
  ],
};

// About page FAQ. Shown on the page and tagged as FAQ structured data.
// `a` is plain text (what search engines and AI tools read); `html` is optional, for links on the page.
export const faq = [
  { q: 'Who is Angela Salud Chua?', a: 'Angela Salud Chua is a product designer and Head of Product Design at DigiValet. She has been designing apps since 2008, starting in Manila, Philippines, and is based in New York.' },
  { q: 'What does she do at DigiValet?', a: 'She runs the product function end to end: strategy, design, and the bar every detail has to clear. DigiValet’s technology runs in luxury hotels, branded residences, workspaces, senior living and health-tech properties around the world.' },
  { q: 'When did she start designing apps?', a: 'In 2008, in Manila, when the App Store was still new. She started in visual and icon design and moved into user experience design as apps learned to scale.' },
  { q: 'What is Toffeenut Design Studio?', a: 'Her independent product design and strategy studio, which worked as an agency, a fractional design partner and an embedded team. It later became the design core of DigiValet.' },
  { q: 'Which brands has she designed for?', a: 'Aman, Bvlgari, Wynn Resorts, Riyadh Air, Samsung, Salesforce, Stanford Medicine, Noteshelf, Tastemade, uHoo and MetroMart, among others. Her work has earned an Apple Editors’ Choice, a CES Innovation Awards honor, and Awwwards and CSSDA recognition.' },
  { q: 'How can I reach her?', a: 'On LinkedIn (linkedin.com/in/angelasaludchua), or by email at angela@toffeenutdesign.com.',
    html: 'On <a href="https://www.linkedin.com/in/angelasaludchua/" target="_blank" rel="noopener">LinkedIn</a>, or by email at <a href="mailto:angela@toffeenutdesign.com">angela@toffeenutdesign.com</a>.' },
];

// Homepage photos, in order. `file` is the image name in src/assets/work.
// `alt` is the description search engines and screen readers use.
export const work = [
  { file: 'digivalet-aman-in-room-tablet.jpg', alt: 'DigiValet in-room tablet app for Aman Hotels and Residences, designed for both the hotel guest experience and the resident experience, with room controls and service requests.' },
  { file: 'hotel-self-check-in.jpg', alt: 'Hotel self check-in app on a tablet, with face recognition, keycard requests and wayfinding.' },
  { file: 'riyadh-air-app.jpg', alt: 'Riyadh Air mobile app launch screen, the airline logo above an airplane window at dusk.' },
  { file: 'museum-guide-app.jpg', alt: 'Museum and art guide app, a Glimpses of the Past story with collections, scan and map tabs, offering audio narration, navigation between museum pieces and learning in the Middle East.' },
  { file: 'modular-homes-web-app.jpg', alt: 'AI-driven modular homes web app built for a client in the UAE, letting buyers customize their luxury homes and apartments before move-in.' },
  { file: 'home-customization-app.jpg', alt: 'Home customization web and tablet app, choosing color schemes and furniture types for a master bedroom.' },
  { file: 'casadigi-smart-home-app.jpg', alt: 'Casadigi smart home app by DigiValet, in dark mode, with now playing, room scenes, quick service requests, party planning, and temperature, shade and drape controls; integrates fully with Lutron, Crestron and other smart home IoT systems.' },
  { file: 'digivalet-in-room-light.jpg', alt: 'DigiValet in-room hotel tablet app in a light theme, with room controls, requests and Wi-Fi details.' },
  { file: 'the5-ai-outfit-diary.jpg', alt: 'the5 AI outfit diary app, sharing a daily outfit photo, with look and fashion generation.' },
  { file: 'noteshelf-note-taking-app.jpg', alt: 'Noteshelf, an award-winning digital note-taking and handwriting app on iPad, with notebooks, planners and journals organized by category. Founding designer. App creator. Side project.' },
  { file: 'panic-mechanic-app.jpg', alt: 'Panic Mechanic app tracking heart rate, lifestyle factors and triggers during a panic attack.' },
  { file: 'axiamatic-feedback-dashboard.jpg', alt: 'Axiamatic stakeholder feedback dashboard on a laptop, with an overall score, survey engagement and a feedback timeline.' },
  { file: 'uhoo-air-quality-dashboard.jpg', alt: 'uHoo air quality dashboard on a tablet and mobile app, tracking temperature, humidity, CO2, PM2.5 and other sensors across buildings, with a virus index and red, orange and green zones. B2B and B2C.' },
];

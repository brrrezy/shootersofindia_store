// ==================== CONFIGURATION ====================
const defaultConfig={
  background_color: "#050C26",
  surface_color: "#050C26",
  text_color: "#FEFBEE",
  primary_action_color: "#F06607",
  secondary_action_color: "#1a2342",
  font_family: "Inter, system-ui, sans-serif",
  font_size: 16,
  site_name: "",
  tagline: "",
  hero_title: "Elevate Your Shooting Game",
  hero_subtitle: "Premium planners, scoresheets, and accessories crafted for champions",
  featured_heading: "Featured Collection",
  sale_heading: "Limited Time Offers",
  contact_heading: "Get In Touch",
  contact_description: "We'd love to hear from you. Send us a message!",
  email_address: "",
  instagram_handle: "",
  youtube_channel: ""
};

// ==================== DATA ====================
// Real product catalogue for Shooters of India
let products=[
  { 
    id: 1, 
    name: "Shooting Premium Planner", 
    category: "planners", 
    price: 999, 
    originalPrice: 1499, 
    image: "planner",
    images: ["planner", "planner-alt1", "planner-alt2", "planner-alt3"],
    description: "Daily planner crafted for competitive shooters and athletes.", 
    details: "Designed specifically for shooters, this 12‑month planner helps you set clear season goals, structure training blocks, and review every match with intention. Premium paper and a durable cover make it perfect for daily range and home use.",
    specs: [
      "12‑month training layout",
      "Goal setting & reflection pages",
      "Competition planning sections",
      "Premium paper & durable binding",
      "Space for mindset & notes"
    ],
    featured: true 
  },
  { 
    id: 2, 
    name: "Shooter’s Scoresheet", 
    category: "scoresheets", 
    price: 299, 
    originalPrice: 499, 
    image: "scoresheet",
    images: ["scoresheet", "scoresheet-alt1", "scoresheet-alt2", "scoresheet-alt3"],
    description: "Accurate score tracking sheets for matches and practice.", 
    details: "Purpose‑built scoresheets that make it easy to log every series, calculate totals, and review groups. Ideal for both match days and focused training sessions, with clean, competition‑style layouts.",
    specs: [
      "Clear scoring grids",
      "Space for series & totals",
      "Practice and match friendly layout",
      "Helps review patterns & progress",
      "Shooter‑focused design"
    ],
    featured: true 
  },
  { 
    id: 3, 
    name: "Stickers (Set of 15)", 
    category: "stickers", 
    price: 199, 
    originalPrice: null, 
    image: "sticker",
    images: ["sticker", "sticker-alt1", "sticker-alt2", "sticker-alt3"],
    description: "Motivational shooting‑themed sticker set.", 
    details: "A curated set of 15 high‑quality vinyl stickers with shooting and performance themes. Perfect for planners, bottles, gun cases, laptops, or anything you want to personalise.",
    specs: [
      "15 unique designs",
      "Durable, high‑quality print",
      "Motivational & shooting‑themed art",
      "Water‑resistant vinyl",
      "Great for planners, cases & bottles"
    ],
    featured: false 
  },
  { 
    id: 4, 
    name: "Stickers (Set of 30)", 
    category: "stickers", 
    price: 349, 
    originalPrice: null, 
    image: "badge",
    images: ["badge", "badge-alt1", "badge-alt2", "badge-alt3"],
    description: "Extended sticker collection with more designs.", 
    details: "Double the designs, double the fun. A larger sticker pack with 30 athlete‑centric graphics so you can decorate all your training gear and stationery with your shooting journey.",
    specs: [
      "30 mixed designs",
      "Motivational & achievement themes",
      "Long‑lasting adhesive",
      "Weather‑resistant finish",
      "Ideal for gifting shooters"
    ],
    featured: false 
  },
  { 
    id: 5, 
    name: "Bookmark", 
    category: "accessories", 
    price: 99, 
    originalPrice: null, 
    image: "journal",
    images: ["journal", "journal-alt1", "journal-alt2", "journal-alt3"],
    description: "Minimal sports‑themed bookmark for planners & books.", 
    details: "A clean, understated bookmark that keeps your place in planners, journals, or training books. Designed to match the shooting aesthetic without adding bulk.",
    specs: [
      "Slim, durable design",
      "Sports‑inspired minimal artwork",
      "Perfect fit for planners & books",
      "Smooth rounded edges",
      "Easy to spot on a busy desk"
    ],
    featured: false 
  },
  { 
    id: 6, 
    name: "Calendar", 
    category: "accessories", 
    price: 299, 
    originalPrice: null, 
    image: "goal-planner",
    images: ["goal-planner", "goal-planner-alt1", "goal-planner-alt2", "goal-planner-alt3"],
    description: "Yearly wall/desk calendar focused on training visibility.", 
    details: "A clear, athlete‑friendly calendar to see your entire season at a glance. Mark competition dates, training camps, deload weeks, and personal goals so nothing sneaks up on you.",
    specs: [
      "Full‑year overview layout",
      "Space for meets & milestones",
      "Ideal for training schedule planning",
      "Clean, easy‑to‑read typography",
      "Works as wall or desk calendar"
    ],
    featured: false 
  }
];

// Real product photo paths for gallery (planner & scoresheet)
const plannerPhotos = [
  "Product Images/planner_1.jpg",
  "Product Images/planner_2.jpg",
  "Product Images/planner_3.jpg",
  "Product Images/planner_4.jpg"
];

const scoresheetPhotos = [
  "Product Images/scoresheet_1.jpg",
  "Product Images/scoresheet_2.jpg",
  "Product Images/scoresheet_3.jpg",
  "Product Images/scoresheet_4.jpg"
];

let cart = [];
let currentFilter = 'all';
let currentSort = 'featured';

// ==================== CART PERSISTENCE ====================
function saveCart() {
  try {
    localStorage.setItem('soi_cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart:', error);
  }
}

function loadCart() {
  try {
    const savedCart = localStorage.getItem('soi_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
      // Only update cart UI if elements exist (for main page)
      if (document.getElementById('cart-count')) {
        updateCartCount();
      }
      if (document.getElementById('cart-items')) {
        renderCart();
      }
    }
  } catch (error) {
    console.error('Failed to load cart:', error);
    cart = [];
  }
}

// ==================== PRODUCT IMAGE ICONS ====================
function getProductIcon(imageType,large=false){
  const size = large ? '495' : '80';
  const icons = {
    'planner': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="10" width="50" height="60" rx="3" stroke="#F06607" stroke-width="2.5"/><rect x="25" y="5" width="5" height="10" rx="2" fill="#F06607"/><rect x="50" y="5" width="5" height="10" rx="2" fill="#F06607"/><line x1="25" y1="25" x2="55" y2="25" stroke="#F06607" stroke-width="2" opacity="0.6"/><line x1="25" y1="35" x2="55" y2="35" stroke="#F06607" stroke-width="2" opacity="0.6"/><line x1="25" y1="45" x2="45" y2="45" stroke="#F06607" stroke-width="2" opacity="0.6"/></svg>`,
    'planner-alt1': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="10" width="50" height="60" rx="3" stroke="#F06607" stroke-width="2.5"/><rect x="25" y="5" width="5" height="10" rx="2" fill="#F06607"/><rect x="50" y="5" width="5" height="10" rx="2" fill="#F06607"/><circle cx="40" cy="30" r="8" stroke="#F06607" stroke-width="2"/><line x1="25" y1="45" x2="55" y2="45" stroke="#F06607" stroke-width="2" opacity="0.6"/><line x1="25" y1="55" x2="45" y2="55" stroke="#F06607" stroke-width="2" opacity="0.6"/></svg>`,
    'planner-alt2': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="10" width="50" height="60" rx="3" stroke="#F06607" stroke-width="2.5"/><rect x="25" y="5" width="5" height="10" rx="2" fill="#F06607"/><rect x="50" y="5" width="5" height="10" rx="2" fill="#F06607"/><path d="M25 25 L35 25 L35 35 L25 35 Z" stroke="#F06607" stroke-width="2"/><path d="M40 25 L50 25 L50 35 L40 35 Z" stroke="#F06607" stroke-width="2"/><line x1="25" y1="45" x2="55" y2="45" stroke="#F06607" stroke-width="2" opacity="0.6"/></svg>`,
    'planner-alt3': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="10" width="50" height="60" rx="3" stroke="#F06607" stroke-width="2.5"/><rect x="25" y="5" width="5" height="10" rx="2" fill="#F06607"/><rect x="50" y="5" width="5" height="10" rx="2" fill="#F06607"/><text x="40" y="35" text-anchor="middle" font-size="12" fill="#F06607">2025</text><line x1="25" y1="45" x2="55" y2="45" stroke="#F06607" stroke-width="2" opacity="0.6"/><line x1="25" y1="55" x2="45" y2="55" stroke="#F06607" stroke-width="2" opacity="0.6"/></svg>`,
    'scoresheet': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="50" height="50" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="25" y1="30" x2="55" y2="30" stroke="#F06607" stroke-width="2"/><line x1="25" y1="40" x2="55" y2="40" stroke="#F06607" stroke-width="2"/><line x1="25" y1="50" x2="55" y2="50" stroke="#F06607" stroke-width="2"/><circle cx="20" cy="30" r="2" fill="#F06607"/><circle cx="20" cy="40" r="2" fill="#F06607"/><circle cx="20" cy="50" r="2" fill="#F06607"/></svg>`,
    'scoresheet-alt1': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="50" height="50" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="25" y1="30" x2="55" y2="30" stroke="#F06607" stroke-width="2"/><line x1="25" y1="40" x2="55" y2="40" stroke="#F06607" stroke-width="2"/><line x1="25" y1="50" x2="55" y2="50" stroke="#F06607" stroke-width="2"/><circle cx="20" cy="30" r="2" fill="#F06607"/><circle cx="20" cy="40" r="2" fill="#F06607"/><circle cx="20" cy="50" r="2" fill="#F06607"/><text x="40" y="25" text-anchor="middle" font-size="8" fill="#F06607">SCORE</text></svg>`,
    'scoresheet-alt2': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="50" height="50" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="25" y1="30" x2="55" y2="30" stroke="#F06607" stroke-width="2"/><line x1="25" y1="40" x2="55" y2="40" stroke="#F06607" stroke-width="2"/><line x1="25" y1="50" x2="55" y2="50" stroke="#F06607" stroke-width="2"/><circle cx="20" cy="30" r="2" fill="#F06607"/><circle cx="20" cy="40" r="2" fill="#F06607"/><circle cx="20" cy="50" r="2" fill="#F06607"/><rect x="45" y="25" width="15" height="10" stroke="#F06607" stroke-width="1"/></svg>`,
    'scoresheet-alt3': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="50" height="50" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="25" y1="30" x2="55" y2="30" stroke="#F06607" stroke-width="2"/><line x1="25" y1="40" x2="55" y2="40" stroke="#F06607" stroke-width="2"/><line x1="25" y1="50" x2="55" y2="50" stroke="#F06607" stroke-width="2"/><circle cx="20" cy="30" r="2" fill="#F06607"/><circle cx="20" cy="40" r="2" fill="#F06607"/><circle cx="20" cy="50" r="2" fill="#F06607"/><path d="M45 25 L55 25 L55 35 L45 35 Z" stroke="#F06607" stroke-width="1"/></svg>`,
    'sticker': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 15 L46 30 L62 32 L50 43 L53 59 L40 51 L27 59 L30 43 L18 32 L34 30 Z" stroke="#F06607" stroke-width="2.5" fill="none"/><circle cx="40" cy="40" r="8" fill="#F06607" opacity="0.3"/></svg>`,
    'sticker-alt1': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 15 L46 30 L62 32 L50 43 L53 59 L40 51 L27 59 L30 43 L18 32 L34 30 Z" stroke="#F06607" stroke-width="2.5" fill="#F06607" opacity="0.2"/><circle cx="40" cy="40" r="8" fill="#F06607" opacity="0.5"/></svg>`,
    'sticker-alt2': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 15 L46 30 L62 32 L50 43 L53 59 L40 51 L27 59 L30 43 L18 32 L34 30 Z" stroke="#F06607" stroke-width="2.5" fill="none"/><circle cx="40" cy="40" r="8" fill="#F06607"/><text x="40" y="45" text-anchor="middle" font-size="6" fill="white">VIP</text></svg>`,
    'sticker-alt3': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 15 L46 30 L62 32 L50 43 L53 59 L40 51 L27 59 L30 43 L18 32 L34 30 Z" stroke="#F06607" stroke-width="2.5" fill="none"/><circle cx="40" cy="40" r="8" fill="#F06607" opacity="0.3"/><path d="M35 35 L40 40 L45 35" stroke="white" stroke-width="2"/></svg>`,
    'timer': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="45" r="25" stroke="#F06607" stroke-width="2.5"/><path d="M40 45 L40 30" stroke="#F06607" stroke-width="3" stroke-linecap="round"/><path d="M40 45 L52 45" stroke="#F06607" stroke-width="3" stroke-linecap="round"/><rect x="32" y="15" width="16" height="6" rx="2" fill="#F06607"/><line x1="40" y1="21" x2="40" y2="25" stroke="#F06607" stroke-width="2"/></svg>`,
    'timer-alt1': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="45" r="25" stroke="#F06607" stroke-width="2.5"/><path d="M40 45 L40 30" stroke="#F06607" stroke-width="3" stroke-linecap="round"/><path d="M40 45 L45 50" stroke="#F06607" stroke-width="3" stroke-linecap="round"/><rect x="32" y="15" width="16" height="6" rx="2" fill="#F06607"/><line x1="40" y1="21" x2="40" y2="25" stroke="#F06607" stroke-width="2"/><circle cx="40" cy="45" r="2" fill="#F06607"/></svg>`,
    'timer-alt2': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="45" r="25" stroke="#F06607" stroke-width="2.5"/><path d="M40 45 L40 30" stroke="#F06607" stroke-width="3" stroke-linecap="round"/><path d="M40 45 L52 45" stroke="#F06607" stroke-width="3" stroke-linecap="round"/><rect x="32" y="15" width="16" height="6" rx="2" fill="#F06607"/><line x1="40" y1="21" x2="40" y2="25" stroke="#F06607" stroke-width="2"/><text x="40" y="50" text-anchor="middle" font-size="8" fill="#F06607">00:00</text></svg>`,
    'timer-alt3': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="45" r="25" stroke="#F06607" stroke-width="2.5"/><path d="M40 45 L40 30" stroke="#F06607" stroke-width="3" stroke-linecap="round"/><path d="M40 45 L52 45" stroke="#F06607" stroke-width="3" stroke-linecap="round"/><rect x="32" y="15" width="16" height="6" rx="2" fill="#F06607"/><line x1="40" y1="21" x2="40" y2="25" stroke="#F06607" stroke-width="2"/><rect x="35" y="40" width="10" height="4" fill="#F06607"/></svg>`,
    'journal': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="40" height="50" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="30" y1="28" x2="50" y2="28" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="36" x2="50" y2="36" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="44" x2="50" y2="44" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="52" x2="45" y2="52" stroke="#F06607" stroke-width="2" opacity="0.5"/><rect x="23" y="15" width="3" height="50" fill="#F06607" opacity="0.3"/></svg>`,
    'journal-alt1': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="40" height="50" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="30" y1="28" x2="50" y2="28" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="36" x2="50" y2="36" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="44" x2="50" y2="44" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="52" x2="45" y2="52" stroke="#F06607" stroke-width="2" opacity="0.5"/><rect x="23" y="15" width="3" height="50" fill="#F06607" opacity="0.3"/><circle cx="45" cy="25" r="3" fill="#F06607"/></svg>`,
    'journal-alt2': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="40" height="50" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="30" y1="28" x2="50" y2="28" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="36" x2="50" y2="36" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="44" x2="50" y2="44" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="52" x2="45" y2="52" stroke="#F06607" stroke-width="2" opacity="0.5"/><rect x="23" y="15" width="3" height="50" fill="#F06607" opacity="0.3"/><path d="M45 25 L48 28 L45 31 L42 28 Z" fill="#F06607"/></svg>`,
    'journal-alt3': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="40" height="50" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="30" y1="28" x2="50" y2="28" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="36" x2="50" y2="36" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="44" x2="50" y2="44" stroke="#F06607" stroke-width="2" opacity="0.5"/><line x1="30" y1="52" x2="45" y2="52" stroke="#F06607" stroke-width="2" opacity="0.5"/><rect x="23" y="15" width="3" height="50" fill="#F06607" opacity="0.3"/><text x="40" y="25" text-anchor="middle" font-size="6" fill="#F06607">2025</text></svg>`,
    'scoresheet-bundle': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="18" width="44" height="44" rx="2" stroke="#F06607" stroke-width="2" opacity="0.4"/><rect x="15" y="15" width="44" height="44" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="23" y1="28" x2="51" y2="28" stroke="#F06607" stroke-width="2"/><line x1="23" y1="36" x2="51" y2="36" stroke="#F06607" stroke-width="2"/><line x1="23" y1="44" x2="51" y2="44" stroke="#F06607" stroke-width="2"/></svg>`,
    'scoresheet-bundle-alt1': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="18" width="44" height="44" rx="2" stroke="#F06607" stroke-width="2" opacity="0.4"/><rect x="15" y="15" width="44" height="44" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="23" y1="28" x2="51" y2="28" stroke="#F06607" stroke-width="2"/><line x1="23" y1="36" x2="51" y2="36" stroke="#F06607" stroke-width="2"/><line x1="23" y1="44" x2="51" y2="44" stroke="#F06607" stroke-width="2"/><circle cx="20" cy="25" r="2" fill="#F06607"/></svg>`,
    'scoresheet-bundle-alt2': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="18" width="44" height="44" rx="2" stroke="#F06607" stroke-width="2" opacity="0.4"/><rect x="15" y="15" width="44" height="44" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="23" y1="28" x2="51" y2="28" stroke="#F06607" stroke-width="2"/><line x1="23" y1="36" x2="51" y2="36" stroke="#F06607" stroke-width="2"/><line x1="23" y1="44" x2="51" y2="44" stroke="#F06607" stroke-width="2"/><rect x="45" y="20" width="10" height="8" stroke="#F06607" stroke-width="1"/></svg>`,
    'scoresheet-bundle-alt3': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="18" width="44" height="44" rx="2" stroke="#F06607" stroke-width="2" opacity="0.4"/><rect x="15" y="15" width="44" height="44" rx="2" stroke="#F06607" stroke-width="2.5"/><line x1="23" y1="28" x2="51" y2="28" stroke="#F06607" stroke-width="2"/><line x1="23" y1="36" x2="51" y2="36" stroke="#F06607" stroke-width="2"/><line x1="23" y1="44" x2="51" y2="44" stroke="#F06607" stroke-width="2"/><path d="M45 20 L50 20 L50 25 L45 25 Z" stroke="#F06607" stroke-width="1"/></svg>`,
    'badge': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="35" r="18" stroke="#F06607" stroke-width="2.5"/><path d="M32 50 L28 65 L40 58 L52 65 L48 50" stroke="#F06607" stroke-width="2.5" stroke-linejoin="round"/><path d="M40 20 L43 28 L52 29 L45 35 L47 44 L40 39 L33 44 L35 35 L28 29 L37 28 Z" fill="#F06607" opacity="0.6"/></svg>`,
    'badge-alt1': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="35" r="18" stroke="#F06607" stroke-width="2.5"/><path d="M32 50 L28 65 L40 58 L52 65 L48 50" stroke="#F06607" stroke-width="2.5" stroke-linejoin="round"/><path d="M40 20 L43 28 L52 29 L45 35 L47 44 L40 39 L33 44 L35 35 L28 29 L37 28 Z" fill="#F06607"/><text x="40" y="40" text-anchor="middle" font-size="8" fill="white">1ST</text></svg>`,
    'badge-alt2': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="35" r="18" stroke="#F06607" stroke-width="2.5"/><path d="M32 50 L28 65 L40 58 L52 65 L48 50" stroke="#F06607" stroke-width="2.5" stroke-linejoin="round"/><path d="M40 20 L43 28 L52 29 L45 35 L47 44 L40 39 L33 44 L35 35 L28 29 L37 28 Z" fill="#F06607" opacity="0.6"/><circle cx="40" cy="35" r="5" fill="#F06607"/></svg>`,
    'badge-alt3': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="35" r="18" stroke="#F06607" stroke-width="2.5"/><path d="M32 50 L28 65 L40 58 L52 65 L48 50" stroke="#F06607" stroke-width="2.5" stroke-linejoin="round"/><path d="M40 20 L43 28 L52 29 L45 35 L47 44 L40 39 L33 44 L35 35 L28 29 L37 28 Z" fill="#F06607" opacity="0.6"/><rect x="35" y="30" width="10" height="10" fill="#F06607"/></svg>`,
    'gloves': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 25 L25 45 L30 50 L35 45 L35 30" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M35 25 L35 45 L40 50 L45 45 L45 28" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M45 25 L45 45 L50 50 L55 45 L55 30" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M25 45 C25 55 30 60 40 60 C50 60 55 55 55 45" stroke="#F06607" stroke-width="2.5"/></svg>`,
    'gloves-alt1': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 25 L25 45 L30 50 L35 45 L35 30" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M35 25 L35 45 L40 50 L45 45 L45 28" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M45 25 L45 45 L50 50 L55 45 L55 30" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M25 45 C25 55 30 60 40 60 C50 60 55 55 55 45" stroke="#F06607" stroke-width="2.5"/><circle cx="30" cy="35" r="2" fill="#F06607"/></svg>`,
    'gloves-alt2': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 25 L25 45 L30 50 L35 45 L35 30" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M35 25 L35 45 L40 50 L45 45 L45 28" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M45 25 L45 45 L50 50 L55 45 L55 30" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M25 45 C25 55 30 60 40 60 C50 60 55 55 55 45" stroke="#F06607" stroke-width="2.5"/><rect x="35" y="40" width="10" height="6" fill="#F06607"/></svg>`,
    'gloves-alt3': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 25 L25 45 L30 50 L35 45 L35 30" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M35 25 L35 45 L40 50 L45 45 L45 28" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M45 25 L45 45 L50 50 L55 45 L55 30" stroke="#F06607" stroke-width="2.5" stroke-linecap="round"/><path d="M25 45 C25 55 30 60 40 60 C50 60 55 55 55 45" stroke="#F06607" stroke-width="2.5"/><path d="M40 35 L45 35 L45 40 L40 40 Z" fill="#F06607"/></svg>`,
    'goal-planner': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="40" height="50" rx="3" stroke="#F06607" stroke-width="2.5"/><circle cx="40" cy="35" r="10" stroke="#F06607" stroke-width="2"/><circle cx="40" cy="35" r="6" stroke="#F06607" stroke-width="2"/><circle cx="40" cy="35" r="2" fill="#F06607"/><line x1="30" y1="52" x2="50" y2="52" stroke="#F06607" stroke-width="2"/></svg>`,
    'goal-planner-alt1': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="40" height="50" rx="3" stroke="#F06607" stroke-width="2.5"/><circle cx="40" cy="35" r="10" stroke="#F06607" stroke-width="2"/><circle cx="40" cy="35" r="6" stroke="#F06607" stroke-width="2"/><circle cx="40" cy="35" r="2" fill="#F06607"/><line x1="30" y1="52" x2="50" y2="52" stroke="#F06607" stroke-width="2"/><path d="M35 30 L40 35 L45 30" stroke="#F06607" stroke-width="2"/></svg>`,
    'goal-planner-alt2': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="40" height="50" rx="3" stroke="#F06607" stroke-width="2.5"/><circle cx="40" cy="35" r="10" stroke="#F06607" stroke-width="2"/><circle cx="40" cy="35" r="6" stroke="#F06607" stroke-width="2"/><circle cx="40" cy="35" r="2" fill="#F06607"/><line x1="30" y1="52" x2="50" y2="52" stroke="#F06607" stroke-width="2"/><text x="40" y="40" text-anchor="middle" font-size="6" fill="#F06607">GOAL</text></svg>`,
    'goal-planner-alt3': `<svg width="${size}" height="${size}" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="40" height="50" rx="3" stroke="#F06607" stroke-width="2.5"/><circle cx="40" cy="35" r="10" stroke="#F06607" stroke-width="2"/><circle cx="40" cy="35" r="6" stroke="#F06607" stroke-width="2"/><circle cx="40" cy="35" r="2" fill="#F06607"/><line x1="30" y1="52" x2="50" y2="52" stroke="#F06607" stroke-width="2"/><rect x="35" y="45" width="10" height="4" fill="#F06607"/></svg>`
  };
  return icons[imageType] || icons['planner'];
}

// ==================== UI CONFIGURATION ====================
async function onConfigChange(config){
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;
  const baseFontStack = 'system-ui, -apple-system, sans-serif';

  document.body.style.backgroundColor = config.background_color || defaultConfig.background_color;
  document.body.style.color = config.text_color || defaultConfig.text_color;
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.body.style.fontSize = `${baseSize * 0.875}px`;

  const navbar = document.getElementById('navbar');
  navbar.style.color = config.text_color || defaultConfig.text_color;

  const siteName = document.getElementById('site-name');
  siteName.textContent = config.site_name || defaultConfig.site_name;
  siteName.style.color = config.text_color || defaultConfig.text_color;
  siteName.style.fontSize = `${baseSize * 1.25}px`;

  const tagline = document.getElementById('tagline');
  tagline.textContent = config.tagline || defaultConfig.tagline;
  tagline.style.color = config.text_color || defaultConfig.text_color;
  tagline.style.fontSize = `${baseSize * 0.75}px`;

  const heroSection = document.getElementById('hero-section');
  heroSection.style.backgroundColor = config.background_color || defaultConfig.background_color;
  heroSection.style.color = config.text_color || defaultConfig.text_color;

  const heroTitle = document.getElementById('hero-title');
  heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
  heroTitle.style.fontSize = `${baseSize * 3}px`;
  heroTitle.style.color = config.text_color || defaultConfig.text_color;

  const heroSubtitle = document.getElementById('hero-subtitle');
  heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  heroSubtitle.style.fontSize = `${baseSize * 1}px`;
  heroSubtitle.style.color = config.text_color || defaultConfig.text_color;

  const featuredHeading = document.getElementById('featured-heading');
  featuredHeading.textContent = config.featured_heading || defaultConfig.featured_heading;
  featuredHeading.style.color = config.text_color || defaultConfig.text_color;
  featuredHeading.style.fontSize = `${baseSize * 2}px`;

  const saleHeading = document.getElementById('sale-heading');
  saleHeading.textContent = config.sale_heading || defaultConfig.sale_heading;
  saleHeading.style.color = config.text_color || defaultConfig.text_color;
  saleHeading.style.fontSize = `${baseSize * 2}px`;

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.style.color = config.text_color || defaultConfig.text_color;
    link.style.fontSize = `${baseSize * 0.75}px`;
  });

  const primaryButtons = document.querySelectorAll('.btn-primary');
  primaryButtons.forEach(btn => {
    btn.style.backgroundColor = config.primary_action_color || defaultConfig.primary_action_color;
    btn.style.color = config.background_color || defaultConfig.background_color;
    btn.style.fontSize = `${baseSize * 0.875}px`;
  });

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    if (btn.classList.contains('active')) {
      btn.style.backgroundColor = config.primary_action_color || defaultConfig.primary_action_color;
      btn.style.color = config.background_color || defaultConfig.background_color;
    } else {
      btn.style.backgroundColor = 'transparent';
      btn.style.color = config.text_color || defaultConfig.text_color;
      btn.style.borderColor = config.primary_action_color || defaultConfig.primary_action_color;
    }
    btn.style.fontSize = `${baseSize * 0.75}px`;
  });

  const cartBadge = document.getElementById('cart-count');
  cartBadge.style.backgroundColor = config.secondary_action_color || defaultConfig.secondary_action_color;
  cartBadge.style.color = config.text_color || defaultConfig.text_color;

  const contactHeading = document.getElementById('contact-heading');
  contactHeading.textContent = config.contact_heading || defaultConfig.contact_heading;
  contactHeading.style.color = config.text_color || defaultConfig.text_color;
  contactHeading.style.fontSize = `${baseSize * 2.5}px`;

  const contactDescription = document.getElementById('contact-description');
  contactDescription.textContent = config.contact_description || defaultConfig.contact_description;
  contactDescription.style.color = config.text_color || defaultConfig.text_color;
  contactDescription.style.fontSize = `${baseSize * 1}px`;

  const emailText = document.getElementById('email-text');
  emailText.textContent = config.email_address || defaultConfig.email_address;
  const emailLink = document.getElementById('email-link');
  emailLink.href = `mailto:${config.email_address || defaultConfig.email_address}`;

  const instagramText = document.getElementById('instagram-text');
  instagramText.textContent = config.instagram_handle || defaultConfig.instagram_handle;

  const youtubeText = document.getElementById('youtube-text');
  youtubeText.textContent = config.youtube_channel || defaultConfig.youtube_channel;

  renderFeaturedProducts();
  renderSaleProducts();
  renderShopProducts();
  renderCart();
}

// ==================== PRODUCT RENDERING ====================
function renderProducts(containerId, filterFn = null, sortFn = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let productsToRender = filterFn ? products.filter(filterFn) : products;

  if (sortFn) {
    productsToRender = [...productsToRender].sort(sortFn);
  }

  const config = window.elementSdk?.config || defaultConfig;

  container.innerHTML = productsToRender.map(product =>
    createProductCard(product, config)
  ).join('');
}

function renderFeaturedProducts(){
  renderProducts('featured-products', p => p.featured);
}

function renderSaleProducts() {
  renderProducts('sale-products', p => p.originalPrice);
}

function renderShopProducts() {
  let filterFn = currentFilter === 'all' ? null : p => p.category === currentFilter;
  let sortFn = null;

  if (currentSort === 'price-low') {
    sortFn = (a, b) => a.price - b.price;
  } else if (currentSort === 'price-high') {
    sortFn = (a, b) => b.price - a.price;
  } else if (currentSort === 'name') {
    sortFn = (a, b) => a.name.localeCompare(b.name);
  }

  renderProducts('products-grid', filterFn, sortFn);
}

function createProductCard(product, config) {
  const baseSize = config.font_size || defaultConfig.font_size;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  const bgColor = config.background_color || defaultConfig.background_color;

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return `
    <div class="product-card rounded-xl overflow-hidden shadow-lg" 
         style="color: ${textColor}; position: relative;"
         onclick="openProductDetail(${product.id})">
      ${product.originalPrice ? `
        <div class="absolute top-3 right-3 px-2 py-1 rounded-full font-bold text-xs z-10" 
             style="background-color: ${primaryColor}; color: ${bgColor};">
          -${discount}%
        </div>
      ` : ''}
      <div class="product-image-placeholder py-12">
        ${
          product.image === 'planner'
            ? `<img src="Product Images/planner_1.jpg" alt="${product.name}" class="product-photo-main" loading="lazy">`
            : product.image === 'scoresheet'
              ? `<img src="Product Images/scoresheet_1.jpg" alt="${product.name}" class="product-photo-main" loading="lazy">`
              : getProductIcon(product.image)
        }
      </div>
      <div class="p-4">
        <div class="text-xs font-semibold mb-1 opacity-60" style="color: ${primaryColor}; text-transform: uppercase; letter-spacing: 0.05em;">
          ${product.category}
        </div>
        <h3 class="font-bold mb-1 text-base" style="color: ${textColor};">${product.name}</h3>
        <p class="opacity-60 mb-3 text-xs leading-relaxed" style="color: ${textColor};">${product.description}</p>
        <div class="flex justify-between items-center mb-3">
          <div>
            <span class="font-bold block text-xl" style="color: ${textColor};">₹${product.price}</span>
            ${product.originalPrice ? `
              <span class="line-through opacity-40 text-sm" style="color: ${textColor};">₹${product.originalPrice}</span>
            ` : ''}
          </div>
          <button onclick="addToCart(${product.id}); event.stopPropagation();" 
                  class="px-3 py-1.5 rounded-lg font-semibold text-xs transition-all hover:scale-105" 
                  style="background-color: ${primaryColor}; color: ${bgColor};">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==================== PRODUCT DETAIL PAGE ====================
function openProductDetail(productId){
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const config = window.elementSdk?.config || defaultConfig;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  const bgColor = config.background_color || defaultConfig.background_color;

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  let imageGallery = '';
  let imageThumbs = '';

  if (product.image === 'planner' || product.image === 'scoresheet') {
    const photos = product.image === 'planner' ? plannerPhotos : scoresheetPhotos;

    imageGallery = photos.map((src, index) =>
      `<div class="image-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
        <div class="glass-light rounded-2xl p-4 flex items-center justify-center">
          <img src="${src}" alt="${product.name} photo ${index + 1}" class="product-photo-main" loading="lazy">
        </div>
      </div>`
    ).join('');

    imageThumbs = photos.map((src, index) =>
      `<button onclick="switchImage(${index})" class="thumb-btn ${index === 0 ? 'active' : ''}" data-thumb="${index}">
        <div class="w-12 h-12 rounded-lg glass-light flex items-center justify-center overflow-hidden">
          <img src="${src}" alt="${product.name} thumbnail ${index + 1}" class="product-photo-thumb" loading="lazy">
        </div>
      </button>`
    ).join('');
  } else {
    imageGallery = product.images.map((img, index) => 
      `<div class="image-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
        <div class="glass-light rounded-2xl p-4 flex items-center justify-center">
          ${getProductIcon(img, true)}
        </div>
      </div>`
    ).join('');

    imageThumbs = product.images.map((img, index) => 
      `<button onclick="switchImage(${index})" class="thumb-btn ${index === 0 ? 'active' : ''}" data-thumb="${index}">
        <div class="w-12 h-12 rounded-lg glass-light flex items-center justify-center">
          ${getProductIcon(img)}
        </div>
      </button>`
    ).join('');
  }

  const detailHTML = `
    <button onclick="closeProductDetail()" class="mb-4 px-4 py-2 rounded-lg btn-secondary font-medium text-sm">
      <i class="fas fa-arrow-left mr-2"></i>Back
    </button>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <div class="image-gallery mb-4">
          <div class="main-image">
            ${imageGallery}
          </div>
          <div class="image-thumbs flex gap-5 mt-2">
            ${imageThumbs}
          </div>
        </div>
      </div>

      <div>
        ${product.originalPrice ? `
          <div class="inline-block px-3 py-1 rounded-full font-bold mb-3 text-xs" 
               style="background-color: ${primaryColor}; color: ${bgColor};">
            SAVE ${discount}% • ₹${product.originalPrice - product.price} OFF
          </div>
        ` : ''}
        
        <h2 class="text-3xl font-bold mb-2" style="color: ${textColor};">${product.name}</h2>
        
        <div class="inline-block px-3 py-1 rounded-full mb-4 text-xs font-semibold glass-light" 
             style="color: ${primaryColor}; border: 1px solid ${primaryColor}; text-transform: uppercase;">
          ${product.category}
        </div>

        <div class="mb-6">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-4xl font-bold" style="color: ${textColor};">₹${product.price}</span>
            ${product.originalPrice ? `
              <span class="text-xl line-through opacity-40" style="color: ${textColor};">₹${product.originalPrice}</span>
            ` : ''}
          </div>
          <p class="text-xs opacity-60 flex items-center gap-2" style="color: ${textColor};">
            <i class="fas fa-truck" style="color: ${primaryColor};"></i>
            Free shipping on orders above ₹999
          </p>
        </div>

        <p class="text-sm mb-6 leading-relaxed opacity-80" style="color: ${textColor};">${product.details}</p>

        <div class="mb-6">
          <h3 class="text-lg font-bold mb-3" style="color: ${textColor};">Specifications</h3>
          <ul class="space-y-2">
            ${product.specs.map(spec => `
              <li class="flex items-center text-xs" style="color: ${textColor};">
                <i class="fas fa-check-circle mr-2" style="color: ${primaryColor};"></i>
                <span class="opacity-80">${spec}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="space-y-3">
          <button onclick="addToCart(${product.id}); closeProductDetail();" 
                  class="w-full btn-primary py-3 rounded-lg font-bold text-sm">
            Add to Cart • ₹${product.price}
          </button>
          
          <button onclick="addToCart(${product.id}); closeProductDetail(); toggleCart();" 
                  class="w-full btn-secondary py-3 rounded-lg font-semibold text-sm" 
                  style="background-color: transparent; color: ${textColor}; border-color: ${primaryColor};">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('product-detail-inner').innerHTML = detailHTML;
  document.getElementById('product-detail-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
  document.getElementById('product-detail-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function switchImage(index) {
  const slides = document.querySelectorAll('.image-slide');
  const thumbs = document.querySelectorAll('.thumb-btn');
  
  slides.forEach(slide => slide.classList.remove('active'));
  thumbs.forEach(thumb => thumb.classList.remove('active'));
  
  slides[index].classList.add('active');
  thumbs[index].classList.add('active');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
  renderCart();
  saveCart();
  showNotification('Added to cart!', 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  renderCart();
  saveCart();
}

function updateQuantity(productId, delta) {
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity += delta;
    if (cartItem.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartCount();
      renderCart();
      saveCart();
    }
  }
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const config = window.elementSdk?.config || defaultConfig;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  const bgColor = config.background_color || defaultConfig.background_color;
  
  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="text-center py-8 opacity-50 text-sm" style="color: ${textColor};">Your cart is empty</p>`;
    cartTotal.textContent = '₹0';
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  cartItems.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 p-3 rounded-lg glass-light">
      <div class="w-10 h-10 flex items-center justify-center flex-shrink-0">
        ${getProductIcon(item.image)}
      </div>
      <div class="flex-1 min-w-0">
        <h4 class="font-bold mb-1 text-sm truncate" style="color: ${textColor};">${item.name}</h4>
        <p class="font-semibold text-sm" style="color: ${textColor};">₹${item.price}</p>
      </div>
      <div class="flex items-center gap-1">
        <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded-full font-bold text-sm transition-transform hover:scale-110" 
                style="background-color: ${primaryColor}; color: ${bgColor};">−</button>
        <span class="w-6 text-center font-bold text-sm" style="color: ${textColor};">${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded-full font-bold text-sm transition-transform hover:scale-110" 
                style="background-color: ${primaryColor}; color: ${bgColor};">+</button>
      </div>
      <button onclick="removeFromCart(${item.id})" class="hover:opacity-70 text-sm transition-opacity" style="color: ${primaryColor};">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `).join('');
  
  cartTotal.textContent = `₹${total}`;
  cartTotal.style.color = textColor;
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  sidebar.classList.toggle('translate-x-full');
}

// Mobile navigation
function toggleMobileMenu(forceState) {
  const mobileNav = document.getElementById('mobile-nav');
  if (!mobileNav) return;

  if (typeof forceState === 'boolean') {
    mobileNav.classList.toggle('hidden', !forceState);
    return;
  }

  mobileNav.classList.toggle('hidden');
}

function checkout() {
  if (cart.length === 0) {
    showNotification('Your cart is empty!', 'error');
    return;
  }

  // Redirect to checkout page
  window.location.href = 'checkout.html';
}

// ==================== NAVIGATION ====================
function showPage(page){
  // Hide all pages
  const pages = ['home-page', 'shop-page', 'contact-page'];
  pages.forEach(pageId => {
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
      pageElement.style.display = 'none';
    }
  });

  // Show the selected page
  const pageElement = document.getElementById(`${page}-page`);
  if (pageElement) {
    pageElement.style.display = 'block';
    // Re-initialize any page-specific functionality
    if (page === 'shop') {
      renderShopProducts();
    }
  } else {
    showNotification('Page not found', 'error');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterProducts(category) {
  currentFilter = category;
  const buttons = document.querySelectorAll('.filter-btn');
  const config = window.elementSdk?.config || defaultConfig;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  const bgColor = config.background_color || defaultConfig.background_color;

  buttons.forEach(btn => {
    btn.classList.remove('active');
    btn.style.backgroundColor = 'transparent';
    btn.style.color = textColor;
    btn.style.borderColor = primaryColor;
  });

  event.target.classList.add('active');
  event.target.style.backgroundColor = primaryColor;
  event.target.style.color = bgColor;

  renderShopProducts();
}

function sortProducts() {
  currentSort = document.getElementById('sort-select').value;
  renderShopProducts();
}

// ==================== NOTIFICATIONS ====================
function showNotification(message,type){
  const config = window.elementSdk?.config || defaultConfig;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  
  const notification = document.createElement('div');
  notification.className = 'fixed top-24 left-1/2 transform -translate-x-1/2 glass-card px-8 py-4 rounded-xl z-50 shadow-2xl';
  notification.style.color = textColor;
  notification.style.minWidth = '300px';
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} text-xl" 
         style="color: ${primaryColor};"></i>
      <p class="font-medium text-sm">${message}</p>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translate(-50%, -20px)';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// ==================== FORM HANDLING ====================
document.addEventListener('DOMContentLoaded',function(){
  // Initialize EmailJS
  emailjs.init('_wpSw90HxbiAnv9_k');

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';

    // Get form data
    const formData = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email-input').value,
      message: document.getElementById('message').value
    };

    // Send email using EmailJS
    try {
      emailjs.send('service_q4faube', 'template_dfpba38', formData)
        .then(function(response) {
          showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
          e.target.reset();
          // Re-enable button and restore original text
          submitButton.disabled = false;
          submitButton.innerHTML = originalText;
        }, function(error) {
          showNotification('Failed to send message. Please try again later.', 'error');
          console.error('EmailJS error:', error);
          // Re-enable button and restore original text
          submitButton.disabled = false;
          submitButton.innerHTML = originalText;
        });
    } catch (error) {
      showNotification('Network error. Please check your connection.', 'error');
      console.error('Network error:', error);
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;
    }
  });

  // Element SDK initialization
  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      onConfigChange,
      mapToCapabilities: (config) => ({
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => config.primary_action_color || defaultConfig.primary_action_color,
            set: (value) => {
              config.primary_action_color = value;
              window.elementSdk.setConfig({ primary_action_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (value) => {
            config.font_family = value;
            window.elementSdk.setConfig({ font_family: value });
          }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (value) => {
            config.font_size = value;
            window.elementSdk.setConfig({ font_size: value });
          }
        }
      }),
      mapToEditPanelValues: (config) => new Map([
        ["site_name", config.site_name || defaultConfig.site_name],
        ["tagline", config.tagline || defaultConfig.tagline],
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle]
      ])
    });
  }

  // Initialize the app
  onConfigChange(defaultConfig);

  // Load cart from localStorage
  loadCart();

  // Load initial page
  showPage('home');
});

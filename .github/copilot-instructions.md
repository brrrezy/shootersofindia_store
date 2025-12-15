# AI Coding Assistant Instructions for Shooters of India E-commerce Site

## Project Overview
This is a single-page e-commerce application for "Shooters of India" selling shooting accessories (planners, scoresheets, stickers, accessories). Built with vanilla HTML/CSS/JS using Tailwind CSS and glassmorphism design.

## Architecture
- **Single HTML file** (`index.html`) with hidden sections for Home/Shop/Contact pages
- **JavaScript-driven UI** (`script.js`): handles navigation, product rendering, cart logic, form submission
- **Styling** (`styles.css` + Tailwind): glassmorphism effects, responsive design
- **No backend**: all data hardcoded, client-side only
- **Element SDK integration**: for dynamic configuration of colors/fonts/text

## Key Components
- **Navigation**: `showPage()` switches between sections
- **Product System**: Hardcoded `products` array with categories, pricing, specs
- **Cart**: In-memory storage with sidebar UI
- **Product Details**: Overlay modal with specs and add-to-cart
- **Configuration**: `onConfigChange()` updates UI based on Element SDK config

## Development Workflow
- **No build process**: Open `index.html` directly in browser
- **No dependencies**: Uses CDN links (Tailwind, Font Awesome, Google Fonts)
- **No testing/linting**: Manual testing in browser
- **No package manager**: Pure static site

## Code Patterns
- **Glassmorphism classes**: `glass-card`, `glass-navbar`, `glass-light` for blur effects
- **Color scheme**: Dark background (`#050C26`), orange primary (`#F06607`), light text (`#FEFBEE`)
- **Product icons**: SVG strings in `getProductIcon()` function
- **Dynamic rendering**: `createProductCard()`, `renderProducts()`, `renderCart()`
- **Event handling**: Inline `onclick` attributes for buttons
- **Configuration**: Check `window.elementSdk?.config` before using `defaultConfig`

## Common Tasks
- **Add product**: Add to `products` array, ensure `image` matches icon in `getProductIcon()`
- **Modify styling**: Update CSS classes or inline styles with config colors
- **Add page section**: Create hidden div in HTML, add `showPage()` case, update nav
- **Update cart logic**: Modify `addToCart()`, `renderCart()`, `checkout()`
- **Change design**: Update Tailwind classes, maintain glassmorphism effects

## File Structure
```
index.html      # Main HTML with all sections
script.js       # All JavaScript logic and data
styles.css      # Custom styles + glassmorphism
2.html          # Alternative version (similar structure)
```

## Important Notes
- Always check `window.elementSdk?.config` for dynamic values
- Use `showNotification()` for user feedback
- Product images are SVG icons, not actual images
- Cart persists only in session
- Form submission shows notification (no actual sending)
- Maintain responsive design with Tailwind breakpoints</content>
<parameter name="filePath">d:\SOI\.github\copilot-instructions.md
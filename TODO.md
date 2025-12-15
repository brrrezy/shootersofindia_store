# TODO — Update Product Catalogue (HTML/CSS Only)

This checklist guides **Cursor** (or any dev) to remove demo products and add your real products across catalogue, featured, and sale sections.

---

## 1) Remove Demo / Placeholder Products

* [ ] Locate all demo product cards in HTML (e.g., `index.html`, `products.html`).
* [ ] Delete demo items from:

  * Catalogue / Products grid
  * Featured Products section
  * Sale / Offers section
* [ ] Remove unused images, CSS classes, and comments related to demo items.

---

## 2) Add Real Products to Catalogue

### Products to Add

Add **all** items below to the main catalogue grid:

1. **Shooting Premium Planner**
2. **Shooter’s Scoresheet**
3. **Stickers (Set of 15)**
4. **Stickers (Set of 30)**
5. **Bookmark**
6. **Calendar**

### For Each Product Card

* [ ] Product image (`.jpg/.png`, optimized)
* [ ] Product title
* [ ] Short description (1–2 lines)
* [ ] Price block (MRP + Sale price if applicable)
* [ ] “Add to Cart” / “Buy Now” button (static if no JS)

---

## 3) Featured Products Section

### Set Featured Items

* [ ] Add **Shooting Premium Planner**
* [ ] Add **Shooter’s Scoresheet**

### Featured Card Details

* [ ] Highlight badge (e.g., `FEATURED`)
* [ ] Clean layout (bigger image or accent border)
* [ ] Clear pricing shown

---

## 4) Sale Section (Offers)

### Products on Sale

#### Shooting Premium Planner

* [ ] MRP: ₹1499 (strikethrough)
* [ ] Sale Price: **₹999**
* [ ] Add badge: `SALE` or `LIMITED OFFER`

#### Shooter’s Scoresheet

* [ ] MRP: ₹499 (strikethrough)
* [ ] Sale Price: **₹299**
* [ ] Add badge: `SALE`

### Sale UI

* [ ] Use CSS for strikethrough (`text-decoration: line-through`)
* [ ] Sale price visually stronger (color / font-weight)

---

## 5) Product Descriptions (Content)

### Shooting Premium Planner

* [ ] Designed for athletes & shooters
* [ ] Goal setting, training logs, competition planning
* [ ] Premium paper & durable binding

### Shooter’s Scoresheet

* [ ] Accurate score tracking
* [ ] Match & practice friendly layout
* [ ] Ideal for training and competitions

### Stickers (15 / 30)

* [ ] Motivational & shooting-themed designs
* [ ] Durable, high-quality print

### Bookmark

* [ ] Minimal, sports-themed design
* [ ] Perfect for planners & books

### Calendar

* [ ] Athlete-focused layout
* [ ] Yearly training visibility

---

## 6) Navigation & Section Links

* [ ] Ensure nav links scroll or link correctly to:

  * Catalogue
  * Featured Products
  * Sale / Offers
* [ ] Remove links pointing to demo sections

---

## 7) Styling (CSS)

* [ ] Consistent product card sizes
* [ ] Responsive grid (desktop + mobile)
* [ ] Sale & Featured badges styled clearly
* [ ] Button hover effects

---

## 8) Assets & SEO Basics

* [ ] Rename images with meaningful names (e.g., `shooting-planner.jpg`)
* [ ] Add `alt` text for all product images
* [ ] Page title & meta description updated

---

## 9) Final Checks

* [ ] No reference to Shooter of India website
* [ ] Prices displayed correctly everywhere
* [ ] No broken images or links
* [ ] HTML validates without major errors

---

**Result:** Clean catalogue with real products, Planner & Scoresheet highlighted in Featured and Sale sections, using only HTML & CSS.

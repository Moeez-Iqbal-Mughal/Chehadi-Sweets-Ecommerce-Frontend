# 🌟 Chehadi Sweets — Authentic Middle Eastern Patisserie

> **Chehadi Sweets** (Chester Hill, Sydney NSW) — Handcrafted Middle Eastern confectionery rooted in heritage. Famous for fresh daily clotted Ashta plates, golden cheese Knefe, artisanal Baklava platters, and celebration cakes.

---

## 📖 Table of Contents
- [About Chehadi Sweets](#-about-chehadi-sweets)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Store & Contact Information](#-store--contact-information)

---

## 🏛️ About Chehadi Sweets
Nestled in **Chester Hill, Sydney**, Chehadi Sweets is an authentic family-owned patisserie crafting traditional Lebanese sweets fresh daily using 100% Halal certified ingredients, slow-cooked whole Australian milk Ashta cream, pure clarified butter ghee, and orange blossom floral syrups.

---

## ✨ Key Features

### 1. 🍬 Full Interactive Sweets Menu & Catalog
- **Category Filter Tabs**: Easily filter across *Fresh Ashta*, *Baklava*, *Warm Knefe*, *Maamoul & Kaak*, and *Celebration Cakes*.
- **Live Halal & Best-Seller Badges**: Visual indicators for customer favorites and daily baked items.
- **Direct Cart Stepper Controls**: Add, increase (`+`), decrease (`-`), or remove (`🗑`) quantities directly from product cards.

### 2. 🔍 Quick-View Product Modal
- Detailed sweet descriptions, allergen & halal certifications, and authentic recipe highlights.
- Dynamic price updates based on selected quantities.
- Smooth Framer Motion entrance and exit animations with backdrop outside-click dismissal.

### 3. 🛍️ Luxury Centered Cart Dialog Modal
- **2-Column Responsive Layout**: Side-by-side view of cart items and delivery/pickup scheduling on desktop; fluid stacking on mobile.
- **Free Delivery Milestone Bar**: Live progress tracking toward free Sydney metro delivery ($80 threshold).
- **Fulfillment Method Switcher**: Toggle seamlessly between *Store Pickup* (Chester Hill) and *Local Sydney Delivery* with full address fields.
- **Special Instructions**: Add custom gift notes and warm packaging requests.

### 4. 📅 Floating Date & Time Scheduler
- **Portal-Rendered Calendar**: Custom popover calendar rendered via React Portal (`createPortal`) with month/year navigation, quick presets (*Today*, *Tomorrow*, *Clear*), and past date disabling.
- **Preferred Time Slot Picker**: Dropdown selection for ASAP or timed delivery slots throughout the day.

### 5. 💳 Stripe Payment Gateway Checkout
- Simulated 256-bit SSL encrypted checkout modal with live credit card validation.
- Interactive order confirmation receipt with scheduled fulfillment details.

### 6. 🍱 Event & Wedding Catering Portal
- Comprehensive celebration tray inquiry builder with guest size selector and custom event notes.
- Equal-height 2-column balanced layout with Chester Hill catering perks breakdown.

### 7. 📱 Mobile-First Responsive Craftsmanship
- Compact top announcement bar with store trading hours and status indicator.
- Perfectly centered empty cart indicator and responsive touch controls.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component library with Hooks & Context API |
| **TypeScript** | Strict type safety across products, cart state, and order workflows |
| **Vite** | Blazing fast development server and optimized production bundler |
| **Tailwind CSS** | Custom styling with warm luxury cream/gold palette (`#b5874a`, `#2b160f`) |
| **Framer Motion** | Fluid micro-interactions, modal backdrops, and Ken Burns hero transitions |
| **Lucide React** | Clean, lightweight icon suite |
| **React Router DOM v7** | Client-side page routing across Home, Menu, About, Catering, and Contact |

---


## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- `npm` (bundled with Node.js)

### 1. Clone the repository & navigate to Frontend
```bash
cd "Frontend"
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles TypeScript and creates optimized production bundle in `dist/` |
| `npm run preview` | Locally preview the production build output |
| `npm run lint` | Runs ESLint to check for code quality and syntax standards |

---

## 📍 Store & Contact Information

- **Brand**: Chehadi Sweets
- **Address**: 150–152 Waldron Rd, Chester Hill NSW 2162, Sydney, Australia
- **Trading Hours**: Monday – Sunday (7 Days), 9:00 AM – 10:00 PM
- **Rating**: 4.3 ★ Verified Customer Rating
- **Certifications**: 100% Halal Certified

---

*Handcrafted with ❤️ in Sydney, Australia.*

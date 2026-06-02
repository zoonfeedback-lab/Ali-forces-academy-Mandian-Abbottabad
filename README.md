# Ali Forces Academy Abbottabad

Ali Forces Academy Mandian Abbottabad is Pakistan's premier forces preparation academy. This web application is a modern, responsive landing page detailing the academy's training programs, admission procedures, and preparation tracks for the Pakistan Army, Navy, Air Force (PAF), and Inter Services Selection Board (ISSB).

## 🚀 Technologies

The application is built using the following modern web technologies:
* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Library:** [React](https://react.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Typography:** Outfit (via next/font)

---

## 📦 Project Structure

```
├── public/                # Static assets (logos, graphics)
├── src/
│   ├── app/               # Next.js page routing, layouts, and global styles
│   │   ├── layout.tsx     # Site-wide HTML structure, fonts, and metadata
│   │   ├── page.tsx       # Main page container assembling the landing sections
│   │   └── globals.css    # Tailwind base styles and custom utilities
│   └── components/        # Reusable UI sections
│       ├── Navbar/        # Dynamic sticky header and mobile navigation menu
│       ├── Hero/          # High-impact introduction & call-to-action
│       ├── Stats/         # Key performance numbers and records
│       ├── Programs/      # Course tracks (Army, Navy, PAF, ISSB)
│       ├── Admissions/    # Registration and query form
│       ├── Headquarters/  # Core facility info and branch addresses
│       ├── Partners/      # Association logos
│       └── Footer/        # Dynamic page footer with contact info
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configurations
└── tsconfig.json          # TypeScript configurations
```

---

## 🛠️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have Node.js installed (v18.x or later is recommended).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zoonfeedback-lab/Ali-forces-academy-Mandian-Abbottabad.git
   cd Ali-forces-academy-Mandian-Abbottabad
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

### Production Build

To generate the optimized production build:
```bash
npm run build
```

To run the production-built server locally:
```bash
npm run start
```

---

## 📋 Features

* **Fully Responsive:** Beautifully optimized for mobile, tablet, and desktop viewports.
* **Modern Design:** Curated dark-themed color scheme with golden accents representing military excellence.
* **Single-Page Navigation:** Smooth-scrolling anchor links through an interactive navigation bar.
* **SEO Optimized:** Structured semantic HTML5 tags and meta tags for search engine discovery.

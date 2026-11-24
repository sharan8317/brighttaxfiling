# Bright Tax Filings — Executive US Tax Consulting Website

A modern, high-converting, responsive React web application for **Bright Tax Filings** (ApexTax Consulting & Advisory), designed from the Google Stitch design specification (*US Tax Consulting Website*, Project ID: `4620841154855171928`).

Built with **React 18**, **Vite**, **Tailwind CSS**, and **React Router v6**, fully optimized for deployment to **Vercel** and version-controlled with **Git**.

---

## 🏛️ Application Architecture & Pages

The application is structured into 7 distinct, fully-realized pages following the **Executive Tax Architecture** design system:

| Route | Page Name | Key Features & Interactive Components | Stitch Screen ID |
| :--- | :--- | :--- | :--- |
| `/` | **Home** | Authority hero with trust metrics, Form 1040/1120 preview, 8 practice areas, 4-phase methodology, interactive accordion FAQ, client testimonials, and consultation CTA. | `ff7987dd2c93459a959011f7202840de` |
| `/about-us` | **About Us** | "Who We Are", leadership team spotlight, credential badges (EA, CPA, AICPA), mission & vision, 4-pillar methodology, and verified practice statistics. | `0a5b036adf464d2ea0a1dfca56a85c19` |
| `/individual-tax-preparation` | **Individual Tax Preparation** | Diagnostic Form 1040 ledger, 4-column profile cards (W-2, 1099, HNW equity, Multi-State), interactive document checklist, pricing tiers, and audit support details. | `ad0602760c8d49b9b435d0df76da5ea5` |
| `/nonresident-tax-filing` | **Nonresident Tax Filing** | Interactive Substantial Presence Test (SPT) visualizer, 1040 vs. 1040-NR comparison matrix, CAA ITIN (Form W-7) certification protocols, FBAR/FATCA guidance, and visa-specific advice (F-1, J-1, H-1B, L-1, EB-5). | `0d9f96d977c1486ba6b3662eb2475072` |
| `/business-tax-services` | **Business Tax Services** | Bento grid breakdown for LLCs (1065), S-Corps (1120-S), and C-Corps (1120), safe-harbor quarterly estimated tax rules, Section 179 and 199A deduction optimization, and entity election guidance. | `fc9cd6d5c99742088e9466ef6885bea1` |
| `/contact-us` | **Contact Us** | Interactive multi-priority dispatch form (Standard vs. Urgent IRS Notice), secure file upload dropzone simulation, physical office cards (NYC Wall Street & DC Pennsylvania Ave), and direct phone/email support. | `3704e432d5ed47f186a874e71d834a03` |

---

## 🎨 Design System & Color Tokens

Customized in `tailwind.config.js` to match the exact design tokens from Google Stitch's `DESIGN.md`:

- **Primary (`#00152a` / `#002244`)**: Deep federal navy representing authority and stability.
- **Secondary (`#0051d5` / `#316bf3`)**: High-contrast cobalt blue for primary actions, links, and focal points.
- **Surface Canvas (`#f9f9ff`)**: Subtle off-white background ensuring high contrast and legibility.
- **IRS Verified (`#0f766e`)**: Emerald green signaling verified compliance, trust badges, and security attestation.
- **Typography**: 
  - Headings: `Plus Jakarta Sans`
  - Body & UI: `Inter`
  - Financial Ledgers & Math: Monospaced tabular numerals (`font-mono-financial` with `tabular-nums`)
- **Icons**: Google Material Symbols Outlined

---

## 📁 Repository Directory Structure

```text
bright-tax/
├── index.html                  # HTML entry point with Google Fonts & Material Symbols
├── package.json                # Dependencies and npm build scripts
├── postcss.config.js           # PostCSS configuration with Tailwind & Autoprefixer
├── tailwind.config.js          # Material 3 & Executive Tax token palette
├── vite.config.js              # Vite React configuration with port 3000
├── vercel.json                 # Vercel SPA catch-all rewrite configuration
├── .gitignore                  # Git ignore rules for node_modules, dist, etc.
├── README.md                   # Complete documentation and setup guide
└── src/
    ├── main.jsx                # React root mount with BrowserRouter
    ├── App.jsx                 # Routes & layout wrapper
    ├── index.css               # Tailwind directives and utility classes
    ├── components/
    │   ├── Navbar.jsx          # Header with logo, mega-dropdown, and mobile drawer
    │   ├── Footer.jsx          # 4-column footer with practice disclosures
    │   └── ScrollToTop.jsx     # Scrolls window to top on route change
    └── pages/
        ├── Home.jsx                    # Home screen with FAQ accordion & trust metrics
        ├── AboutUs.jsx                 # About Us page with team & methodology
        ├── IndividualTaxPreparation.jsx # Form 1040 diagnostic & checklist
        ├── NonresidentTaxFiling.jsx    # Form 1040-NR, SPT & ITIN guide
        ├── BusinessTaxServices.jsx     # S-Corp, LLC, C-Corp bento grid
        ├── ContactUs.jsx               # Contact form with urgency toggles & office info
        └── BookConsultation.jsx        # 3-step scheduling wizard with calendar
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- `npm` or `pnpm` or `yarn`

### 1. Install Dependencies
Open your terminal in this directory:
```bash
cd c:\Users\samal\SYDON\bright-tax
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`. Open it in your web browser to test all pages and interactions.

### 3. Build for Production
To test the production build locally:
```bash
npm run build
npm run preview
```

---

## 📦 Pushing to Git (GitHub / GitLab / Bitbucket)

Initialize Git, commit the project files, and push to your remote repository:

```bash
# 1. Initialize git in the bright-tax directory
git init

# 2. Stage all files
git add .

# 3. Commit with a descriptive message
git commit -m "feat: complete Bright Tax Filings website with 7 screens from Stitch"

# 4. Set your default branch to main
git branch -M main

# 5. Link your remote repository (replace with your actual GitHub repository URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push code to remote
git push -u origin main
```

---

## ⚡ Deploying to Vercel

The project is pre-configured for **zero-configuration deployment to Vercel**.

### Option 1: Import via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** -> **"Project"**.
3. Select the Git repository you just pushed (`bright-tax`).
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**.
6. In ~30 seconds, your website will be live with an SSL certificate!

### Option 2: Deploy using Vercel CLI
```bash
# Install Vercel CLI globally if not already installed
npm install -g vercel

# Deploy preview
vercel

# Deploy directly to production
vercel --prod
```

### 💡 Why `vercel.json` is Included
In single-page React applications (SPAs) with client-side routing, navigating directly to deep URLs (e.g. `https://your-domain.vercel.app/contact-us`) would result in a `404 Not Found` error without a rewrite rule.

The included `vercel.json` handles this automatically:
```json
{
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
All routes seamlessly resolve to `index.html` where `react-router-dom` handles rendering the correct page.

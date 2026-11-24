import { Link } from 'react-router-dom'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary text-body-md font-body-md border-t border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-xl">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          
          {/* Brand & Credential Statement */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <Link to="/" className="flex items-center gap-space-sm group">
              <span className="relative block h-12 w-14 flex-shrink-0 overflow-hidden" aria-hidden="true">
                <img
                  src="/images/bright-tax-filing-logo.png"
                  alt=""
                  className="max-w-none -translate-x-[23px] object-contain"
                  width="102"
                  height="68"
                />
              </span>
              <span className="font-headline-sm text-headline-sm text-surface-card tracking-tight font-bold group-hover:text-secondary-fixed transition-colors">
                Bright Tax <span className="text-sky-400">Filing</span>
              </span>
            </Link>

            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              IRS Authorized e-file Provider &amp; Comprehensive US Tax Advisory. Delivering rigorous federal and cross-border compliance, audit defense, and bespoke tax architecture for high-net-worth individuals and corporate entities.
            </p>

            <div className="flex flex-wrap gap-2 pt-space-xs">
              <div className="bg-primary px-3 py-1 rounded text-on-primary font-label-sm text-label-sm border border-primary-container">
                IRS Enrolled Agent
              </div>
              <div className="bg-primary px-3 py-1 rounded text-on-primary font-label-sm text-label-sm border border-primary-container">
                CPA Accredited
              </div>
              <div className="bg-primary px-3 py-1 rounded text-on-primary font-label-sm text-label-sm border border-primary-container">
                AICPA Member
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider font-semibold">
              Quick Links
            </span>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-primary-container">
              <li>
                <Link to="/" className="hover:text-surface-card transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-surface-card transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-surface-card transition-colors">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-surface-card transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tax Preparation Services */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider font-semibold">
              Tax Preparation
            </span>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-primary-container">
              <li>
                <Link to="/individual-tax-preparation" className="hover:text-surface-card transition-colors">
                  Individual Form 1040
                </Link>
              </li>
              <li>
                <Link to="/nonresident-tax-filing" className="hover:text-surface-card transition-colors">
                  Nonresident 1040-NR
                </Link>
              </li>
              <li>
                <Link to="/business-tax-services" className="hover:text-surface-card transition-colors">
                  Business Tax 1120 &amp; 1065
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-surface-card transition-colors">
                  Form 4868 &amp; 7004 Extensions
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-surface-card transition-colors">
                  ITIN W-7 Acceptance (CAA)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Advisory & Compliance */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider font-semibold">
              Advisory &amp; Compliance
            </span>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-primary-container">
              <li>
                <Link to="/contact-us" className="hover:text-surface-card transition-colors">
                  Strategic Tax Planning
                </Link>
              </li>
              <li>
                <Link to="/nonresident-tax-filing" className="hover:text-surface-card transition-colors">
                  FBAR FinCEN 114 &amp; FATCA
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-surface-card transition-colors">
                  IRS Audit &amp; Notice Defense
                </Link>
              </li>
              <li>
                <Link to="/individual-tax-preparation" className="hover:text-surface-card transition-colors">
                  Prior Year Return Review
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-surface-card transition-colors">
                  Quarterly Tax Estimates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Office & Operations Strip */}
        <div className="py-space-md border-t border-primary/40 grid grid-cols-1 md:grid-cols-3 gap-space-md text-on-primary-container font-body-sm text-body-sm">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant block mb-1">
              US Headquarters
            </span>
            <p>580 California Street, Financial District<br />San Francisco, CA 94104, United States</p>
          </div>
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant block mb-1">
              Direct Communications
            </span>
            <div className="flex flex-col items-start gap-1 font-mono-financial text-mono-financial">
              <a href="tel:+12135273378" className="hover:text-surface-card transition-colors">
                P: +1 (213) 527-3378
              </a>
              <a
                href="https://wa.me/916301999637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-surface-card transition-colors"
                aria-label="Chat on WhatsApp at +91 63019 99637"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>+91 63019 99637</span>
              </a>
              <a href="mailto:contact@brighttaxfiling.com" className="hover:text-surface-card transition-colors">
                E: contact@brighttaxfiling.com
              </a>
            </div>
          </div>
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant block mb-1">
              Client Operating Hours
            </span>
            <p>
              Mon - Fri: 8:00 AM - 8:00 PM PST<br />
              Saturday: 9:00 AM - 4:00 PM PST
            </p>
          </div>
        </div>

        {/* Legal & Compliance Footer */}
        <div className="pt-space-lg mt-space-md border-t border-primary/40 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-primary-container">
          <div className="flex flex-col md:flex-row md:items-center gap-space-xs md:gap-space-md text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Bright Tax Filing LLC. All rights reserved.</span>
            <span className="hidden md:inline">&bull;</span>
            <span className="text-surface-variant">Circular 230 Disclosure &amp; Authorized IRS e-File Provider</span>
          </div>
          <div className="flex items-center gap-space-md">
            <Link to="/contact-us" className="hover:text-surface-card transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact-us" className="hover:text-surface-card transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/contact-us" className="hover:text-surface-card transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const isServicesActive = () => {
    return [
      '/individual-tax-preparation',
      '/nonresident-tax-filing',
      '/business-tax-services'
    ].some(path => location.pathname.startsWith(path))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-card/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-border-subtle">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-space-md">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-2xl text-secondary-fixed">account_balance</span>
          </div>
          <div className="flex flex-col">
            <span className="font-title-md text-title-md text-primary tracking-tight font-bold group-hover:text-secondary transition-colors">
              Bright Tax Filings
            </span>
            <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase text-[10px]">
              ApexTax Consulting &amp; Advisory
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          <Link
            to="/"
            className={`font-label-md text-label-md py-2 transition-colors ${
              isActive('/')
                ? 'text-secondary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className={`font-label-md text-label-md py-2 transition-colors ${
              isActive('/about-us')
                ? 'text-secondary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={`font-label-md text-label-md py-2 inline-flex items-center gap-1 transition-colors ${
                isServicesActive()
                  ? 'text-secondary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>Services</span>
              <span className="material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-200">
                expand_more
              </span>
            </button>

            {/* Dropdown Panel */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-surface-card shadow-[0_20px_32px_-4px_rgba(16,42,67,0.12),0_8px_16px_-4px_rgba(16,42,67,0.04)] rounded-xl p-space-lg mt-1 grid grid-cols-2 gap-space-md border border-border-subtle">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-space-xs px-space-xs font-semibold">
                  Filing &amp; Return Services
                </span>
                
                <Link
                  to="/individual-tax-preparation"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                    <span>Individual Tax Preparation</span>
                    <span className="text-[10px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded font-mono-financial">1040</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Form 1040, schedules, and multi-state filings</div>
                </Link>

                <Link
                  to="/nonresident-tax-filing"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                    <span>Nonresident Tax Filing</span>
                    <span className="text-[10px] bg-irs-verified/10 text-irs-verified px-1.5 py-0.5 rounded font-mono-financial">1040-NR</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Form 1040-NR, F-1/OPT, J-1, treaty exclusions</div>
                </Link>

                <Link
                  to="/business-tax-services"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                    <span>Business Tax Services</span>
                    <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-mono-financial">1120/1065</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Corporate 1120, 1120-S, and 1065 LLC returns</div>
                </Link>

                <Link
                  to="/contact-us"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">ITIN Application (W-7)</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">IRS Certified Acceptance Agent certification</div>
                </Link>

                <Link
                  to="/contact-us"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">Tax Extension Filing</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Federal and multi-state penalty protection</div>
                </Link>
              </div>

              <div className="flex flex-col gap-space-xs border-l border-border-subtle pl-space-md">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-space-xs px-space-xs font-semibold">
                  Advisory &amp; Defense
                </span>

                <Link
                  to="/book-a-consultation"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">Tax Planning</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Strategic forward liability minimization</div>
                </Link>

                <Link
                  to="/contact-us"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">FBAR &amp; FATCA Reporting</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Foreign asset &amp; FinCEN 114 disclosures</div>
                </Link>

                <Link
                  to="/contact-us"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">IRS Notice &amp; Audit Defense</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">CP2000 representation &amp; penalty abatement</div>
                </Link>

                <Link
                  to="/contact-us"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">Quarterly Tax Estimates</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Safe harbor calculation (1040-ES)</div>
                </Link>

                <Link
                  to="/contact-us"
                  className="p-space-xs rounded-lg hover:bg-surface-container-low transition-colors block"
                >
                  <div className="font-label-md text-label-md text-on-surface font-semibold">Tax Return Review</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Prior 3 years forensic audit &amp; amendments</div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/contact-us"
            className={`font-label-md text-label-md py-2 transition-colors ${
              isActive('/contact-us')
                ? 'text-secondary font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right CTA & Phone */}
        <div className="hidden sm:flex items-center gap-space-md">
          <div className="hidden xl:flex flex-col text-right">
            <span className="font-label-sm text-label-sm text-outline text-xs">Direct Client Line</span>
            <a
              href="tel:18005552739"
              className="font-mono-financial text-mono-financial text-primary hover:text-secondary transition-colors font-semibold"
            >
              +1 (800) 555-APEX
            </a>
          </div>

          <Link
            to="/book-a-consultation"
            className="bg-secondary hover:bg-secondary-container text-on-secondary px-5 py-2.5 rounded-lg font-label-md text-label-md font-semibold transition-all duration-150 shadow-sm hover:shadow-md inline-flex items-center gap-2"
          >
            <span>Book a Consultation</span>
            <span className="material-symbols-outlined text-sm">calendar_today</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            to="/book-a-consultation"
            className="bg-secondary text-on-secondary px-3 py-1.5 rounded-lg text-xs font-semibold sm:hidden"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-primary hover:bg-surface-container-low transition-colors"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-card border-b border-border-subtle px-4 pt-3 pb-6 flex flex-col gap-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`px-3 py-2 rounded-lg font-label-md text-label-md ${
              isActive('/') ? 'bg-secondary/10 text-secondary font-bold' : 'text-primary'
            }`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`px-3 py-2 rounded-lg font-label-md text-label-md ${
              isActive('/about-us') ? 'bg-secondary/10 text-secondary font-bold' : 'text-primary'
            }`}
          >
            About Us
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-primary"
            >
              <span>Services</span>
              <span className={`material-symbols-outlined text-sm transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 bg-surface-container-low/50 rounded-lg mt-1 text-sm">
                <Link
                  to="/individual-tax-preparation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 px-2 rounded text-primary hover:text-secondary font-medium"
                >
                  Individual Tax Preparation (1040)
                </Link>
                <Link
                  to="/nonresident-tax-filing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 px-2 rounded text-primary hover:text-secondary font-medium"
                >
                  Nonresident Tax Filing (1040-NR)
                </Link>
                <Link
                  to="/business-tax-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 px-2 rounded text-primary hover:text-secondary font-medium"
                >
                  Business Tax Services (1120/1065)
                </Link>
                <Link
                  to="/book-a-consultation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 px-2 rounded text-primary hover:text-secondary font-medium"
                >
                  Tax Planning &amp; Advisory
                </Link>
                <Link
                  to="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 px-2 rounded text-primary hover:text-secondary font-medium"
                >
                  ITIN, Extensions &amp; FBAR
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`px-3 py-2 rounded-lg font-label-md text-label-md ${
              isActive('/contact-us') ? 'bg-secondary/10 text-secondary font-bold' : 'text-primary'
            }`}
          >
            Contact Us
          </Link>

          <div className="pt-2 border-t border-border-subtle flex flex-col gap-2">
            <Link
              to="/book-a-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-secondary text-on-secondary px-4 py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2 shadow"
            >
              <span>Book a Consultation</span>
              <span className="material-symbols-outlined text-sm">calendar_today</span>
            </Link>
            <a
              href="tel:18005552739"
              className="px-4 py-2 text-center text-sm font-mono-financial text-outline flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-xs">phone</span>
              <span>+1 (800) 555-APEX</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

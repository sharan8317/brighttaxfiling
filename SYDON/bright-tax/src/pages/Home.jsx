import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      q: "What are the critical US federal tax deadlines for individuals and businesses?",
      a: "For individuals, the annual federal income tax return deadline is typically April 15. An extension grants additional time until October 15 to file paperwork. For calendar-year partnerships (Form 1065) and S-Corporations (Form 1120-S), the primary deadline is March 15 (extended to September 15). C-Corporations (Form 1120) must file by April 15 (extended to October 15)."
    },
    {
      q: "How do I know if I should file Form 1040 vs. Form 1040-NR?",
      a: "Residency for tax purposes is determined by the Substantial Presence Test (SPT) or holding a Green Card / US citizenship. Nonresidents on visas like F-1 (generally exempt from SPT for their first 5 calendar years) and J-1 must file Form 1040-NR. Once you pass the SPT (183 weighted days), you are considered a resident alien for tax purposes and file Form 1040 on worldwide income."
    },
    {
      q: "Can I obtain an ITIN without mailing my original physical passport?",
      a: "Yes! As an authorized IRS Certifying Acceptance Agent (CAA), Bright Tax Filings has legal authorization from the IRS to examine, certify, and attest to your foreign identity and citizenship documents. We verify your passport in person or via verified CAA protocol and submit Form W-7 with our Certificate of Accuracy (Form W-7 COA), so your physical passport never leaves your hands."
    },
    {
      q: "Does filing a tax extension give me more time to pay my taxes?",
      a: "No. An IRS extension (Form 4868 for individuals, Form 7004 for businesses) grants an extension of time to file your return, not an extension of time to pay. Any estimated tax owed must still be paid by the original April 15 deadline to avoid late-payment interest and penalty assessments. Our advisors calculate proper safe-harbor payment estimates when submitting extensions."
    },
    {
      q: "Who is required to file FBAR (FinCEN 114) and FATCA (Form 8938)?",
      a: "US persons (citizens, green card holders, and resident aliens) with financial interest or signature authority over foreign financial accounts must file an FBAR if the aggregate value of all foreign accounts exceeds $10,000 at any time during the calendar year. Form 8938 (FATCA) applies higher threshold tests depending on tax filing status and foreign vs. domestic residency."
    }
  ]

  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-surface-card via-surface to-surface-canvas overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-space-md">
              {/* Authority Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-on-surface">
                  IRS Authorized e-File Provider &amp; Licensed Tax Advisory
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-bold">
                Your Trusted Partner for <span className="text-secondary">Smarter Tax Filing</span>
              </h1>

              {/* Subheading */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Professional tax preparation, strategic forward tax planning, and compliance solutions engineered to eliminate regulatory friction and optimize your bottom line.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full sm:w-auto pt-2">
                <Link
                  to="/book-a-consultation"
                  className="bg-secondary hover:bg-secondary-container text-on-secondary px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold transition-all duration-150 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 group"
                >
                  <span>Get Started</span>
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>

                <a
                  href="#services-matrix"
                  className="bg-surface-card hover:bg-surface-container-low text-primary px-6 py-3.5 rounded-lg font-label-md text-label-md font-semibold transition-all duration-150 shadow-sm inline-flex items-center justify-center gap-2 border border-border-subtle"
                >
                  <span>Explore Our Services</span>
                  <span className="material-symbols-outlined text-base text-on-surface-variant">
                    keyboard_arrow_down
                  </span>
                </a>
              </div>

              {/* Trust Badges Line */}
              <div className="pt-6 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 bg-surface-container-low/60 p-4 rounded-xl border border-border-subtle/50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-irs-verified/10 text-irs-verified flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">100% Accuracy</span>
                      <span className="font-body-sm text-body-sm text-outline">IRS Guarantee</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-lg">lock</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">256-Bit SSL</span>
                      <span className="font-body-sm text-body-sm text-outline">Bank-Grade Vault</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container/10 text-tertiary-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-lg">badge</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">Licensed CPAs</span>
                      <span className="font-body-sm text-body-sm text-outline">&amp; Enrolled Agents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Composition */}
            <div className="lg:col-span-6 relative">
              {/* Ambient Glow Backdrop */}
              <div className="absolute -top-12 -right-8 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-tertiary-fixed-dim/30 rounded-full blur-2xl pointer-events-none"></div>

              {/* Main Interactive Dashboard Container */}
              <div className="relative bg-surface-card rounded-2xl shadow-[0_20px_40px_-15px_rgba(16,42,67,0.12)] p-space-lg space-y-space-md border border-border-subtle">
                {/* Lead Bar: Status & Shield */}
                <div className="flex items-center justify-between pb-3 bg-surface-container-low/50 px-4 py-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-surface-card shadow-sm">
                      <span className="material-symbols-outlined text-xl text-secondary-fixed">shield</span>
                    </div>
                    <div>
                      <div className="font-label-md text-label-md text-primary font-bold">Federal Form 1040 Optimized</div>
                      <div className="font-body-sm text-body-sm text-irs-verified font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">task_alt</span> Certified Acceptance Review Complete
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-mono-financial text-mono-financial text-xs font-semibold uppercase tracking-wider">
                    TY2024
                  </span>
                </div>

                {/* Asymmetric Bento Display within Dashboard */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-sm">
                  {/* Left Stack: Financial Metrics Breakdown */}
                  <div className="sm:col-span-7 bg-surface-canvas rounded-xl p-space-md flex flex-col justify-between space-y-3 border border-border-subtle/40">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                        Tax Liability Delta
                      </span>
                      <span className="text-irs-verified font-mono-financial text-mono-financial text-xs font-semibold px-2 py-0.5 rounded bg-irs-verified/10">
                        -24.8%
                      </span>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Tax Savings Leveraged</div>
                      <div className="font-headline-md text-headline-md text-primary font-bold tracking-tight font-mono-financial">
                        $18,450.00
                      </div>
                    </div>

                    {/* Sparkline & Distribution Visual */}
                    <div className="pt-2">
                      <div className="flex justify-between text-body-sm font-mono-financial text-outline text-xs mb-1">
                        <span>Q1 Structuring</span>
                        <span className="text-secondary font-semibold">Credits Applied</span>
                      </div>
                      <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden flex">
                        <div className="h-full bg-secondary w-3/5 rounded-l-full"></div>
                        <div className="h-full bg-irs-verified w-1/4"></div>
                        <div className="h-full bg-primary w-3/20 rounded-r-full"></div>
                      </div>
                      <div className="flex items-center gap-3 pt-2 text-xs font-body-sm text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span> §199A QBI
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-irs-verified inline-block"></span> Child/Dep
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> FTC
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Stack: Senior CPA Advisor Card */}
                  <div className="sm:col-span-5 bg-primary text-on-primary rounded-xl p-space-md flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold text-[11px]">
                        Lead Tax Director
                      </span>
                      <span className="material-symbols-outlined text-primary-fixed-dim text-lg">verified</span>
                    </div>
                    
                    <div className="my-2 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary-container border-2 border-secondary-fixed flex items-center justify-center text-white font-bold text-lg font-mono-financial">
                        MV
                      </div>
                      <div className="min-w-0">
                        <div className="font-title-md text-title-md text-surface-card font-bold truncate">Marcus Vance</div>
                        <div className="font-body-sm text-body-sm text-primary-fixed-dim truncate">CPA, Enrolled Agent</div>
                      </div>
                    </div>

                    <div className="pt-2 bg-primary-container p-2.5 rounded-lg">
                      <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-irs-verified inline-block animate-pulse"></span>
                        <span>Ready for Filing</span>
                      </div>
                      <div className="font-body-sm text-body-sm text-surface-variant/80 text-xs mt-0.5 truncate">
                        Zero Discrepancies Verified
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document Pipeline Indicator */}
                <div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed text-primary flex items-center justify-center font-bold font-mono-financial text-xs">
                      04
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-primary font-semibold">Pre-Submission Quality Audit</span>
                      <span className="font-body-sm text-body-sm text-outline">Federal e-File Channel Secure Ready</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-irs-verified font-label-sm text-label-sm font-semibold bg-surface-card px-2.5 py-1 rounded shadow-sm">
                    <span className="material-symbols-outlined text-sm">lock_clock</span>
                    <span>Audit Defense Included</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST STATS / METRICS STRIP */}
      <section className="w-full bg-primary text-on-primary py-space-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg lg:gap-space-xl">
            <div className="flex flex-col items-center text-center p-space-md rounded-xl bg-primary-container/40">
              <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary-fixed flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <span className="font-display-lg text-display-lg font-bold text-surface-card tracking-tight font-mono-financial">15+</span>
              <span className="font-label-md text-label-md text-primary-fixed font-semibold mt-1">Years of Tax Experience</span>
              <span className="font-body-sm text-body-sm text-primary-fixed-dim/80 mt-1">Continuous regulatory mastery</span>
            </div>

            <div className="flex flex-col items-center text-center p-space-md rounded-xl bg-primary-container/40">
              <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary-fixed flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">public</span>
              </div>
              <span className="font-display-lg text-display-lg font-bold text-surface-card tracking-tight font-mono-financial">25,000+</span>
              <span className="font-label-md text-label-md text-primary-fixed font-semibold mt-1">Clients Served Globally</span>
              <span className="font-body-sm text-body-sm text-primary-fixed-dim/80 mt-1">50 US states &amp; 38 nations</span>
            </div>

            <div className="flex flex-col items-center text-center p-space-md rounded-xl bg-primary-container/40">
              <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary-fixed flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">description</span>
              </div>
              <span className="font-display-lg text-display-lg font-bold text-surface-card tracking-tight font-mono-financial">40,000+</span>
              <span className="font-label-md text-label-md text-primary-fixed font-semibold mt-1">Tax Returns Prepared</span>
              <span className="font-body-sm text-body-sm text-primary-fixed-dim/80 mt-1">E-filed with zero error penalties</span>
            </div>

            <div className="flex flex-col items-center text-center p-space-md rounded-xl bg-primary-container/40">
              <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary-fixed flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">star</span>
              </div>
              <span className="font-display-lg text-display-lg font-bold text-surface-card tracking-tight font-mono-financial">99.4%</span>
              <span className="font-label-md text-label-md text-primary-fixed font-semibold mt-1">Client Satisfaction</span>
              <span className="font-body-sm text-body-sm text-primary-fixed-dim/80 mt-1">Independent verified audits</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION */}
      <section className="w-full bg-surface-canvas py-space-xl lg:py-28" id="services-matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-space-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card shadow-sm text-secondary mb-3 border border-border-subtle">
              <span className="material-symbols-outlined text-sm">account_balance</span>
              <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase">Strategic Practice Areas</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
              Comprehensive Tax Preparation &amp; Advisory Solutions
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              From complex cross-border filing and corporate structures to high-accuracy personal returns, our licensed CPAs safeguard your wealth with surgical precision.
            </p>
          </div>

          {/* 8-Card Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            
            {/* Card 1 */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-xs font-mono-financial bg-surface-container-low text-primary font-semibold mb-2">
                  Form 1040 • Schedules A/B/D
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">Individual Tax Preparation</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Meticulous filing for high-earning individuals, standard W-2 wage earners, freelancers, and multi-state property owners seeking optimized deduction architecture.
                </p>
              </div>
              <div className="pt-6 mt-4">
                <Link
                  to="/individual-tax-preparation"
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-secondary-container font-semibold"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">language</span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-xs font-mono-financial bg-surface-container-low text-primary font-semibold mb-2">
                  Form 1040-NR • Treaties
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">Nonresident Tax Filing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Specialized non-resident alien compliance for F-1 OPT students, J-1 scholars, H-1B visa workers, and international investors utilizing bilateral income tax treaties.
                </p>
              </div>
              <div className="pt-6 mt-4">
                <Link
                  to="/nonresident-tax-filing"
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-secondary-container font-semibold"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">domain</span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-xs font-mono-financial bg-surface-container-low text-primary font-semibold mb-2">
                  1120-S • 1065 • LLC
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">Business Tax Services</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  End-to-end corporate returns for single-member LLCs, S-Corporations, and Partnerships with balance sheet reconciliation and state nexus apportionment.
                </p>
              </div>
              <div className="pt-6 mt-4">
                <Link
                  to="/business-tax-services"
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-secondary-container font-semibold"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">badge</span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-xs font-mono-financial bg-surface-container-low text-primary font-semibold mb-2">
                  Form W-7 • CAA Agent
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">ITIN Application Services</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  IRS Certified Acceptance Agent (CAA) verification. Validate your foreign passports and vital identity records without mailing original physical passports to the IRS.
                </p>
              </div>
              <div className="pt-6 mt-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-secondary-container font-semibold"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">insights</span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-xs font-mono-financial bg-surface-container-low text-primary font-semibold mb-2">
                  Proactive Structuring
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">Strategic Tax Planning</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Future-proof advisory covering capital gains timing, real estate depreciation strategies, Roth conversions, and entity election optimization for long-term wealth retention.
                </p>
              </div>
              <div className="pt-6 mt-4">
                <Link
                  to="/book-a-consultation"
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-secondary-container font-semibold"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">event_upcoming</span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-xs font-mono-financial bg-surface-container-low text-primary font-semibold mb-2">
                  Form 4868 • Form 7004
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">Tax Extension Filing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Flawless, penalty-protected federal and multi-state extension filing for individuals and corporate entities with precise safe-harbor payment calculations.
                </p>
              </div>
              <div className="pt-6 mt-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-secondary-container font-semibold"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">assured_workload</span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-xs font-mono-financial bg-surface-container-low text-primary font-semibold mb-2">
                  FinCEN 114 • Form 8938
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">FBAR &amp; FATCA Reporting</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Foreign financial asset reporting and streamlined international disclosure compliance to prevent severe non-willful statutory civil and tax code penalties.
                </p>
              </div>
              <div className="pt-6 mt-4">
                <Link
                  to="/nonresident-tax-filing"
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-secondary-container font-semibold"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">gavel</span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-xs font-mono-financial bg-surface-container-low text-primary font-semibold mb-2">
                  CP2000 • Audit Defense
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">IRS Notice &amp; Audit Support</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Decisive representation before the Internal Revenue Service and state departments of revenue. Expert response letters, penalty abatements, and audit management.
                </p>
              </div>
              <div className="pt-6 mt-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary group-hover:text-secondary-container font-semibold"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (FEATURE PILLARS) */}
      <section className="w-full bg-primary-container text-on-primary py-space-xl lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold block mb-2">
              Built On Absolute Institutional Trust
            </span>
            <h2 className="font-headline-lg text-headline-lg text-surface-card font-bold tracking-tight">
              Why Discerning Individuals &amp; Businesses Trust Bright Tax Filings
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim mt-2">
              Unlike commoditized automated software, every single return at Bright Tax Filings receives bespoke scrutiny from credentialed Enrolled Agents and CPAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="bg-primary/60 p-space-lg rounded-xl hover:bg-primary/90 transition-colors border border-primary/40">
              <div className="w-12 h-12 rounded-xl bg-secondary text-surface-card flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h3 className="font-title-md text-title-md text-surface-card font-bold mb-2">Experienced Tax Specialists</h3>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                Our roster comprises IRS Enrolled Agents and CPAs with over 15 years of forensic tax compliance experience navigating evolving IRS statutes.
              </p>
            </div>

            <div className="bg-primary/60 p-space-lg rounded-xl hover:bg-primary/90 transition-colors border border-primary/40">
              <div className="w-12 h-12 rounded-xl bg-secondary text-surface-card flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">fact_check</span>
              </div>
              <h3 className="font-title-md text-title-md text-surface-card font-bold mb-2">Accurate Tax Preparation</h3>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                Multi-tier peer validation workflows guarantee zero mathematical inaccuracies while uncovering every legitimate legal deduction and federal credit.
              </p>
            </div>

            <div className="bg-primary/60 p-space-lg rounded-xl hover:bg-primary/90 transition-colors border border-primary/40">
              <div className="w-12 h-12 rounded-xl bg-secondary text-surface-card flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">shield_lock</span>
              </div>
              <h3 className="font-title-md text-title-md text-surface-card font-bold mb-2">Secure Document Handling</h3>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                Our SOC2-compliant encrypted portal ensures your SSNs, ITINs, W-2s, and sensitive corporate ledgers are shielded by military-grade AES-256 protocols.
              </p>
            </div>

            <div className="bg-primary/60 p-space-lg rounded-xl hover:bg-primary/90 transition-colors border border-primary/40">
              <div className="w-12 h-12 rounded-xl bg-secondary text-surface-card flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">tune</span>
              </div>
              <h3 className="font-title-md text-title-md text-surface-card font-bold mb-2">Personalized Tax Solutions</h3>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                No cookie-cutter algorithms. We design individualized roadmaps that account for your unique equity grants, dual residency, or commercial operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (FOUR-STEP TIMELINE) */}
      <section className="w-full bg-surface-card py-space-xl lg:py-28 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold block mb-2">
              Streamlined 4-Step Process
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
              How Filing With Bright Tax Filings Works
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              A transparent, frictionless workflow designed to take you from unorganized documents to IRS-accepted peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
            <div className="bg-surface-canvas p-space-lg rounded-xl relative flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-financial text-mono-financial font-bold text-secondary text-2xl">01</span>
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">format_list_bulleted</span>
                  </div>
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">Choose Your Service</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Select your individual or corporate filing category, or book an introductory strategy assessment with our senior intake coordinator.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-xs text-outline font-label-sm border-t border-border-subtle">
                <span className="material-symbols-outlined text-xs">timer</span> Fast 2-minute onboarding
              </div>
            </div>

            <div className="bg-surface-canvas p-space-lg rounded-xl relative flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-financial text-mono-financial font-bold text-secondary text-2xl">02</span>
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">cloud_upload</span>
                  </div>
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">Submit Your Documents</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Upload your W-2s, 1099s, K-1s, and receipts through our encrypted client portal from any desktop or mobile device.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-xs text-outline font-label-sm border-t border-border-subtle">
                <span className="material-symbols-outlined text-xs">encrypted</span> 256-bit bank encryption
              </div>
            </div>

            <div className="bg-surface-canvas p-space-lg rounded-xl relative flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-financial text-mono-financial font-bold text-secondary text-2xl">03</span>
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">manage_search</span>
                  </div>
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">Tax Professional Review</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Your designated CPA or Enrolled Agent analyzes deductions, tests tax credits, and prepares a draft return accompanied by a video walk-through.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-xs text-outline font-label-sm border-t border-border-subtle">
                <span className="material-symbols-outlined text-xs">verified</span> Dual-CPA quality check
              </div>
            </div>

            <div className="bg-surface-canvas p-space-lg rounded-xl relative flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-financial text-mono-financial font-bold text-secondary text-2xl">04</span>
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">send</span>
                  </div>
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold mb-2">Preparation &amp; IRS Filing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  After your e-signature approval via Form 8879, we securely transmit your federal and state tax returns with instant electronic confirmation.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-1.5 text-xs text-irs-verified font-label-sm font-semibold border-t border-border-subtle">
                <span className="material-symbols-outlined text-xs">check_circle</span> Authorized e-file instant ack
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="w-full bg-surface-canvas py-space-xl lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold block mb-2">
                Client Testimonials
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                Trusted by Entrepreneurs, Expats &amp; Professionals
              </h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <span className="font-mono-financial text-mono-financial text-primary font-bold text-lg">4.9 / 5.0</span>
              <div className="flex text-tax-warning">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <span className="font-body-sm text-body-sm text-outline">(500+ Verified Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex text-tax-warning mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant italic mb-6">
                  &ldquo;As a nonresident founder operating a Delaware C-Corp with international shareholders, our tax compliance was a nightmare. Bright Tax Filings reconciled our Form 1120 and 5472 disclosures with complete transparency and zero stress.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 bg-surface-container-low/40 p-3 rounded-lg border border-border-subtle/50">
                <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold font-mono-financial">
                  AL
                </div>
                <div>
                  <div className="font-label-md text-label-md text-primary font-bold">Arjun Loganathan</div>
                  <div className="font-body-sm text-body-sm text-outline">Founder, SaaS Syndicate Inc.</div>
                </div>
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex text-tax-warning mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant italic mb-6">
                  &ldquo;Transitioning between an F-1 OPT visa to an H-1B dual status tax return was overwhelming. Their EA walked me through bilateral treaty exemptions that saved me over $4,200. Their CAA agent also sorted my spouse&apos;s ITIN without keeping our passports.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 bg-surface-container-low/40 p-3 rounded-lg border border-border-subtle/50">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold font-mono-financial">
                  EK
                </div>
                <div>
                  <div className="font-label-md text-label-md text-primary font-bold">Elena Kozlova</div>
                  <div className="font-body-sm text-body-sm text-outline">Senior AI Research Engineer</div>
                </div>
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex text-tax-warning mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant italic mb-6">
                  &ldquo;Bright Tax Filings resolved an alarming IRS CP2000 proposed notice for alleged underreported capital gains. Their audit team prepared an airtight response that reduced the IRS assessment from $16,800 to exactly $0 with complete penalty abatement.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 bg-surface-container-low/40 p-3 rounded-lg border border-border-subtle/50">
                <div className="w-10 h-10 rounded-full bg-irs-verified text-on-primary flex items-center justify-center font-bold font-mono-financial">
                  DR
                </div>
                <div>
                  <div className="font-label-md text-label-md text-primary font-bold">David Richardson</div>
                  <div className="font-body-sm text-body-sm text-outline">Managing Director, Richardson Capital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FAQ SECTION */}
      <section className="w-full bg-surface-card py-space-xl lg:py-28 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-space-xl">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold block mb-2">
              Common Inquiries
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
              Frequently Asked US Tax Questions
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Clear answers regarding deadlines, residency rules, ITIN verifications, and strategic extension filings.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="bg-surface-canvas rounded-xl overflow-hidden transition-colors border border-border-subtle">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-title-md text-title-md text-primary font-semibold"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={`material-symbols-outlined text-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-border-subtle/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL HIGH-IMPACT CTA SECTION */}
      <section className="w-full bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary py-space-xl lg:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 text-surface-card mb-4">
            <span className="material-symbols-outlined text-sm">support_agent</span>
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">
              Direct Access to Tax Advisors
            </span>
          </div>

          <h2 className="font-display-lg text-display-lg font-bold text-surface-card tracking-tight">
            Ready to Simplify Your Taxes?
          </h2>

          <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mx-auto mt-4 mb-space-lg leading-relaxed">
            Schedule a dedicated 1-on-1 strategy session with our certified US tax specialists today and experience precision advisory tailored to your financial goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-sm">
            <Link
              to="/book-a-consultation"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-4 rounded-lg font-title-md text-title-md font-semibold transition-all duration-150 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group"
            >
              <span>Schedule a Consultation</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                calendar_today
              </span>
            </Link>

            <a
              href="tel:18005552739"
              className="w-full sm:w-auto bg-primary-container/80 hover:bg-primary/80 text-surface-card px-6 py-4 rounded-lg font-title-md text-title-md font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 font-mono-financial border border-primary-fixed-dim/20"
            >
              <span className="material-symbols-outlined text-secondary-fixed">phone</span>
              <span>+1 (800) 555-APEX</span>
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-primary-fixed-dim font-body-sm text-body-sm">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary-fixed text-base">check_circle</span>
              No Obligation Initial Review
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary-fixed text-base">check_circle</span>
              Upfront Fixed Transparent Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary-fixed text-base">check_circle</span>
              Licensed IRS Enrolled Agents
            </span>
          </div>
        </div>
      </section>

    </div>
  )
}

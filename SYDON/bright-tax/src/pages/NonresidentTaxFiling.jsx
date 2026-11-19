import { Link } from 'react-router-dom'

export default function NonresidentTaxFiling() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Top Breadcrumb & Hero Stage */}
      <section className="relative w-full bg-primary text-on-primary py-space-xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="50%" cy="30%" id="grid-glow" r="60%">
                <stop offset="0%" stopColor="#316bf3" stopOpacity="0.4"></stop>
                <stop offset="100%" stopColor="#00152a" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
            <rect fill="url(#grid-glow)" height="100" width="100"></rect>
            <path d="M-10,30 Q30,10 70,50 T130,40" fill="none" opacity="0.4" stroke="#b4c5ff" strokeWidth="0.3"></path>
            <path d="M-10,50 Q40,30 80,70 T130,60" fill="none" opacity="0.3" stroke="#82f7d8" strokeWidth="0.2"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-space-lg">
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-space-xs font-label-md text-label-md text-on-primary-container">
            <Link to="/" className="hover:text-surface-card transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="hover:text-surface-card transition-colors">Services</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-surface-card font-semibold">Nonresident Tax Filing</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center pt-space-sm">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-secondary/20 text-secondary-fixed w-fit font-label-sm text-label-sm tracking-widest uppercase">
                <span className="material-symbols-outlined text-[16px]">public</span>
                International &amp; Nonresident Compliance
              </div>

              <h1 className="font-display-lg text-display-lg text-surface-card tracking-tight font-bold">
                Expert US Nonresident Tax Filing Solutions
              </h1>

              <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                Navigating Form 1040-NR, strict tax residency formulas, and bilateral tax treaty exemptions for foreign professionals, academic scholars, global founders, and overseas investors.
              </p>

              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <Link
                  to="/book-a-consultation"
                  className="bg-secondary hover:bg-secondary-container text-on-secondary px-space-lg py-3 rounded-lg font-label-md text-label-md transition-all shadow-md inline-flex items-center gap-2 font-semibold"
                >
                  <span>Get Nonresident Tax Assistance</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>

                <div className="flex items-center gap-2 px-space-sm py-1 bg-surface-card/10 rounded-lg text-surface-card font-mono-financial text-mono-financial text-sm">
                  <span className="material-symbols-outlined text-irs-verified text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  IRS Authorized Acceptance Agents &amp; EAs
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              {/* Institutional Shield Metric Card */}
              <div className="bg-surface-card/10 backdrop-blur-md rounded-xl p-space-lg shadow-xl text-surface-card flex flex-col gap-space-md relative overflow-hidden border border-white/10">
                <div className="flex items-center justify-between pb-space-sm">
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-primary-container text-xs">
                    Treaty &amp; Status Optimization
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono-financial bg-irs-verified text-white font-bold">
                    IRS COMPLIANT
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="bg-primary/50 p-space-sm rounded-lg flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-primary-container text-xs">Dual-Status Returns</span>
                    <span className="font-title-md text-title-md font-bold text-surface-card">100% Audit-Tested</span>
                  </div>
                  <div className="bg-primary/50 p-space-sm rounded-lg flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-primary-container text-xs">FBAR FinCEN 114</span>
                    <span className="font-title-md text-title-md font-bold text-secondary-fixed">Integrated</span>
                  </div>
                </div>

                <div className="bg-primary/60 p-space-md rounded-lg flex items-center justify-between">
                  <div>
                    <div className="font-label-md text-label-md font-semibold text-surface-card">Form 8843 &amp; Treaty Exclusions</div>
                    <div className="font-body-sm text-body-sm text-on-primary-container text-xs">Zero US tax on qualifying fellowship &amp; treaty articles</div>
                  </div>
                  <span className="material-symbols-outlined text-secondary-fixed text-[32px]">balance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Tax Residency & Status Assessment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-xl w-full">
        <div className="flex flex-col gap-space-xs mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Residency Determination
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
            Understanding Nonresident Alien (NRA) vs. Resident Alien
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            US federal tax status is purely objective under the Internal Revenue Code (IRC §7701(b)) and distinct from your immigration visa status. Failing to establish proper residency triggers incorrect return submissions and invalid deductions.
          </p>
        </div>

        {/* Core Rules Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-xl items-stretch">
          {/* Substantial Presence Card */}
          <div className="lg:col-span-7 bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-border-subtle">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-space-xs text-primary font-title-md text-title-md font-bold">
                  <span className="material-symbols-outlined text-secondary text-[24px]">calculate</span>
                  The Substantial Presence Test (SPT)
                </div>
                <span className="font-mono-financial text-mono-financial px-space-xs py-1 rounded bg-surface-container-high text-primary font-semibold text-xs">
                  183-Day Weighted Threshold
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                You are treated as a Resident Alien for the calendar year if you are physically present in the United States for at least 31 days in the current year, and 183 days calculated over the 3-year lookback formula:
              </p>

              {/* Formula Visual Box */}
              <div className="bg-surface-canvas rounded-lg p-space-md grid grid-cols-3 gap-space-sm text-center border border-border-subtle/50">
                <div className="flex flex-col p-space-xs rounded bg-surface-card shadow-sm border border-border-subtle">
                  <span className="font-label-sm text-label-sm text-outline text-xs">Current Year</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono-financial">100%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">All days (1.0 factor)</span>
                </div>
                <div className="flex flex-col p-space-xs rounded bg-surface-card shadow-sm border border-border-subtle">
                  <span className="font-label-sm text-label-sm text-outline text-xs">Prior Year (Y-1)</span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold font-mono-financial">33.3%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">1/3 of days</span>
                </div>
                <div className="flex flex-col p-space-xs rounded bg-surface-card shadow-sm border border-border-subtle">
                  <span className="font-label-sm text-label-sm text-outline text-xs">Two Years Prior (Y-2)</span>
                  <span className="font-headline-sm text-headline-sm text-secondary-container font-bold font-mono-financial">16.7%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">1/6 of days</span>
                </div>
              </div>
            </div>

            <div className="mt-space-md pt-space-md bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm border border-border-subtle/50">
              <span className="material-symbols-outlined text-tax-warning text-[24px] mt-0.5">info</span>
              <div className="flex flex-col font-body-sm text-body-sm text-on-surface">
                <span className="font-semibold text-primary">Closer Connection Exception (Form 8840)</span>
                Even if meeting the 183-day SPT, individuals present under 183 days in the current tax year who maintain tax residency and stronger personal ties to a foreign country can file Form 8840 to retain NRA treatment.
              </div>
            </div>
          </div>

          {/* Green Card & Exempt Individuals */}
          <div className="lg:col-span-5 flex flex-col gap-space-md mt-6 lg:mt-0">
            <div className="bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col gap-space-xs border border-border-subtle">
              <div className="flex items-center gap-space-xs text-primary font-title-md text-title-md font-bold">
                <span className="material-symbols-outlined text-irs-verified text-[22px]">badge</span>
                The Green Card Test
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                If you are a lawful permanent resident at any point in the tax year, you are universally categorized as a US Tax Resident, obligated to report worldwide income unless formal treaty tie-breaker rules apply.
              </p>
            </div>

            <div className="bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-border-subtle">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs text-primary font-title-md text-title-md font-bold">
                  <span className="material-symbols-outlined text-secondary text-[22px]">school</span>
                  Form 8843 Exempt Individuals
                </div>
                <span className="font-label-sm text-label-sm px-2 py-0.5 bg-surface-container-highest rounded text-primary font-semibold text-xs">
                  Exempt From Days
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Days spent under qualifying student and scholar visas are excluded entirely from the Substantial Presence calculation:
              </p>
              <ul className="font-body-sm text-body-sm text-on-surface space-y-1.5 list-none pl-0">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-irs-verified text-[16px]">check_circle</span>
                  <span><strong>F-1 &amp; M-1 Students:</strong> First 5 calendar years exempt from SPT.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-irs-verified text-[16px]">check_circle</span>
                  <span><strong>J-1 Scholars &amp; Researchers:</strong> 2 out of any 6 calendar years exempt.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-irs-verified text-[16px]">check_circle</span>
                  <span><strong>Mandatory Compliance:</strong> Form 8843 required even with $0 US income.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Form 1040 vs. Form 1040-NR Comparison Table */}
      <section className="bg-surface-card py-space-xl shadow-sm w-full border-t border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-space-xs mb-space-lg text-center max-w-3xl mx-auto">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Regulatory Contrast
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              Form 1040 vs. Form 1040-NR Architectural Deep Dive
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Nonresident tax returns are structurally divergent from standard domestic returns. A direct comparative analysis highlights why generic filing software generates severe compliance errors.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border-subtle shadow-sm">
            <table className="w-full text-left bg-surface-card">
              <thead>
                <tr className="bg-surface-canvas font-label-md text-label-md text-primary border-b border-border-subtle">
                  <th className="py-space-md px-space-md font-semibold">Filing Dimension</th>
                  <th className="py-space-md px-space-md font-semibold text-outline">Resident Form 1040</th>
                  <th className="py-space-md px-space-md font-semibold text-secondary">Nonresident Form 1040-NR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle/50 font-body-sm text-body-sm text-on-surface">
                <tr className="hover:bg-surface-canvas/50 transition-colors">
                  <td className="py-space-md px-space-md font-semibold text-primary">Taxable Worldwide Base</td>
                  <td className="py-space-md px-space-md text-on-surface-variant">Worldwide income taxed universally (wages, foreign bank interest, global assets).</td>
                  <td className="py-space-md px-space-md font-medium text-primary bg-secondary/5">Only US-sourced income effectively connected or passive gross receipts.</td>
                </tr>
                <tr className="hover:bg-surface-canvas/50 transition-colors">
                  <td className="py-space-md px-space-md font-semibold text-primary">Standard Deduction</td>
                  <td className="py-space-md px-space-md text-on-surface-variant">Allowed ($14,600 Single / $29,200 MFJ for 2024).</td>
                  <td className="py-space-md px-space-md font-medium text-tax-critical bg-secondary/5">Generally disallowed. Must itemize (Charity/State taxes) unless Indian student treaty Art. 21(2).</td>
                </tr>
                <tr className="hover:bg-surface-canvas/50 transition-colors">
                  <td className="py-space-md px-space-md font-semibold text-primary">Income Classification</td>
                  <td className="py-space-md px-space-md text-on-surface-variant">All income consolidated onto regular progressive tax brackets (10% to 37%).</td>
                  <td className="py-space-md px-space-md font-medium text-primary bg-secondary/5">Bifurcated: ECI at graduated rates; FDAP (dividends, royalties) at flat 30% or reduced treaty rate.</td>
                </tr>
                <tr className="hover:bg-surface-canvas/50 transition-colors">
                  <td className="py-space-md px-space-md font-semibold text-primary">Filing Status Constraints</td>
                  <td className="py-space-md px-space-md text-on-surface-variant">Married Filing Jointly (MFJ), Head of Household (HoH), Single.</td>
                  <td className="py-space-md px-space-md font-medium text-primary bg-secondary/5">Single or Married Filing Separately only. Cannot file jointly without 6013(g)/(h) election.</td>
                </tr>
                <tr className="hover:bg-surface-canvas/50 transition-colors">
                  <td className="py-space-md px-space-md font-semibold text-primary">FICA Exemption</td>
                  <td className="py-space-md px-space-md text-on-surface-variant">Mandatory 7.65% payroll withholding on all compensation.</td>
                  <td className="py-space-md px-space-md font-medium text-irs-verified bg-secondary/5">Statutory exemption for F-1, J-1, M-1, and Q-1 nonresidents under IRC §3121(b)(19).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Target Profiles Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-xl w-full">
        <div className="flex flex-col gap-space-xs mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Targeted Profiles</span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">Who Needs Specialized 1040-NR Guidance</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Every foreign status carries unique tax provisions. Our CPAs and Enrolled Agents construct tailored filings that safeguard legal status and capture all legitimate treaty reductions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-border-subtle">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[28px]">school</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary font-bold">F-1 / M-1 / CPT / OPT</span>
                <h3 className="font-title-md text-title-md font-bold text-primary">International Students</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Handling W-2 wages from on-campus work or post-completion OPT/STEM extensions, 1042-S scholarship exclusions, and recovery of incorrectly withheld FICA taxes.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-canvas rounded p-space-xs text-xs font-mono-financial text-primary border border-border-subtle/50">
              Common Forms: 1040-NR, Form 8843, Form 843 (FICA Refund)
            </div>
          </div>

          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-border-subtle">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-irs-verified">
                <span className="material-symbols-outlined text-[28px]">science</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-irs-verified font-bold">J-1 Visa Holders</span>
                <h3 className="font-title-md text-title-md font-bold text-primary">Scholars, Fellows &amp; Postdocs</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Unlocking bilateral research articles (e.g., US-China Article 19, US-Germany Article 20) allowing tax-free stipends and academic grants up to 24–36 months.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-canvas rounded p-space-xs text-xs font-mono-financial text-primary border border-border-subtle/50">
              Key Schedules: Schedule OI (Other Info), 1042-S Match
            </div>
          </div>

          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-border-subtle">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary-container">
                <span className="material-symbols-outlined text-[28px]">work</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary-container font-bold">H-1B, L-1, O-1, TN</span>
                <h3 className="font-title-md text-title-md font-bold text-primary">Dual-Status Transition Filers</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Managing years of arrival or departure. We author Dual-Status statements merging 1040 and 1040-NR to avoid taxing non-US income earned prior to US residency start date.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-canvas rounded p-space-xs text-xs font-mono-financial text-primary border border-border-subtle/50">
              Dual-Status Split + First-Year Choice Election (IRC 7701)
            </div>
          </div>

          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-border-subtle">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">domain</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-primary font-bold">FIRPTA &amp; Rental Properties</span>
                <h3 className="font-title-md text-title-md font-bold text-primary">Foreign Real Estate Owners</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Making IRC §871(d) Net Basis elections to deduct mortgage interest and depreciation against rental revenue instead of absorbing a mandatory 30% gross withholding.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-canvas rounded p-space-xs text-xs font-mono-financial text-primary border border-border-subtle/50">
              Form 1040-NR Schedule E + FIRPTA Form 8288-B Withholding Cert
            </div>
          </div>

          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-border-subtle">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[28px]">trending_up</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary font-bold">Stocks, RSUs &amp; Crypto</span>
                <h3 className="font-title-md text-title-md font-bold text-primary">Foreign Passive Investors</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Capital gains earned by NRAs present in the US under 183 days are generally 0% US tax-free. We calibrate 1099-B and 1042-S reconciliations to reclaim excessive withholdings.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-canvas rounded p-space-xs text-xs font-mono-financial text-primary border border-border-subtle/50">
              IRC §865(a) Nonresident Sourcing Rules Applied
            </div>
          </div>

          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-border-subtle">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-irs-verified">
                <span className="material-symbols-outlined text-[28px]">storefront</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-irs-verified font-bold">US LLC &amp; C-Corp</span>
                <h3 className="font-title-md text-title-md font-bold text-primary">Nonresident Founders</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Mandatory Form 5472 disclosures for foreign-owned single-member LLCs (IRC §6038A). Non-filing incurs severe statutory $25,000 penalties per year.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-canvas rounded p-space-xs text-xs font-mono-financial text-primary border border-border-subtle/50">
              Form 1120 + Form 5472 Mandatory Foreign Disclosures
            </div>
          </div>
        </div>
      </section>

      {/* CAA ITIN Section */}
      <section className="w-full py-space-xl bg-surface-card border-t border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-canvas p-space-xl rounded-2xl border border-border-subtle grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold uppercase">
                <span className="material-symbols-outlined text-sm">badge</span>
                IRS Certifying Acceptance Agent (CAA)
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                Obtain an ITIN Without Mailing Your Original Passport
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                As an authorized IRS CAA, Bright Tax Filings verifies your identity documents in person or via approved secure video protocols. We issue a formal Certificate of Accuracy (Form W-7 COA), eliminating the risk of losing original passports in government mail.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span className="material-symbols-outlined text-irs-verified text-sm">check_circle</span>
                  Spouse &amp; Dependent ITINs
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span className="material-symbols-outlined text-irs-verified text-sm">check_circle</span>
                  Treaty Benefit ITINs
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span className="material-symbols-outlined text-irs-verified text-sm">check_circle</span>
                  Zero Postal Risk
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right mt-6 lg:mt-0">
              <Link
                to="/book-a-consultation"
                className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-4 rounded-lg font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>Schedule CAA Verification</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-space-xl bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline-lg text-headline-lg text-surface-card font-bold mb-4">
            Protect Your Nonresident US Tax Status
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8">
            Ensure 100% adherence to IRC rules, claim bilateral tax treaty articles, and safeguard your future US immigration or green card trajectory.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-a-consultation"
              className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3.5 rounded-lg font-semibold shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Book Nonresident Consultation</span>
              <span className="material-symbols-outlined text-sm">calendar_today</span>
            </Link>
            <Link
              to="/contact-us"
              className="bg-surface-card/10 hover:bg-surface-card/20 text-surface-card px-6 py-3.5 rounded-lg font-semibold transition-all border border-surface-card/20"
            >
              <span>Inquire About Form 8843</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

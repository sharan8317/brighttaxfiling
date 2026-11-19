import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function IndividualTaxPreparation() {
  const [checkedItems, setCheckedItems] = useState({
    ssn: true,
    id: true,
    w2: true,
    mortgage: true,
    prior: true
  })

  const toggleCheck = (key) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-surface-container-high/40 via-surface to-surface-canvas overflow-hidden py-space-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-space-md text-on-surface-variant font-label-md text-label-md">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>chevron_right</span>
            <span className="text-on-surface-variant">Services</span>
            <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>chevron_right</span>
            <span className="text-secondary font-semibold">Individual Tax Preparation</span>
          </nav>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 w-fit">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>verified_user</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                  INDIVIDUAL TAX SERVICES
                </span>
              </div>

              <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-bold">
                Accurate, Stress-Free Individual Tax Preparation
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Maximize your deductions and file with confidence under the guidance of licensed CPAs and Enrolled Agents. Rigorous IRS compliance tailored to your financial life.
              </p>

              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <Link
                  to="/book-a-consultation"
                  className="bg-secondary hover:bg-secondary-container text-on-secondary px-6 py-3 rounded-lg font-label-md text-label-md transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 font-semibold"
                >
                  <span>Start Individual Tax Filing</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </Link>

                <a
                  href="#documents-checklist"
                  className="bg-surface-card hover:bg-surface-container-low text-primary px-6 py-3 rounded-lg font-label-md text-label-md transition-colors shadow-sm inline-flex items-center gap-2 border border-border-subtle font-semibold"
                >
                  <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px' }}>description</span>
                  <span>View Required Documents</span>
                </a>
              </div>

              {/* Trust Badges Under Hero */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm text-on-surface-variant text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-irs-verified" style={{ fontVariationSettings: "'FILL' 1", fontSize: '18px' }}>check_circle</span>
                  <span className="font-label-sm text-label-sm font-semibold">IRS Authorized e-file Provider</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-irs-verified" style={{ fontVariationSettings: "'FILL' 1", fontSize: '18px' }}>check_circle</span>
                  <span className="font-label-sm text-label-sm font-semibold">Licensed CPAs &amp; Enrolled Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-irs-verified" style={{ fontVariationSettings: "'FILL' 1", fontSize: '18px' }}>check_circle</span>
                  <span className="font-label-sm text-label-sm font-semibold">100% Accuracy Guarantee</span>
                </div>
              </div>
            </div>

            {/* Hero Visual / Diagnostic Graphic */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative bg-surface-card rounded-xl p-space-lg shadow-xl overflow-hidden border border-border-subtle">
                <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low p-space-sm rounded-lg">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary">account_balance</span>
                    <div>
                      <div className="font-title-md text-title-md text-primary leading-tight font-bold">Form 1040 Diagnostic</div>
                      <div className="font-label-sm text-label-sm text-outline">U.S. Individual Income Tax Return</div>
                    </div>
                  </div>
                  <span className="bg-irs-verified text-white px-2 py-0.5 rounded text-xs font-label-sm font-semibold">IRS Compliant</span>
                </div>

                {/* Tax Summary Ledger Simulation */}
                <div className="space-y-space-xs font-mono-financial text-mono-financial text-sm">
                  <div className="flex justify-between items-center py-2 px-2.5 rounded hover:bg-surface-container-low transition-colors">
                    <span className="text-on-surface-variant">Gross Adjusted Income (AGI)</span>
                    <span className="text-primary font-bold">$184,500.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-2.5 rounded bg-surface-container-low/60">
                    <span className="text-on-surface-variant">Itemized &amp; SALT Deductions</span>
                    <span className="text-irs-verified font-bold">-$29,200.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-2.5 rounded hover:bg-surface-container-low transition-colors">
                    <span className="text-on-surface-variant">Above-The-Line Pre-Tax (HSA/IRA)</span>
                    <span className="text-irs-verified font-bold">-$8,300.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-2.5 rounded hover:bg-surface-container-low transition-colors">
                    <span className="text-on-surface-variant">Qualified Child &amp; EV Tax Credits</span>
                    <span className="text-secondary font-bold">-$4,000.00</span>
                  </div>

                  <div className="pt-2 mt-2 bg-surface-container p-3 rounded-lg flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase text-outline font-semibold text-xs">Calculated Safe Harbor Tax</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight text-xl">$21,490.00</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-irs-verified inline-flex items-center gap-1 bg-irs-verified/10 px-2 py-0.5 rounded">
                        <span className="material-symbols-outlined text-xs">savings</span> $6,140 Saved
                      </span>
                      <div className="text-outline text-xs mt-0.5">vs. generic software</div>
                    </div>
                  </div>
                </div>

                <div className="mt-space-md pt-space-xs flex items-center justify-between text-xs text-on-surface-variant border-t border-border-subtle/50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px' }}>verified</span>
                    <span>Reviewed by Senior Enrolled Agent</span>
                  </div>
                  <span className="text-outline font-mono-financial">Code §230 Verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT INDIVIDUAL TAX PREPARATION MEANS */}
      <section className="w-full py-space-xl bg-surface-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 space-y-space-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Regulatory Rigor &amp; Strategy
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                More Than Just Entering Numbers in Boxes
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Individual tax preparation is the comprehensive legal and financial synthesis of your entire calendar year. At Bright Tax Filings, we don’t merely transfer numbers onto Form 1040—we cross-examine complex tax code regulations to minimize your ongoing federal and multi-state tax liabilities while shielding you from punitive IRS audits.
              </p>
              
              <div className="space-y-space-sm pt-space-xs">
                <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-card shadow-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-secondary mt-0.5">policy</span>
                  <div>
                    <h4 className="font-title-md text-title-md text-primary font-bold">Federal Form 1040 Precision</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Accurate reporting across all supplementary schedules (Schedule A, B, C, D, and E) ensuring zero discrepancy flags with IRS master file records.</p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-card shadow-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-secondary mt-0.5">map</span>
                  <div>
                    <h4 className="font-title-md text-title-md text-primary font-bold">Multi-State Apportionment</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Proper allocation for remote employment, multi-jurisdiction residency, and non-resident income sourcing to prevent double taxation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-card shadow-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-irs-verified mt-0.5">search_insights</span>
                  <div>
                    <h4 className="font-title-md text-title-md text-primary font-bold">Unclaimed Credit Discovery</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Systematic auditing for high-value tax offsets, clean vehicle credits, residential clean energy provisions, and phase-out safe harbors.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="relative bg-surface-card p-space-lg rounded-xl shadow-md overflow-hidden border border-border-subtle">
                <div className="bg-primary p-6 rounded-lg text-white text-center mb-space-md">
                  <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-2">fact_check</span>
                  <div className="font-title-md text-title-md font-bold">Certified Dual-Tier Audit</div>
                  <div className="text-xs text-primary-fixed-dim/80 mt-1">Every Form 1040 verified by two independent licensed professionals</div>
                </div>

                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="bg-surface-container-low p-space-sm rounded-lg text-center">
                    <div className="font-display-lg text-headline-lg text-primary font-bold font-mono-financial">99.8%</div>
                    <div className="font-label-md text-label-md text-on-surface-variant text-xs">First-Pass Acceptance</div>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded-lg text-center">
                    <div className="font-display-lg text-headline-lg text-irs-verified font-bold font-mono-financial">$3,850+</div>
                    <div className="font-label-md text-label-md text-on-surface-variant text-xs">Average Deductions Uncovered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO NEEDS TO FILE */}
      <section className="w-full py-space-xl bg-surface border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Diverse Tax Profiles</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1 font-bold">Who Needs Professional Tax Filing?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              From straightforward salary professionals to complex multi-tier investment portfolios, our CPAs deliver bespoke strategies for every individual tax situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>badge</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">W-2 Wage Earners</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Salaried employees with employer benefits, stock vesting (RSUs/ESPP), 401(k) contributions, and multi-state relocation wages requiring precise withholding reconciliation.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-xs font-mono-financial text-outline uppercase font-semibold border-t border-border-subtle/50">
                Schedule A &amp; Form 1040
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>engineering</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">1099 Contractors &amp; Freelancers</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Self-employed professionals seeking to optimize Schedule C business deductions, quarterly estimated taxes, SE tax deductions, and solo 401(k)/SEP-IRA shelter limits.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-xs font-mono-financial text-outline uppercase font-semibold border-t border-border-subtle/50">
                Schedule C &amp; SE Tax Form
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>trending_up</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">High-Net-Worth &amp; Stock Investors</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Individuals with extensive capital asset disposals, complex wash sales, cryptocurrency swaps, foreign dividend accounts, and Net Investment Income Tax (NIIT) exposure.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-xs font-mono-financial text-outline uppercase font-semibold border-t border-border-subtle/50">
                Schedule D &amp; Form 8949
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>real_estate_agent</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">Real Estate Property Owners</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Landlords and property investors navigating passive activity loss limitations, cost segregation, residential depreciation recapture, and 1031 exchange declarations.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-xs font-mono-financial text-outline uppercase font-semibold border-t border-border-subtle/50">
                Schedule E &amp; Form 4562
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>family_restroom</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">Dual-Income Households</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Families managing child tax credits, daycare flex accounts, education savings plans (529 plans), and strategic decisions between Married Filing Jointly vs. Separately.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-xs font-mono-financial text-outline uppercase font-semibold border-t border-border-subtle/50">
                Filing Status Optimization
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>public</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">Expatriates &amp; Dual Tax Residents</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  US citizens residing abroad or non-citizen domestic workers requiring Foreign Earned Income Exclusion (Form 2555), foreign tax credits (Form 1116), and treaty analysis.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-xs font-mono-financial text-outline uppercase font-semibold border-t border-border-subtle/50">
                International Compliance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS CHECKLIST */}
      <section className="w-full py-space-xl bg-surface-canvas border-b border-border-subtle" id="documents-checklist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Client Preparation</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1 font-bold">Required Documents Checklist</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Gather your materials ahead of time for accelerated processing. You can upload digital scans or high-resolution photos through our 256-bit encrypted client portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Checklist 1 */}
            <div className="bg-surface-card p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center gap-2 pb-space-sm mb-space-sm bg-surface-container-low p-2 rounded-lg">
                  <span className="material-symbols-outlined text-secondary">badge</span>
                  <h3 className="font-title-md text-title-md text-primary font-bold">1. Identification</h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Required for all filers, spouses, and dependents:</p>
                <div className="space-y-2 font-body-sm">
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.ssn}
                      onChange={() => toggleCheck('ssn')}
                      className="mt-1 rounded text-secondary focus:ring-secondary"
                    />
                    <span>Social Security Cards or ITIN assignment letters</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.id}
                      onChange={() => toggleCheck('id')}
                      className="mt-1 rounded text-secondary focus:ring-secondary"
                    />
                    <span>Valid state Driver&apos;s License or Passport</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Identity Protection PIN (IRS IP PIN) if assigned</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Bank routing and account details for direct deposit</span>
                  </label>
                </div>
              </div>
              <div className="mt-space-md text-xs font-label-sm text-outline border-t border-border-subtle/50 pt-2">
                IRS identity authentication standard
              </div>
            </div>

            {/* Checklist 2 */}
            <div className="bg-surface-card p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center gap-2 pb-space-sm mb-space-sm bg-surface-container-low p-2 rounded-lg">
                  <span className="material-symbols-outlined text-secondary">receipt_long</span>
                  <h3 className="font-title-md text-title-md text-primary font-bold">2. Income Records</h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Forms reporting federal and state revenue:</p>
                <div className="space-y-2 font-body-sm">
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.w2}
                      onChange={() => toggleCheck('w2')}
                      className="mt-1 rounded text-secondary focus:ring-secondary"
                    />
                    <span>Form W-2 from each active employer</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Form 1099-NEC &amp; 1099-K (Contracting &amp; gig revenue)</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Form 1099-INT / 1099-DIV (Bank interest &amp; brokerage)</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Form 1099-B (Consolidated stock &amp; asset sales)</span>
                  </label>
                </div>
              </div>
              <div className="mt-space-md text-xs font-label-sm text-outline border-t border-border-subtle/50 pt-2">
                Consolidated statements accepted
              </div>
            </div>

            {/* Checklist 3 */}
            <div className="bg-surface-card p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center gap-2 pb-space-sm mb-space-sm bg-surface-container-low p-2 rounded-lg">
                  <span className="material-symbols-outlined text-irs-verified">price_check</span>
                  <h3 className="font-title-md text-title-md text-primary font-bold">3. Deductions</h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Records to justify itemized schedules and credits:</p>
                <div className="space-y-2 font-body-sm">
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.mortgage}
                      onChange={() => toggleCheck('mortgage')}
                      className="mt-1 rounded text-secondary focus:ring-secondary"
                    />
                    <span>Form 1098 Mortgage Interest &amp; points statement</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Real estate and local property tax payment slips</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Charitable donation acknowledgment letters</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Form 1098-E (Student Loan) or 1098-T (Tuition)</span>
                  </label>
                </div>
              </div>
              <div className="mt-space-md text-xs font-label-sm text-outline border-t border-border-subtle/50 pt-2">
                Substantiated proof prevents future audits
              </div>
            </div>

            {/* Checklist 4 */}
            <div className="bg-surface-card p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center gap-2 pb-space-sm mb-space-sm bg-surface-container-low p-2 rounded-lg">
                  <span className="material-symbols-outlined text-secondary">history_edu</span>
                  <h3 className="font-title-md text-title-md text-primary font-bold">4. Prior Returns</h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Required for baseline carryovers and e-file verification:</p>
                <div className="space-y-2 font-body-sm">
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.prior}
                      onChange={() => toggleCheck('prior')}
                      className="mt-1 rounded text-secondary focus:ring-secondary"
                    />
                    <span>Prior year Form 1040 (Federal &amp; State copies)</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Prior Year Adjusted Gross Income (AGI) verification</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Capital loss carryforward schedule from prior return</span>
                  </label>
                  <label className="flex items-start gap-2 p-2 rounded hover:bg-surface-canvas cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-secondary focus:ring-secondary" />
                    <span>Depreciation schedules for existing rental real estate</span>
                  </label>
                </div>
              </div>
              <div className="mt-space-md text-xs font-label-sm text-outline border-t border-border-subtle/50 pt-2">
                Enables comprehensive 3-year lookback audits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-space-xl bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline-lg text-headline-lg text-surface-card font-bold mb-4">
            File Your 1040 with Guaranteed Accuracy
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8">
            Let licensed Enrolled Agents and CPAs handle your deductions, schedules, and state filings with total transparency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-a-consultation"
              className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3.5 rounded-lg font-semibold shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Book Individual Consultation</span>
              <span className="material-symbols-outlined text-sm">calendar_today</span>
            </Link>
            <Link
              to="/contact-us"
              className="bg-surface-card/10 hover:bg-surface-card/20 text-surface-card px-6 py-3.5 rounded-lg font-semibold transition-all border border-surface-card/20"
            >
              <span>Ask a Specific Question</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

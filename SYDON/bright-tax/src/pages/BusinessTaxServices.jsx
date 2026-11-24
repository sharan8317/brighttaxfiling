import { Link } from 'react-router-dom'

export default function BusinessTaxServices() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Top Context & Hero Area */}
      <section className="relative w-full bg-primary overflow-hidden text-on-primary">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-secondary-container/15 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-space-xl pb-24 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-space-lg text-outline-variant font-body-sm text-body-sm">
            <Link to="/" className="hover:text-surface-card transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="hover:text-surface-card transition-colors">Services</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-surface-card font-semibold">Business Tax Services</span>
          </nav>

          {/* Grid Layout for Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-card/10 backdrop-blur-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-irs-verified"></span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-surface-variant text-xs">
                  COMMERCIAL &amp; ENTERPRISE TAX SOLUTIONS
                </span>
              </div>

              <h1 className="font-display-lg text-display-lg font-bold tracking-tight text-surface-card max-w-2xl">
                Strategic Business Tax Preparation &amp; Corporate Advisory
              </h1>

              <p className="font-body-lg text-body-lg text-surface-container-high max-w-xl leading-relaxed">
                From startups and single-member LLCs to multi-state S-Corporations and Partnerships, we ensure rigorous compliance while optimizing enterprise tax efficiency through strategic entity architecture.
              </p>

              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <Link
                  to="/contact-us"
                  className="bg-secondary hover:bg-secondary-container text-on-secondary px-6 py-3.5 rounded-lg font-label-md text-label-md transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 font-semibold"
                >
                  <span>Discuss Your Business Taxes</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>

                <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-surface-card/5 backdrop-blur-sm border border-white/10">
                  <span className="material-symbols-outlined text-irs-verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-semibold text-surface-card">Authorized IRS e-File Provider</span>
                    <span className="font-body-sm text-body-sm text-surface-variant text-xs">Corporate &amp; Multi-Entity Accreditations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Intelligence Terminal Graphic */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="w-full bg-primary-container rounded-xl p-space-lg shadow-xl relative overflow-hidden border border-white/10">
                <div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-card/5 px-3 py-2 rounded">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-irs-verified animate-pulse"></span>
                    <span className="font-mono-financial text-mono-financial text-surface-card text-xs">Corporate Tax Diagnostic 2024-2025</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-surface-variant uppercase text-[10px]">IRC COMPLIANT</span>
                </div>

                <div className="space-y-3 font-mono-financial text-mono-financial text-sm">
                  <div className="flex justify-between items-center py-2 px-3 bg-surface-card/5 rounded">
                    <span className="text-surface-variant">Form 1120-S / Schedule K-1</span>
                    <span className="text-surface-card font-semibold">Active Filing</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-surface-card/5 rounded">
                    <span className="text-surface-variant">Sec. 179 CapEx Optimization</span>
                    <span className="text-irs-verified font-bold">+ $1,220,000 Cap</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-surface-card/5 rounded">
                    <span className="text-surface-variant">QBI Deduction (Sec. 199A)</span>
                    <span className="text-surface-card">Up to 20% Pass-Through</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-surface-card/5 rounded">
                    <span className="text-surface-variant">Multi-State Nexus Assessment</span>
                    <span className="text-surface-card">38 Jurisdictions Cleared</span>
                  </div>
                </div>

                <div className="mt-space-md pt-space-sm bg-surface-card/5 p-3 rounded">
                  <div className="flex justify-between text-surface-variant font-label-sm text-label-sm mb-2 text-xs">
                    <span>Enterprise Effective Tax Variance</span>
                    <span className="text-irs-verified font-bold">-7.4% Post-Advisory</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-secondary w-3/4 h-full rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Business Entity Filing Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-xl w-full">
        <div className="flex flex-col mb-space-xl">
          <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase tracking-wider mb-2 font-bold">
            <span className="material-symbols-outlined text-[18px]">account_balance</span>
            <span>Entity Structure Specialization</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
            Tailored Business Entity Filing Capabilities
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2">
            Every corporate structure carries distinct statutory requirements, tax schedules, and owner liability limits. Our CPAs and Enrolled Agents construct ironclad federal and state submissions calibrated for audit protection.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* S-Corporation Featured Card */}
          <div className="lg:col-span-2 bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden border border-border-subtle">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md mb-space-md bg-surface-container-low p-4 rounded-lg">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-semibold mb-1 text-xs">
                  High Volume
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">S-Corporation Tax Filing</h3>
              </div>
              <div className="font-mono-financial text-mono-financial bg-surface-card px-3 py-1.5 rounded text-primary font-semibold shadow-sm text-sm border border-border-subtle">
                Form 1120-S &amp; Schedule K-1
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
              Avoid self-employment tax drag while defending corporate integrity. We perform rigorous reasonable shareholder compensation studies, calculate taxable distribution thresholds, and structure basis limitations according to strict IRS guidelines.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
              <div className="bg-surface-canvas p-space-sm rounded-lg border border-border-subtle/50">
                <span className="font-label-sm text-label-sm text-outline uppercase block text-xs">Shareholder Output</span>
                <span className="font-title-md text-title-md text-primary font-bold">Schedule K-1</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-xs">Direct flow to individual 1040s with basis logs.</p>
              </div>
              <div className="bg-surface-canvas p-space-sm rounded-lg border border-border-subtle/50">
                <span className="font-label-sm text-label-sm text-outline uppercase block text-xs">Executive Audit Shield</span>
                <span className="font-title-md text-title-md text-primary font-bold">RC Benchmark</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-xs">RCReports analytical defense data.</p>
              </div>
              <div className="bg-surface-canvas p-space-sm rounded-lg border border-border-subtle/50">
                <span className="font-label-sm text-label-sm text-outline uppercase block text-xs">Statutory Due Date</span>
                <span className="font-title-md text-title-md text-secondary font-bold">March 15</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-xs">Automatic 6-month extension handling (Form 7004).</p>
              </div>
            </div>
          </div>

          {/* C-Corporation */}
          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-mono-financial text-mono-financial bg-primary text-on-primary px-2.5 py-1 rounded text-xs">Form 1120</span>
                <span className="material-symbols-outlined text-outline">apartment</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">C-Corporation Returns</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed text-sm">
                Full compliance for venture-backed entities and institutional corporations. Meticulous treatment of the 21% flat corporate tax rate, Accumulated Earnings Tax assessments, and Section 382 net operating loss limitations.
              </p>
            </div>
            <div className="p-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface text-xs">
              Includes comprehensive Schedules M-1 and M-3 book-to-tax reconciliations.
            </div>
          </div>

          {/* Partnership & Multi-Member LLCs */}
          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-mono-financial text-mono-financial bg-surface-container-high text-primary px-2.5 py-1 rounded font-semibold text-xs">Form 1065</span>
                <span className="material-symbols-outlined text-outline">group</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">Partnerships &amp; Multi-Member LLCs</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed text-sm">
                Specialized multi-partner allocations under IRC Section 704(b). Precise partner capital account maintenance on the tax basis methodology mandated by the IRS.
              </p>
            </div>
            <div className="p-3 bg-surface-canvas rounded-lg flex items-center justify-between font-label-md text-label-md text-primary text-xs">
              <span>Schedule K-1 &amp; K-3 Filings</span>
              <span className="material-symbols-outlined text-irs-verified text-sm">check_circle</span>
            </div>
          </div>

          {/* Single-Member LLCs */}
          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-mono-financial text-mono-financial bg-surface-container-high text-primary px-2.5 py-1 rounded font-semibold text-xs">Schedule C</span>
                <span className="material-symbols-outlined text-outline">person_outline</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">Single-Member LLCs</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed text-sm">
                Disregarded entity structuring that maximizes everyday operational deductions while maintaining clear demarcation between personal and enterprise accounts.
              </p>
            </div>
            <div className="p-3 bg-surface-canvas rounded-lg flex items-center justify-between font-label-md text-label-md text-primary text-xs">
              <span>Direct Pass-Through Integration</span>
              <span className="material-symbols-outlined text-irs-verified text-sm">check_circle</span>
            </div>
          </div>

          {/* Self-Employed & Freelancers */}
          <div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-border-subtle">
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-mono-financial text-mono-financial bg-surface-container-high text-primary px-2.5 py-1 rounded font-semibold text-xs">Schedule SE</span>
                <span className="material-symbols-outlined text-outline">work_outline</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">Self-Employed &amp; Freelancers</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed text-sm">
                Full defense against punitive self-employment taxes (15.3% Social Security and Medicare) through legitimate health insurance write-offs and solo 401(k) sheltering.
              </p>
            </div>
            <div className="p-3 bg-surface-canvas rounded-lg flex items-center justify-between font-label-md text-label-md text-primary text-xs">
              <span>Safe Harbor Estimation Models</span>
              <span className="material-symbols-outlined text-irs-verified text-sm">check_circle</span>
            </div>
          </div>
        </div>
      </section>

      {/* Deductions & Optimization Strategy */}
      <section className="w-full bg-surface-card py-space-xl border-t border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase tracking-wider font-bold">
                <span className="material-symbols-outlined text-[18px]">query_stats</span>
                <span>Tax Arbitrage &amp; Code Compliance</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Aggressive, Fully Substantiated Business Deductions
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                True tax savings do not happen during annual tax preparation; they happen through proactive structural planning. We analyze your commercial investments to exploit statutory incentives before year-end.
              </p>
              <div className="p-space-lg rounded-xl bg-surface-canvas mt-space-sm space-y-3 border border-border-subtle">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">verified</span>
                  <div>
                    <h4 className="font-title-md text-title-md font-semibold text-primary">Circular 230 Certified Defensibility</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Every deduction, depreciation tier, and credit is backed by IRS revenue codes and formal workpaper documentation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">balance</span>
                  <div>
                    <h4 className="font-title-md text-title-md font-semibold text-primary">GAAP to Tax Reconciliations</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Clean transition between accrual accounting statements and cash-basis filing returns.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md mt-8 lg:mt-0">
              <div className="p-space-md rounded-xl bg-surface-canvas border border-border-subtle hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined">precision_manufacturing</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-primary">Section 179 Expense Deduction</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Deduct 100% of the purchase price of qualifying equipment, heavy vehicles, and software up to statutory annual caps within the year acquired.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-canvas border border-border-subtle hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined">trending_down</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-primary">Bonus Depreciation Schedule</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Accelerate asset depreciation on commercial property and machinery under Phase-down TCJA rules to substantially diminish immediate year taxable income.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-canvas border border-border-subtle hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined">pie_chart</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-primary">Section 199A QBI Deduction</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Up to 20% federal deduction for eligible pass-through entities (LLCs, Sole Proprietors, S-Corps) with wage-and-property threshold navigations.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-canvas border border-border-subtle hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined">biotech</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-primary">R&amp;D Tax Credits (Form 6765)</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Dollar-for-dollar tax credits for domestic software engineering, process prototyping, and technical design expenses. Offset payroll taxes for startups.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-canvas border border-border-subtle hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined">desk</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-primary">Substantiated Home Office</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Rigorous simplified or regular actual expense allocation models satisfying strict IRS exclusive-and-regular commercial use requirements.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-canvas border border-border-subtle hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined">directions_car</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-primary">Fleet &amp; Business Mileage</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Strategic election between standard statutory mileage rates versus actual operational expense depreciation for commercial automotive assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-space-xl bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline-lg text-headline-lg text-surface-card font-bold mb-4">
            Transform Your Enterprise Tax Architecture
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8">
            Schedule an executive review with our senior corporate tax specialists to identify uncaptured deductions and safeguard corporate entity integrity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3.5 rounded-lg font-semibold shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Contact Our Business Tax Team</span>
              <span className="material-symbols-outlined text-sm">calendar_today</span>
            </Link>
            <Link
              to="/contact-us"
              className="bg-surface-card/10 hover:bg-surface-card/20 text-surface-card px-6 py-3.5 rounded-lg font-semibold transition-all border border-surface-card/20"
            >
              <span>Contact Business Advisory</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

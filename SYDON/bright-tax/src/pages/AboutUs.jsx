import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-surface-card to-surface-canvas py-space-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-space-md">
            <Link to="/" className="font-label-sm text-label-sm text-outline hover:text-secondary transition-colors inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">home</span>
              Home
            </Link>
            <span className="text-outline text-label-sm">/</span>
            <span aria-current="page" className="font-label-sm text-label-sm text-secondary font-semibold">
              About Us
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded-full mb-space-md">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                WHO WE ARE
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary tracking-tight mb-space-md font-bold">
              Making Tax Filing Simple and Stress-Free
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Bridging financial complexity and peace of mind through certified US tax expertise, transparent guidance, and cutting-edge security.
            </p>
          </div>

          {/* Quick Proof Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-xl pt-space-lg bg-surface-card rounded-xl p-space-lg shadow-sm border border-border-subtle">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary font-bold font-mono-financial">100%</span>
              <span className="font-label-md text-label-md text-on-surface font-medium">IRS Circular 230</span>
              <span className="font-body-sm text-body-sm text-outline">Compliant practitioners</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-secondary font-bold font-mono-financial">50 States</span>
              <span className="font-label-md text-label-md text-on-surface font-medium">Multi-Jurisdiction</span>
              <span className="font-body-sm text-body-sm text-outline">Comprehensive state filing</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-irs-verified font-bold font-mono-financial">Dual-Tier</span>
              <span className="font-label-md text-label-md text-on-surface font-medium">CPA Review Protocol</span>
              <span className="font-body-sm text-body-sm text-outline">Every return audited internally</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary font-bold font-mono-financial">365 Days</span>
              <span className="font-label-md text-label-md text-on-surface font-medium">Continuous Advisory</span>
              <span className="font-body-sm text-body-sm text-outline">Year-round strategic access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview & Story */}
      <section className="w-full py-space-xl bg-surface-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            
            {/* Editorial Narrative Left */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Our Foundation</span>
                <span className="w-8 h-[2px] bg-secondary"></span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                Built on Rigor, Guided by Modern Empathy
              </h2>
              <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  Bright Tax Filing was established with an unambiguous premise: standard tax preparation had grown detached, opaque, and unnecessarily stressful for clients navigating an increasingly intricate statutory climate.
                </p>
                <p>
                  We assembled a multidisciplinary bench of Certified Public Accountants, IRS Enrolled Agents, and international tax attorneys committed to proactive stewardship. Rather than treating taxes as an annual administrative sprint, we architect durable tax positions that honor statutory accuracy while uncovering lawful planning opportunities.
                </p>
                <p>
                  Whether counseling domestic entrepreneurs, high-net-worth families, expatriates dealing with treaty complexities, or non-resident enterprise owners, our team approaches every schedule with the precision of a forensic auditor and the accessibility of a dedicated financial partner.
                </p>
              </div>

              <div className="pt-space-sm flex flex-wrap gap-space-md items-center">
                <div className="bg-surface-card px-space-md py-space-sm rounded-lg shadow-sm flex items-center gap-space-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-secondary text-[28px]">verified</span>
                  <div>
                    <div className="font-label-md text-label-md text-primary font-semibold">Authorized IRS e-File Provider</div>
                    <div className="font-body-sm text-body-sm text-outline">Secure federal electronic gateway</div>
                  </div>
                </div>

                <div className="bg-surface-card px-space-md py-space-sm rounded-lg shadow-sm flex items-center gap-space-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-irs-verified text-[28px]">shield</span>
                  <div>
                    <div className="font-label-md text-label-md text-primary font-semibold">FBAR &amp; FATCA Specialist</div>
                    <div className="font-body-sm text-body-sm text-outline">FinCEN Form 114 certified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team & Lead CPA Composition Right */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative bg-surface-card p-space-md rounded-xl shadow-md border border-border-subtle">
                <div className="relative overflow-hidden rounded-lg aspect-square mb-space-md bg-primary-container flex items-center justify-center text-white">
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-3xl font-bold font-mono-financial shadow-lg mb-4">
                      MV
                    </div>
                    <div className="font-title-md text-title-md text-surface-card font-bold">Marcus Vance, CPA</div>
                    <div className="font-label-sm text-label-sm text-secondary-fixed">Principal Advisor &amp; Managing Director</div>
                    <div className="mt-2 text-xs text-primary-fixed-dim/80 max-w-xs">
                      Former Big 4 Senior Manager &bull; 16+ Years Specializing in Dual-Status &amp; Corporate Restructuring
                    </div>
                  </div>
                </div>

                <div className="p-space-xs flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-body-sm font-body-sm py-1 border-b border-border-subtle/50">
                    <span className="text-outline">Accreditation</span>
                    <span className="text-primary font-semibold">Licensed US CPA &bull; NY &amp; DC</span>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm py-1 border-b border-border-subtle/50">
                    <span className="text-outline">IRS Representation</span>
                    <span className="text-primary font-semibold">Unlimited Practice Rights (Cir. 230)</span>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm py-1">
                    <span className="text-outline">Practice Focus</span>
                    <span className="text-primary font-semibold">Cross-Border &amp; Business Filings</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-space-xl bg-surface-card border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Purpose &amp; Horizon
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs font-bold">
              Guided by Principles That Safeguard Your Future
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Mission Card */}
            <div className="bg-primary-container text-on-primary rounded-xl p-space-xl relative overflow-hidden shadow-md">
              <div className="inline-flex p-space-sm rounded-lg bg-primary mb-space-md text-secondary-fixed">
                <span className="material-symbols-outlined text-[32px]">flag</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block mb-2 font-bold">
                Our Mission
              </span>
              <h3 className="font-headline-sm text-headline-sm text-surface-card mb-space-sm leading-snug font-bold">
                Precision, Compliance, and Calculated Optimization
              </h3>
              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                &ldquo;To empower taxpayers and business leaders with meticulous, proactive tax solutions that ensure full IRS compliance while optimizing financial outcomes.&rdquo;
              </p>
              <div className="mt-space-lg pt-space-md border-t border-primary/40 flex items-center gap-3">
                <span className="material-symbols-outlined text-irs-verified text-[20px]">check_circle</span>
                <span className="font-body-sm text-body-sm text-surface-card">Every deduction grounded in authoritative code</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-surface-canvas text-on-surface rounded-xl p-space-xl relative overflow-hidden shadow-sm border border-border-subtle">
              <div className="inline-flex p-space-sm rounded-lg bg-surface-container text-secondary mb-space-md">
                <span className="material-symbols-outlined text-[32px]">visibility</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-2">
                Our Vision
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm leading-snug font-bold">
                Setting the Benchmark for Advisory Rigor
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                &ldquo;To be the most trusted cross-border and domestic tax advisory firm recognized for human-centric service and technical precision.&rdquo;
              </p>
              <div className="mt-space-lg pt-space-md border-t border-border-subtle flex items-center gap-3">
                <span className="material-symbols-outlined text-irs-verified text-[20px]">check_circle</span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">Transforming complex filings into predictable roadmaps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-space-xl bg-surface-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Operating Framework</span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs font-bold">
                Core Values That Dictate Every Engagement
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Zero shortcuts, unyielding ethics, and an absolute commitment to protecting our clients from exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">balance</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">
                  Uncompromising Integrity &amp; Ethics
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We stand strictly behind Circular 230 guidelines. We defend positions with documented legal precedents, maintaining an unblemished record with regulatory authorities.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-border-subtle/50">
                <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wide">01 &bull; STANDARD</span>
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">menu_book</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">
                  Technical Mastery &amp; IRS Education
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Tax law evolves continuously. Our specialists complete over 60 hours of annual advanced continuing education across federal reforms, state apportionment, and treaties.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-border-subtle/50">
                <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wide">02 &bull; PROFICIENCY</span>
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">forum</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">
                  Transparent &amp; Client-First Dialog
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  No financial jargon, no opaque billable hours. We explain precisely what each form means, why it matters, and how it impacts your net statutory liability.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-border-subtle/50">
                <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wide">03 &bull; CLARITY</span>
              </div>
            </div>

            <div className="bg-surface-card p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-irs-verified mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">lock</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-space-xs font-bold">
                  Bank-Grade Security &amp; Privacy
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  SOC-2 compliant infrastructure, AES-256 encrypted vaults, and multi-factor authentication protect your social security numbers, asset schedules, and bank details.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-border-subtle/50">
                <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wide">04 &bull; DEFENSE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four-Phase Methodology */}
      <section className="w-full py-space-xl bg-surface-card border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">The Methodology</span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs font-bold">
              Our Four-Phase Tax Advisory Cycle
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              A disciplined, step-by-step framework eliminating errors and unlocking legitimate strategic value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
            <div className="bg-surface-canvas p-space-lg rounded-xl relative flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-mono-financial text-mono-financial font-bold text-secondary bg-surface-card px-2 py-1 rounded shadow-sm">
                    PHASE 01
                  </span>
                  <span className="material-symbols-outlined text-outline">cloud_upload</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-2 font-bold">Discovery &amp; Document Intake</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Upload W-2s, 1099s, prior year filings, and international balance statements into our encrypted portal with smart document checklists.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-irs-verified flex items-center gap-1 font-semibold border-t border-border-subtle/50">
                <span className="material-symbols-outlined text-[16px]">lock</span> Encrypted Vault Ingestion
              </div>
            </div>

            <div className="bg-surface-canvas p-space-lg rounded-xl relative flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-mono-financial text-mono-financial font-bold text-secondary bg-surface-card px-2 py-1 rounded shadow-sm">
                    PHASE 02
                  </span>
                  <span className="material-symbols-outlined text-outline">policy</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-2 font-bold">Statutory Code Analysis</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  A dedicated tax specialist reconciles state and federal tax rules against your gross receipts, deductions, and residency timeline.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-primary flex items-center gap-1 font-semibold border-t border-border-subtle/50">
                <span className="material-symbols-outlined text-[16px]">analytics</span> IRC Section Cross-Check
              </div>
            </div>

            <div className="bg-surface-canvas p-space-lg rounded-xl relative flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-mono-financial text-mono-financial font-bold text-secondary bg-surface-card px-2 py-1 rounded shadow-sm">
                    PHASE 03
                  </span>
                  <span className="material-symbols-outlined text-outline">tune</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-2 font-bold">Optimization &amp; Dual Review</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Independent CPA audit of draft schedules to capture missed credits, apply carryforwards, and optimize elections before approval.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-secondary flex items-center gap-1 font-semibold border-t border-border-subtle/50">
                <span className="material-symbols-outlined text-[16px]">verified</span> Dual CPA Verification
              </div>
            </div>

            <div className="bg-surface-canvas p-space-lg rounded-xl relative flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-mono-financial text-mono-financial font-bold text-secondary bg-surface-card px-2 py-1 rounded shadow-sm">
                    PHASE 04
                  </span>
                  <span className="material-symbols-outlined text-outline">send</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-2 font-bold">IRS Submission &amp; Archive</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Direct authorized e-file transmission with instant federal timestamp, followed by 7-year digital archival in your personal vault.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs font-label-sm text-label-sm text-irs-verified flex items-center gap-1 font-semibold border-t border-border-subtle/50">
                <span className="material-symbols-outlined text-[16px]">task_alt</span> Direct Electronic Acceptance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Strip */}
      <section className="w-full py-space-xl bg-primary text-on-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline-lg text-headline-lg text-surface-card font-bold mb-4">
            Partner with Dedicated CPAs &amp; Enrolled Agents
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mx-auto mb-8">
            Experience the peace of mind that comes from certified accuracy, proactive tax planning, and responsive support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3.5 rounded-lg font-semibold shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Contact Our Team</span>
              <span className="material-symbols-outlined text-sm">calendar_today</span>
            </Link>
            <Link
              to="/contact-us"
              className="bg-surface-card/10 hover:bg-surface-card/20 text-surface-card px-6 py-3.5 rounded-lg font-semibold transition-all inline-flex items-center gap-2 border border-surface-card/20"
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined text-sm">mail</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

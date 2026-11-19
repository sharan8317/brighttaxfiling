import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactUs() {
  const [priority, setPriority] = useState('standard')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    consent: false
  })
  const [files, setFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="relative w-full bg-gradient-to-b from-surface-card via-surface to-surface-canvas pt-8 pb-12 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-space-sm font-label-sm text-label-sm text-outline">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-outline text-xs">chevron_right</span>
            <span className="text-on-surface font-semibold">Contact Us</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pt-space-xs">
            <div className="max-w-3xl flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                DIRECT CLIENT COMMUNICATIONS &amp; REGIONAL OFFICES
              </div>
              <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-bold">
                Get in Touch with Our Tax Advisory Team
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Whether you need immediate filing support, corporate nexus structuring, or assistance with an IRS communication, our credentialed advisors are ready to assist.
              </p>
            </div>

            {/* Rapid Response SLA Pill */}
            <div className="flex-shrink-0 bg-surface-card p-space-md rounded-xl shadow-md flex items-center gap-space-md border border-border-subtle">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider text-xs">Advisory Response SLA</span>
                <span className="font-title-md text-title-md text-primary font-bold tracking-tight">&lt; 4 Business Hours</span>
                <span className="font-body-sm text-body-sm text-irs-verified font-medium flex items-center gap-1 text-xs">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Circular 230 Certified Team
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Dual-Column Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Left Column: Direct Inquiry & Document Intake Form (7 Cols) */}
          <div className="lg:col-span-7 bg-surface-card rounded-xl p-space-lg shadow-lg flex flex-col gap-space-lg border border-border-subtle">
            
            {/* Form Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm border-b border-border-subtle">
              <div className="flex items-center gap-space-xs">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold tracking-wide uppercase text-xs">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  ENCRYPTED CLIENT INTAKE
                </div>
                <span className="font-body-sm text-body-sm text-outline hidden sm:inline">&bull;</span>
                <span className="font-body-sm text-body-sm text-outline hidden sm:inline text-xs">256-Bit SSL Pipeline</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline text-xs">Form REF: BTF-2025-DI</span>
            </div>

            {submitted ? (
              <div className="p-8 bg-surface-container rounded-xl text-center space-y-4 border border-irs-verified/30">
                <div className="w-16 h-16 rounded-full bg-irs-verified text-white flex items-center justify-center mx-auto shadow-md">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Inquiry Successfully Encrypted &amp; Dispatched
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. A Senior Managing Director has been assigned to your case. You will receive an initial intake confirmation and secure portal access link within 4 business hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ fullName: '', email: '', phone: '', inquiryType: '', message: '', consent: false })
                      setFiles([])
                    }}
                    className="text-secondary font-semibold hover:underline text-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-primary font-semibold flex items-center justify-between" htmlFor="full-name">
                      <span>Full Legal Name</span>
                      <span className="font-label-sm text-label-sm text-tax-critical font-normal text-xs">*Required</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none">person</span>
                      <input
                        id="full-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Marcus Vance, CPA or LLC Name"
                        className="w-full h-[42px] pl-10 pr-3 rounded-lg bg-surface-card text-on-surface font-body-md text-body-md border border-border-strong focus:outline-none focus:ring-2 focus:ring-secondary/30 transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-primary font-semibold flex items-center justify-between" htmlFor="email-address">
                      <span>Email Address</span>
                      <span className="font-label-sm text-label-sm text-tax-critical font-normal text-xs">*Required</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none">mail</span>
                      <input
                        id="email-address"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="advisor@entity.com"
                        className="w-full h-[42px] pl-10 pr-3 rounded-lg bg-surface-card text-on-surface font-body-md text-body-md border border-border-strong focus:outline-none focus:ring-2 focus:ring-secondary/30 transition shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone Number & Service Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="direct-phone">
                      Direct Phone Number
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none">phone</span>
                      <input
                        id="direct-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full h-[42px] pl-10 pr-3 rounded-lg bg-surface-card text-on-surface font-mono-financial text-mono-financial border border-border-strong focus:outline-none focus:ring-2 focus:ring-secondary/30 transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-primary font-semibold flex items-center justify-between" htmlFor="inquiry-type">
                      <span>Inquiry Type / Practice Area</span>
                      <span className="font-label-sm text-label-sm text-tax-critical font-normal text-xs">*Required</span>
                    </label>
                    <div className="relative">
                      <select
                        id="inquiry-type"
                        required
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full h-[42px] px-3 pr-8 rounded-lg bg-surface-card text-on-surface font-body-md text-body-md border border-border-strong appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/30 transition shadow-sm cursor-pointer"
                      >
                        <option value="" disabled>Select tax practice area...</option>
                        <option value="1040">Individual Tax Preparation (Form 1040)</option>
                        <option value="1040nr">Nonresident Alien Filing (Form 1040-NR)</option>
                        <option value="corporate">Corporate / Partnership Taxes (1120-S, 1065)</option>
                        <option value="irs-audit">IRS Notice &amp; Penalty Abatement</option>
                        <option value="fbar">FBAR &amp; FATCA Disclosure (FinCEN 114)</option>
                        <option value="itin">ITIN Application (Form W-7 CAA)</option>
                        <option value="general">General Inquiry / Strategic Advisory</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-lg">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>

                {/* Priority Selector */}
                <div className="flex flex-col gap-2 pt-space-xs">
                  <label className="font-label-md text-label-md text-primary font-semibold">Priority Level &amp; Statutory Constraints</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
                    <label
                      onClick={() => setPriority('standard')}
                      className={`relative flex flex-col p-3 rounded-lg cursor-pointer transition border ${
                        priority === 'standard'
                          ? 'bg-secondary/10 border-secondary text-primary'
                          : 'bg-surface-canvas border-border-subtle hover:bg-surface-container-low text-on-surface'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-md text-label-md font-semibold text-primary">Standard</span>
                        <span className="material-symbols-outlined text-secondary text-sm">
                          {priority === 'standard' ? 'check_circle' : 'radio_button_unchecked'}
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">General filing, tax planning, advisory setup</span>
                    </label>

                    <label
                      onClick={() => setPriority('urgent')}
                      className={`relative flex flex-col p-3 rounded-lg cursor-pointer transition border ${
                        priority === 'urgent'
                          ? 'bg-secondary/10 border-secondary text-primary'
                          : 'bg-surface-canvas border-border-subtle hover:bg-surface-container-low text-on-surface'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-md text-label-md font-semibold text-primary">Urgent Deadline</span>
                        <span className="material-symbols-outlined text-secondary text-sm">
                          {priority === 'urgent' ? 'check_circle' : 'radio_button_unchecked'}
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">Filing extension or estimated tax due date</span>
                    </label>

                    <label
                      onClick={() => setPriority('irs')}
                      className={`relative flex flex-col p-3 rounded-lg cursor-pointer transition border ${
                        priority === 'irs'
                          ? 'bg-red-50 border-tax-critical text-primary'
                          : 'bg-surface-canvas border-border-subtle hover:bg-surface-container-low text-on-surface'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-md text-label-md font-semibold text-tax-critical flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">warning</span> IRS Notice
                        </span>
                        <span className="material-symbols-outlined text-tax-critical text-sm">
                          {priority === 'irs' ? 'check_circle' : 'radio_button_unchecked'}
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">30/90-Day letter, CP2000, audit defense</span>
                    </label>
                  </div>
                </div>

                {/* Detailed Message Field */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="case-message">
                      Detailed Case Overview / Specific Inquiries
                    </label>
                    <span className="font-mono-financial text-xs text-outline">
                      {formData.message.length} / 2,000 characters
                    </span>
                  </div>
                  <textarea
                    id="case-message"
                    required
                    rows={4}
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please outline the tax years in question, jurisdiction entities, IRS notice reference codes (e.g. CP2000, LT11), or multi-state nexus questions..."
                    className="w-full p-3 rounded-lg bg-surface-card text-on-surface font-body-md text-body-md border border-border-strong focus:outline-none focus:ring-2 focus:ring-secondary/30 transition shadow-sm resize-y"
                  />
                </div>

                {/* Drag & Drop Document Intake Zone */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-primary font-semibold flex items-center justify-between">
                    <span>Optional Secure Document Intake</span>
                    <span className="font-label-sm text-label-sm text-irs-verified font-medium flex items-center gap-1 text-xs">
                      <span className="material-symbols-outlined text-xs">verified</span> End-to-End Encrypted
                    </span>
                  </label>
                  <div className="p-space-md rounded-xl bg-surface-canvas border-2 border-dashed border-border-strong hover:bg-surface-container-low transition text-center cursor-pointer flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-surface-card shadow-sm flex items-center justify-center text-secondary group-hover:scale-105 transition">
                      <span className="material-symbols-outlined text-xl">cloud_upload</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-label-md text-label-md font-semibold text-primary">
                        Drag &amp; drop tax notices or prior filings here
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        PDF, JPG, TIFF, or PNG up to 25MB (Encrypted via AES-256)
                      </span>
                    </div>
                    <label className="cursor-pointer font-label-sm text-label-sm text-secondary font-semibold hover:underline mt-1">
                      <span>Or browse your device</span>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.tiff"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    {files.length > 0 && (
                      <div className="w-full flex flex-col gap-1 mt-2 text-left bg-surface-card p-2 rounded border border-border-subtle text-xs">
                        {files.map((f, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-primary">
                            <span className="material-symbols-outlined text-xs text-secondary">description</span>
                            <span>{f.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Compliance Consent */}
                <div className="flex items-start gap-2.5 pt-space-xs">
                  <input
                    id="compliance-consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary cursor-pointer"
                  />
                  <label htmlFor="compliance-consent" className="font-body-sm text-body-sm text-on-surface-variant leading-snug cursor-pointer select-none text-xs">
                    I agree to encrypted communication per the Bright Tax Filings Privacy Policy and acknowledge that this initial submission is subject to federal Circular 230 disclosure regulations. Transmitted records remain strictly confidential under CPA-client privilege.
                  </label>
                </div>

                {/* CTA Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-sm border-t border-border-subtle">
                  <button
                    type="submit"
                    className="bg-secondary hover:bg-secondary-container text-on-secondary px-space-lg py-3 rounded-lg font-label-md text-label-md font-semibold transition shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-0.5 transition">lock_open</span>
                    <span>Submit Secure Inquiry</span>
                  </button>
                  <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-irs-verified"></span>
                    <span>Average response time: <strong>under 4 business hours</strong></span>
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Regional Offices, Direct Lines, & Map Placard (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-md mt-8 lg:mt-0">
            <div className="bg-surface-card rounded-xl p-space-md shadow-md flex flex-col gap-space-md overflow-hidden border border-border-subtle">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">pin_drop</span>
                  <h3 className="font-title-md text-title-md text-primary font-bold">Office Locations</h3>
                </div>
                <span className="font-label-sm text-label-sm text-irs-verified bg-surface-container px-2 py-0.5 rounded font-semibold uppercase text-xs">
                  2 Major Hubs
                </span>
              </div>

              {/* Office 1: New York */}
              <div className="bg-surface-canvas rounded-lg p-space-md flex flex-col gap-space-xs border border-border-subtle">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <h4 className="font-label-md text-label-md font-bold text-primary uppercase tracking-wide text-xs">US Headquarters (New York)</h4>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface mt-1 font-medium text-sm">
                      14 Wall Street, 22nd Floor<br />New York, NY 10005
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline bg-surface-card px-2 py-1 rounded text-xs border border-border-subtle">Primary Registry</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                  <div>
                    <span className="text-outline block">Direct NY Line</span>
                    <a className="font-mono-financial text-secondary hover:underline font-semibold" href="tel:12125550198">+1 (212) 555-0198</a>
                  </div>
                  <div>
                    <span className="text-outline block">National Toll-Free</span>
                    <a className="font-mono-financial text-primary hover:text-secondary font-semibold" href="tel:18005552739">+1 (800) 555-APEX</a>
                  </div>
                </div>
                <div className="pt-2 text-xs text-on-surface-variant">
                  <strong>Hours:</strong> Mon - Fri: 8:00 AM - 8:00 PM EST
                </div>
              </div>

              {/* Office 2: Washington DC */}
              <div className="bg-surface-canvas rounded-lg p-space-md flex flex-col gap-space-xs border border-border-subtle">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                      <h4 className="font-label-md text-label-md font-bold text-primary uppercase tracking-wide text-xs">Capital Office (Washington, DC)</h4>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface mt-1 font-medium text-sm">
                      1101 Pennsylvania Ave NW, 6th Floor<br />Washington, DC 20004
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline bg-surface-card px-2 py-1 rounded text-xs border border-border-subtle">Regulatory Liaison</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                  <div>
                    <span className="text-outline block">Direct DC Line</span>
                    <a className="font-mono-financial text-secondary hover:underline font-semibold" href="tel:12025550144">+1 (202) 555-0144</a>
                  </div>
                  <div>
                    <span className="text-outline block">Protocol</span>
                    <span className="text-on-surface font-medium">By Prior Appointment Only</span>
                  </div>
                </div>
              </div>

              {/* Direct Communications Matrix */}
              <div className="p-space-md rounded-lg bg-surface-container-high/60 flex flex-col gap-space-xs border border-border-subtle">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold text-xs">
                  Direct Communication Channels
                </span>
                <div className="flex flex-col gap-2 pt-1 text-xs">
                  <div className="flex items-center justify-between py-1 bg-surface-card px-3 rounded border border-border-subtle">
                    <span className="text-on-surface font-medium">General Inquiries</span>
                    <a className="font-mono-financial text-secondary hover:underline" href="mailto:inquiries@brighttaxfilings.com">
                      inquiries@brighttaxfilings.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1 bg-surface-card px-3 rounded border border-border-subtle">
                    <span className="text-on-surface font-medium">Client Portal Support</span>
                    <a className="font-mono-financial text-secondary hover:underline" href="mailto:portal@brighttaxfilings.com">
                      portal@brighttaxfilings.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

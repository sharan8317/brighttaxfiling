import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BookConsultation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [practiceArea, setPracticeArea] = useState('hnw-individual')
  const [selectedDate, setSelectedDate] = useState('Wednesday, Nov 12')
  const [selectedSlot, setSelectedSlot] = useState('09:45 AM')
  const [timezone, setTimezone] = useState('EST')
  const [meetingMode, setMeetingMode] = useState('video')
  const [taxYears, setTaxYears] = useState(['2024'])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    entity: '',
    objectives: ''
  })
  const [isBooked, setIsBooked] = useState(false)

  const practiceAreas = [
    {
      id: 'hnw-individual',
      icon: 'person',
      title: 'Individual & High-Net-Worth Advisory',
      duration: '30 Min',
      desc: 'Form 1040, equity vesting (RSUs/ISO/ESPP), capital gains, multi-state filing, and executive deduction planning.',
      lead: 'Senior Enrolled Agent'
    },
    {
      id: 'business-corporate',
      icon: 'domain',
      title: 'Business & Corporate Entity Filing',
      duration: '45 Min',
      desc: 'Form 1120-S, 1065, Pass-Through Entity Tax (PTET), partner distributions, and year-end corporate restructuring.',
      lead: 'Corporate CPA'
    },
    {
      id: 'cross-border',
      icon: 'public',
      title: 'Nonresident & Cross-Border Compliance',
      duration: '45 Min',
      desc: 'Form 1040-NR, bilateral tax treaty elections, FBAR / FinCEN 114 reporting, FATCA disclosures, and dual-status.',
      lead: 'Cross-Border Fellow'
    },
    {
      id: 'notice-audit',
      icon: 'gavel',
      title: 'IRS Notice Defense & Audit Representation',
      duration: '60 Min',
      desc: 'CP2000, CP504, Statutory Notices of Deficiency, IRS audit response, penalty abatement, and appeals representation.',
      lead: 'Licensed Audit EA'
    },
    {
      id: 'itin-w7',
      icon: 'assignment_ind',
      title: 'ITIN Certification & W-7 Verification',
      duration: '30 Min',
      desc: 'IRS Certifying Acceptance Agent (CAA) validation. Eliminate the need to mail your original passport to the IRS.',
      lead: 'IRS CAA Specialist'
    }
  ]

  const calendarDays = [
    { day: 1, active: true },
    { day: 4, active: true },
    { day: 5, active: true },
    { day: 6, active: true },
    { day: 7, active: true },
    { day: 8, active: true },
    { day: 11, active: true },
    { day: 12, active: true, selected: true },
    { day: 13, active: true },
    { day: 14, active: true },
    { day: 15, active: true },
    { day: 18, active: true },
    { day: 19, active: true },
    { day: 20, active: true },
    { day: 21, active: true },
    { day: 22, active: true },
    { day: 25, active: true },
    { day: 26, active: true },
    { day: 27, active: true },
    { day: 28, active: true },
    { day: 29, active: true }
  ]

  const timeSlots = {
    morning: ['09:00 AM', '09:45 AM', '11:00 AM', '11:30 AM'],
    afternoon: ['01:30 PM', '02:15 PM', '03:45 PM', '05:00 PM']
  }

  const toggleTaxYear = (year) => {
    if (taxYears.includes(year)) {
      setTaxYears(taxYears.filter(y => y !== year))
    } else {
      setTaxYears([...taxYears, year])
    }
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    setIsBooked(true)
  }

  return (
    <div className="flex flex-col w-full">
      
      {/* Breadcrumbs & Header Section */}
      <section className="w-full bg-surface-canvas pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              <span>Home</span>
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold">Book a Consultation</span>
          </nav>
        </div>
      </section>

      {/* Hero Header Section */}
      <section className="w-full bg-surface-canvas py-space-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card shadow-sm text-irs-verified font-label-sm text-label-sm mb-space-sm border border-border-subtle">
              <span className="w-2 h-2 rounded-full bg-irs-verified animate-pulse"></span>
              <span className="text-xs font-semibold">SECURE ONLINE SCHEDULING &bull; DIRECT ADVISOR ACCESS</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary tracking-tight mb-space-sm font-bold">
              Schedule Your Confidential Tax Strategy Consultation
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-md">
              Reserve a dedicated session with an Enrolled Agent (EA) or Certified Public Accountant (CPA) to review your specific tax posture, multi-state filing, or international compliance requirements.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-space-md pt-2">
              <div className="flex items-center gap-2 bg-surface-card px-3 py-1.5 rounded-lg shadow-sm border border-border-subtle">
                <span className="material-symbols-outlined text-irs-verified text-base">verified_user</span>
                <span className="font-label-sm text-label-sm text-primary font-semibold text-xs">IRS Authorized e-File Provider</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-card px-3 py-1.5 rounded-lg shadow-sm border border-border-subtle">
                <span className="material-symbols-outlined text-secondary text-base">shield_with_heart</span>
                <span className="font-label-sm text-label-sm text-primary font-semibold text-xs">Circular 230 Protected</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-card px-3 py-1.5 rounded-lg shadow-sm border border-border-subtle">
                <span className="material-symbols-outlined text-tax-warning text-base">lock</span>
                <span className="font-label-sm text-label-sm text-primary font-semibold text-xs">256-Bit Encrypted Portal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 3-Step Wizard Section */}
      <section className="w-full bg-surface-canvas pb-space-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Stepper Progress Header */}
          <div className="bg-surface-card rounded-xl p-space-md shadow-sm mb-space-lg border border-border-subtle">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md font-bold shadow-sm ${
                  currentStep >= 1 ? 'bg-secondary text-on-secondary' : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  1
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold text-xs">Step 1</span>
                  <span className="font-title-md text-title-md text-primary font-semibold text-sm">Practice Area</span>
                </div>
              </div>

              <div className="flex items-center gap-space-sm">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md font-bold ${
                  currentStep >= 2 ? 'bg-secondary text-on-secondary shadow-sm' : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  2
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline text-xs">Step 2</span>
                  <span className="font-title-md text-title-md text-primary font-semibold text-sm">Date &amp; Time</span>
                </div>
              </div>

              <div className="flex items-center gap-space-sm">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md font-bold ${
                  currentStep >= 3 ? 'bg-secondary text-on-secondary shadow-sm' : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  3
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline text-xs">Step 3</span>
                  <span className="font-title-md text-title-md text-primary font-semibold text-sm">Client Details</span>
                </div>
              </div>
            </div>
          </div>

          {isBooked ? (
            /* Confirmation Success Screen */
            <div className="bg-surface-card rounded-2xl p-space-xl shadow-lg border border-irs-verified/30 text-center max-w-3xl mx-auto space-y-6">
              <div className="w-20 h-20 rounded-full bg-irs-verified text-white flex items-center justify-center mx-auto shadow-lg">
                <span className="material-symbols-outlined text-4xl">event_available</span>
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-irs-verified/10 text-irs-verified font-label-sm text-label-sm uppercase font-semibold text-xs mb-2">
                  CONFIRMATION # BTF-2025-APPX
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  Your Consultation Has Been Confirmed!
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-lg mx-auto">
                  A calendar invite and encrypted meeting link have been dispatched to <strong>{formData.email}</strong>.
                </p>
              </div>

              {/* Appointment Dossier Card */}
              <div className="bg-surface-canvas rounded-xl p-6 text-left border border-border-subtle max-w-md mx-auto space-y-3 font-body-sm text-sm">
                <div className="flex justify-between py-1 border-b border-border-subtle/50">
                  <span className="text-outline">Client Name:</span>
                  <span className="text-primary font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-subtle/50">
                  <span className="text-outline">Date &amp; Time:</span>
                  <span className="text-primary font-semibold font-mono-financial">{selectedDate} @ {selectedSlot} ({timezone})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-subtle/50">
                  <span className="text-outline">Practice Area:</span>
                  <span className="text-secondary font-semibold capitalize">{practiceArea.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-outline">Format:</span>
                  <span className="text-primary font-semibold capitalize">{meetingMode === 'video' ? 'Encrypted Video Link (Google Meet)' : 'Direct Phone Call'}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3 rounded-lg font-semibold shadow-md transition-all"
                >
                  Return to Home
                </Link>
                <button
                  type="button"
                  onClick={() => setIsBooked(false)}
                  className="text-secondary font-semibold hover:underline text-sm"
                >
                  Book Another Session
                </button>
              </div>
            </div>
          ) : (
            /* Wizard Form */
            <form onSubmit={handleBookingSubmit} className="space-y-space-lg">
              
              {/* STEP 1: Practice Area */}
              <div className="bg-surface-card rounded-xl p-space-lg shadow-sm border border-border-subtle">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md mb-space-md border-b border-border-subtle">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold block text-xs">
                      Phase 1 &bull; Scope Selection
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">
                      Select Your Practice Area or Tax Service
                    </h2>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 md:mt-0 text-xs">
                    Choose the category best matching your inquiry
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                  {practiceAreas.map((area) => {
                    const isSelected = practiceArea === area.id
                    return (
                      <div
                        key={area.id}
                        onClick={() => setPracticeArea(area.id)}
                        className={`group relative block p-space-md rounded-xl cursor-pointer transition-all duration-200 border ${
                          isSelected
                            ? 'bg-surface-card border-secondary shadow-md ring-2 ring-secondary/20'
                            : 'bg-surface-canvas border-border-subtle hover:bg-surface-container-low shadow-sm'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-space-sm">
                          <div className="w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-secondary shadow-sm group-hover:bg-surface-container border border-border-subtle">
                            <span className="material-symbols-outlined">{area.icon}</span>
                          </div>
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-mono-financial text-mono-financial text-xs">
                            <span className="material-symbols-outlined text-xs">schedule</span>
                            <span>{area.duration}</span>
                          </div>
                        </div>

                        <h3 className="font-title-md text-title-md text-primary mb-1 group-hover:text-secondary transition-colors font-bold text-base">
                          {area.title}
                        </h3>

                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm text-xs">
                          {area.desc}
                        </p>

                        <div className="flex items-center justify-between pt-2 border-t border-border-subtle/50 text-xs">
                          <span className="font-label-sm text-label-sm text-outline">Lead: {area.lead}</span>
                          <span className={`material-symbols-outlined text-lg ${isSelected ? 'text-secondary' : 'text-outline-variant'}`}>
                            {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                          </span>
                        </div>
                      </div>
                    )
                  })}

                  {/* Custom Route Card */}
                  <div className="relative p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between border border-border-subtle">
                    <div>
                      <div className="flex items-start justify-between mb-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-primary shadow-sm border border-border-subtle">
                          <span className="material-symbols-outlined">support_agent</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-card text-on-surface-variant font-label-sm text-label-sm text-xs border border-border-subtle">
                          Bespoke
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-primary mb-1 font-bold text-base">Unsure Which Service Fits?</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs">
                        Our intake coordinator can quickly route your inquiry to the relevant senior tax specialist within 2 business hours.
                      </p>
                    </div>
                    <a className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline pt-2 text-xs" href="tel:18005552739">
                      <span className="material-symbols-outlined text-sm">call</span>
                      <span>Call +1 (800) 555-APEX</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* STEP 2: Choose Date & Time */}
              <div className="bg-surface-card rounded-xl p-space-lg shadow-sm border border-border-subtle">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md mb-space-md border-b border-border-subtle">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold block text-xs">
                      Phase 2 &bull; Direct Calendar Sync
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">Choose Date &amp; Time</h2>
                  </div>

                  <div className="flex items-center gap-2 mt-2 md:mt-0 bg-surface-canvas px-3 py-1.5 rounded-lg shadow-sm border border-border-subtle">
                    <span className="material-symbols-outlined text-on-surface-variant text-base">schedule</span>
                    <span className="font-label-sm text-label-sm text-outline text-xs">Zone:</span>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="bg-transparent font-label-md text-label-md text-primary font-semibold focus:outline-none cursor-pointer text-xs"
                    >
                      <option value="EST">Eastern Time (EST, UTC-5)</option>
                      <option value="CST">Central Time (CST, UTC-6)</option>
                      <option value="MST">Mountain Time (MST, UTC-7)</option>
                      <option value="PST">Pacific Time (PST, UTC-8)</option>
                      <option value="UTC">Universal Time (UTC+0)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                  {/* Calendar Grid */}
                  <div className="lg:col-span-7 bg-surface-canvas p-space-md rounded-xl shadow-sm border border-border-subtle">
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">calendar_month</span>
                        <span className="font-title-md text-title-md text-primary font-bold">November 2025</span>
                      </div>
                      <div className="text-xs text-outline">Open Advisory Days</div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm text-outline mb-2 text-xs">
                      <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
                    </div>

                    <div className="grid grid-cols-7 gap-1.5 text-center font-mono-financial text-sm">
                      {calendarDays.map((d, i) => {
                        const isSelected = selectedDate === `Nov ${d.day}, 2025` || (d.day === 12 && selectedDate.includes('12'))
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setSelectedDate(`Nov ${d.day}, 2025`)}
                            className={`p-2 rounded-lg font-medium transition-colors ${
                              isSelected
                                ? 'bg-secondary text-white font-bold shadow-sm'
                                : 'bg-surface-card hover:bg-surface-container-high text-primary border border-border-subtle/50'
                            }`}
                          >
                            {d.day}
                          </button>
                        )
                      })}
                    </div>

                    <div className="flex items-center justify-between pt-space-md text-xs text-outline border-t border-border-subtle/50 mt-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded bg-secondary inline-block"></span> Selected
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded bg-surface-card inline-block border border-border-subtle"></span> Available
                      </span>
                    </div>
                  </div>

                  {/* Time Slots Selection */}
                  <div className="lg:col-span-5 flex flex-col justify-between mt-6 lg:mt-0">
                    <div>
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="font-label-md text-label-md text-primary font-semibold text-sm">
                          Slots for <span className="text-secondary font-bold">{selectedDate}</span>
                        </span>
                      </div>

                      {/* Morning Slots */}
                      <div className="mb-space-md">
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-2 text-xs">
                          Morning Window
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.morning.map((slot) => {
                            const isSlotSelected = selectedSlot === slot
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedSlot(slot)}
                                className={`py-2 px-3 rounded-lg font-mono-financial text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                                  isSlotSelected
                                    ? 'bg-secondary text-white font-bold shadow-sm'
                                    : 'bg-surface-canvas hover:bg-surface-container-low text-primary border border-border-subtle'
                                }`}
                              >
                                <span className="material-symbols-outlined text-xs">wb_sunny</span>
                                <span>{slot}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Afternoon Slots */}
                      <div className="mb-space-md">
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-2 text-xs">
                          Afternoon &amp; Twilight
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.afternoon.map((slot) => {
                            const isSlotSelected = selectedSlot === slot
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedSlot(slot)}
                                className={`py-2 px-3 rounded-lg font-mono-financial text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                                  isSlotSelected
                                    ? 'bg-secondary text-white font-bold shadow-sm'
                                    : 'bg-surface-canvas hover:bg-surface-container-low text-primary border border-border-subtle'
                                }`}
                              >
                                <span className="material-symbols-outlined text-xs">wb_twilight</span>
                                <span>{slot}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-3 mt-2 border border-border-subtle">
                      <span className="material-symbols-outlined text-secondary text-xl">videocam</span>
                      <div className="flex flex-col text-xs">
                        <span className="font-semibold text-primary">Live Encrypted Video Link or Dial-In</span>
                        <p className="text-on-surface-variant mt-0.5">
                          Appointment automatically generates a secure Google Meet/Zoom room with screen share for tax form reviews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 3: Client Details */}
              <div className="bg-surface-card rounded-xl p-space-lg shadow-sm border border-border-subtle">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md mb-space-md border-b border-border-subtle">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold block text-xs">
                      Phase 3 &bull; Tax Profile Verification
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">
                      Client Details &amp; Consultation Brief
                    </h2>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 md:mt-0 text-xs">
                    Confidential intake subject to IRS Circular 230
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
                  <div className="flex flex-col">
                    <label className="font-label-md text-label-md text-primary font-semibold mb-1 text-xs" htmlFor="client-name">
                      Full Legal Name <span className="text-tax-critical">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jonathan R. Vance"
                      className="w-full h-11 px-3.5 bg-surface-canvas rounded-lg text-primary placeholder-outline border border-border-strong focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all font-body-md text-body-md text-sm"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-label-md text-label-md text-primary font-semibold mb-1 text-xs" htmlFor="client-email">
                      Email Address <span className="text-tax-critical">*</span>
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full h-11 px-3.5 bg-surface-canvas rounded-lg text-primary placeholder-outline border border-border-strong focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all font-body-md text-body-md text-sm"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-label-md text-label-md text-primary font-semibold mb-1 text-xs" htmlFor="client-phone">
                      Direct Phone Number <span className="text-tax-critical">*</span>
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full h-11 px-3.5 bg-surface-canvas rounded-lg text-primary placeholder-outline border border-border-strong focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all font-mono-financial text-mono-financial text-sm"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-label-md text-label-md text-primary font-semibold mb-1 text-xs" htmlFor="client-entity">
                      Entity / Operating Business <span className="text-outline text-xs font-normal">(Optional)</span>
                    </label>
                    <input
                      id="client-entity"
                      type="text"
                      value={formData.entity}
                      onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                      placeholder="e.g. Vanguard Holdings LLC"
                      className="w-full h-11 px-3.5 bg-surface-canvas rounded-lg text-primary placeholder-outline border border-border-strong focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all font-body-md text-body-md text-sm"
                    />
                  </div>
                </div>

                {/* Tax Years Checkboxes */}
                <div className="mb-space-md">
                  <label className="font-label-md text-label-md text-primary font-semibold block mb-2 text-xs">
                    Tax Year(s) Under Review <span className="text-outline text-xs font-normal">(Select all that apply)</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: '2024', label: '2024 Tax Year (Current Filing)' },
                      { id: '2023', label: '2023 Tax Year (Amendment / Audit)' },
                      { id: 'prior', label: 'Prior Unfiled Returns (2018-2022)' },
                      { id: '2025', label: '2025 Forward Advisory' }
                    ].map((y) => (
                      <label key={y.id} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-canvas hover:bg-surface-container-low cursor-pointer transition-colors border border-border-subtle text-xs">
                        <input
                          type="checkbox"
                          checked={taxYears.includes(y.id)}
                          onChange={() => toggleTaxYear(y.id)}
                          className="w-4 h-4 rounded text-secondary focus:ring-secondary/30"
                        />
                        <span className="font-medium text-primary">{y.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Format */}
                <div className="mb-space-md">
                  <label className="font-label-md text-label-md text-primary font-semibold block mb-2 text-xs">
                    Preferred Meeting Format <span className="text-tax-critical">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {[
                      { id: 'video', icon: 'videocam', label: 'Secure Video' },
                      { id: 'phone', icon: 'call', label: 'Direct Phone Call' },
                      { id: 'inperson-ny', icon: 'apartment', label: 'Wall St Office, NY' },
                      { id: 'inperson-dc', icon: 'account_balance', label: 'Pennsylvania Ave, DC' }
                    ].map((mode) => (
                      <label
                        key={mode.id}
                        onClick={() => setMeetingMode(mode.id)}
                        className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors border text-xs ${
                          meetingMode === mode.id
                            ? 'bg-secondary/15 border-secondary text-primary font-bold'
                            : 'bg-surface-canvas border-border-subtle hover:bg-surface-container-low text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-base text-secondary">{mode.icon}</span>
                        <span>{mode.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Primary Questions */}
                <div className="mb-space-lg">
                  <label className="font-label-md text-label-md text-primary font-semibold mb-1 flex items-center justify-between text-xs" htmlFor="client-objectives">
                    <span>Primary Questions or Consultation Objectives</span>
                    <span className="text-outline text-xs font-normal">IRS Notices, W-2/1099 complexity, multi-state moves</span>
                  </label>
                  <textarea
                    id="client-objectives"
                    rows={4}
                    value={formData.objectives}
                    onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                    placeholder="Briefly summarize your questions, filing status, or specific IRS notices received..."
                    className="w-full p-3.5 bg-surface-canvas rounded-lg text-primary placeholder-outline border border-border-strong focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all font-body-md text-body-md text-sm"
                  />
                </div>

                {/* Confidentiality Notice */}
                <div className="p-space-md rounded-xl bg-surface-container-low mb-space-lg flex items-start gap-space-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-irs-verified text-xl flex-shrink-0 mt-0.5">verified_user</span>
                  <div className="text-xs text-on-surface-variant leading-relaxed">
                    <span className="font-bold text-primary">Confidentiality Guarantee:</span> All disclosures and uploaded records are strictly privileged under <strong>Treasury Circular 230 regulations</strong> and protected by bank-level 256-bit AES encryption. No payment is required to submit your consultation request; scope and transparent engagement fee schedules are confirmed in writing prior to commencing formal representation.
                  </div>
                </div>

                {/* Confirm & CTA Button Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-2 border-t border-border-subtle">
                  <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm text-xs">
                    <span className="material-symbols-outlined text-irs-verified text-base">lock</span>
                    <span>256-bit TLS encrypted session request</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3.5 rounded-lg font-label-md text-label-md font-bold shadow-md hover:shadow-lg transition-all duration-150 inline-flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">event_available</span>
                    <span>Confirm &amp; Request Consultation Booking</span>
                  </button>
                </div>

              </div>

            </form>
          )}

        </div>
      </section>

      {/* What to Expect During Your Session */}
      <section className="w-full bg-surface-canvas py-space-xl border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-space-lg">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold block mb-1 text-xs">
              Standard of Engagement
            </span>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">What to Expect During Your Session</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Every consultation is an actionable, high-value assessment designed to establish regulatory certainty and tax efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface-card p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-canvas flex items-center justify-center text-secondary mb-space-sm shadow-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-2xl">badge</span>
                </div>
                <span className="font-mono-financial text-xs text-outline block mb-1">01 / ADVISOR ALIGNMENT</span>
                <h3 className="font-title-md text-title-md text-primary mb-2 font-bold text-base">Direct CPA / EA Evaluation</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs">
                  You speak directly with a licensed tax professional possessing federal rights to practice before the IRS, never an uncredentialed intake clerk.
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-1.5 text-xs text-irs-verified font-semibold border-t border-border-subtle/50 mt-4">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>Federally Authorized</span>
              </div>
            </div>

            <div className="bg-surface-card p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-canvas flex items-center justify-center text-secondary mb-space-sm shadow-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-2xl">receipt_long</span>
                </div>
                <span className="font-mono-financial text-xs text-outline block mb-1">02 / CLEAR QUOTATION</span>
                <h3 className="font-title-md text-title-md text-primary mb-2 font-bold text-base">Transparent Fixed Fees</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs">
                  No surprise hourly billings. Following our initial evaluation, you receive an itemized proposal with clear upfront fixed fees.
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-1.5 text-xs text-irs-verified font-semibold border-t border-border-subtle/50 mt-4">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>Guaranteed Price Lock</span>
              </div>
            </div>

            <div className="bg-surface-card p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-canvas flex items-center justify-center text-secondary mb-space-sm shadow-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-2xl">history_edu</span>
                </div>
                <span className="font-mono-financial text-xs text-outline block mb-1">03 / RETURN DIAGNOSTIC</span>
                <h3 className="font-title-md text-title-md text-primary mb-2 font-bold text-base">Prior Return Review</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs">
                  We benchmark your prior year 1040 or corporate filings to identify missed deductions, carryovers, or amendment opportunities.
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-1.5 text-xs text-irs-verified font-semibold border-t border-border-subtle/50 mt-4">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>3-Year Lookback</span>
              </div>
            </div>

            <div className="bg-surface-card p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-border-subtle">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-canvas flex items-center justify-center text-secondary mb-space-sm shadow-sm border border-border-subtle">
                  <span className="material-symbols-outlined text-2xl">map</span>
                </div>
                <span className="font-mono-financial text-xs text-outline block mb-1">04 / STRATEGIC ROADMAP</span>
                <h3 className="font-title-md text-title-md text-primary mb-2 font-bold text-base">Instant Action Plan</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs">
                  Walk away with an itemized checklist of required documents, treaty elections, or filing steps customized to your case.
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-1.5 text-xs text-irs-verified font-semibold border-t border-border-subtle/50 mt-4">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>Clear Next Steps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

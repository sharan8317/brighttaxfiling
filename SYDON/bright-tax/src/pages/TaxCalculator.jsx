import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const STEPS = ['Basic Info', 'Income', 'Deductions', 'Credits', 'Results']

const RULES = {
  2026: {
    standard: { single: 16100, marriedJoint: 32200, marriedSeparate: 16100, head: 24150, surviving: 32200 },
    seniorStandard: { single: 2050, marriedJoint: 1650, marriedSeparate: 1650, head: 2050, surviving: 1650 },
    childCredit: 2200,
    refundableChildCredit: 1700,
    eitcInvestmentLimit: 12200,
    eitc: {
      0: { max: 664, singleEnd: 19540, jointEnd: 26820 },
      1: { max: 4427, singleEnd: 51593, jointEnd: 58863 },
      2: { max: 7316, singleEnd: 58629, jointEnd: 65899 },
      3: { max: 8231, singleEnd: 62974, jointEnd: 70244 },
    },
    brackets: {
      single: [[12400, .10], [50400, .12], [105700, .22], [201775, .24], [256225, .32], [640600, .35], [Infinity, .37]],
      marriedJoint: [[24800, .10], [100800, .12], [211400, .22], [403550, .24], [512450, .32], [768700, .35], [Infinity, .37]],
      marriedSeparate: [[12400, .10], [50400, .12], [105700, .22], [201775, .24], [256225, .32], [384350, .35], [Infinity, .37]],
      head: [[17700, .10], [67450, .12], [105700, .22], [201750, .24], [256200, .32], [640600, .35], [Infinity, .37]],
      surviving: [[24800, .10], [100800, .12], [211400, .22], [403550, .24], [512450, .32], [768700, .35], [Infinity, .37]],
    },
    capitalGains: {
      single: [49450, 545500], marriedJoint: [98900, 613700], marriedSeparate: [49450, 306850],
      head: [66200, 579600], surviving: [98900, 613700],
    },
  },
  2027: {
    standard: { single: 16600, marriedJoint: 33200, marriedSeparate: 16600, head: 24925, surviving: 33200 },
    seniorStandard: { single: 2100, marriedJoint: 1700, marriedSeparate: 1700, head: 2100, surviving: 1700 },
    childCredit: 2300,
    refundableChildCredit: 1800,
    eitcInvestmentLimit: 12600,
    eitc: {
      0: { max: 685, singleEnd: 20164, jointEnd: 27684 },
      1: { max: 4573, singleEnd: 53277, jointEnd: 60787 },
      2: { max: 7552, singleEnd: 60519, jointEnd: 68029 },
      3: { max: 8496, singleEnd: 65002, jointEnd: 72512 },
    },
    brackets: {
      single: [[12800, .10], [52025, .12], [109125, .22], [208325, .24], [264550, .32], [661375, .35], [Infinity, .37]],
      marriedJoint: [[25600, .10], [104050, .12], [218250, .22], [416650, .24], [529100, .32], [793650, .35], [Infinity, .37]],
      marriedSeparate: [[12800, .10], [52025, .12], [109125, .22], [208325, .24], [264550, .32], [396825, .35], [Infinity, .37]],
      head: [[18250, .10], [69650, .12], [109100, .22], [208300, .24], [264550, .32], [661350, .35], [Infinity, .37]],
      surviving: [[25600, .10], [104050, .12], [218250, .22], [416650, .24], [529100, .32], [793650, .35], [Infinity, .37]],
    },
    capitalGains: {
      single: [51050, 563200], marriedJoint: [102100, 633600], marriedSeparate: [51050, 316800],
      head: [68350, 598400], surviving: [102100, 633600],
    },
  },
}

const initialData = {
  taxYear: '2026', birthDate: '', usedBrightTax: '', marital: 'single', headOfHousehold: 'no',
  survivingSpouse: 'no', filingJointly: 'yes', spouseBirthYear: '', claimedDependent: 'no', hasDependents: 'no',
  dependentsUnder17: '0', dependentsStudent: '0', otherDependents: '0', wages: '', spouseWages: '',
  businessIncome: '', spouseBusinessIncome: '', withholding: '', spouseWithholding: '', interest: '', unemployment: '',
  dividends: '', qualifiedDividends: '', shortCapitalGain: '', longCapitalGain: '', stateRefund: '', pensions: '',
  socialSecurity: '', otherIncome: '', iraContributions: 'no', iraAmount: '', spouseRetirementPlan: 'no',
  studentLoanInterest: '', medicalExpenses: '', stateLocalTaxes: '', mortgageInterest: '', charitable: '',
  businessDeduction: '', childcare: 'no', childcareExpenses: '', energyImprovements: 'no', energyExpenses: '',
  educationExpenses: 'no', educationAmount: '', otherCredits: '',
}

const incomeFields = [
  ['wages', 'Taxable wages'], ['spouseWages', "Spouse's taxable wages", 'spouse'],
  ['businessIncome', 'Net business income or loss'], ['spouseBusinessIncome', "Spouse's net business income or loss", 'spouse'],
  ['withholding', 'Federal taxes withheld and estimated payments'],
  ['spouseWithholding', "Spouse's federal taxes withheld and estimated payments", 'spouse'],
  ['interest', 'Interest income'], ['unemployment', 'Unemployment income'], ['dividends', 'Dividend income'],
  ['qualifiedDividends', 'Qualified dividends'], ['shortCapitalGain', 'Short-term capital gain or loss'],
  ['longCapitalGain', 'Long-term capital gain or loss'], ['stateRefund', 'State tax refund'],
  ['pensions', 'Taxable IRA and pensions'], ['socialSecurity', 'Taxable Social Security benefits'],
  ['otherIncome', 'Other taxable income'],
]

const deductionFields = [
  ['studentLoanInterest', 'Student loan interest paid'], ['medicalExpenses', 'Medical and dental expenses paid'],
  ['stateLocalTaxes', 'State and local taxes paid'], ['mortgageInterest', 'Mortgage interest paid'],
  ['charitable', 'Charitable contributions'], ['businessDeduction', 'Qualified business income deduction'],
]

const number = (value) => Number.parseFloat(value) || 0
const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Math.round(value || 0))

function progressiveTax(income, brackets) {
  let tax = 0
  let floor = 0
  for (const [ceiling, rate] of brackets) {
    if (income <= floor) break
    tax += (Math.min(income, ceiling) - floor) * rate
    floor = ceiling
  }
  return Math.max(0, tax)
}

function Field({ id, label, value, onChange, type = 'number', min = '0', max, step = '1', prefix }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-primary">{label}</span>
      <span className="relative block">
        {prefix ? <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline">{prefix}</span> : null}
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(event) => onChange(id, event.target.value)}
          min={min}
          max={max}
          step={step}
          placeholder={type === 'number' ? '0' : undefined}
          className={`w-full rounded-lg border border-border-strong bg-white py-3 text-on-surface outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15 ${prefix ? 'pl-8 pr-3' : 'px-3'}`}
        />
      </span>
    </label>
  )
}

function Choice({ label, name, value, onChange, options = [['yes', 'Yes'], ['no', 'No']] }) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold text-primary">{label}</legend>
      <div className="grid grid-cols-2 gap-2">
        {options.map(([optionValue, optionLabel]) => (
          <label key={optionValue} className={`cursor-pointer rounded-lg border px-4 py-3 text-center text-sm font-semibold transition ${value === optionValue ? 'border-secondary bg-secondary/10 text-secondary' : 'border-border-strong bg-white text-on-surface-variant hover:border-secondary/50'}`}>
            <input className="sr-only" type="radio" name={name} value={optionValue} checked={value === optionValue} onChange={() => onChange(name, optionValue)} />
            {optionLabel}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function calculate(data) {
  const rules = RULES[data.taxYear]
  const status = data.marital === 'married' ? (data.filingJointly === 'yes' ? 'marriedJoint' : 'marriedSeparate') : data.survivingSpouse === 'yes' ? 'surviving' : data.headOfHousehold === 'yes' ? 'head' : 'single'
  const spouseIncluded = status === 'marriedJoint'
  const earnedIncome = number(data.wages) + (spouseIncluded ? number(data.spouseWages) : 0) + Math.max(0, number(data.businessIncome)) + (spouseIncluded ? Math.max(0, number(data.spouseBusinessIncome)) : 0)
  const investmentIncome = number(data.interest) + number(data.dividends) + Math.max(0, number(data.shortCapitalGain)) + Math.max(0, number(data.longCapitalGain))
  const totalIncome = number(data.wages) + number(data.businessIncome) + number(data.interest) + number(data.unemployment) + number(data.dividends) + number(data.shortCapitalGain) + number(data.longCapitalGain) + number(data.stateRefund) + number(data.pensions) + number(data.socialSecurity) + number(data.otherIncome) + (spouseIncluded ? number(data.spouseWages) + number(data.spouseBusinessIncome) : 0)
  const ira = data.iraContributions === 'yes' ? number(data.iraAmount) : 0
  const studentLoan = Math.min(2500, number(data.studentLoanInterest))
  const adjustments = Math.max(0, ira + studentLoan)
  const agi = Math.max(0, totalIncome - adjustments)
  const birthYear = data.birthDate ? new Date(`${data.birthDate}T00:00:00`).getFullYear() : 9999
  const taxpayerSenior = Number(data.taxYear) - birthYear >= 65
  const spouseSenior = spouseIncluded && Number(data.taxYear) - number(data.spouseBirthYear) >= 65
  const seniorCount = Number(taxpayerSenior) + Number(spouseSenior)
  const seniorStandard = seniorCount * rules.seniorStandard[status]
  const seniorBonusThreshold = spouseIncluded ? 150000 : 75000
  const seniorBonus = seniorCount * Math.max(0, 6000 - Math.max(0, agi - seniorBonusThreshold) * .06)
  const standardDeduction = rules.standard[status] + seniorStandard + seniorBonus
  const saltCap = spouseIncluded ? 40000 : status === 'marriedSeparate' ? 20000 : 40000
  const deductibleMedical = Math.max(0, number(data.medicalExpenses) - agi * .075)
  const itemized = deductibleMedical + Math.min(saltCap, number(data.stateLocalTaxes)) + number(data.mortgageInterest) + number(data.charitable)
  const baseDeduction = Math.max(standardDeduction, itemized)
  const qbiDeduction = Math.min(Math.max(0, number(data.businessDeduction)), Math.max(0, agi - baseDeduction) * .20)
  const deductions = baseDeduction + qbiDeduction
  const taxableIncome = Math.max(0, agi - deductions)
  const preferentialIncome = Math.max(0, Math.min(number(data.qualifiedDividends), number(data.dividends))) + Math.max(0, number(data.longCapitalGain))
  const ordinaryTaxable = Math.max(0, taxableIncome - preferentialIncome)
  const ordinaryTax = progressiveTax(ordinaryTaxable, rules.brackets[status])
  const [zeroCap, fifteenCap] = rules.capitalGains[status]
  const zeroRateGain = Math.min(preferentialIncome, Math.max(0, zeroCap - ordinaryTaxable))
  const fifteenRateGain = Math.min(preferentialIncome - zeroRateGain, Math.max(0, fifteenCap - Math.max(zeroCap, ordinaryTaxable)))
  const twentyRateGain = Math.max(0, preferentialIncome - zeroRateGain - fifteenRateGain)
  const incomeTax = ordinaryTax + fifteenRateGain * .15 + twentyRateGain * .20
  const selfEmploymentProfit = Math.max(0, number(data.businessIncome) + (spouseIncluded ? number(data.spouseBusinessIncome) : 0))
  const selfEmploymentTax = selfEmploymentProfit * .9235 * .153
  const children = Math.max(0, Math.floor(number(data.dependentsUnder17)))
  const otherDependents = Math.max(0, Math.floor(number(data.dependentsStudent) + number(data.otherDependents)))
  const ctcPhaseoutStart = spouseIncluded ? 400000 : 200000
  const ctcPhaseout = Math.ceil(Math.max(0, agi - ctcPhaseoutStart) / 1000) * 50
  const childCreditAvailable = Math.max(0, children * rules.childCredit + otherDependents * 500 - ctcPhaseout)
  const childcareCredit = data.childcare === 'yes' ? Math.min(number(data.childcareExpenses), children + otherDependents > 1 ? 6000 : 3000) * .20 : 0
  const energyCredit = data.energyImprovements === 'yes' ? Math.min(3200, number(data.energyExpenses) * .30) : 0
  const educationCredit = data.educationExpenses === 'yes' ? Math.min(2500, Math.min(2000, number(data.educationAmount)) + Math.max(0, Math.min(2000, number(data.educationAmount) - 2000)) * .25) : 0
  const nonrefundableCredits = childCreditAvailable + childcareCredit + energyCredit + educationCredit * .60 + number(data.otherCredits)
  const taxBeforePayments = Math.max(0, incomeTax + selfEmploymentTax - nonrefundableCredits)
  const unusedCtc = Math.max(0, childCreditAvailable - (incomeTax + selfEmploymentTax))
  const additionalChildCredit = Math.min(unusedCtc, children * rules.refundableChildCredit, Math.max(0, earnedIncome - 2500) * .15)
  const eitcChildren = Math.min(3, children + otherDependents)
  const eitcRule = rules.eitc[eitcChildren]
  const eitcEnd = spouseIncluded ? eitcRule.jointEnd : eitcRule.singleEnd
  const estimatedEitc = investmentIncome <= rules.eitcInvestmentLimit && earnedIncome > 0 ? Math.max(0, eitcRule.max * (1 - Math.max(0, agi - eitcEnd * .55) / (eitcEnd * .45))) : 0
  const refundCredits = additionalChildCredit + educationCredit * .40 + estimatedEitc
  const payments = number(data.withholding) + (spouseIncluded ? number(data.spouseWithholding) : 0)
  const net = payments + refundCredits - taxBeforePayments
  return { status, totalIncome, adjustments, agi, deductions, qbiDeduction, taxableIncome, incomeTax, selfEmploymentTax, nonrefundableCredits, payments, refundCredits, refund: Math.max(0, net), balance: Math.max(0, -net), standardUsed: standardDeduction >= itemized, dependents: children + otherDependents }
}

function Results({ data, result }) {
  const rows = [
    ['Total income', result.totalIncome], ['Adjustments', -result.adjustments], ['Deductions', -result.deductions],
    ['Taxable income', result.taxableIncome, true], ['Federal income tax', result.incomeTax],
    ['Self-employment and other taxes', result.selfEmploymentTax], ['Credits', -result.nonrefundableCredits],
    ['Withholding and estimated payments', -result.payments], ['Refundable credits', -result.refundCredits],
  ]
  return (
    <div className="space-y-6">
      <div className={`rounded-xl p-6 text-white ${result.refund > 0 ? 'bg-irs-verified' : 'bg-primary'}`}>
        <p className="text-sm font-semibold text-white/75">Estimated {result.refund > 0 ? 'federal refund' : result.balance > 0 ? 'federal balance due' : 'federal result'}</p>
        <p className="mt-1 font-display text-4xl font-bold">{money(result.refund || result.balance)}</p>
        <p className="mt-2 text-sm text-white/75">Tax year {data.taxYear} · {result.status.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase())}</p>
      </div>
      <div className="divide-y divide-border-subtle rounded-xl border border-border-subtle bg-white">
        {rows.map(([label, value, strong]) => (
          <div key={label} className={`flex items-center justify-between gap-4 px-4 py-3 ${strong ? 'bg-surface-container-low font-bold text-primary' : 'text-on-surface-variant'}`}>
            <span>{label}</span><span className="font-mono-financial font-semibold">{value < 0 ? `−${money(Math.abs(value))}` : money(value)}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-4 text-sm text-on-surface-variant">
        <strong className="text-primary">Calculation notes:</strong> {result.standardUsed ? 'The standard deduction produced the larger estimate.' : 'Your entered itemized deductions produced the larger estimate.'} This tool estimates federal tax only and does not prepare a return or provide tax advice.
      </div>
      <Link to="/contact-us" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3.5 font-semibold text-white transition hover:bg-secondary-container">
        Review this estimate with a tax professional
        <span className="material-symbols-outlined text-lg">calendar_today</span>
      </Link>
    </div>
  )
}

export default function TaxCalculator() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(initialData)
  const [showAllIncome, setShowAllIncome] = useState(false)
  const result = useMemo(() => calculate(data), [data])
  const spouse = data.marital === 'married'

  const update = (name, value) => setData((current) => ({ ...current, [name]: value }))
  const goTo = (nextStep) => {
    setStep(Math.max(0, Math.min(STEPS.length - 1, nextStep)))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-surface-canvas">
      <section className="border-b border-border-subtle bg-primary py-10 text-white lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-secondary-fixed">
                <span className="material-symbols-outlined text-base">calculate</span> 2026 &amp; 2027 IRS rules
              </div>
              <h1 className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Income Tax Calculator</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-primary-fixed-dim">Answer a few questions about your filing status, income, deductions, and credits to estimate your refund or balance due.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <nav aria-label="Calculator progress" className="mb-8 overflow-x-auto pb-2">
          <ol className="flex min-w-[620px] items-center">
            {STEPS.map((label, index) => (
              <li key={label} className="flex flex-1 items-center last:flex-none">
                <button type="button" onClick={() => index <= step && goTo(index)} disabled={index > step} className={`flex items-center gap-2 text-sm font-semibold ${index <= step ? 'text-secondary' : 'text-outline'}`}>
                  <span className={`grid h-8 w-8 place-items-center rounded-full border ${index < step ? 'border-secondary bg-secondary text-white' : index === step ? 'border-secondary bg-white' : 'border-border-strong bg-surface-container-low'}`}>{index < step ? <span className="material-symbols-outlined text-base">check</span> : index + 1}</span>
                  <span>{label}</span>
                </button>
                {index < STEPS.length - 1 ? <span className={`mx-3 h-px flex-1 ${index < step ? 'bg-secondary' : 'bg-border-strong'}`} /> : null}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-2xl border border-border-subtle bg-white p-5 shadow-[0_16px_50px_-36px_rgba(16,42,67,.45)] sm:p-8">
            <div className="mb-7 border-b border-border-subtle pb-5">
              <p className="text-sm font-semibold text-secondary">Step {step + 1} of {STEPS.length}</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-primary">{STEPS[step]}</h2>
            </div>

            {step === 0 ? (
              <div className="space-y-8">
                <section>
                  <h3 className="mb-4 font-display text-lg font-bold text-primary">Personal information</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block"><span className="mb-2 block text-sm font-semibold text-primary">Tax year</span><select value={data.taxYear} onChange={(event) => update('taxYear', event.target.value)} className="w-full rounded-lg border border-border-strong bg-white px-3 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15"><option value="2026">2026</option><option value="2027">2027</option></select></label>
                    <Field id="birthDate" label="Date of birth" value={data.birthDate} onChange={update} type="date" />
                    <Choice label="Did you use Bright Tax Filing last year?" name="usedBrightTax" value={data.usedBrightTax} onChange={update} />
                    <Choice label="Are you single or married?" name="marital" value={data.marital} onChange={update} options={[["single", "Single"], ["married", "Married"]]} />
                    {!spouse ? <Choice label="Do you qualify as head of household?" name="headOfHousehold" value={data.headOfHousehold} onChange={update} /> : null}
                    {!spouse ? <Choice label="Are you a qualifying surviving spouse?" name="survivingSpouse" value={data.survivingSpouse} onChange={update} /> : null}
                    {spouse ? <Choice label="Are you filing jointly?" name="filingJointly" value={data.filingJointly} onChange={update} /> : null}
                    {spouse ? <Field id="spouseBirthYear" label="What year was your spouse born?" value={data.spouseBirthYear} onChange={update} min="1900" max={data.taxYear} /> : null}
                  </div>
                </section>
                <section className="border-t border-border-subtle pt-7">
                  <h3 className="mb-4 font-display text-lg font-bold text-primary">Dependents</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Choice label="Can you be claimed as a dependent?" name="claimedDependent" value={data.claimedDependent} onChange={update} />
                    <Choice label="Do you have any dependents?" name="hasDependents" value={data.hasDependents} onChange={update} />
                    {data.hasDependents === 'yes' ? <><Field id="dependentsUnder17" label="Dependents age 16 or under" value={data.dependentsUnder17} onChange={update} max="20" /><Field id="dependentsStudent" label="Full-time students age 17–23" value={data.dependentsStudent} onChange={update} max="20" /><Field id="otherDependents" label="Other dependents" value={data.otherDependents} onChange={update} max="20" /></> : null}
                  </div>
                </section>
              </div>
            ) : null}

            {step === 1 ? (
              <div>
                <p className="mb-6 text-sm text-on-surface-variant">Enter annual amounts before deductions. Use a negative number for a business or capital loss.</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  {incomeFields.filter(([, , condition], index) => (!condition || spouse) && (showAllIncome || index < 8)).map(([id, label]) => <Field key={id} id={id} label={label} value={data[id]} onChange={update} min={id.includes('Income') || id.includes('CapitalGain') ? undefined : '0'} prefix="$" />)}
                </div>
                {!showAllIncome ? <button type="button" onClick={() => setShowAllIncome(true)} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-secondary-container">View all income fields <span className="material-symbols-outlined text-lg">expand_more</span></button> : null}
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Choice label="Do you have any deductible IRA contributions?" name="iraContributions" value={data.iraContributions} onChange={update} />
                  {data.iraContributions === 'yes' ? <Field id="iraAmount" label="Deductible IRA contribution" value={data.iraAmount} onChange={update} prefix="$" /> : null}
                  {spouse ? <Choice label="Is your spouse covered by a retirement plan?" name="spouseRetirementPlan" value={data.spouseRetirementPlan} onChange={update} /> : null}
                  {deductionFields.map(([id, label]) => <Field key={id} id={id} label={label} value={data[id]} onChange={update} prefix="$" />)}
                </div>
                <div className="rounded-xl bg-surface-container-low p-4 text-sm text-on-surface-variant"><span className="material-symbols-outlined mr-2 text-secondary">info</span>The calculator compares your itemized deductions with the {data.taxYear} standard deduction and uses the larger estimate.</div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-7">
                <section><h3 className="mb-4 font-display text-lg font-bold text-primary">Childcare</h3><div className="grid gap-5 sm:grid-cols-2"><Choice label="Do you pay child care expenses?" name="childcare" value={data.childcare} onChange={update} />{data.childcare === 'yes' ? <Field id="childcareExpenses" label="Qualified child care expenses" value={data.childcareExpenses} onChange={update} prefix="$" /> : null}</div></section>
                <section className="border-t border-border-subtle pt-6"><h3 className="mb-4 font-display text-lg font-bold text-primary">Energy</h3><div className="grid gap-5 sm:grid-cols-2"><Choice label="Did you make home energy-saving improvements?" name="energyImprovements" value={data.energyImprovements} onChange={update} />{data.energyImprovements === 'yes' ? <Field id="energyExpenses" label="Qualified improvement expenses" value={data.energyExpenses} onChange={update} prefix="$" /> : null}</div></section>
                <section className="border-t border-border-subtle pt-6"><h3 className="mb-4 font-display text-lg font-bold text-primary">Education</h3><div className="grid gap-5 sm:grid-cols-2"><Choice label="Did you pay college education expenses?" name="educationExpenses" value={data.educationExpenses} onChange={update} />{data.educationExpenses === 'yes' ? <Field id="educationAmount" label="Qualified education expenses" value={data.educationAmount} onChange={update} prefix="$" /> : null}</div></section>
                <section className="border-t border-border-subtle pt-6"><h3 className="mb-4 font-display text-lg font-bold text-primary">Miscellaneous</h3><div className="max-w-sm"><Field id="otherCredits" label="Total amount of other nonrefundable credits" value={data.otherCredits} onChange={update} prefix="$" /></div></section>
              </div>
            ) : null}

            {step === 4 ? <Results data={data} result={result} /> : null}

            {step < 4 ? <div className="mt-8 flex items-center justify-between border-t border-border-subtle pt-6">{step > 0 ? <button type="button" onClick={() => goTo(step - 1)} className="rounded-lg border border-border-strong px-5 py-3 font-semibold text-primary transition hover:border-secondary hover:text-secondary">Back</button> : <span /> }<button type="button" onClick={() => goTo(step + 1)} className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition hover:bg-secondary-container">{step === 3 ? 'View results' : 'Next'}<span className="material-symbols-outlined text-lg">arrow_forward</span></button></div> : <button type="button" onClick={() => goTo(0)} className="mt-6 text-sm font-bold text-secondary hover:text-secondary-container">Start a new estimate</button>}
          </main>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-primary p-6 text-white">
              <div className="flex items-center justify-between"><p className="font-display text-lg font-bold">Estimate summary</p><span className="rounded-full bg-white/10 px-2.5 py-1 text-xs">{data.taxYear}</span></div>
              <div className="mt-5 border-t border-white/15 pt-5"><p className="text-xs text-primary-fixed-dim">{result.refund > 0 ? 'Estimated refund' : 'Estimated balance due'}</p><p className="mt-1 font-display text-3xl font-bold">{money(result.refund || result.balance)}</p></div>
              <dl className="mt-5 space-y-3 text-sm"><div className="flex justify-between gap-3"><dt className="text-primary-fixed-dim">Income</dt><dd>{money(result.totalIncome)}</dd></div><div className="flex justify-between gap-3"><dt className="text-primary-fixed-dim">Taxable income</dt><dd>{money(result.taxableIncome)}</dd></div><div className="flex justify-between gap-3"><dt className="text-primary-fixed-dim">Dependents</dt><dd>{result.dependents}</dd></div></dl>
            </div>
            <div className="rounded-xl border border-border-subtle bg-white p-5"><div className="flex gap-3"><span className="material-symbols-outlined text-irs-verified">verified_user</span><div><h3 className="font-bold text-primary">Rules verified by tax year</h3><p className="mt-1 text-sm leading-6 text-on-surface-variant">Uses published IRS brackets, standard deductions, capital-gains thresholds, and key credit limits for 2026 and 2027.</p></div></div></div>
            <p className="px-1 text-xs leading-5 text-outline">For planning purposes only. Results may differ based on eligibility details, state taxes, AMT, NIIT, Social Security taxation, and future law or IRS guidance.</p>
          </aside>
        </div>
      </section>
    </div>
  )
}

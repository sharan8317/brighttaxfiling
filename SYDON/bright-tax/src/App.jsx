import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import IndividualTaxPreparation from './pages/IndividualTaxPreparation'
import NonresidentTaxFiling from './pages/NonresidentTaxFiling'
import BusinessTaxServices from './pages/BusinessTaxServices'
import ContactUs from './pages/ContactUs'
import TaxCalculator from './pages/TaxCalculator'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-canvas text-on-surface">
      <Navbar />
      <main className="flex-1 w-full pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="individual-tax-preparation" element={<IndividualTaxPreparation />} />
          <Route path="nonresident-tax-filing" element={<NonresidentTaxFiling />} />
          <Route path="business-tax-services" element={<BusinessTaxServices />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="tax-calculator" element={<TaxCalculator />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

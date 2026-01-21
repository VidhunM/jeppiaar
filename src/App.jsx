import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AdmissionProcedure from './pages/AdmissionProcedure';
import ProspectDownload from './pages/ProspectDownload';
import ApplyOnline from './pages/ApplyOnline';
import CounsellingChildPsychology from './pages/CounsellingChildPsychology';
import CounsellingOrganizationalPsychology from './pages/CounsellingOrganizationalPsychology';
import CounsellingForensicPsychology from './pages/CounsellingForensicPsychology';
import CounsellingArtTherapy from './pages/CounsellingArtTherapy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import { initScrollAnimations } from './utils/scrollAnimations';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reinitialize scroll animations on route change
    setTimeout(() => {
      initScrollAnimations();
    }, 100);
  }, [pathname]);

  return null;
}

function AppLayout() {
  const location = useLocation();
  // Keep normal website chrome (footer/whatsapp) in view mode.
  // Print/PDF is handled via @media print styles on the form page.

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counselling-child-psychology" element={<CounsellingChildPsychology />} />
          <Route path="/counselling-organizational-psychology" element={<CounsellingOrganizationalPsychology />} />
          <Route path="/counselling-forensic-psychology" element={<CounsellingForensicPsychology />} />
          <Route path="/counselling-art-therapy" element={<CounsellingArtTherapy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/cancellation" element={<CancellationPolicy />} />
          <Route path="/leadership" element={<About />} />
          <Route path="/research" element={<Gallery />} />
          <Route path="/admission-procedure" element={<AdmissionProcedure />} />
          <Route path="/apply-online" element={<ApplyOnline />} />
          <Route path="/admission-form-download" element={<ProspectDownload />} />
          {/* Backward compatible route */}
          <Route path="/prospect-download" element={<Navigate to="/admission-form-download" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Initialize scroll animations on mount
    initScrollAnimations();
  }, []);

  return (
    <ErrorBoundary>
      <AppProvider>
        <Router>
          <ScrollToTop />
          <AppLayout />
        </Router>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;


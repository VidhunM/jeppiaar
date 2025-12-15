import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import CounsellingChildPsychology from './pages/CounsellingChildPsychology';
import CounsellingOrganizationalPsychology from './pages/CounsellingOrganizationalPsychology';
import CounsellingForensicPsychology from './pages/CounsellingForensicPsychology';
import CounsellingArtTherapy from './pages/CounsellingArtTherapy';
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
                <Route path="/leadership" element={<About />} />
                <Route path="/research" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;


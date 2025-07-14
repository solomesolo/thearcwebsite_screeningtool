import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import DNAParticles from './DNAParticles.jsx';
import Footer from './Footer.jsx';

// Placeholder components for missing pages
function PrivacyPolicy() {
  return <div className="p-12 text-white">Privacy Policy coming soon.</div>;
}
function TermsAndConditions() {
  return <div className="p-12 text-white">Terms and Conditions coming soon.</div>;
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-black text-white">
        <DNAParticles />
        <div className="flex flex-1">
          {/* Left: Logo */}
          <div className="hidden md:flex flex-col items-center justify-center w-32 z-10">
            <div className="text-2xl font-extrabold tracking-widest text-fuchsia-400 select-none">TheArc</div>
          </div>
          {/* Center: Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center z-10">
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
            </Routes>
          </main>
          {/* Right: Vertical Nav */}
          <nav className="hidden md:flex flex-col items-center justify-center w-32 space-y-8 z-10">
            <Link to="/about" className="hover:text-fuchsia-400 transition-colors text-lg font-medium">About</Link>
            <Link to="/contact" className="hover:text-fuchsia-400 transition-colors text-lg font-medium">Apply</Link>
            <Link to="/privacy" className="hover:text-fuchsia-400 transition-colors text-sm mt-8">Privacy</Link>
            <Link to="/terms" className="hover:text-fuchsia-400 transition-colors text-sm">Terms</Link>
          </nav>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

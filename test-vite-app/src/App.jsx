import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DNAParticles from './DNAParticles.jsx';
import './index.css';

// Google Fonts import for Montserrat
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white font-montserrat overflow-hidden">
      <DNAParticles />
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-10 z-20">
        <div className="text-3xl font-bold tracking-tight text-white select-none">TheArc</div>
        <nav className="flex space-x-10 text-lg font-normal">
          <Link to="/about" className="hover:text-fuchsia-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-fuchsia-400 transition-colors">Contact</Link>
        </nav>
      </div>
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center z-10 mt-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight max-w-4xl mx-auto" style={{textShadow: '0 2px 24px #000'}}>
          Longevity isn’t a product. It’s a process.<br className="hidden md:block" />
          Most people drift — we create structure, clarity, and belonging.
        </h1>
        <p className="text-lg md:text-2xl font-normal mb-10 max-w-2xl mx-auto text-white/90">
          A private longevity circle guided by science, precision, and deep personalization.<br />
          Built around you. Evolving with you.<br />
          Each cohort limited to 100 people.
        </p>
        <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-fuchsia-800 via-fuchsia-600 to-fuchsia-400 text-white shadow-lg border-2 border-fuchsia-700 hover:scale-105 transition-all">
          Apply to Join
          <span className="ml-3 text-2xl">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
}

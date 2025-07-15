"use client";
import Link from "next/link";
import DNAParticles from "./DNAParticles";

export default function Hero() {
  return (
    <div className="relative w-full bg-black text-white font-montserrat flex flex-col">
      <DNAParticles />
      {/* Header: Logo/Menu */}
      <div className="fixed top-[5vh] left-0 z-30 w-full pointer-events-none">
        <div className="flex justify-between items-start w-full px-12 pointer-events-auto">
          <div className="text-4xl font-bold tracking-tight text-white select-none">TheArc</div>
          <nav className="flex flex-col space-y-2 text-lg font-normal items-end">
            <Link href="/about" className="hover:text-fuchsia-400 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-fuchsia-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center z-10 pt-32 pb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight max-w-2xl mx-auto" style={{textShadow: '0 2px 24px #000'}}>
          Longevity isn’t a product.<br />
          It’s a process.<br />
          Most people drift.<br />
          We create structure, clarity, and belonging.
        </h1>
        <p className="text-base md:text-lg font-normal mb-8 max-w-lg mx-auto text-white/90">A private longevity circle guided by science, precision, and deep personalization.<br />Built around you. Evolving with you.<br />Each cohort limited to 100 people.</p>
        <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold bg-gradient-to-r from-fuchsia-800 via-fuchsia-600 to-fuchsia-400 text-white shadow-lg border-2 border-fuchsia-700 hover:scale-105 transition-all">
          Apply to Join
          <span className="ml-3 text-xl">&rarr;</span>
        </Link>
      </div>
    </div>
  );
} 
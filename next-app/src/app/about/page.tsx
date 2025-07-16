'use client';
import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <aside className="fixed top-0 right-0 h-screen w-full sm:w-[600px] bg-black text-white z-50 shadow-2xl flex flex-col items-center px-4 py-8 sm:px-8 sm:py-16 animate-slide-in overflow-y-auto font-montserrat custom-scrollbar">
      <Link href="/" className="absolute top-6 right-8 text-3xl text-gray-400 hover:text-fuchsia-400 transition-colors" aria-label="Close About">&times;</Link>
      <div className="w-full max-w-2xl flex flex-col items-start mt-4 pt-16 sm:pt-2 min-h-0 flex-1 pb-40 font-montserrat overflow-y-auto">
        <h1 className="text-4xl font-extrabold mb-6 font-montserrat">TheArc</h1>
        <p className="text-lg mb-8 text-gray-200 max-w-2xl">
          What if your health wasn’t a burden, but a system?
        </p>
        <div className="space-y-4 text-gray-200 text-base mb-10">
          <p>You don’t need 20 biohacks.<br />
          You don’t need to perform health like a routine.<br />
          You need TheArc, which evolves with you.<br />
          This is a 6- or 12-month longevity protocol built from scientific evidence, not trends.<br />
          Rooted in personalisation. Designed to last.</p>
        </div>
        <h2 className="text-3xl font-bold mb-6 mt-10">Behind the curtains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div>
            <h3 className="text-xl font-semibold mb-2">Personal Operating System</h3>
            <p className="text-base text-gray-200">Health begins when rhythm replaces routine.<br />Your path adapts to your health data, not to someone else’s standard.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quiet Circles, Deep Insight</h3>
            <p className="text-base text-gray-200">Ideas land differently in the right space.<br />Expert-led sessions and communication rooms—each designed to refine direction, not add noise.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">No Overwhelm. No Guessing. No Performance.</h3>
            <p className="text-base text-gray-200">Most health advice creates friction. This removes it. What remains is the small percentage that quietly changes everything.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Evolving With You. Even after the program.</h3>
            <p className="text-base text-gray-200">Step by step, your system becomes second nature: flexible, intuitive, and lasting well beyond the program.</p>
          </div>
        </div>
      </div>
    </aside>
  );
} 
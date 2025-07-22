"use client";

import Link from "next/link";
import DNAParticles from "../components/DNAParticles";
import DNABackground from "../components/DNABackground";
import React, { useRef, useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-montserrat">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen h-screen overflow-visible px-4 md:px-8 py-0 md:py-0 font-montserrat break-words">
        {/* Show DNAParticles on desktop, DNABackground on mobile */}
        <div className="hidden md:block w-full h-full absolute top-0 left-0 z-0">
          <DNAParticles />
        </div>
        <div className="block md:hidden w-full h-full absolute top-0 left-0 z-0" style={{opacity: 0.25}}>
          <DNABackground />
        </div>
        {/* Top Bar */}
        <div className="absolute top-[5vh] left-0 w-full flex items-center justify-between px-6 py-3 z-20">
          <div className="text-2xl font-bold tracking-tight text-white select-none font-montserrat">TheArc</div>
          <nav className="flex space-x-4 text-lg font-semibold">
            <Link href="/contact" className="border border-fuchsia-400 text-fuchsia-200 bg-transparent hover:bg-fuchsia-900/10 hover:text-fuchsia-300 hover:ring-2 hover:ring-fuchsia-400/40 backdrop-blur-sm transition-all font-semibold text-lg px-6 py-2 rounded-full tracking-wide font-montserrat">Apply to Join</Link>
          </nav>
        </div>
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-center z-10 w-full min-h-screen break-words" style={{minHeight: '100vh'}}>
          <div className="pt-28 md:pt-32 w-full">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-5 leading-tight max-w-2xl mx-auto font-montserrat break-words" style={{textShadow: '0 2px 24px #000'}}>
              Longevity isn’t a product. It’s a process.<br />
              <span className="block mt-2">Most people drift — we create structure, clarity, and belonging.</span>
            </h1>
            <p className="text-sm md:text-lg font-normal mb-6 max-w-lg mx-auto text-white/90 font-montserrat break-words">A private longevity circle guided by science, precision, and deep personalization.<br />Built around you. Evolving with you.<br />Each cohort limited to 100 people.</p>
            <Link href="/contact" className="inline-flex items-center px-6 py-2.5 rounded-full text-sm md:text-base font-semibold bg-gradient-to-r from-fuchsia-800 via-fuchsia-600 to-fuchsia-400 text-white shadow-lg border-2 border-fuchsia-700 hover:scale-105 transition-all font-montserrat">
              Apply to Join
              <span className="ml-2 text-lg">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
      {/* SYSTEM STATEMENT (3 columns with numbers, subtitle, headers, and supporting text) */}
      <section className="w-full bg-black flex flex-col justify-center items-center px-4 py-12 md:py-24 font-montserrat overflow-visible break-words">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-8 drop-shadow-lg text-center leading-[1.15] pb-2 break-words">The Arc doesn’t give you a plan. It gives you a system.</h2>
        <p className="text-base md:text-2xl font-medium text-white/80 text-center max-w-3xl mb-10 md:mb-14 break-words">One that understands your biology, adapts with your life, and helps you make smarter health decisions month after month.</p>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center text-center relative overflow-visible break-words">
          {/* 1 */}
          <div className="relative flex flex-col items-center text-center h-full justify-between px-2 md:px-4 z-10 overflow-visible break-words">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
              <span className="text-[7rem] md:text-[10rem] font-extrabold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent opacity-15 leading-none">1</span>
            </span>
            <div className="relative z-10 flex flex-col flex-1 justify-between h-full w-full">
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-white mt-0 font-montserrat break-words">It evolves with you.</h3>
              <p className="text-base md:text-lg font-normal text-white/90 break-words">Your protocol isn’t locked in. It changes as your data does, guided by clear markers of what’s improving, and where to focus next.</p>
            </div>
          </div>
          {/* 2 */}
          <div className="relative flex flex-col items-center text-center h-full justify-between px-2 md:px-4 z-10 overflow-visible break-words">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
              <span className="text-[7rem] md:text-[10rem] font-extrabold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent opacity-15 leading-none">2</span>
            </span>
            <div className="relative z-10 flex flex-col flex-1 justify-between h-full w-full">
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-white mt-0 font-montserrat break-words">It blends human and machine.</h3>
              <p className="text-base md:text-lg font-normal text-white/90 break-words">AI helps you spot patterns early. Experts help you make sense of them. Nothing generic. No noise.</p>
            </div>
          </div>
          {/* 3 */}
          <div className="relative flex flex-col items-center text-center h-full justify-between px-2 md:px-4 z-10 overflow-visible break-words">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
              <span className="text-[7rem] md:text-[10rem] font-extrabold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent opacity-15 leading-none">3</span>
            </span>
            <div className="relative z-10 flex flex-col flex-1 justify-between h-full w-full">
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-white mt-0 font-montserrat break-words">It’s focused on what truly lasts.</h3>
              <p className="text-base md:text-lg font-normal text-white/90 break-words">Not trends. Not products. But the resilience indicators science connects to long life and active body.</p>
            </div>
          </div>
        </div>
      </section>
      <ArcFeatures />
      <BuiltForSection />
      <ArcPricing />
      <BeyondProgramSection />
      <SignUpNowSection />
    </div>
  );
}

function ArcFeatures() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number|null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const features = [
    {
      title: "A Deep Health Assessment That Keeps Listening",
      number: "①",
      short: (
        <>
          Your journey starts with a personal baseline: sleep, movement, mood, metabolism, stress, nutrition - all in context.<br />
          This isn’t a snapshot. It’s a moving picture of your biology.
        </>
      ),
      long: (
        <>
          Your journey starts with a personal baseline: sleep, movement, mood, metabolism, stress, nutrition - all in context.<br /><br />
          Then, instead of stopping there, the system adapts:<br />
          <ul className="list-disc list-inside text-left mx-auto max-w-md text-sm md:text-base text-white/80 mt-2 mb-2">
            <li>Your health trends are quietly tracked over time</li>
            <li>Clear summaries show what’s improving - and what needs focus</li>
            <li>Each quarter, your protocol adjusts to reflect new signals</li>
            <li>Everything you see can be downloaded or shared with your doctor</li>
          </ul>
          This isn’t a snapshot. It’s a moving picture of your biology.
        </>
      ),
    },
    {
      title: "A Monthly Rhythm That Fits into Life",
      number: "②",
      short: (
        <>
          Each month, you’ll focus on one essential pillar of health - and receive the structure to make real changes without overwhelm.<br />
          You act, observe, adjust - with less guesswork, more confidence.
        </>
      ),
      long: (
        <>
          Each month, you’ll focus on one essential pillar of health - and receive the structure to make real changes without overwhelm.<br /><br />
          For example:<br />
          <ul className="list-disc list-inside text-left mx-auto max-w-md text-sm md:text-base text-white/80 mt-2 mb-2">
            <li>Reset circadian rhythm and repair deep sleep</li>
            <li>Calm systemic inflammation</li>
            <li>Improve insulin response and energy stability</li>
            <li>Build nervous system resilience</li>
          </ul>
          You’ll receive:<br />
          <ul className="list-disc list-inside text-left mx-auto max-w-md text-sm md:text-base text-white/80 mt-2 mb-2">
            <li>A tailored protocol - built from your data</li>
            <li>Concise, useful explanations (not noise)</li>
            <li>Optional tests or tools to go deeper</li>
          </ul>
          You act, observe, adjust - with less guesswork, more confidence.
        </>
      ),
    },
    {
      title: "The At-Home Diagnostic Marketplace (Coming September 2025)",
      number: "③",
      short: (
        <>
          Find trusted, third-party services - reviewed and clearly explained, so you can go deeper when needed.<br />
          Even non-members can use this resource - but The Arc members receive context and integration.
        </>
      ),
      long: (
        <>
          Find trusted, third-party services - reviewed and clearly explained, so you can go deeper when needed.<br /><br />
          Browse:<br />
          <ul className="list-disc list-inside text-left mx-auto max-w-md text-sm md:text-base text-white/80 mt-2 mb-2">
            <li>Biomarker and epigenetic testing</li>
            <li>Metabolic, gut, and hormonal panels</li>
            <li>Recovery tools and sleep tech</li>
          </ul>
          Each listing will show what’s measured, why it matters, and how it fits into your longevity plan.<br /><br />
          Even non-members can use this resource - but The Arc members receive context and integration.
        </>
      ),
    },
    {
      title: "Time with Experts — Not Generic Advice",
      number: "④",
      short: (
        <>
          Time with Experts — Not Generic Advice<br />
          Instead of endless content, you’ll get access to conversations that matter.<br />
          These are not influencers or product ambassadors. They’re people working with data and humans - every day.
        </>
      ),
      long: (
        <>
          Time with Experts — Not Generic Advice<br />
          Instead of endless content, you’ll get access to conversations that matter.<br /><br />
          Monthly live sessions with researchers and clinicians in aging science, diagnostics, and prevention<br />
          Quiet spaces to ask personal health questions (asynchronously or 1:1)<br />
          The chance to go deeper, if and when you need<br />
          These are not influencers or product ambassadors. They’re people working with data and humans - every day.
        </>
      ),
    },
    {
      title: "A Cohort to Share With — If You Want",
      number: "⑤",
      short: (
        <>
          A Cohort to Share With — If You Want<br />
          You’ll be placed in a private, capped circle of fewer than 100 members.<br />
          You choose how visible or private your experience is.
        </>
      ),
      long: (
        <>
          A Cohort to Share With — If You Want<br />
          You’ll be placed in a private, capped circle of fewer than 100 members.<br /><br />
          This space isn’t noisy or performative. It’s a quiet thread of people building something similar:<br />
          Monthly check-ins and collective reflections<br />
          Optional in-person gatherings and longevity dinners<br />
          Shared insights, resources, and encouragement<br />
          You choose how visible or private your experience is.
        </>
      ),
    },
    {
      title: "The Knowledge Base (Coming September 2025)",
      number: "⑥",
      short: (
        <>
          Everything you learn - grounded, organized, and easy to return to.<br />
          Not a course. Not a content feed. A calm reference to support you for years.
        </>
      ),
      long: (
        <>
          The Knowledge Base (Coming September 2025)<br />
          Everything you learn - grounded, organized, and easy to return to.<br />
          Coming soon:<br />
          How to understand your biological age, HRV, and blood markers<br />
          How to interpret common (and uncommon) tests<br />
          Protocols built around prevention - not crisis<br />
          Source citations, research digests, and expert explainers<br />
          Not a course. Not a content feed. A calm reference to support you for years.
        </>
      ),
    },
  ];

  // Only use auto/manual scroll on mobile
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
      if (scrollRef.current) {
        const cardWidth = (scrollRef.current.firstChild as HTMLElement)?.offsetWidth || 0;
        scrollRef.current.scrollTo({
          left: cardWidth * ((active + 1) % features.length),
          behavior: 'smooth',
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [active, features.length]);

  // Manual scroll handler (mobile only)
  const scrollToIndex = (idx: number) => {
    setActive(idx);
    if (scrollRef.current && window.innerWidth < 768) {
      const cardWidth = (scrollRef.current.firstChild as HTMLElement)?.offsetWidth || 0;
      scrollRef.current.scrollTo({
        left: cardWidth * idx,
        behavior: 'smooth',
      });
    }
  };

  // Left/right button handlers (mobile only)
  const handleLeft = () => scrollToIndex((active - 1 + features.length) % features.length);
  const handleRight = () => scrollToIndex((active + 1) % features.length);

  return (
    <section className="w-full bg-black py-8 md:py-16 flex flex-col items-center px-2 md:px-0">
      <h2 className="text-xl md:text-4xl font-extrabold text-white text-center mb-4 md:mb-8 font-montserrat">Inside The Arc</h2>
      <p className="text-sm md:text-base text-white/80 text-center max-w-4xl mb-4 md:mb-10 font-normal md:font-medium font-montserrat">
        A full year of structure, support, and expert-led guidance — tailored to your real life.<br />
        No generic plans. No pressure to perform. Just the tools to take better care of your body, in a way that lasts.
      </p>
      {/* Desktop: grid, Mobile: scroll */}
      <div className="hidden md:grid grid-cols-3 gap-4 md:gap-8 w-full max-w-7xl px-2 md:px-4">
        {features.map((f, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-center md:items-start p-4 rounded-2xl shadow-md border-2 text-center md:text-left transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer font-montserrat
              ${expanded === i ? 'z-20 scale-110 bg-gradient-to-br from-fuchsia-700 via-fuchsia-600 to-purple-600 border-fuchsia-400 text-white shadow-2xl ring-2 ring-fuchsia-400/40 min-h-[420px] max-h-[900px] min-w-[480px] max-w-[640px]' : 'min-h-[220px] max-h-[320px] min-w-[380px] max-w-[520px] border-white/10 text-white/90 bg-black/80 hover:scale-105 hover:z-10 hover:border-fuchsia-400 hover:bg-black/60 hover:shadow-xl'}
              ${expanded !== null && expanded !== i ? 'filter blur-sm brightness-75 grayscale-[0.5] opacity-60 scale-95' : ''}`}
            onMouseEnter={() => setExpanded(i)}
            onMouseLeave={() => setExpanded(null)}
            onFocus={() => setExpanded(i)}
            onBlur={() => setExpanded(null)}
            style={{outline: 'none', overflow: 'hidden'}}
          >
            <span className="absolute top-2 left-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-fuchsia-500 to-purple-500 opacity-15 leading-none select-none pointer-events-none">
              {f.number}
            </span>
            <span className={`font-semibold ${expanded === i ? '' : 'text-lg'} mb-2 tracking-tight text-white mt-2`} style={{zIndex: 10}}>{f.title}</span>
            <span className="font-normal leading-relaxed text-white/90 mt-1 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] expanded-card-content" style={{zIndex: 10, maxHeight: expanded === i ? 900 : undefined, overflow: 'hidden', display: 'block'}}>
              {expanded === i ? f.long : f.short}
            </span>
          </div>
        ))}
      </div>
      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col gap-4 w-full px-2">
        {features.map((f, i) => (
          <div key={i} className={`relative flex flex-col items-center p-4 rounded-2xl shadow-md border-2 text-center min-h-[180px] bg-black/80 transition-all duration-300 cursor-pointer font-montserrat
            ${active === i ? 'scale-105 z-10 bg-gradient-to-br from-fuchsia-700 via-fuchsia-600 to-purple-600 border-fuchsia-400 text-white shadow-2xl ring-2 ring-fuchsia-400/40' : 'border-white/10 text-white/90 hover:scale-105 hover:z-10 hover:border-fuchsia-400 hover:bg-black/60 hover:shadow-xl'}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            tabIndex={0}
            style={{outline: 'none'}}
          >
            <span className="absolute top-2 left-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-fuchsia-500 to-purple-500 opacity-15 leading-none select-none pointer-events-none">
              {f.number}
            </span>
            <span className="font-semibold text-lg mb-2 tracking-tight text-white mt-2 font-montserrat" style={{zIndex: 10}}>{f.title}</span>
            <span className="text-sm font-normal leading-relaxed text-white/90 mt-1 font-montserrat" style={{zIndex: 10}}>{active === i ? f.long : f.short}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .sparkle-box {
          filter: none;
          opacity: 1;
        }
        .blurred-box {
          filter: blur(2px) grayscale(0.5) brightness(0.7);
          opacity: 0.6;
        }
        /* Sparkle for each color */
        .sparkle-box.border-fuchsia-400 { box-shadow: 0 0 0 0 #f472b6, 0 0 16px 4px #f472b6cc; animation: sparkle-fuchsia 1.2s infinite alternate; }
        .sparkle-box.border-fuchsia-300 { box-shadow: 0 0 0 0 #f0abfc, 0 0 16px 4px #f0abfcc0; animation: sparkle-fuchsia 1.2s infinite alternate; }
        .sparkle-box.border-yellow-300 { box-shadow: 0 0 0 0 #fde047, 0 0 16px 4px #fde047cc; animation: sparkle-yellow 1.2s infinite alternate; }
        .sparkle-box.border-green-300 { box-shadow: 0 0 0 0 #4ade80, 0 0 16px 4px #4ade80cc; animation: sparkle-green 1.2s infinite alternate; }
        .sparkle-box.border-blue-300 { box-shadow: 0 0 0 0 #60a5fa, 0 0 16px 4px #60a5facc; animation: sparkle-blue 1.2s infinite alternate; }
        .sparkle-box.border-purple-300 { box-shadow: 0 0 0 0 #a78bfa, 0 0 16px 4px #a78bfacc; animation: sparkle-purple 1.2s infinite alternate; }
        @keyframes sparkle-fuchsia {
          0% { box-shadow: 0 0 0 0 #f472b6, 0 0 16px 4px #f472b6cc; }
          50% { box-shadow: 0 0 0 0 #f472b6, 0 0 32px 8px #f472b6cc; }
          100% { box-shadow: 0 0 0 0 #f472b6, 0 0 16px 4px #f472b6cc; }
        }
        @keyframes sparkle-yellow {
          0% { box-shadow: 0 0 0 0 #fde047, 0 0 16px 4px #fde047cc; }
          50% { box-shadow: 0 0 0 0 #fde047, 0 0 32px 8px #fde047cc; }
          100% { box-shadow: 0 0 0 0 #fde047, 0 0 16px 4px #fde047cc; }
        }
        @keyframes sparkle-green {
          0% { box-shadow: 0 0 0 0 #4ade80, 0 0 16px 4px #4ade80cc; }
          50% { box-shadow: 0 0 0 0 #4ade80, 0 0 32px 8px #4ade80cc; }
          100% { box-shadow: 0 0 0 0 #4ade80, 0 0 16px 4px #4ade80cc; }
        }
        @keyframes sparkle-blue {
          0% { box-shadow: 0 0 0 0 #60a5fa, 0 0 16px 4px #60a5facc; }
          50% { box-shadow: 0 0 0 0 #60a5fa, 0 0 32px 8px #60a5facc; }
          100% { box-shadow: 0 0 0 0 #60a5fa, 0 0 16px 4px #60a5facc; }
        }
        @keyframes sparkle-purple {
          0% { box-shadow: 0 0 0 0 #a78bfa, 0 0 16px 4px #a78bfacc; }
          50% { box-shadow: 0 0 0 0 #a78bfa, 0 0 32px 8px #a78bfacc; }
          100% { box-shadow: 0 0 0 0 #a78bfa, 0 0 16px 4px #a78bfacc; }
        }
        .expanded-card-content, .expanded-card-content * {
          font-family: var(--font-montserrat), ui-sans-serif, system-ui !important;
          font-size: 1rem !important;
          font-weight: 400 !important;
          line-height: 1.5 !important;
        }
      `}</style>
    </section>
  );
}

function BeyondProgramSection() {
  return (
    <section className="w-full bg-black py-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8 font-montserrat">Beyond the Program: What You’ll Own</h2>
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Mobile: stack vertically, Desktop: grid */}
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 w-full mb-4 md:mb-8 items-center">
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px]">
            <div className="font-bold text-xl text-purple-200 mb-2 font-montserrat">Clear Health Markers</div>
            <div className="text-white/80 text-base font-montserrat">A clear understanding of your health markers and trends</div>
          </div>
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px]">
            <div className="font-bold text-xl text-purple-200 mb-2 font-montserrat">Personalized Protocol</div>
            <div className="text-white/80 text-base font-montserrat">A personalized, flexible protocol you trust</div>
          </div>
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px]">
            <div className="font-bold text-xl text-purple-200 mb-2 font-montserrat">Track Your Biology</div>
            <div className="text-white/80 text-base font-montserrat">The ability to track your own biology over time</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 w-full items-center">
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px] md:ml-auto">
            <div className="font-bold text-xl text-purple-200 mb-2 font-montserrat">Data-Informed Habits</div>
            <div className="text-white/80 text-base font-montserrat">Data-informed habits that feel intuitive, not forced</div>
          </div>
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px] md:mr-auto">
            <div className="font-bold text-xl text-purple-200 mb-2 font-montserrat">Evolving Foundation</div>
            <div className="text-white/80 text-base font-montserrat">A clear health foundation you can evolve independently or with your provider</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignUpNowSection() {
  return (
    <section className="w-full bg-black py-16 flex flex-col items-center">
      <div className="w-full max-w-xl flex flex-col items-center text-center bg-gradient-to-br from-fuchsia-900/60 via-fuchsia-800/40 to-purple-900/60 rounded-2xl p-10 shadow-xl border-2 border-fuchsia-200">
        <div className="text-2xl md:text-3xl font-extrabold text-white mb-4 font-montserrat">Sign Up Now</div>
        <div className="text-white/80 text-base md:text-lg mb-6 font-montserrat">Invest in your long-term health with precision and calm.</div>
        <a href="/contact" className="inline-block px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-fuchsia-800 via-fuchsia-600 to-fuchsia-400 text-white shadow-lg border-2 border-fuchsia-400 hover:scale-105 transition-all font-montserrat">Apply to join The Arc</a>
      </div>
    </section>
  );
}

function ArcPricing() {
  return (
    <section className="w-full bg-black py-14 md:py-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-8 font-montserrat">The Arc: Program Options</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-4xl justify-center items-center mb-10">
        {/* Foundations Card */}
        <div className="flex-1 bg-white/5 border-2 border-white/10 rounded-3xl shadow-xl p-8 flex flex-col items-start justify-between min-h-[420px] min-w-[320px] max-w-[400px] mx-auto transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-fuchsia-800 hover:via-fuchsia-600 hover:to-purple-700 hover:border-fuchsia-400 hover:shadow-2xl cursor-pointer">
          <div className="flex items-center mb-2">
            <span className="uppercase text-xs font-semibold tracking-widest text-white/90">The Arc: Foundations</span>
          </div>
          <div className="text-lg md:text-xl font-bold text-white mb-1">6-Month Program</div>
          <div className="text-base md:text-lg text-white/80 mb-4">A focused half-year pathway to build strong health fundamentals.</div>
          <div className="text-3xl font-extrabold text-white mb-1">€500</div>
          <div className="text-xs text-white/70 mb-4">or €70/month (payment plan)</div>
          <ul className="mb-6 space-y-2 text-base text-white/90">
            <li className="flex items-start gap-2 text-base text-white/90 mb-1"><span>●</span><span>Personalised longevity assessment</span></li>
            <li className="flex items-start gap-2 text-base text-white/90 mb-1"><span>●</span><span>Monthly protocol and health tracking</span></li>
            <li className="flex items-start gap-2 text-base text-white/90 mb-1"><span>●</span><span>Group sessions with experts</span></li>
            <li className="flex items-start gap-2 text-base text-white/90 mb-1"><span>●</span><span>Community access</span></li>
            <li className="flex items-start gap-2 text-base text-white/90 mb-1"><span>●</span><span>Early access to knowledge base & diagnostics marketplace (Sept 2025)</span></li>
          </ul>
        </div>
        {/* Full Program Card */}
        <div className="flex-1 bg-white/5 border-2 border-white/10 rounded-3xl shadow-xl p-8 flex flex-col items-start justify-between min-h-[420px] min-w-[320px] max-w-[400px] mx-auto transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-fuchsia-800 hover:via-fuchsia-600 hover:to-purple-700 hover:border-fuchsia-400 hover:shadow-2xl cursor-pointer">
          <div className="flex items-center mb-2">
            <span className="uppercase text-xs font-semibold tracking-widest text-white/90">The Arc: Full Program</span>
          </div>
          <div className="text-lg md:text-xl font-bold text-white mb-1">12-Month Journey</div>
          <div className="text-base md:text-lg text-white/80 mb-4">The complete experience — build, adjust, and master your personal health system.</div>
          <div className="text-3xl font-extrabold text-white mb-1">€1,000</div>
          <div className="text-xs text-white/70 mb-4">or €90/month / €250 quarterly</div>
          <ul className="mb-6 space-y-2 text-base text-white/90">
            <li className="flex items-start gap-2"><span>●</span><span>Everything in Foundations</span></li>
            <li className="flex items-start gap-2"><span>●</span><span>Full year of evolving protocols</span></li>
            <li className="flex items-start gap-2"><span>●</span><span>Quarterly review sessions</span></li>
            <li className="flex items-start gap-2"><span>●</span><span>Member-only in-person gatherings</span></li>
            <li className="flex items-start gap-2"><span>●</span><span>Access to research insights and partner tools</span></li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-5xl mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto items-stretch">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/70 border border-fuchsia-700 min-h-[220px] max-h-[220px] min-w-[320px] max-w-[400px] transition-all duration-300 transform hover:scale-105 cursor-pointer">
          <div className="bg-gradient-to-br from-fuchsia-700 via-fuchsia-500 to-purple-700 rounded-xl p-4 mb-4 flex items-center justify-center">
            {/* Lab icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d946ef" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v2a2 2 0 01-2 2v2a7 7 0 007 7 7 7 0 007-7V8a2 2 0 01-2-2V4" /><circle cx="12" cy="17" r="2" /></svg>
          </div>
          <div className="font-bold text-lg md:text-xl text-white mb-2 font-montserrat">Add-on lab kits & devices</div>
          <div className="text-white text-sm md:text-base font-montserrat">Available via our partner marketplace at exclusive rates.</div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/70 border border-fuchsia-700 min-h-[220px] max-h-[220px] min-w-[320px] max-w-[400px] transition-all duration-300 transform hover:scale-105 cursor-pointer">
          <div className="bg-gradient-to-br from-fuchsia-700 via-fuchsia-500 to-purple-700 rounded-xl p-4 mb-4 flex items-center justify-center">
            {/* Lock icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d946ef" className="w-8 h-8"><rect x="6" y="10" width="12" height="8" rx="2" /><path d="M9 10V7a3 3 0 1 1 6 0v3" /></svg>
          </div>
          <div className="font-bold text-lg md:text-xl text-white mb-2 font-montserrat">Private & portable data</div>
          <div className="text-white text-sm md:text-base font-montserrat">All member data is private and portable - shareable with your own practitioners if needed.</div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/70 border border-fuchsia-700 min-h-[220px] max-h-[220px] min-w-[320px] max-w-[400px] transition-all duration-300 transform hover:scale-105 cursor-pointer">
          <div className="bg-gradient-to-br from-fuchsia-700 via-fuchsia-500 to-purple-700 rounded-xl p-4 mb-4 flex items-center justify-center">
            {/* Heart icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d946ef" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.1566 3 12.7357 3.84285 13.5 5.08713C14.2643 3.84285 15.8434 3 17.5 3C20.5376 3 23 5.46243 23 8.5C23 13.5 15 21 15 21H12Z" /></svg>
          </div>
          <div className="font-bold text-lg md:text-xl text-white mb-2 font-montserrat">Human-first support</div>
          <div className="text-white text-sm md:text-base font-montserrat">Support is always human-first: no automated health advice.</div>
        </div>
      </div>
    </section>
  );
}

function BuiltForSection() {
  const [imgError, setImgError] = useState(false);
  const [activeBox, setActiveBox] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prev) => (prev + 1) % 6);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full bg-black py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4 max-w-5xl mx-auto">
      {/* Left: Text List */}
      <div className="flex-1 max-w-xl flex flex-col justify-center items-center md:items-start px-4 md:px-0 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 font-montserrat text-center md:text-left">Built for Those Who:</h2>
        <ul className="space-y-5 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90 justify-center md:justify-start"><span className="text-fuchsia-400 text-base mt-1">●</span>Seek clarity over confusion</li>
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90 justify-center md:justify-start"><span className="text-fuchsia-400 text-base mt-1">●</span>Prefer evidence over hype</li>
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90 justify-center md:justify-start"><span className="text-fuchsia-400 text-base mt-1">●</span>Want a system, not tasks</li>
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90 justify-center md:justify-start"><span className="text-fuchsia-400 text-base mt-1">●</span>Aspire to long-term vitality, not quick fixes</li>
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90 justify-center md:justify-start"><span className="text-fuchsia-400 text-base mt-1">●</span>Value alignment - with their body, biology, and goals</li>
        </ul>
      </div>
      {/* Right: Body + Metrics, now responsive */}
      <div className="flex-1 flex flex-row items-center justify-center gap-2 md:gap-6 w-full max-w-3xl relative">
        {/* Human Body Image always on the left, cards overlap on mobile/tablet */}
        <div className="relative flex flex-col items-center justify-center w-[90px] md:w-[220px] h-[180px] md:h-[520px] shrink-0 z-10" style={{background: 'rgba(0,0,0,0.2)'}}>
          <img src="/human-body.png" alt="Human Body" className="w-[90px] md:w-[220px] h-[180px] md:h-[520px] object-contain z-0" />
          {/* Overlay dots */}
          <span className="absolute left-1/2 top-[18px] md:top-[36px] -translate-x-1/2 z-10 animate-pulse"><span className="block w-3 md:w-8 h-3 md:h-8 rounded-full bg-fuchsia-300 shadow-lg border-2 border-fuchsia-400" /></span>
          <span className="absolute left-1/2 top-[50px] md:top-[100px] -translate-x-1/2 z-10 animate-pulse"><span className="block w-3 md:w-8 h-3 md:h-8 rounded-full bg-yellow-300 shadow-lg border-2 border-yellow-400" /></span>
          <span className="absolute left-1/2 top-[85px] md:top-[170px] -translate-x-1/2 z-10 animate-pulse"><span className="block w-3 md:w-8 h-3 md:h-8 rounded-full bg-green-300 shadow-lg border-2 border-green-400" /></span>
          <span className="absolute left-1/2 top-[120px] md:top-[240px] -translate-x-1/2 z-10 animate-pulse"><span className="block w-3 md:w-8 h-3 md:h-8 rounded-full bg-blue-300 shadow-lg border-2 border-blue-400" /></span>
          <span className="absolute left-1/2 top-[150px] md:top-[300px] -translate-x-1/2 z-10 animate-pulse"><span className="block w-3 md:w-8 h-3 md:h-8 rounded-full bg-purple-300 shadow-lg border-2 border-purple-400" /></span>
        </div>
        {/* Metric Cards to the right, can overlap image on mobile/tablet */}
        <div className="flex flex-col gap-2 md:gap-4 w-full md:w-auto -ml-8 md:ml-0 z-20 items-center md:items-start text-center md:text-left">
          {[
            {
              border: 'border-fuchsia-400',
              label: 'Overall Health Checkup',
              value: '5 of 8 needed done',
              color: 'text-fuchsia-200',
              valueColor: 'text-white',
              box: 0,
            },
            {
              border: 'border-fuchsia-300',
              label: 'Perceived Recovery Quality',
              value: '7/10',
              color: 'text-fuchsia-200',
              valueColor: 'text-white',
              box: 1,
            },
            {
              border: 'border-yellow-300',
              label: 'Meal Resilience Score',
              value: '8/10',
              color: 'text-yellow-200',
              valueColor: 'text-white',
              box: 2,
            },
            {
              border: 'border-green-300',
              label: 'Circadian Consistency Index',
              value: '6/10',
              color: 'text-green-200',
              valueColor: 'text-white',
              box: 3,
            },
            {
              border: 'border-blue-300',
              label: 'Cognitive Clarity Index',
              value: '9/10',
              color: 'text-blue-200',
              valueColor: 'text-white',
              box: 4,
            },
            {
              border: 'border-purple-300',
              label: 'Inner Rhythm Coherence',
              value: '5/10',
              color: 'text-purple-200',
              valueColor: 'text-white',
              box: 5,
            },
          ].map((item, idx) => (
            <div
              key={item.label}
              className={`rounded-2xl border-2 px-3 py-2 md:px-4 md:py-2 flex flex-col items-center md:items-start shadow-md bg-black/80 w-full max-w-xs mx-auto transition-all duration-300 ${item.border} ${activeBox === item.box ? 'sparkle-box' : 'blurred-box'}`}
            >
              <div className={`${item.color} font-bold text-base md:text-lg mb-1`}>{item.label}</div>
              <div className={`${item.valueColor} text-base md:text-lg font-semibold`}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .sparkle-box {
          filter: none;
          opacity: 1;
        }
        .blurred-box {
          filter: blur(2px) grayscale(0.5) brightness(0.7);
          opacity: 0.6;
        }
        /* Sparkle for each color */
        .sparkle-box.border-fuchsia-400 { box-shadow: 0 0 0 0 #f472b6, 0 0 16px 4px #f472b6cc; animation: sparkle-fuchsia 1.2s infinite alternate; }
        .sparkle-box.border-fuchsia-300 { box-shadow: 0 0 0 0 #f0abfc, 0 0 16px 4px #f0abfcc0; animation: sparkle-fuchsia 1.2s infinite alternate; }
        .sparkle-box.border-yellow-300 { box-shadow: 0 0 0 0 #fde047, 0 0 16px 4px #fde047cc; animation: sparkle-yellow 1.2s infinite alternate; }
        .sparkle-box.border-green-300 { box-shadow: 0 0 0 0 #4ade80, 0 0 16px 4px #4ade80cc; animation: sparkle-green 1.2s infinite alternate; }
        .sparkle-box.border-blue-300 { box-shadow: 0 0 0 0 #60a5fa, 0 0 16px 4px #60a5facc; animation: sparkle-blue 1.2s infinite alternate; }
        .sparkle-box.border-purple-300 { box-shadow: 0 0 0 0 #a78bfa, 0 0 16px 4px #a78bfacc; animation: sparkle-purple 1.2s infinite alternate; }
        @keyframes sparkle-fuchsia {
          0% { box-shadow: 0 0 0 0 #f472b6, 0 0 16px 4px #f472b6cc; }
          50% { box-shadow: 0 0 0 0 #f472b6, 0 0 32px 8px #f472b6cc; }
          100% { box-shadow: 0 0 0 0 #f472b6, 0 0 16px 4px #f472b6cc; }
        }
        @keyframes sparkle-yellow {
          0% { box-shadow: 0 0 0 0 #fde047, 0 0 16px 4px #fde047cc; }
          50% { box-shadow: 0 0 0 0 #fde047, 0 0 32px 8px #fde047cc; }
          100% { box-shadow: 0 0 0 0 #fde047, 0 0 16px 4px #fde047cc; }
        }
        @keyframes sparkle-green {
          0% { box-shadow: 0 0 0 0 #4ade80, 0 0 16px 4px #4ade80cc; }
          50% { box-shadow: 0 0 0 0 #4ade80, 0 0 32px 8px #4ade80cc; }
          100% { box-shadow: 0 0 0 0 #4ade80, 0 0 16px 4px #4ade80cc; }
        }
        @keyframes sparkle-blue {
          0% { box-shadow: 0 0 0 0 #60a5fa, 0 0 16px 4px #60a5facc; }
          50% { box-shadow: 0 0 0 0 #60a5fa, 0 0 32px 8px #60a5facc; }
          100% { box-shadow: 0 0 0 0 #60a5fa, 0 0 16px 4px #60a5facc; }
        }
        @keyframes sparkle-purple {
          0% { box-shadow: 0 0 0 0 #a78bfa, 0 0 16px 4px #a78bfacc; }
          50% { box-shadow: 0 0 0 0 #a78bfa, 0 0 32px 8px #a78bfacc; }
          100% { box-shadow: 0 0 0 0 #a78bfa, 0 0 16px 4px #a78bfacc; }
        }
      `}</style>
    </section>
  );
}

"use client";

import Link from "next/link";
import DNAParticles from "../components/DNAParticles";
import React, { useRef, useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-montserrat">
      {/* Hero Section (Header) */}
      <section className="relative flex flex-col items-center justify-center min-h-screen h-screen w-full overflow-hidden px-4 md:px-8 py-4 md:py-8">
        <DNAParticles />
        {/* Top Bar */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-8 z-20">
          <div className="text-xl md:text-2xl font-semibold tracking-tight text-white select-none" style={{letterSpacing: '-0.02em'}}>TheArc</div>
          <nav className="flex space-x-8 text-base font-light">
            <Link href="/contact" className="border border-fuchsia-400 text-fuchsia-200 bg-transparent hover:bg-fuchsia-900/10 hover:text-fuchsia-300 hover:ring-2 hover:ring-fuchsia-400/40 backdrop-blur-sm transition-all font-semibold text-base md:text-lg px-4 py-1.5 rounded-full tracking-wide">Apply to Join</Link>
          </nav>
        </div>
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-center z-10 mt-12 md:mt-24">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 leading-tight max-w-3xl mx-auto font-montserrat" style={{textShadow: '0 2px 24px #000', letterSpacing: '-0.01em'}}>
            Longevity isn’t a product. It’s a process.<br />
            Most people drift — we create structure, clarity, and belonging.
          </h1>
          <p className="text-base md:text-lg font-normal mb-6 md:mb-10 max-w-xl mx-auto text-white/90 font-montserrat">A private longevity circle guided by science, precision, and deep personalization.<br />Built around you. Evolving with you.<br />Each cohort limited to 100 people.</p>
          <Link href="/contact" className="inline-flex items-center px-4 py-2 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold bg-gradient-to-r from-fuchsia-800 via-fuchsia-600 to-fuchsia-400 text-white shadow-lg border-2 border-fuchsia-700 hover:scale-105 transition-all font-montserrat">
            Apply to Join
            <span className="ml-2 md:ml-3 text-lg md:text-2xl">&rarr;</span>
          </Link>
        </div>
      </section>
      {/* System Statement + Features in one screen */}
      <section className="w-full bg-black flex flex-col justify-center items-center min-h-screen h-screen px-4 py-4 md:py-10">
        <div className="flex flex-col w-full max-w-6xl justify-center items-center flex-grow">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 md:mb-4 drop-shadow-lg text-center leading-[1.15] pb-2" style={{letterSpacing: '-0.01em'}}>
            The Arc doesn’t give you a plan. It gives you a system.
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold max-w-3xl text-white/80 text-center mb-14 md:mb-20">
            One that understands your biology, adapts with your life, and helps you make smarter health decisions month after month.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-stretch">
            {/* 1 */}
            <div className="relative flex flex-col items-center text-center h-full justify-between">
              <span className="absolute left-1/2 -translate-x-1/2 top-16 md:top-24 pointer-events-none select-none" style={{zIndex: 0}}>
                <span className="text-[8rem] md:text-[11rem] font-extrabold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent opacity-20 leading-none">1</span>
              </span>
              <div className="relative z-10 flex flex-col flex-1 justify-between h-full w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white mt-0">It evolves with you.</h3>
                <p className="text-lg md:text-xl text-white max-w-[32ch] md:max-w-[36ch] mx-auto mb-0">
                  Your protocol isn’t locked in. It changes as your data does, guided by clear markers of what’s improving, and where to focus next.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="relative flex flex-col items-center text-center h-full justify-between">
              <span className="absolute left-1/2 -translate-x-1/2 top-16 md:top-24 pointer-events-none select-none" style={{zIndex: 0}}>
                <span className="text-[8rem] md:text-[11rem] font-extrabold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent opacity-20 leading-none">2</span>
              </span>
              <div className="relative z-10 flex flex-col flex-1 justify-between h-full w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white mt-0">It blends human and machine.</h3>
                <p className="text-lg md:text-xl text-white max-w-[32ch] md:max-w-[36ch] mx-auto mb-0">
                  AI helps you spot patterns early. Experts help you make sense of them.<br/>Nothing generic.<br/>No noise.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="relative flex flex-col items-center text-center h-full justify-between">
              <span className="absolute left-1/2 -translate-x-1/2 top-16 md:top-24 pointer-events-none select-none" style={{zIndex: 0}}>
                <span className="text-[8rem] md:text-[11rem] font-extrabold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent opacity-20 leading-none">3</span>
              </span>
              <div className="relative z-10 flex flex-col flex-1 justify-between h-full w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white mt-0">It’s focused on what truly lasts.</h3>
                <p className="text-lg md:text-xl text-white max-w-[32ch] md:max-w-[36ch] mx-auto mb-0">
                  Not trends. Not products. But the resilience indicators science connects to long life and active body.
                </p>
              </div>
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const features = [
    {
      title: "A Deep Health Assessment That Keeps Listening",
      number: "①",
      content: (
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
      content: (
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
      content: (
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
      content: (
        <>
          Instead of endless content, you’ll get access to conversations that matter.<br /><br />
          <ul className="list-disc list-inside text-left mx-auto max-w-md text-sm md:text-base text-white/80 mt-2 mb-2">
            <li>Monthly live sessions with researchers and clinicians in aging science, diagnostics, and prevention</li>
            <li>Quiet spaces to ask personal health questions (asynchronously or 1:1)</li>
            <li>The chance to go deeper, if and when you need</li>
          </ul>
          These are not influencers or product ambassadors. They’re people working with data and humans - every day.
        </>
      ),
    },
    {
      title: "A Cohort to Share With — If You Want",
      number: "⑤",
      content: (
        <>
          You’ll be placed in a private, capped circle of fewer than 100 members.<br /><br />
          This space isn’t noisy or performative. It’s a quiet thread of people building something similar:<br />
          <ul className="list-disc list-inside text-left mx-auto max-w-md text-sm md:text-base text-white/80 mt-2 mb-2">
            <li>Monthly check-ins and collective reflections</li>
            <li>Optional in-person gatherings and longevity dinners</li>
            <li>Shared insights, resources, and encouragement</li>
          </ul>
          You choose how visible or private your experience is.
        </>
      ),
    },
    {
      title: "The Knowledge Base (Coming September 2025)",
      number: "⑥",
      content: (
        <>
          Everything you learn - grounded, organized, and easy to return to.<br />Coming soon:<br />
          <ul className="list-disc list-inside text-left mx-auto max-w-md text-sm md:text-base text-white/80 mt-2 mb-2">
            <li>How to understand your biological age, HRV, and blood markers</li>
            <li>How to interpret common (and uncommon) tests</li>
            <li>Protocols built around prevention - not crisis</li>
            <li>Source citations, research digests, and expert explainers</li>
          </ul>
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
            className={`relative flex flex-col items-start p-4 rounded-2xl shadow-md border-2 text-left min-h-[180px] bg-black/80 transition-all duration-300 cursor-pointer font-montserrat
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
            <span className="text-sm font-normal leading-relaxed text-white/90 mt-1 font-montserrat" style={{zIndex: 10}}>{f.content}</span>
          </div>
        ))}
      </div>
      {/* Mobile: horizontal scroll */}
      <div className="md:hidden flex flex-col gap-4 w-full px-2">
        {features.map((f, i) => (
          <div key={i} className={`relative flex flex-col items-start p-4 rounded-2xl shadow-md border-2 text-left min-h-[180px] bg-black/80 transition-all duration-300 cursor-pointer font-montserrat
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
            <span className="text-sm font-normal leading-relaxed text-white/90 mt-1 font-montserrat" style={{zIndex: 10}}>{f.content}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function BeyondProgramSection() {
  return (
    <section className="w-full bg-black py-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Beyond the Program: What You’ll Own</h2>
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Mobile: stack vertically, Desktop: grid */}
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 w-full mb-4 md:mb-8 items-center">
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px]">
            <div className="font-bold text-xl text-purple-200 mb-2" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Clear Health Markers</div>
            <div className="text-white/80 text-base" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>A clear understanding of your health markers and trends</div>
          </div>
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px]">
            <div className="font-bold text-xl text-purple-200 mb-2" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Personalized Protocol</div>
            <div className="text-white/80 text-base" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>A personalized, flexible protocol you trust</div>
          </div>
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px]">
            <div className="font-bold text-xl text-purple-200 mb-2" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Track Your Biology</div>
            <div className="text-white/80 text-base" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>The ability to track your own biology over time</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 w-full items-center">
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px] md:ml-auto">
            <div className="font-bold text-xl text-purple-200 mb-2" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Data-Informed Habits</div>
            <div className="text-white/80 text-base" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Data-informed habits that feel intuitive, not forced</div>
          </div>
          <div className="w-full max-w-xs md:flex-1 flex flex-col items-center text-center p-4 md:p-8 rounded-2xl bg-black/60 border-2 border-purple-300 min-w-[220px] md:min-w-[260px] min-h-[180px] md:max-w-[350px] md:mr-auto">
            <div className="font-bold text-xl text-purple-200 mb-2" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Evolving Foundation</div>
            <div className="text-white/80 text-base" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>A clear health foundation you can evolve independently or with your provider</div>
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
        <div className="text-2xl md:text-3xl font-extrabold text-white mb-4" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Sign Up Now</div>
        <div className="text-white/80 text-base md:text-lg mb-6" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Invest in your long-term health with precision and calm.</div>
        <a href="/contact" className="inline-block px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-fuchsia-800 via-fuchsia-600 to-fuchsia-400 text-white shadow-lg border-2 border-fuchsia-400 hover:scale-105 transition-all" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Apply to join The Arc</a>
      </div>
    </section>
  );
}

function ArcPricing() {
  return (
    <section className="w-full bg-black py-14 md:py-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-8" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>The Arc: Program Options</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-4xl justify-center items-center mb-10">
        {/* Foundations Card */}
        <div className="flex-1 bg-white/5 border-2 border-white/10 rounded-3xl shadow-xl p-8 flex flex-col items-start justify-between min-h-[420px] min-w-[320px] max-w-[400px] mx-auto transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-fuchsia-800 hover:via-fuchsia-600 hover:to-purple-700 hover:border-fuchsia-400 hover:shadow-2xl cursor-pointer" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>
          <div className="flex items-center mb-2">
            <span className="uppercase text-xs font-semibold tracking-widest text-white/90">The Arc: Foundations</span>
          </div>
          <div className="text-lg md:text-xl font-bold text-white mb-1">6-Month Program</div>
          <div className="text-base md:text-lg text-white/80 mb-4">A focused half-year pathway to build strong health fundamentals.</div>
          <div className="text-3xl font-extrabold text-white mb-1">€500</div>
          <div className="text-xs text-white/70 mb-4">or €70/month (payment plan)</div>
          <ul className="mb-6 space-y-2 text-base text-white/90">
            <li className="flex items-start gap-2 text-base text-fuchsia-300 mb-1"><span>●</span><span>Personalised longevity assessment</span></li>
            <li className="flex items-start gap-2 text-base text-fuchsia-300 mb-1"><span>●</span><span>Monthly protocol and health tracking</span></li>
            <li className="flex items-start gap-2 text-base text-fuchsia-300 mb-1"><span>●</span><span>Group sessions with experts</span></li>
            <li className="flex items-start gap-2 text-base text-fuchsia-300 mb-1"><span>●</span><span>Community access</span></li>
            <li className="flex items-start gap-2 text-base text-fuchsia-300 mb-1"><span>●</span><span>Early access to knowledge base & diagnostics marketplace (Sept 2025)</span></li>
          </ul>
        </div>
        {/* Full Program Card */}
        <div className="flex-1 bg-white/5 border-2 border-white/10 rounded-3xl shadow-xl p-8 flex flex-col items-start justify-between min-h-[420px] min-w-[320px] max-w-[400px] mx-auto transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-fuchsia-800 hover:via-fuchsia-600 hover:to-purple-700 hover:border-fuchsia-400 hover:shadow-2xl cursor-pointer" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>
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
      <div className="w-full max-w-5xl mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-black/70 border border-fuchsia-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
          <div className="bg-gradient-to-br from-fuchsia-700 via-fuchsia-500 to-purple-700 rounded-xl p-4 mb-4 flex items-center justify-center">
            {/* Lab icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d946ef" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v2a2 2 0 01-2 2v2a7 7 0 007 7 7 7 0 007-7V8a2 2 0 01-2-2V4" /><circle cx="12" cy="17" r="2" /></svg>
          </div>
          <div className="font-bold text-lg md:text-xl text-fuchsia-300 mb-2" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Add-on lab kits & devices</div>
          <div className="text-fuchsia-100 text-sm md:text-base" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Available via our partner marketplace at exclusive rates.</div>
        </div>
        {/* Card 2 (highlighted) */}
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-black/80 border-2 border-fuchsia-400 shadow-xl scale-105 z-10 transition-all duration-300 transform hover:scale-110 cursor-pointer">
          <div className="bg-gradient-to-br from-fuchsia-700 via-fuchsia-500 to-purple-700 rounded-xl p-4 mb-4 flex items-center justify-center">
            {/* Lock icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d946ef" className="w-8 h-8"><rect x="6" y="10" width="12" height="8" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 10V7a4 4 0 118 0v3" /></svg>
          </div>
          <div className="font-bold text-lg md:text-xl text-fuchsia-100 mb-2" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Private & portable data</div>
          <div className="text-fuchsia-100 text-sm md:text-base" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>All member data is private and portable - shareable with your own practitioners if needed.</div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-black/70 border border-fuchsia-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
          <div className="bg-gradient-to-br from-fuchsia-700 via-fuchsia-500 to-purple-700 rounded-xl p-4 mb-4 flex items-center justify-center">
            {/* Heart icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d946ef" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.1566 3 12.7357 3.84285 13.5 5.08713C14.2643 3.84285 15.8434 3 17.5 3C20.5376 3 23 5.46243 23 8.5C23 13.5 15 21 15 21H12Z" /></svg>
          </div>
          <div className="font-bold text-lg md:text-xl text-fuchsia-300 mb-2" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Human-first support</div>
          <div className="text-fuchsia-100 text-sm md:text-base" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Support is always human-first: no automated health advice.</div>
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
    <section className="w-full bg-black py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-8 max-w-[1400px] mx-auto">
      {/* Left: Text List */}
      <div className="flex-1 max-w-xl flex flex-col justify-center items-start px-4 md:px-0">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6" style={{fontFamily: 'Montserrat, ui-sans-serif'}}>Built for Those Who:</h2>
        <ul className="space-y-5 w-full">
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90"><span className="text-fuchsia-400 text-base mt-1">●</span>Seek clarity over confusion</li>
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90"><span className="text-fuchsia-400 text-base mt-1">●</span>Prefer evidence over hype</li>
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90"><span className="text-fuchsia-400 text-base mt-1">●</span>Want a system, not tasks</li>
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90"><span className="text-fuchsia-400 text-base mt-1">●</span>Aspire to long-term vitality, not quick fixes</li>
          <li className="flex items-start gap-3 text-lg md:text-xl text-white/90"><span className="text-fuchsia-400 text-base mt-1">●</span>Value alignment - with their body, biology, and goals</li>
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
        <div className="flex flex-col gap-2 md:gap-4 w-full md:w-auto -ml-8 md:ml-0 z-20">
          {/* Overall Health Checkup */}
          <div className="rounded-2xl border-2 border-fuchsia-400 px-3 py-2 md:px-4 md:py-2 flex flex-col items-start shadow-md bg-black/80 w-full max-w-xs mx-auto">
            <div className="text-fuchsia-200 font-bold text-base md:text-lg mb-1">Overall Health Checkup</div>
            <div className="text-white text-base md:text-lg font-semibold">5 of 8 needed done</div>
          </div>
          {/* Perceived Recovery Quality */}
          <div className="rounded-2xl border-2 border-fuchsia-300 px-3 py-2 md:px-4 md:py-2 flex flex-col items-start shadow-md bg-black/80 w-full max-w-xs mx-auto">
            <div className="text-fuchsia-200 font-bold text-xs md:text-sm mb-1">Perceived Recovery Quality</div>
            <div className="text-white text-sm md:text-base font-bold">7/10</div>
          </div>
          {/* Meal Resilience Score */}
          <div className="rounded-2xl border-2 border-yellow-300 px-3 py-2 md:px-4 md:py-2 flex flex-col items-start shadow-md bg-black/80 w-full max-w-xs mx-auto">
            <div className="text-yellow-200 font-bold text-xs md:text-sm mb-1">Meal Resilience Score</div>
            <div className="text-white text-sm md:text-base font-bold">8/10</div>
          </div>
          {/* Circadian Consistency Index */}
          <div className="rounded-2xl border-2 border-green-300 px-3 py-2 md:px-4 md:py-2 flex flex-col items-start shadow-md bg-black/80 w-full max-w-xs mx-auto">
            <div className="text-green-200 font-bold text-xs md:text-sm mb-1">Circadian Consistency Index</div>
            <div className="text-white text-sm md:text-base font-bold">6/10</div>
          </div>
          {/* Cognitive Clarity Index */}
          <div className="rounded-2xl border-2 border-blue-300 px-3 py-2 md:px-4 md:py-2 flex flex-col items-start shadow-md bg-black/80 w-full max-w-xs mx-auto">
            <div className="text-blue-200 font-bold text-xs md:text-sm mb-1">Cognitive Clarity Index</div>
            <div className="text-white text-sm md:text-base font-bold">9/10</div>
          </div>
          {/* Inner Rhythm Coherence */}
          <div className="rounded-2xl border-2 border-purple-300 px-3 py-2 md:px-4 md:py-2 flex flex-col items-start shadow-md bg-black/80 w-full max-w-xs mx-auto">
            <div className="text-purple-200 font-bold text-xs md:text-sm mb-1">Inner Rhythm Coherence</div>
            <div className="text-white text-sm md:text-base font-bold">5/10</div>
          </div>
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

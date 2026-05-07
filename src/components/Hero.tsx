'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';

export default function Hero() {
  const pillRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (pillRef.current) {
      tl.fromTo(pillRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.7 }
      );
    }
    if (photoRef.current) {
      tl.fromTo(photoRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.9 },
        '-=0.3'
      );
    }
    if (headlineRef.current) {
      tl.fromTo(headlineRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.5'
      );
    }
    if (sublineRef.current) {
      tl.fromTo(sublineRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      );
    }
    if (ctasRef.current) {
      tl.fromTo(ctasRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-parchment flex items-center overflow-hidden pt-24 pb-20 px-5 sm:px-8 lg:px-16"
    >
      {/* Subtle orbs */}
      <div className="orb w-[500px] h-[500px] bg-dusty-blush/20 -top-24 -right-32 pointer-events-none" />
      <div className="orb w-[300px] h-[300px] bg-steel-blue/10 bottom-20 left-10 pointer-events-none" />

      {/* Ghost letters */}
      <span
        className="ghost-letter absolute right-0 bottom-0 font-epilogue font-black text-slate-navy select-none pointer-events-none hidden lg:block"
        style={{ fontSize: 'clamp(140px, 18vw, 260px)', opacity: 0.045, lineHeight: 1, letterSpacing: '-0.06em' }}
        aria-hidden="true"
      >
        SYS
      </span>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — content */}
          <div className="flex flex-col">
            {/* Pill */}
            <div ref={pillRef} className="pill rounded-full bg-parchment/60 px-4 py-2 mb-8 self-start opacity-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span className="font-epilogue text-xs font-bold uppercase tracking-[0.14em] text-slate-navy">
                Open to Work · Seattle, WA
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-epilogue font-black text-slate-navy leading-none tracking-tightest opacity-0 mb-6"
              style={{ fontSize: 'clamp(38px, 5.5vw, 80px)' }}
            >
              Specialized in{' '}
              <span className="playfair-italic text-burnt-blush">Operational Excellence</span>{' '}
              & Scalable Architecture
            </h1>

            {/* Subline */}
            <p
              ref={sublineRef}
              className="font-epilogue text-slate-navy/70 leading-relaxed mb-10 max-w-lg opacity-0"
              style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}
            >
              Proactive problem-solver dedicated to root-cause analysis, end-to-end ownership,
              and standardizing SOPs to eliminate recurring technical debt.
            </p>

            {/* CTAs */}
            <div ref={ctasRef} className="flex flex-wrap gap-4 opacity-0">
              <a
                href="#experience"
                onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-sweep font-epilogue text-sm font-bold uppercase tracking-[0.12em] bg-slate-navy text-parchment px-8 py-4"
              >
                View My Work
              </a>
              <a
                href="/CHIRINOS_RESUME_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link font-epilogue text-sm font-bold uppercase tracking-[0.12em] text-slate-navy border border-slate-navy/30 px-8 py-4 hover:border-burnt-blush hover:text-burnt-blush transition-colors duration-300 flex items-center gap-2"
              >
                Download Resume <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* Right — headshot */}
          <div ref={photoRef} className="flex justify-center lg:justify-end opacity-0">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-burnt-blush/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-steel-blue/15 scale-125" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-parchment shadow-2xl">
                <Image
                  src="/headshot.jpg"
                  alt="Gabriela Chirinos"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating metric badge */}
              <div className="absolute -bottom-4 -left-6 bg-slate-navy text-parchment px-4 py-3 shadow-xl">
                <p className="font-epilogue font-black text-2xl tracking-tightest leading-none">9K+</p>
                <p className="font-epilogue text-[10px] font-bold uppercase tracking-[0.14em] text-steel-blue mt-0.5">Cases Resolved</p>
              </div>

              {/* Floating accuracy badge */}
              <div className="absolute -top-4 -right-6 bg-burnt-blush text-slate-navy px-4 py-3 shadow-xl">
                <p className="font-epilogue font-black text-2xl tracking-tightest leading-none">98%</p>
                <p className="font-epilogue text-[10px] font-bold uppercase tracking-[0.14em] text-slate-navy/70 mt-0.5">QA Accuracy · ML Data</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator — md:flex overrides hidden; no bare 'flex' to conflict */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex">
        <span className="font-epilogue text-[10px] font-bold uppercase tracking-[0.18em] text-slate-navy/40">Scroll</span>
        <div className="w-px h-10 bg-slate-navy/20" />
      </div>
    </section>
  );
}

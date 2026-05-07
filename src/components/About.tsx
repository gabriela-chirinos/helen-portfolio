'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const stats = [
  { number: '98%', label: 'Accuracy Rate', sub: 'ML data quality over 3 years' },
  { number: '3-Day', label: 'SLA Maintained', sub: 'Consistently across 9,000+ cases' },
  { number: '9,000+', label: 'Cases Resolved', sub: 'Amazon seller inventory support' },
  { number: '$2M+', label: 'Program-Level Savings', sub: 'Contributed to automation pilot outcomes' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about-reveal').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-parchment border-t border-slate-navy/8 py-28 md:py-40 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div>
            <p className="about-reveal font-epilogue text-xs font-bold uppercase tracking-[0.18em] text-steel-blue mb-6">
              About
            </p>
            <h2
              className="about-reveal font-epilogue font-black text-slate-navy leading-none tracking-tightest mb-8"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Systems thinker.<br />
              <span className="playfair-italic text-burnt-blush">Problem solver.</span>
            </h2>
            <p className="about-reveal font-epilogue text-slate-navy/70 leading-relaxed mb-6"
              style={{ fontSize: 'clamp(15px, 1.8vw, 17px)' }}>
              I spent three years inside Amazon&apos;s operations — resolving seller inventory
              cases, validating ML datasets, and translating backend system complexity into
              clear, actionable guidance. Cloud support is high-stakes troubleshooting under
              real SLA pressure, and that&apos;s exactly the environment I&apos;m built for.
            </p>
            <p className="about-reveal font-epilogue text-slate-navy/70 leading-relaxed"
              style={{ fontSize: 'clamp(15px, 1.8vw, 17px)' }}>
              Now I&apos;m adding AWS infrastructure to the stack — VPCs, EC2, S3, Lambda,
              and the CLI to stitch it together. I bring ticket resolution discipline,
              SQL investigation skills, and a documented track record of writing SOPs
              that actually prevent the next ticket from being filed.
            </p>
          </div>

          {/* Right — stat cards: items-stretch ensures equal row heights */}
          <div className="grid grid-cols-2 gap-4 items-stretch">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="about-reveal border border-slate-navy/10 p-6 bg-white/40 hover:border-burnt-blush/30 hover:bg-white/60 transition-all duration-300"
              >
                <p className="font-epilogue font-black text-slate-navy tracking-tightest leading-none mb-2"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
                  {stat.number}
                </p>
                <p className="font-epilogue font-bold text-sm uppercase tracking-[0.1em] text-slate-navy mb-1">
                  {stat.label}
                </p>
                <p className="font-epilogue text-xs text-slate-navy/50 leading-snug">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

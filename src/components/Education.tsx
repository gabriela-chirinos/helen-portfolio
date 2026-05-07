'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const entries = [
  {
    institution: 'Per Scholas',
    program: 'AWS re:Start Training',
    location: 'Seattle, WA',
    period: 'Expected Aug 2026',
    status: 'In Progress',
    description:
      '15-week full-time program covering Linux, Python, EC2, Lambda, Auto Scaling, Shell Scripting, Cloud Concepts, Network Firewall, AWS Systems Manager, Redshift, and DynamoDB.',
    tags: ['AWS', 'Linux', 'Python', 'Cloud Fundamentals'],
  },
  {
    institution: 'Springboard',
    program: 'JavaScript Bootcamp',
    location: 'Remote',
    period: 'November 2024',
    status: 'Completed',
    description:
      '24-week comprehensive frontend development bootcamp covering JavaScript, React, HTML/CSS, APIs, and Git — sponsored by Amazon Career Choice.',
    tags: ['JavaScript', 'React', 'APIs', 'Git'],
  },
  {
    institution: 'Correlation One',
    program: 'Data Analytics Training',
    location: 'Remote',
    period: 'August 2022',
    status: 'Completed',
    description:
      '200+ hours of data interpretation, analysis, visualization, and SQL — sponsored by Amazon Career Choice.',
    tags: ['SQL', 'Python', 'Data Analysis', 'Visualization'],
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.edu-row').forEach((row, i) => {
        gsap.fromTo(row,
          { opacity: 0, y: 35 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
            delay: i * 0.13,
            scrollTrigger: { trigger: row, start: 'top 88%', once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="bg-parchment py-28 md:py-40 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="font-epilogue text-xs font-bold uppercase tracking-[0.18em] text-steel-blue mb-6">
            Education & Training
          </p>
          <h2
            className="font-epilogue font-black text-slate-navy leading-none tracking-tightest"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            Always{' '}
            <span className="playfair-italic text-burnt-blush">learning.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {entries.map((entry, i) => (
            <div
              key={entry.program}
              className={`edu-row flex flex-col md:flex-row md:items-start gap-6 py-10 opacity-0 ${i < entries.length - 1 ? 'border-b border-slate-navy/10' : ''}`}
            >
              {/* Period + status */}
              <div className="md:w-44 shrink-0">
                <p className="font-epilogue text-sm font-bold uppercase tracking-[0.1em] text-steel-blue mb-2">
                  {entry.period}
                </p>
                <span className={`font-epilogue text-[10px] font-bold uppercase tracking-[0.12em] border px-2.5 py-1 ${
                  entry.status === 'In Progress'
                    ? 'text-burnt-blush border-burnt-blush/30'
                    : 'text-slate-navy/40 border-slate-navy/15'
                }`}>
                  {entry.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-epilogue font-black text-slate-navy text-xl tracking-tight mb-1">
                  {entry.program}
                </h3>
                <p className="font-epilogue text-sm font-bold uppercase tracking-[0.1em] text-burnt-blush/70 mb-3">
                  {entry.institution} · {entry.location}
                </p>
                <p className="font-epilogue text-slate-navy/65 leading-relaxed text-sm mb-4">
                  {entry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-epilogue text-[11px] font-bold uppercase tracking-[0.1em] text-slate-navy/45 border border-slate-navy/12 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing rule to cap the section cleanly */}
        <div className="border-t border-slate-navy/10 mt-0" />

      </div>
    </section>
  );
}

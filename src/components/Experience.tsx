'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const roles = [
  {
    title: 'Technical Account & Catalog Operations',
    company: 'Amazon',
    period: 'May – Dec 2025',
    badge: '25% ↓ Escalations',
    badgeColor: 'bg-burnt-blush/15 text-burnt-blush border-burnt-blush/30',
    bullets: [
      'Managed catalog health and metadata integrity for 100+ high-volume sellers using SQL, Excel, and internal API tooling.',
      'Authored SOP documentation that standardized technical workflows and reduced team escalations by 25%.',
      'Served as primary escalation contact for complex seller issues, consistently resolving cases without supervisor escalation.',
    ],
    tags: ['SQL', 'API Systems', 'Technical Writing', 'SOP Authoring'],
  },
  {
    title: 'Machine Learning Data Associate I',
    company: 'Amazon',
    period: 'June 2022 – May 2025',
    badge: '9,000+ Cases · 98% Accuracy',
    badgeColor: 'bg-steel-blue/15 text-steel-blue border-steel-blue/30',
    bullets: [
      'Validated high-fidelity datasets for ML production models (TRMS, Wall-E), consistently exceeding SLA and QA benchmarks across 3 years.',
      'Resolved 15–30 Amazon inventory support tickets per day, maintaining a 3-day SLA and 98% accuracy rate across 9,000+ seller cases.',
      'Contributed to $2M+ in validated cost savings by optimizing data strategies for automation pilot programs.',
    ],
    tags: ['SQL', 'Data Validation', 'QA', 'ML Pipelines', 'SLA Management'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.exp-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', once: true },
            delay: i * 0.15,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="bg-parchment py-28 md:py-40 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="font-epilogue text-xs font-bold uppercase tracking-[0.18em] text-steel-blue mb-6">
            Experience
          </p>
          <h2
            className="font-epilogue font-black text-slate-navy leading-none tracking-tightest"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            Amazon{' '}
            <span className="playfair-italic text-burnt-blush">2022 – 2025</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="exp-card border border-slate-navy/10 bg-white/30 p-8 md:p-10 opacity-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-epilogue font-black text-slate-navy text-xl tracking-tight mb-1">
                    {role.title}
                  </h3>
                  <p className="font-epilogue text-sm font-bold uppercase tracking-[0.12em] text-steel-blue">
                    {role.company} · {role.period}
                  </p>
                </div>
                <span className={`self-start shrink-0 font-epilogue text-xs font-bold uppercase tracking-[0.1em] border px-3 py-1.5 ${role.badgeColor}`}>
                  {role.badge}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-6">
                {role.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 40)} className="flex gap-3">
                    <span className="text-burnt-blush font-bold shrink-0 mt-0.5">→</span>
                    <span className="font-epilogue text-slate-navy/75 leading-relaxed"
                      style={{ fontSize: 'clamp(14px, 1.6vw, 16px)' }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {role.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-epilogue text-[11px] font-bold uppercase tracking-[0.1em] text-slate-navy/50 border border-slate-navy/12 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

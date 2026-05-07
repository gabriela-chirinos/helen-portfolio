'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const categories = [
  {
    number: '01',
    title: 'Cloud & AWS',
    tags: ['EC2', 'S3', 'VPC', 'IAM', 'Lambda', 'Auto Scaling', 'Systems Manager', 'Redshift', 'DynamoDB', 'AWS CLI'],
  },
  {
    number: '02',
    title: 'Linux & CLI',
    tags: ['Bash', 'Shell Scripting', 'SSH', 'CLI Navigation', 'File Management', 'Process Management', 'Cron'],
  },
  {
    number: '03',
    title: 'Data & SQL',
    tags: ['SQL', 'Python', 'Excel', 'Data Validation', 'Data Cleaning', 'Visualization', 'Trend Analysis'],
  },
  {
    number: '04',
    title: 'Web Development',
    tags: ['JavaScript', 'React', 'HTML', 'CSS', 'jQuery', 'API Fundamentals', 'Git / GitHub', 'MCP'],
  },
  {
    number: '05',
    title: 'QA & Testing',
    tags: ['A/B Testing', 'Bug Identification', 'QA Review', 'Workflow Validation', 'Issue Documentation'],
  },
  {
    number: '06',
    title: 'Technical Communication',
    tags: ['SOP Authoring', 'Technical Writing', 'Stakeholder Support', 'Process Documentation', 'Bilingual EN/ES'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.skill-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            delay: (i % 3) * 0.1,
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-slate-navy py-28 md:py-40 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="font-epilogue text-xs font-bold uppercase tracking-[0.18em] text-steel-blue mb-6">
            Technical Toolkit
          </p>
          <h2
            className="font-epilogue font-black text-parchment leading-none tracking-tightest"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            Built to{' '}
            <span className="playfair-italic text-burnt-blush">operate.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-parchment/20">
          {categories.map((cat) => (
            <div
              key={cat.number}
              className="skill-card pillar-card bg-slate-navy p-8 opacity-0"
            >
              <p className="font-epilogue font-black text-burnt-blush/40 text-4xl tracking-tightest leading-none mb-4">
                {cat.number}
              </p>
              <h3 className="font-epilogue font-black text-parchment text-lg tracking-tight mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-epilogue text-[11px] font-bold uppercase tracking-[0.1em] text-parchment/60 border border-parchment/10 px-2.5 py-1 hover:border-burnt-blush/40 hover:text-parchment transition-all duration-200"
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

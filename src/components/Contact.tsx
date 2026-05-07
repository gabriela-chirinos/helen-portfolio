'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const links = [
  { label: 'Email', value: 'chirinos.gabriela@gmail.com', href: 'mailto:chirinos.gabriela@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gabriela-chirinos', href: 'https://linkedin.com/in/gabriela-chirinos' },
  { label: 'GitHub', value: 'github.com/gabriela-chirinos', href: 'https://github.com/gabriela-chirinos' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.contact-reveal').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 35 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="contact-grid bg-slate-navy py-28 md:py-40 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <p className="contact-reveal font-epilogue text-xs font-bold uppercase tracking-[0.18em] text-steel-blue mb-6 opacity-0">
          Contact
        </p>

        <h2
          className="contact-reveal font-epilogue font-black text-parchment leading-none tracking-tightest mb-6 opacity-0"
          style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
        >
          Ready to join{' '}
          <span className="playfair-italic text-burnt-blush">your support team.</span>
        </h2>

        {/* Availability pill */}
        <div className="contact-reveal pill rounded-full bg-parchment/6 px-4 py-2 mb-16 self-start inline-flex opacity-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
          <span className="font-epilogue text-xs font-bold uppercase tracking-[0.14em] text-parchment/70">
            Open to Technical Support & Cloud Roles
          </span>
        </div>

        {/* Contact links */}
        <div className="flex flex-col gap-0 border-t border-parchment/8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-reveal arrow-link group flex items-center justify-between py-7 border-b border-parchment/8 opacity-0 hover:border-burnt-blush/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-6">
                <span className="font-epilogue text-xs font-bold uppercase tracking-[0.18em] text-steel-blue w-20">
                  {link.label}
                </span>
                <span
                  className="font-epilogue font-black text-parchment group-hover:text-burnt-blush transition-colors duration-300 tracking-tight"
                  style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}
                >
                  {link.value}
                </span>
              </div>
              <span className="arrow text-parchment/30 group-hover:text-burnt-blush transition-colors duration-300 text-2xl">→</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-epilogue text-xs font-bold uppercase tracking-[0.14em] text-parchment/25">
            © {new Date().getFullYear()} Gabriela Chirinos · Seattle, WA · Bilingual EN/ES
          </p>
          <p className="font-epilogue text-xs font-bold uppercase tracking-[0.14em] text-parchment/25">
            Open to Relocation
          </p>
        </div>

      </div>
    </section>
  );
}

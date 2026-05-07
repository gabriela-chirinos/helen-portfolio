'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);
  const bar1Ref = useRef<HTMLSpanElement>(null);
  const bar2Ref = useRef<HTMLSpanElement>(null);
  const bar3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Store only this trigger so we don't nuke others on cleanup
    const trigger = ScrollTrigger.create({
      start: 'top -80',
      onEnter: () => nav.classList.add('nav-scrolled'),
      onLeaveBack: () => nav.classList.remove('nav-scrolled'),
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const links = menuLinksRef.current?.querySelectorAll('a');
    const b1 = bar1Ref.current, b2 = bar2Ref.current, b3 = bar3Ref.current;
    if (!overlay || !links || !b1 || !b2 || !b3) return;

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      // GSAP fully controls display — no Tailwind hidden class conflict
      gsap.set(overlay, { display: 'flex' });
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.fromTo(Array.from(links),
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', stagger: 0.07, delay: 0.15 }
      );
      gsap.to(b1, { rotate: 45, y: 8, duration: 0.35, ease: 'power2.inOut' });
      gsap.to(b2, { opacity: 0, duration: 0.2 });
      gsap.to(b3, { rotate: -45, y: -8, duration: 0.35, ease: 'power2.inOut' });
    } else {
      document.body.style.overflow = '';
      gsap.to(overlay, {
        opacity: 0, duration: 0.3, ease: 'power2.in',
        onComplete: () => gsap.set(overlay, { display: 'none' }),
      });
      gsap.to(b1, { rotate: 0, y: 0, duration: 0.35, ease: 'power2.inOut' });
      gsap.to(b2, { opacity: 1, duration: 0.2, delay: 0.1 });
      gsap.to(b3, { rotate: 0, y: 0, duration: 0.35, ease: 'power2.inOut' });
    }
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[60] transition-all duration-300 px-5 sm:px-8 lg:px-16 py-5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-epilogue font-black text-xl tracking-tightest text-slate-navy">
            GC
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="font-epilogue text-sm font-bold uppercase tracking-[0.12em] text-slate-navy hover:text-burnt-blush transition-colors duration-200 cursor-pointer"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('Contact')}
              className="btn-sweep ml-4 font-epilogue text-sm font-bold uppercase tracking-[0.12em] bg-slate-navy text-parchment px-5 py-2.5 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-overlay"
            className="md:hidden flex flex-col gap-[6px] w-7 cursor-pointer"
          >
            <span ref={bar1Ref} className="block h-[2px] w-full bg-slate-navy origin-center" />
            <span ref={bar2Ref} className="block h-[2px] w-full bg-slate-navy" />
            <span ref={bar3Ref} className="block h-[2px] w-full bg-slate-navy origin-center" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — display controlled entirely by GSAP, no Tailwind hidden class */}
      <div
        id="mobile-nav-overlay"
        ref={overlayRef}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        style={{ display: 'none' }}
        className="fixed inset-0 z-50 bg-slate-navy flex-col items-start justify-center px-8 py-24"
      >
        <nav aria-label="Mobile navigation">
          <div ref={menuLinksRef} className="flex flex-col gap-6">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleNavClick(link)}
                className="font-epilogue font-black text-parchment hover:text-burnt-blush transition-colors duration-200"
                style={{ fontSize: 'clamp(34px, 9.5vw, 58px)', letterSpacing: '-0.03em' }}
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="mt-12 flex flex-col gap-2">
          <p className="font-epilogue text-sm font-bold uppercase tracking-[0.14em] text-steel-blue">Open to Work</p>
          <p className="font-epilogue text-sm text-parchment/60">Seattle, WA · Bilingual EN/ES</p>
        </div>
      </div>
    </>
  );
}

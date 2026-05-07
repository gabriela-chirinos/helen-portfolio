'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const projects = [
  {
    title: 'AWS VPC Lab',
    description:
      'Designed and configured a multi-tier VPC with public/private subnets, security group rules, and network ACLs to isolate traffic by tier. Attached an Internet Gateway and configured route tables for controlled external access.',
    tags: ['VPC', 'Subnets', 'Security Groups', 'NACL', 'Internet Gateway', 'Route Tables'],
    github: null,
  },
  {
    title: 'S3 Static Site Deployment',
    description:
      'Deployed a static website to S3 via the AWS CLI, configured bucket policies for public access, and enabled static website hosting. Practiced IAM least-privilege principles throughout.',
    tags: ['S3', 'AWS CLI', 'Static Hosting', 'Bucket Policy', 'IAM'],
    github: null,
  },
  {
    title: 'EC2 + Auto Scaling Architecture',
    description:
      'Launched EC2 instances using a launch template, attached an Auto Scaling group and Application Load Balancer to distribute variable traffic, and monitored health with CloudWatch metrics.',
    tags: ['EC2', 'Auto Scaling', 'Load Balancer', 'Launch Template', 'CloudWatch'],
    github: null,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: { trigger: card, start: 'top 87%', once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-slate-navy py-28 md:py-40 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header — consistent mb-16 spacing with all other sections */}
        <div className="mb-16">
          <p className="font-epilogue text-xs font-bold uppercase tracking-[0.18em] text-steel-blue mb-6">
            Projects
          </p>
          <h2
            className="font-epilogue font-black text-parchment leading-none tracking-tightest mb-3"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            AWS{' '}
            <span className="playfair-italic text-burnt-blush">Labs</span>
          </h2>
          <p className="font-epilogue text-parchment/50 text-sm">
            AWS re:Start training projects — actively expanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card border border-parchment/8 bg-parchment/4 p-7 flex flex-col opacity-0"
            >
              {/* In-progress badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-epilogue text-[10px] font-bold uppercase tracking-[0.14em] text-burnt-blush border border-burnt-blush/30 px-2.5 py-1">
                  In Progress
                </span>
              </div>

              <h3 className="font-epilogue font-black text-parchment text-xl tracking-tight mb-3">
                {project.title}
              </h3>
              <p className="font-epilogue text-parchment/60 leading-relaxed text-sm mb-6 grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-epilogue text-[10px] font-bold uppercase tracking-[0.1em] text-parchment/40 border border-parchment/10 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Disabled link until repos are live */}
              <span
                aria-disabled="true"
                className="font-epilogue text-xs font-bold uppercase tracking-[0.12em] text-parchment/25 flex items-center gap-2 cursor-not-allowed"
              >
                Repo coming soon →
              </span>
            </div>
          ))}
        </div>

        <p className="font-epilogue text-center text-parchment/30 text-sm mt-12">
          More projects coming soon.
        </p>

      </div>
    </section>
  );
}

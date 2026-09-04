'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface KpiItem {
  value: string;
  label: string;
  numericVal?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const topKpis: KpiItem[] = [
  { value: '35%', label: 'Reduction in A/R', numericVal: 35, suffix: '%' },
  { value: '7 - 14', label: 'Days Turnaround Time' },
];

const bottomKpis: KpiItem[] = [
  { value: 'Upto 35%', label: 'Revenue Increase', numericVal: 35, prefix: 'Upto ', suffix: '%' },
  { value: '96%', label: 'Collection Ratio', numericVal: 96, suffix: '%' },
  { value: '98.5%', label: 'First Pass Clean Claims Rate', numericVal: 98.5, suffix: '%', decimals: 1 },
  { value: '50+', label: 'Specialties', numericVal: 50, suffix: '+' },
];

export default function KpiSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((el) => {
        if (!el) return;

        const targetVal = parseFloat(el.getAttribute('data-value') || '');
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);

        if (isNaN(targetVal)) return;

        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetVal,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: () => {
            el.innerText = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setCounterRef = (el: HTMLDivElement | null, index: number) => {
    countersRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#f8f9fa] text-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Top Row: Heading + Paragraph + First 2 Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-center md:text-left">
          
          {/* Main Title & Description */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f52ba] tracking-tight leading-tight">
              Our Key Performance Indicators
            </h2>
            <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Our robust medical billing KPIs are measurable, specific, and aligned with your practice&apos;s financial goals. The results? Accurate claim transmissions, better patient care, and faster reimbursements.
            </p>
          </div>

          {/* Top 2 Stats */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4 lg:pt-0">
            {topKpis.map((kpi, index) => (
              <div key={index} className="space-y-1.5 sm:space-y-2 p-4 sm:p-0 rounded-xl bg-white sm:bg-transparent shadow-sm sm:shadow-none border sm:border-0 border-slate-100">
                <div
                  ref={(el) => setCounterRef(el, index)}
                  data-value={kpi.numericVal}
                  data-prefix={kpi.prefix || ''}
                  data-suffix={kpi.suffix || ''}
                  data-decimals={kpi.decimals || 0}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight"
                >
                  {kpi.value}
                </div>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Row: 4 Equal Grid Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-slate-200/80 text-center md:text-left">
          {bottomKpis.map((kpi, index) => (
            <div key={index} className="space-y-1.5 sm:space-y-2 p-4 sm:p-0 rounded-xl bg-white sm:bg-transparent shadow-sm sm:shadow-none border sm:border-0 border-slate-100">
              <div
                ref={(el) => setCounterRef(el, topKpis.length + index)}
                data-value={kpi.numericVal}
                data-prefix={kpi.prefix || ''}
                data-suffix={kpi.suffix || ''}
                data-decimals={kpi.decimals || 0}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight"
              >
                {kpi.value}
              </div>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
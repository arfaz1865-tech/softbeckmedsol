'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Siren,
  Brain,
  Microscope,
  Hand,
  Ribbon,
  Stethoscope,
  Scan,
  Baby,
  Accessibility,
  ArrowRight,
  LucideIcon,
  Sparkles,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SpecialtyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

const specialties: SpecialtyItem[] = [
  {
    id: 'ambulatory-surgery',
    title: 'Ambulatory Surgery',
    subtitle: 'Outpatient Facility Billing',
    description: 'Specialized coding protocols tailored for outpatient surgical centers, driving maximal claim clean rates.',
    icon: Siren,
  },
  {
    id: 'neurosurgery',
    title: 'Neurosurgery',
    subtitle: 'Complex Neurological Procedures',
    description: 'Precision billing for high-complexity brain, spinal, and peripheral nerve procedures.',
    icon: Brain,
  },
  {
    id: 'thoracic-surgery',
    title: 'Thoracic Surgery',
    subtitle: 'Chest & Vascular Care',
    description: 'Navigating intricate cardiothoracic CPT codes and multi-specialty operative documentation.',
    icon: Brain,
  },
  {
    id: 'pathology',
    title: 'Pathology',
    subtitle: 'Diagnostic Lab Operations',
    description: 'High-volume diagnostic code validation, anatomical pathology, and specimen processing claim support.',
    icon: Microscope,
  },
  {
    id: 'dermatology',
    title: 'Dermatology',
    subtitle: 'Cutaneous & Cosmetic Coding',
    description: 'Optimized claim lifecycle management for general, surgical, and cosmetic dermatological practices.',
    icon: Hand,
  },
  {
    id: 'oncology',
    title: 'Oncology',
    subtitle: 'Chemotherapy & Radiation',
    description: 'Comprehensive billing solutions designed for complex cancer care regimens and medication administration.',
    icon: Ribbon,
  },
  {
    id: 'gastroenterology',
    title: 'Gastroenterology',
    subtitle: 'Digestive System Care',
    description: 'Endoscopy, colonoscopy, and GI-specific billing workflows maximizing compliance and reimbursement.',
    icon: Stethoscope,
  },
  {
    id: 'radiology',
    title: 'Radiology',
    subtitle: 'Imaging & Interventional',
    description: 'Diagnostic imaging, MRI, CT, and interventional radiology claim verification systems.',
    icon: Scan,
  },
  {
    id: 'ob-gyn',
    title: 'Ob Gyn',
    subtitle: 'Womens Health Services',
    description: 'Global obstetrical package tracking and specialized gynecological procedural billing.',
    icon: Baby,
  },
  {
    id: 'dme',
    title: 'DME',
    subtitle: 'Durable Medical Equipment',
    description: 'HCPCS coding accuracy for equipment providers, ensuring smooth audit compliance and fast payouts.',
    icon: Accessibility,
  },
];

export default function SpecialtiesOrbitalSection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const totalItems = specialties.length;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top top',
        end: `+=${totalItems * 25}%`,
        pin: true,
        scrub: 0.2,
        onUpdate: (self) => {
          const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
          // Calculate dynamic radius based on viewport width
          const radius = windowWidth < 640 ? 120 : windowWidth < 1024 ? 170 : 220;
          const scrollAngle = self.progress * (2 * Math.PI);

          if (self.progress >= 0.85) {
            setIsCompleted(true);
          } else {
            setIsCompleted(false);
          }

          let minDistance = Infinity;
          let currentActive = 0;

          nodesRef.current.forEach((node, index) => {
            if (!node) return;

            const baseAngle = (index / totalItems) * (2 * Math.PI);
            const currentAngle = baseAngle + scrollAngle;

            const x = Math.cos(currentAngle) * radius;
            const y = Math.sin(currentAngle) * radius;

            gsap.set(node, { x, y });

            const normalizedAngle = (currentAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
            const distanceToLeft = Math.abs(normalizedAngle - Math.PI);

            if (distanceToLeft < minDistance) {
              minDistance = distanceToLeft;
              currentActive = index;
            }
          });

          setActiveIndex(currentActive);
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const activeSpecialty = specialties[activeIndex];
  const ActiveIcon = activeSpecialty.icon;

  const setNodeRef = (el: HTMLDivElement | null, index: number) => {
    nodesRef.current[index] = el;
  };

  return (
    <section
      ref={triggerRef}
      className="w-full min-h-screen bg-[#f4f9fd] text-slate-900 flex items-center justify-center overflow-hidden py-8 sm:py-12 px-4 sm:px-6 lg:px-16 border-t border-slate-200"
    >
       <div className="absolute top-1/4 sm:top-1/2 left-36 sm:-left-48 -translate-y-1/2 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] rounded-full border-[40px] sm:border-[60px] lg:border-[70px] border-[#edf5fd] pointer-events-none -z-0 opacity-80 sm:opacity-100" />
       
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT SIDE: Text Description */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-blue-100/60 border border-blue-200 text-blue-900 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Specialty {activeIndex + 1} of {specialties.length}</span>
          </div>

          <div className="space-y-2 sm:space-y-3 transition-all duration-300">
            <h3 className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wide uppercase">
              {activeSpecialty.subtitle}
            </h3>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              {activeSpecialty.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed pt-1 sm:pt-2 max-w-xl mx-auto lg:mx-0">
              {activeSpecialty.description}
            </p>
          </div>

          <div className="pt-2 sm:pt-4 flex items-center justify-center lg:justify-start gap-4">
            <button className="inline-flex items-center gap-2 bg-[#0a0f1d] hover:bg-slate-800 text-white font-medium px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95">
              <span>Explore Specialty</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Orbital Ring & Floating Badges */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[340px] sm:h-[480px] lg:h-[600px] w-full">
          
          {/* Target Pointer Line */}
          <div className="absolute left-1 sm:left-4 lg:left-6 z-30 flex items-center gap-1.5 sm:gap-2 pointer-events-none">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-600 animate-ping" />
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
          </div>

          {/* Outer Ring Circle Track */}
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border border-blue-200/80 bg-white/40 backdrop-blur-sm flex items-center justify-center shadow-inner">
            
            {/* Inner Ring Decorative Line */}
            <div className="absolute inset-3 sm:inset-5 rounded-full border border-dashed border-blue-300/50 pointer-events-none" />

            {/* Dynamic Center Hub */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-white border border-blue-100 flex flex-col items-center justify-center text-center p-2 sm:p-4 shadow-xl z-20">
              <AnimatePresence mode="wait">
                {isCompleted ? (
                  <motion.div
                    key="explore-more"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-900 leading-tight">
                      Explore All
                    </span>
                    <span className="text-[8px] sm:text-[10px] font-medium text-blue-600 uppercase tracking-wider">
                      Specialties
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="active-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center"
                  >
                    <ActiveIcon className="w-7 h-7 sm:w-9 sm:h-9 text-blue-600 mb-1 transition-all duration-300" />
                    <span className="text-[9px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Specialties
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Orbiting Specialty Icon Badges */}
            {specialties.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  ref={(el) => setNodeRef(el, index)}
                  className="absolute top-1/2 left-1/2 -mt-5 -ml-5 sm:-mt-8 sm:-ml-8 z-20 pointer-events-auto"
                >
                  <div
                    className={`w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0a0f1d] text-white scale-110 sm:scale-125 shadow-xl border-2 border-blue-500'
                        : 'bg-white border border-blue-100 text-blue-900 hover:text-blue-600 hover:border-blue-400 shadow-sm'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 stroke-[1.75]" />
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
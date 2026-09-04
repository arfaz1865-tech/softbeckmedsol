'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import {
  TrendingUp,
  FileText,
  RefreshCw,
  Monitor,
  Users,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';

interface ServiceData {
  id: string;
  tagline: string;
  title: string;
  description: string;
  statValue: string;
  statText: string;
  image: string;
  icon: LucideIcon;
}

const services: ServiceData[] = [
  {
    id: 'SoftbeckMedicare',
    tagline: 'Faster Reimbursements',
    title: 'Revenue Cycle Management',
    description:
      'Catalyze your financial health through end-to-end billing automation. We audit claim lifecycles to eliminate administrative friction.',
    statValue: '35%',
    statText: 'reduction in claim denial rates within the first 60 days.',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: TrendingUp,
  },
  {
    id: 'medical-billing',
    tagline: 'Maximize Profitability',
    title: 'Medical Billing Services',
    description:
      'Our cutting-edge software and scalable infrastructure enable us to provide a complete billing solution at a competitive price. We enhance revenue generation by simplifying every step of your operational process.',
    statValue: '35%',
    statText:
      'increase in revenue growth, a 35% increase in collections in the first few months, and 98.5% of claims getting paid on the first submission.',
    image: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: FileText,
  },
  {
    id: 'ar-recovery',
    tagline: 'Systematic Evaluation',
    title: 'A/R Recovery Analysis',
    description:
      'Retrieve uncollected clinical revenue using deep ledger audits and aggressive aged claim resolution strategies.',
    statValue: '21 Days',
    statText: 'average turnaround time achieved for unresolved aging accounts.',
    image: 'https://images.pexels.com/photos/7579818/pexels-photo-7579818.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: RefreshCw,
  },
  {
    id: 'practice-management',
    tagline: 'Optimized Workflows',
    title: 'Practice Management Software',
    description:
      'Unified cloud digital health system designed to streamline patient onboarding, scheduling, and EHR processing.',
    statValue: '99.2%',
    statText: 'first-pass clean claim submission accuracy across all specialties.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Monitor,
  },
  {
    id: 'staffing-solutions',
    tagline: 'Staffing Solutions',
    title: 'SoftbeckMedicare Force',
    description:
      'Dedicated remote back-office teams and certified billing specialists ready to scale your operational throughput.',
    statValue: '50+',
    statText: 'certified healthcare billing specialists ready for deployment.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: Users,
  },
];

function FillWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const color = useTransform(
    progress,
    [start, end],
    ['rgb(148, 163, 184)', 'rgb(0, 82, 155)'] // Transitions from slate-400 to medical blue (#00529b)
  );

  return (
    <motion.span style={{ color }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}

function FillHeading({ text }: { text: string }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ['start 90%', 'start 30%'],
  });

  const words = text.split(' ');

  return (
    <h2
      ref={headingRef}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug sm:leading-[1.2] tracking-tight"
    >
      {words.map((word, i) => (
        <FillWord
          key={i}
          word={word}
          index={i}
          total={words.length}
          progress={scrollYProgress}
        />
      ))}
    </h2>
  );
}

export default function ServicesAccordionSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-slate-50 text-slate-900 py-12 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-12">

        {/* HEADER */}
        <div className="max-w-3xl">
          <FillHeading text="SoftbeckMedicare offers efficient medical billing, health records management and revenue cycle solutions that drive healthcare success" />
        </div>

        {/* CARDS CONTAINER */}
        <div
          onMouseLeave={() => setActiveId(null)}
          className="flex flex-col lg:flex-row gap-3 lg:h-[560px] w-full"
        >
          {services.map((service) => {
            const isExpanded = activeId === service.id;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => handleToggle(service.id)}
                layout
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between p-5 sm:p-7 select-none transition-all duration-300 border shadow-sm ${
                  isExpanded
                    ? 'lg:flex-[3.5] flex-1 min-h-[320px] sm:min-h-[360px] lg:min-h-0 border-[#00529b]/40 shadow-blue-900/10'
                    : 'lg:flex-[1] flex-1 min-h-[160px] lg:min-h-0 border-blue-100 hover:border-blue-300'
                }`}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 bg-slate-900 pointer-events-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className={`object-cover transition-all duration-500 ${
                      isExpanded ? 'scale-105 brightness-[0.35]' : 'scale-100 brightness-[0.45] opacity-85'
                    }`}
                  />
                </div>

                {/* White-Blue Gradient Overlay for High Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002b52]/90 via-[#00529b]/60 to-transparent z-0 pointer-events-none" />

                {/* Card Top Header */}
                <div className="relative z-10 space-y-2 sm:space-y-4">
                  <p className="text-[11px] sm:text-xs font-bold tracking-wider text-sky-300 uppercase">
                    {service.tagline}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 items-start">
                    <h3 className={`font-bold text-white leading-snug transition-all duration-300 ${
                      isExpanded
                        ? 'lg:col-span-6 text-xl sm:text-2xl md:text-3xl'
                        : 'lg:col-span-12 text-lg sm:text-xl tracking-tight'
                    }`}>
                      {service.title}
                    </h3>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: 0.08 }}
                          className="lg:col-span-6 text-sky-50 text-xs sm:text-sm md:text-base leading-relaxed mt-1 lg:mt-0 font-normal"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 my-auto py-3 sm:py-6">
                  <AnimatePresence mode="wait">
                    {isExpanded ? (
                      <motion.div
                        key="expanded-stats"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="max-w-xl space-y-1 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                      >
                        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-300 block">
                          {service.statValue}
                        </span>
                        <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
                          {service.statText}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed-icon"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-sky-300/30 bg-[#00529b]/40 backdrop-blur-md flex items-center justify-center text-sky-200"
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 pt-3 sm:pt-4 border-t border-white/15 flex items-center justify-between text-white text-xs sm:text-sm font-semibold">
                  <span className="flex items-center gap-2 text-sky-200 group-hover:text-white transition-colors">
                    Learn More <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-300" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
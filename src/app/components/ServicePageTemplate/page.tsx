'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

// --- TypeScript Interfaces ---

export interface HeroSection {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StepItem {
  stepNumber?: number;
  title: string;
  description: string;
}

export interface ProcessSection {
  title: string;
  subtitle?: string;
  steps: StepItem[];
}

export interface FeatureItem {
  id?: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
  bullets?: string[];
}

export interface SpecialtiesSection {
  title: string;
  items: string[];
}

export interface WhyChooseUsSection {
  title: string;
  reasons: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  hero: HeroSection;
  stats?: StatItem[];
  process?: ProcessSection;
  features?: FeatureItem[];
  specialties?: SpecialtiesSection;
  whyChooseUs?: WhyChooseUsSection;
  faqs?: FaqItem[];
}

interface ServicePageTemplateProps {
  serviceData: ServiceData;
}

export default function ServicePageTemplate({ serviceData }: ServicePageTemplateProps) {
  if (!serviceData) {
    return <div className="p-10 text-center text-gray-500">Service data not found.</div>;
  }

  const { hero, stats, process, features, specialties, whyChooseUs, faqs } = serviceData;

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-teal-900 via-emerald-800 to-slate-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="md:col-span-8 space-y-4"
          >
            {hero.badge && (
              <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30 uppercase tracking-wider">
                {hero.badge}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-medium">
              {hero.subtitle}
            </p>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
              {hero.description}
            </p>
            <div className="pt-4">
              <a
                href={hero.ctaLink || "#contact"}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                {hero.ctaText || "Get Started"}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. KEY METRICS STATS BANNER */}
      {stats && stats.length > 0 && (
        <section className="max-w-6xl mx-auto -mt-10 px-6 relative z-10">
          <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl md:text-4xl font-black text-emerald-600">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. WORKFLOW / STEP-BY-STEP PROCESS */}
      {process && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{process.title}</h2>
            {process.subtitle && <p className="text-slate-600 text-sm mt-2">{process.subtitle}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {process.steps.map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-sm relative flex flex-col justify-between">
                <div className="text-emerald-500 font-black text-xl mb-2">0{step.stepNumber || idx + 1}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. FEATURE BREAKDOWN */}
      {features && features.map((feature, idx) => {
        const isRight = feature.imagePosition === "right";
        return (
          <section key={feature.id || idx} className={`py-16 px-6 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={isRight ? 'order-1' : 'order-1 md:order-2'}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{feature.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{feature.description}</p>
                {feature.bullets && (
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={`bg-slate-100 rounded-xl border border-slate-200 h-64 flex items-center justify-center ${isRight ? 'order-2' : 'order-2 md:order-1'}`}>
                <span className="text-slate-400 font-semibold text-sm">[ Visual Graphic / Diagram ]</span>
              </div>
            </div>
          </section>
        );
      })}

      {/* 5. SPECIALTIES SUPPORTED */}
      {specialties && (
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">{specialties.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specialties.items.map((item, idx) => (
                <div key={idx} className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-xs md:text-sm font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. WHY CHOOSE US */}
      {whyChooseUs && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">{whyChooseUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChooseUs.reasons.map((reason, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 px-6 bg-slate-100 border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. BOTTOM CTA BANNER */}
      <section className="bg-emerald-600 text-slate-950 py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black">Ready to Accelerate Your Practice Collections?</h2>
          <p className="text-slate-900 font-medium text-sm md:text-base">
            Get in touch with our medical billing specialists today for a free revenue audit.
          </p>
          <a
            href="/contact"
            className="inline-block bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-3 rounded-lg transition-all shadow-md"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
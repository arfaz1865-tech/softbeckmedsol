'use client'
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check,
  FileSpreadsheet,
  CreditCard,
  Coins,
  Building2
} from 'lucide-react';

export default function DesignedForEaseSection() {
  const cards = [
    {
      id: 'medical-billing',
      title: 'Medical Billing Software',
      description: 'Simplify your billing process with automation and precise coding in MedCare\'s medical billing software.',
      cardBg: 'bg-sky-50/70',
      titleColor: 'text-blue-900',
      personImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80',
      bullets: [
        'Automated claim scrubbing and submission',
        'Real-time eligibility verification',
        'Accelerated payments with ERA posting',
        'Reduced denial rates and faster processing'
      ],
      defaultUi: (
        <div className="absolute top-2 left-2 w-[70%] z-10 space-y-2">
          <div className="bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-sm border border-slate-100 grid grid-cols-4 gap-1 text-center text-[7px] text-slate-600 font-semibold">
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FileSpreadsheet size={10} />
              </div>
              <span className="text-blue-900 font-bold">Claims</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-5 h-5 rounded-full bg-sky-100 text-blue-700 flex items-center justify-center">
                <CreditCard size={10} />
              </div>
              <span>Payments</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                <Coins size={10} />
              </div>
              <span>Collections</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                <Building2 size={10} />
              </div>
              <span>Practices</span>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-sm border border-slate-100 text-[7px]">
            <div className="font-bold text-slate-700 mb-1">Claims</div>
            <svg className="w-full h-12 text-blue-500" viewBox="0 0 100 40">
              <path d="M0 30 L20 22 L35 28 L50 10 L70 20 L100 15" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      )
    },
    {
      id: 'security-control',
      title: 'Security, Control & Audit',
      description: 'Stay compliant and in control with full audit trails and admin-level user management with MedCare MSO\'s medical billing software systems.',
      cardBg: 'bg-blue-50/60',
      titleColor: 'text-blue-900',
      personImg: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80',
      bullets: [
        'Comprehensive audit logs for accountability',
        'Role-based admin controls for staff access',
        'HIPAA-compliant data security',
        'Peace of mind with built-in compliance tools'
      ],
      defaultUi: (
        <div className="absolute top-4 left-2 w-[65%] z-10 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 text-[8px] flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-sky-200 border-t-blue-600"></div>
        </div>
      )
    },
    {
      id: 'ai-coding',
      title: 'AI Coding',
      description: 'Boost accuracy and efficiency with AI-powered coding in our medical billing software.',
      cardBg: 'bg-sky-50/70',
      titleColor: 'text-blue-900',
      personImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
      bullets: [
        'Automated ICD-10 & CPT code suggestions',
        'Minimizes human errors in claim filing',
        'Real-time claim validation rules',
        'Higher first-pass acceptance rates'
      ],
      defaultUi: (
        <div className="absolute top-4 left-2 w-[65%] z-10 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm border border-slate-100 text-[8px]">
          <div className="text-[9px] font-bold text-slate-500 mb-1">Business Performance</div>
          <div className="h-12 bg-blue-50 rounded border border-blue-100 flex items-center justify-center text-blue-600 font-bold">
            99% Accuracy
          </div>
        </div>
      )
    },
    {
      id: 'rcm-analytics',
      title: 'RCM Analytics & Reporting',
      description: 'Track performance and monitor KPI via Power BI analytics with our medical practice billing software and make informed decisions.',
      cardBg: 'bg-blue-50/60',
      titleColor: 'text-blue-900',
      personImg: 'https://images.unsplash.com/photo-1594824813566-78a0c2017772?w=600&auto=format&fit=crop&q=80',
      bullets: [
        'Power BI interactive financial dashboards',
        'Customizable KPI tracking & reports',
        'Actionable A/R aging insight',
        'End-to-end revenue cycle visibility'
      ],
      defaultUi: (
        <div className="absolute top-4 left-2 w-[65%] z-10 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm border border-slate-100 text-[8px]">
          <div className="grid grid-cols-3 gap-1 font-bold text-slate-600">
            <span>Month</span><span>Billed</span><span>Collected</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-slate-500 mt-1">
            <span>Jan</span><span>$45,000</span><span>$44,200</span>
          </div>
        </div>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section 
      className="py-16 max-w-7xl mx-auto px-6 overflow-hidden relative bg-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Designed for Ease. Built for Results.
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed">
            MedCare medical billing software helps practices cut claim errors, shorten A/R cycles, and boost collections with automated workflows that are fast, intuitive, and built with results in mind.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex gap-3 mt-6 md:mt-0">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all active:scale-95" 
            aria-label="Previous"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            onClick={handleNext}
            className="p-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all active:scale-95" 
            aria-label="Next"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Sliding Cards Track */}
      <div className="relative">
        <div 
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3.8))}%)` 
          }}
        >
          {cards.map((card) => (
            <div 
              key={card.id}
              className={`group min-w-[85%] sm:min-w-[45%] lg:min-w-[24%] flex-shrink-0 ${card.cardBg} rounded-[36px] p-6 flex flex-col justify-between relative overflow-hidden h-[620px] shadow-sm border border-blue-100/80 select-none cursor-pointer transition-all duration-300 hover:shadow-md hover:border-blue-200`}
            >
              {/* Card Header */}
              <div className="space-y-4 z-20">
                {/* Badge Icon */}
                <div className="w-10 h-10 rounded-xl bg-white border border-sky-100 flex items-center justify-center shadow-xs">
                  <div className="flex flex-col items-center text-blue-600">
                    <span className="text-[11px] font-extrabold leading-none">+</span>
                    <div className="flex gap-0.5 mt-0.5">
                      <span className="w-1 h-1 rounded-full bg-blue-600"></span>
                      <span className="w-1 h-1 rounded-full bg-blue-600"></span>
                    </div>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className={`text-xl font-bold ${card.titleColor} leading-snug`}>
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom Interactive Visual Area */}
              <div className="relative w-full h-[360px] mt-4">
                
                {/* DEFAULT STATE: Mockup Graphics & Person Cutout */}
                <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none">
                  {card.defaultUi}
                  <img 
                    src={card.personImg} 
                    alt={card.title} 
                    className="absolute bottom-0 right-0 w-[82%] h-[320px] object-cover object-top rounded-tl-3xl drop-shadow-md"
                  />
                </div>

                {/* HOVER STATE: Bullet Key Points Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center space-y-4 z-30 pt-2">
                  {card.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex-shrink-0 p-0.5 text-blue-600">
                        <Check size={16} strokeWidth={3} />
                      </span>
                      <span className="text-slate-800 text-xs md:text-sm font-semibold leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
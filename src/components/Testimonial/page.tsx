'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  keyword: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'client-1',
    name: 'Dr. Marcus Vance',
    role: 'Medical Director',
    company: 'Apex Health Systems',
    keyword: 'Exceptional',
    quote:
      'Partnering with this team has transformed our revenue cycle completely. Clean claim rates rose past 98% within the first quarter, giving our practice unprecedented financial stability.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'client-2',
    name: 'Dr. David Chen',
    role: 'Chief Medical Officer',
    company: 'Vanguard Clinical Group',
    keyword: 'Reliable',
    quote:
      'Their specialty-specific coding knowledge eliminated long-standing billing backlogs. The automated tracking and dedicated account manager keep our staff completely informed every single week.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'godfred-mensah',
    name: 'Doctor Godfrey Mensah',
    role: 'Co-Founder',
    company: 'AW Care',
    keyword: 'Responsive',
    quote:
      'SoftbeckMedicare, as our medical billing company, has reduced our claim denials by up to 20% and resolved all of our billing challenges, including prior authorization and credentialing. We have regularly scheduled weekly meetings with them, and they have been very responsive and courteous during the calls.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'client-4',
    name: 'Dr. Sarah Jenkins',
    role: 'Head of Operations',
    company: 'Horizon Health',
    keyword: 'Efficient',
    quote:
      'Their team streamlined our entire onboarding flow and reduced average account receivable collection times from 60 days down to under 25 days effortlessly.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  const visibleCards = [
    testimonials[(activeIndex - 2 + testimonials.length) % testimonials.length],
    testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length],
    testimonials[activeIndex],
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden relative border-t border-blue-50">
      
      {/* Soft Blue Background Glows */}
      <div className="absolute right-0 top-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-100/60 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute left-0 bottom-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-blue-50/80 rounded-full filter blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16 relative z-10">
        
        {/* SECTION HEADING */}
        <div className="max-w-3xl">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-3">
            Client Success
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 tracking-tight leading-tight">
            What Our Clients Say About Working With Us
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT SIDE: Asymmetrical Carousel Grid (Active image enlarged) */}
          <div className="lg:col-span-7 overflow-hidden py-4">
            <motion.div 
              layout
              className="grid grid-cols-12 gap-3 sm:gap-4 items-center"
            >
              {visibleCards.map((item, idx) => {
                const isRightmostActive = idx === 2;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => {
                      const foundIndex = testimonials.findIndex((t) => t.id === item.id);
                      if (foundIndex !== -1) setActiveIndex(foundIndex);
                    }}
                    className={`cursor-pointer relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl ${
                      isRightmostActive 
                        ? 'col-span-6 h-[320px] sm:h-[420px] lg:h-[480px] ring-4 ring-blue-600/20 shadow-blue-500/10' 
                        : 'col-span-3 h-[200px] sm:h-[280px] lg:h-[320px] opacity-70 hover:opacity-100'
                    }`}
                  >
                    {/* Background Blue Overlay */}
                    <div
                      className={`absolute inset-0 z-10 transition-colors duration-500 ${
                        isRightmostActive ? 'bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent' : 'bg-blue-900/30'
                      }`}
                    />

                    {/* Image Cutout */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes={isRightmostActive ? "(max-width: 1024px) 50vw, 35vw" : "(max-width: 1024px) 25vw, 15vw"}
                      priority={isRightmostActive}
                      className={`object-cover object-center transition-all duration-700 ${
                        isRightmostActive ? 'scale-105' : 'grayscale contrast-125'
                      }`}
                    />

                    {/* Active Badge / Indicator */}
                    {isRightmostActive && (
                      <div className="absolute top-3 left-3 z-20 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        Featured
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT SIDE: Active Testimonial Information */}
          <div className="lg:col-span-5 relative pl-0 lg:pl-6 min-h-[280px] sm:min-h-[340px] flex flex-col justify-center">
            
            {/* Watermark Quote Graphic */}
            <div className="absolute -top-10 sm:-top-14 right-2 text-blue-100 text-8xl sm:text-[11rem] font-serif select-none pointer-events-none leading-none -z-0">
              &rdquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4 sm:space-y-6 relative z-10"
              >
                {/* Keyword Highlight */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 tracking-tight">
                  {currentTestimonial.keyword}
                </h3>

                {/* Testimonial Quote */}
                <p className="text-blue-950/80 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="pt-2 border-l-2 border-blue-600 pl-4">
                  <h4 className="text-base sm:text-xl font-bold text-blue-950 leading-snug">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-600 font-medium">
                    {currentTestimonial.role}, <span className="text-blue-900">{currentTestimonial.company}</span>
                  </p>
                </div>

                {/* Call to Action Button */}
                <div className="pt-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-95">
                    Watch Story
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
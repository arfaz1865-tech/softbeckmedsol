"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

const features: Feature[] = [
  {
    id: "01",
    number: "01",
    title: "COST-EFFECTIVE SOLUTIONS",
    description:
      "SoftbeckMedicare  offers a pay-for-paid model to save you thousands of dollars. Outsource your billing services to us and enjoy free software installation and denied claims appeals.",
    imageSrc:
      "https://images.unsplash.com/photo-1666886573301-b5d526cfd518?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "02",
    number: "02",
    title: "INCREASE REVENUE",
    description:
      "SoftbeckMedicare  will ensure that your claims are accurately submitted promptly. It will reduce the number of rejected or denied claims due to an inefficient medical billing cycle.",
    imageSrc:
      "https://images.unsplash.com/photo-1758691463569-66de91d76452?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "03",
    number: "03",
    title: "GET PAID FASTER",
    description:
      "We significantly reduce your turnaround time by ensuring claims reach all possible carriers through our reliable electronic medical billing services and by being set up to receive ERAs.",
    imageSrc:
      "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function FeatureCard({ item }: { item: Feature }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position for this specific card reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Dynamic scroll transformations for visual reveal effect
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 0.1]);

  // Combined CSS filter transform for optimized hardware acceleration
  const filterStyle = useTransform(
    scrollYProgress,
    [0, 1],
    ["brightness(0.3) grayscale(100%)", "brightness(1) grayscale(0%)"]
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-6 sm:gap-8 border-b border-white/10 pb-12 sm:pb-20 last:border-b-0"
    >
      {/* Title & Description Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-end">
        <div className="lg:col-span-8 flex items-start gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm font-mono text-blue-300/70 pt-1.5 sm:pt-2">
            {item.number}
          </span>
          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-blue-100 uppercase leading-snug sm:leading-[1.08]">
            {item.title}
          </h3>
        </div>

        <div className="lg:col-span-4 lg:pl-4">
          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-light">
            {item.description}
          </p>
        </div>
      </div>

      {/* Scroll-Revealed Color Image Container */}
      <div className="relative w-full h-[220px] sm:h-[380px] md:h-[480px] lg:h-[540px] rounded-xl sm:rounded-2xl overflow-hidden mt-2 sm:mt-4 border border-blue-900/40">
        <motion.div
          style={{
            filter: filterStyle,
            scale: imageScale,
          }}
          className="relative w-full h-full transition-all ease-out"
        >
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Atmospheric Blue Tint Overlay that fades out on scroll */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-blue-950 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default function WhyChooseSoftbeckMedicare() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 sm:gap-16 lg:gap-24">
        {/* Main Section Header */}
        <div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-400 font-mono">
            Reasons To Choose SoftbeckMedicare 
          </span>
        </div>

        {/* Vertical Points Stack */}
        <div className="flex flex-col gap-12 sm:gap-20 lg:gap-28">
          {features.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const challenges = [
  "Claim Denials",
  "Administrative Burden",
  "Slow Cash Flow",
  "Coding Errors",
];

const solutionHeadingText = "Now, there is SoftbeckMedicare.";
const targetAudience = ['engineers', 'doctors', 'clinics', 'hospitals'];

export default function DoctorPainPointSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);
  const darkOverlayRef = useRef<HTMLDivElement>(null);
  const solutionTextWrapperRef = useRef<HTMLDivElement>(null);
  const solutionWordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const pillTextRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const textPlayedRef = useRef(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const circle = circleRef.current;
      const badges = badgesRef.current.filter(Boolean) as HTMLDivElement[];
      const validWords = solutionWordsRef.current.filter(Boolean) as HTMLSpanElement[];

      // Entry animation for badges
      gsap.fromTo(
        badges,
        { y: 60, opacity: 0, scale: 0.85 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Text reveal for solution overlay
      const textRevealTl = gsap.timeline({ paused: true });
      textRevealTl
        .fromTo(
          validWords,
          { y: 60, opacity: 0, filter: 'blur(12px)', rotateX: 25 },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            rotateX: 0,
            duration: 1.1,
            stagger: 0.18,
            ease: 'back.out(1.4)',
          }
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          0.4
        );

      // Pinned Timeline
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            if (self.progress >= 0.35 && !textPlayedRef.current) {
              textPlayedRef.current = true;
              textRevealTl.play();
            } else if (self.progress < 0.3 && textPlayedRef.current) {
              textPlayedRef.current = false;
              textRevealTl.reverse();
            }
          },
        },
      });

      pinTl.to(
        [headingRef.current, introTextRef.current, ...badges],
        { opacity: 0, y: -30, duration: 0.4, ease: 'power1.in' },
        0
      );

      pinTl.to(
        sectionRef.current,
        { backgroundColor: '#030712', duration: 1.2 },
        0.2
      );

      pinTl.to(circle, { scale: 1.08, duration: 1.2, ease: 'power2.inOut' }, 0.2);
      pinTl.to(darkOverlayRef.current, { opacity: 0.85, duration: 1 }, 0.3);
      pinTl.set(solutionTextWrapperRef.current, { opacity: 1 }, 0.3);

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Cycling pill text animation
  useEffect(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline();

      tl.to(pillRef.current, {
        scale: 1.06,
        duration: 0.2,
        ease: 'power2.out',
      })
        .to(
          pillTextRef.current,
          {
            y: -20,
            opacity: 0,
            scale: 0.85,
            duration: 0.35,
            ease: 'power2.in',
            onComplete: () => {
              setCurrentIndex((prev) => (prev + 1) % targetAudience.length);
              gsap.set(pillTextRef.current, { y: 20, scale: 0.85 });
            },
          },
          '<'
        )
        .to(pillTextRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(2)',
        })
        .to(pillRef.current, {
          scale: 1,
          duration: 0.25,
          ease: 'power2.out',
        });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const solutionWords = solutionHeadingText.split(' ');

  const setBadgeRef = (el: HTMLDivElement | null, index: number) => {
    badgesRef.current[index] = el;
  };

  const setWordRef = (el: HTMLSpanElement | null, index: number) => {
    solutionWordsRef.current[index] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 sm:py-20 px-4 sm:px-8 flex flex-col items-center justify-center min-h-screen relative overflow-hidden transition-colors duration-500"
    >
      {/* Initial Heading */}
      <h1
        ref={headingRef}
        className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-slate-900 mb-6 sm:mb-12 text-center tracking-tight leading-snug z-10"
      >
        Navigating the <span className="italic font-serif">Financial Landscape</span>
      </h1>

      {/* Center Circle Container */}
      <div
        ref={circleRef}
        className="relative w-[75vw] h-[75vw] max-w-[480px] max-h-[480px] sm:w-[500px] sm:h-[500px] flex items-center justify-center my-4 sm:my-6"
      >
        <div className="absolute inset-0 rounded-full border border-blue-200/50 pointer-events-none" />

        <div className="relative z-10 w-[85%] h-[85%] rounded-full overflow-hidden shadow-2xl">
          <Image
            src="https://ik.imagekit.io/rr4sbss3f/doctor.png"
            alt="Healthcare professional facing challenges"
            fill
            priority
            sizes="(max-width: 640px) 280px, 480px"
            className="object-cover object-top"
          />

          {/* Dark Overlay */}
          <div
            ref={darkOverlayRef}
            className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-950/90 to-slate-900 opacity-0 pointer-events-none transition-opacity duration-300"
          />
        </div>

        {/* Floating Badges */}
        <div ref={(el) => setBadgeRef(el, 0)} className="absolute top-[2%] left-[-4%] sm:left-[-12%] z-20">
          <Badge label={challenges[0]} />
        </div>
        <div ref={(el) => setBadgeRef(el, 1)} className="absolute top-[2%] right-[-4%] sm:right-[-12%] z-20">
          <Badge label={challenges[1]} />
        </div>
        <div ref={(el) => setBadgeRef(el, 2)} className="absolute top-[54%] left-[-6%] sm:left-[-14%] z-20">
          <Badge label={challenges[2]} />
        </div>
        <div ref={(el) => setBadgeRef(el, 3)} className="absolute top-[60%] right-[-6%] sm:right-[-14%] z-20">
          <Badge label={challenges[3]} />
        </div>
      </div>

      {/* Overlay Solution Text */}
      <div
        ref={solutionTextWrapperRef}
        className="absolute z-30 inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 opacity-0 pointer-events-none gap-3 sm:gap-4 bg-gradient-to-b from-blue-950/40 via-slate-950/80 to-blue-950/60 backdrop-blur-[2px]"
      >
        <h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-blue-50 leading-tight flex flex-wrap justify-center gap-x-2 sm:gap-x-3"
          style={{ perspective: '600px' }}
        >
          {solutionWords.map((word, index) => (
            <span
              key={index}
              ref={(el) => setWordRef(el, index)}
              className="inline-block"
            >
              {word === "SoftbeckMedicare." ? <span className="font-serif italic text-blue-300">{word}</span> : word}
            </span>
          ))}
        </h2>

        {/* Subtitle with Rotating Pill */}
        <div
          ref={subtitleRef}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-xl md:text-2xl font-light tracking-wide text-blue-200/90"
        >
          <span>Medical intelligence for</span>

          <div
            ref={pillRef}
            className="inline-flex items-center justify-center border border-blue-400/40 rounded-full px-4 sm:px-6 py-1 min-w-[120px] sm:min-w-[150px] overflow-hidden bg-blue-900/30 backdrop-blur-md shadow-inner"
          >
            <span
              ref={pillTextRef}
              className="inline-block font-normal text-white text-sm sm:text-base md:text-lg"
            >
              {targetAudience[currentIndex]}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Narrative Copy */}
      <div
        ref={introTextRef}
        className="mt-6 sm:mt-10 text-center max-w-2xl text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg px-4 z-10"
      >
        <p className="font-semibold text-slate-900 text-base sm:text-lg md:text-xl">You&apos;re Not Alone.</p>
        <p className="mt-1.5 sm:mt-2 text-slate-600">
          These challenges drain your time and resources, pulling you away from what matters most: patient care. We understand the unique pressures healthcare providers face and offer specialized solutions to overcome these obstacles.
        </p>
      </div>
    </section>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-blue-500/30 text-blue-100 font-sans text-[10px] sm:text-xs md:text-sm font-medium px-3 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-xl shadow-blue-950/40 whitespace-nowrap backdrop-blur-sm">
      {label}
    </div>
  );
}
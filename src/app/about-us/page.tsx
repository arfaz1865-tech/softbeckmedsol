"use client";

import React from 'react';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';


interface MetricCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface CoreValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function AboutUsPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Overlay Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 opacity-90" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Welcome To <span className="text-blue-400">SoftbeckMedicare </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Your digital health care Partner
          </p>
          <p className="text-sm text-blue-200/80 italic">
            your growth, our promise
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-blue-500/30"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          About Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 leading-relaxed text-base">
          <div className="space-y-4">
            <p>
              Since 2012, SoftbeckMedicare  has been a trusted name in medical billing. With a decade of healthcare IT and billing experience, our team of medical billing and revenue cycle management professionals knows how to get things done quickly and efficiently.
            </p>
            <div className="pt-4">
              <button className="bg-slate-900 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium text-sm transition-colors duration-200 shadow">
                Request a Consultation
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <p>
              We provide complete billing solutions to ensure that organizations of all sizes and specialties receive the services they need, including{' '}
              <span className="text-blue-600 font-medium">medical claims billing service</span>,{' '}
              <span className="text-blue-600 font-medium">aging AR recovery</span>, and practice management solutions.
            </p>
            <p>
              Our <span className="text-blue-600 font-medium">medical billing software</span> is currently being utilized by nearly one million satisfied physicians, nurse practitioners, and healthcare professionals in more than 200+ healthcare facilities nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What Makes Us Different? (Metrics Section) */}
      <section className="py-16 bg-blue-50/50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            What Makes Us Different?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <MetricCard
              value="98.5%"
              label="First Pass Clean Claims Rate"
              icon={<CheckFileIcon />}
            />
            <MetricCard
              value="35%"
              label="Revenue Increase"
              icon={<TrendingUpIcon />}
            />
            <MetricCard
              value="35%"
              label="Reduction in A/R"
              icon={<PercentageIcon />}
            />
            <MetricCard
              value="96%"
              label="Collection Ratios"
              icon={<FolderIcon />}
            />
            <MetricCard
              value="↓10%"
              label="120+ AR"
              icon={<HandIcon />}
            />
            <MetricCard
              value="7-14"
              label="Days Turn Around Time"
              icon={<ClockIcon />}
            />
          </div>
        </div>
      </section>

      {/* 4. Vision Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-80 w-full rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-900 overflow-hidden shadow-lg flex items-center justify-center">
            {/* Conceptual Eye / Vision graphic placeholder */}
            <div className="w-36 h-36 border-4 border-blue-400/40 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              Winning together with our clients, our ambition is to innovate and grow while delivering sustainable value to all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Mission Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 md:order-1 order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to set new benchmarks in revenue cycle management by prioritizing client satisfaction, employee development, and ethical values, while pursuing operational excellence through innovation.
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full rounded-2xl bg-gradient-to-tr from-slate-800 to-blue-900 overflow-hidden shadow-lg flex items-center justify-center md:order-2 order-1">
            {/* Conceptual Target / Mission graphic placeholder */}
            <div className="space-y-2 text-center">
              <div className="w-32 h-32 border-8 border-blue-500/30 rounded-full flex items-center justify-center mx-auto">
                <div className="w-16 h-16 border-8 border-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Core Values Section */}
      <section className="py-20 bg-slate-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Values</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-16">
            SoftbeckMedicare’s core values are reflected in our dedication to delivering the most efficient solutions for medical billing and revenue cycle management.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            <CoreValueCard
              title="People"
              description="We believe in developing and empowering our people, valuing their growth, wellbeing, and contributions"
              icon={<PeopleIcon />}
            />
            <CoreValueCard
              title="Integrity"
              description="We believe in a culture where honesty and ethical behavior are the foundation of all our actions"
              icon={<IntegrityIcon />}
            />
            <CoreValueCard
              title="Innovation"
              description="We believe in constant creativity, driving progress through new ideas"
              icon={<InnovationIcon />}
            />
            <CoreValueCard
              title="Teamwork"
              description="We believe in the power of collaboration, combining individual strengths to achieve collective success"
              icon={<TeamworkIcon />}
            />
            <CoreValueCard
              title="Excellence"
              description="We believe in achieving excellence in all that we do, aiming for the highest standards of quality and performance"
              icon={<ExcellenceIcon />}
            />
          </div>
        </div>
      </section>

    </div>
    <Footer />
    </>
  );
}

{/* Sub-components */}

function MetricCard({ value, label, icon }: MetricCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-blue-600 mb-6">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{value}</div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

function CoreValueCard({ title, description, icon }: CoreValueCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
      <div className="text-blue-600 mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed flex-grow">{description}</p>
    </div>
  );
}

{/* SVG Icons */}

function CheckFileIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function PercentageIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v1m-6 3v10a2 2 0 002 2h10a2 2 0 002-2V8m-14 0h14" />
    </svg>
  );
}

function HandIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function IntegrityIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function InnovationIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function TeamworkIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1zm12 0a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1zM4 18a2 2 0 012-2h12a2 2 0 012 2v1H4v-1z" />
    </svg>
  );
}

function ExcellenceIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';
import DesignedForEaseSection from '../../components/component1/page';
import LeadCaptureSection from '../../components/component2/page';
import FaqAndBottomBanner from '../../components/component3/page';
import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';
import { 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  UserCheck, 
  Stethoscope, 
  FileCheck, 
  FileText, 
  Cpu, 
  CheckCircle2, 
  XCircle, 
  ArrowUp, 
  ArrowDown,
  Check
} from 'lucide-react';

export default function SoftbeckMedicareLandingPage() {
  return (
    <>
      <Header />
      <div className="font-sans text-slate-800 bg-white relative selection:bg-blue-100 selection:text-blue-900">
        
        {/* SECTION 1: HERO SECTION */}
        <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Copy & CTA */}
          <div className="lg:col-span-5 space-y-6">
            {/* AI Powered Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
              <span className="text-amber-300">✦</span>
              <span>AI Powered</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              AI Medical Billing Software for <span className="text-blue-600">99% Billing Accuracy</span>
            </h1>

            <p className="text-slate-600 text-base leading-relaxed">
              From claim creation to submission and ERA auto-posting, SoftbeckMedicare's AI medical billing software keeps your cash flow consistent and your staff focused on patients.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                href="/ContactPage" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-full flex items-center gap-3 transition-all shadow-md hover:shadow-lg shadow-blue-600/20"
              >
                <span>Request a Demo</span>
                <span className="bg-white text-blue-600 rounded-full p-1">
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              {/* Provider Proof Chip */}
              <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full py-2 px-4 shadow-sm">
                <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" alt="Doctor 1" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80" alt="Doctor 2" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1594824813566-78a0c2017772?w=100&auto=format&fit=crop&q=80" alt="Doctor 3" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Trusted by 1000+<br/>providers</span>
              </div>
            </div>

            {/* Compliance Logos */}
            <div className="pt-8 grid grid-cols-4 gap-4 items-center opacity-80">
              <div className="text-xs font-bold text-red-600 border border-slate-200 p-1 rounded text-center">HITRUST<br/><span className="text-[9px] font-normal text-slate-500">CSF Certified</span></div>
              <div className="text-xs font-bold text-sky-600 border border-slate-200 p-1 rounded text-center">HIPAA</div>
              <div className="text-xs font-bold text-blue-700 border border-slate-200 p-1 rounded text-center">AICPA<br/><span className="text-[9px] font-normal text-slate-500">SOC</span></div>
              <div className="text-xs font-bold text-blue-800 border border-slate-200 p-1 rounded text-center">PCI<br/><span className="text-[9px] font-normal text-slate-500">DSS Compliant</span></div>
            </div>
          </div>

          {/* Right Column - Software Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="bg-slate-900 rounded-2xl p-2 shadow-2xl border-4 border-blue-100">
              <div className="bg-white rounded-xl overflow-hidden p-4 min-h-[380px] flex flex-col justify-between relative">
                
                {/* Dashboard Wireframe Preview */}
                <div className="border-b pb-3 mb-4 flex justify-between items-center text-xs text-slate-400">
                  <span className="font-bold text-blue-600 text-sm">Maximus Dashboard</span>
                  <span>Search Patients...</span>
                </div>

                {/* Floating Feature Cards Over UI */}
                <div className="absolute left-4 top-16 space-y-3 z-20 w-60">
                  <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileCheck size={20} /></div>
                    <span className="text-xs font-bold text-slate-800">Claim Scrubbing by Rule Engine</span>
                  </div>

                  <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Cpu size={20} /></div>
                    <span className="text-xs font-bold text-slate-800">Automated ERA Posting</span>
                  </div>

                  <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileText size={20} /></div>
                    <span className="text-xs font-bold text-slate-800">Denial Management</span>
                  </div>
                </div>

                {/* Placeholder Content Graphic */}
                <div className="grid grid-cols-3 gap-3 pt-12">
                  <div className="col-span-2 h-32 bg-slate-50 rounded-lg border border-dashed border-slate-200 p-2">
                    <div className="h-full w-full bg-gradient-to-tr from-sky-100 to-blue-50 rounded flex items-end p-2">
                      <div className="w-full h-1/2 bg-blue-600/20 rounded-t border-t-2 border-blue-600"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-slate-50 rounded-lg border border-dashed border-slate-200 p-2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-sky-300 border-t-blue-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ONE PLATFORM FOR ALL PRACTICE OPERATIONS */}
        <section className="py-16 bg-sky-50/50 border-y border-blue-100/60">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              One Platform for All Practice Operations
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-16 text-sm md:text-base">
              SoftbeckMedicare PMS takes care of all practice operations by integrating advanced analytics, patient engagement, and revenue cycle management into a single platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Item 1 */}
              <div className="flex flex-col items-start text-left px-4 border-r border-blue-100 last:border-0">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                  <Clock size={32} />
                </div>
                <p className="font-semibold text-slate-800 text-base leading-snug">
                  Claims workflows that save time, not add to it.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-start text-left px-4 border-r border-blue-100 last:border-0">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                  <Calendar size={32} />
                </div>
                <p className="font-semibold text-slate-800 text-base leading-snug">
                  Automation tools for effective patient communication
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-start text-left px-4 border-r border-blue-100 last:border-0">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                  <UserCheck size={32} />
                </div>
                <p className="font-semibold text-slate-800 text-base leading-snug">
                  One login, one platform, built for practice owners
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-start text-left px-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                  <Stethoscope size={32} />
                </div>
                <p className="font-semibold text-slate-800 text-base leading-snug">
                  Smart billing that keeps your revenue consistent
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: DESIGNED FOR EASE CAROUSEL / CARDS */}
        <DesignedForEaseSection />

        {/* SECTION 4: COMPARISON TABLE */}
        <section className="py-16 bg-sky-50/50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Legacy Billing Software vs SoftbeckMedicare Medical Billing Software
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
                Why settle for an outdated billing software? SoftbeckMedicare AI medical billing software replaces slow, siloed software with a modern, AI-driven solution built for speed, accuracy, and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl p-8 border border-blue-100 shadow-xl">
              {/* Legacy Column */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                  <div className="p-2 bg-rose-100 text-rose-500 rounded-full">
                    <XCircle size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Legacy Medical Billing Software Solutions
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Manual workflows prone to cause errors",
                    "Slow, outdated, complex user interface",
                    "High maintenance & infrastructure costs",
                    "Limited interoperability & API incompatibility",
                    "Security vulnerable, unpatched tech",
                    "Lacks key features and hard to scale"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <span className="p-1 bg-rose-100 text-rose-500 rounded-full flex-shrink-0">
                        <ArrowDown size={14} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SoftbeckMedicare Column */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    SoftbeckMedicare AI Medical Billing Software
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "AI-Powered workflows to reduce errors",
                    "Intuitive, fast, modern user experience",
                    "Cloud-native, instant access anywhere",
                    "Seamless EHR & API Integration",
                    "HIPAA compliance-ready with audit trails",
                    "Scalable platform with intuitive features"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <span className="p-1 bg-blue-100 text-blue-600 rounded-full flex-shrink-0">
                        <ArrowUp size={14} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: TAILORED TO YOUR PRACTICE TYPE */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Tailored to Your Practice Type and Specialty
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Whether you're a solo physician, a multi-site clinic owner, or running a specialized facility, our medical coding and billing software adapts to your practice structure and specialty with ease. Our platform is designed to remove administrative burdens, streamline patient management, and give you back more time for care.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                From appointment scheduling and eligibility verification to billing, compliance, and real-time reporting, SoftbeckMedicare's medical billing software programs scale with your practice as it grows. No matter the size or specialty, our flexible workflows and specialty-focused features ensure you get a system that works the way you do, not the other way around.
              </p>

              <Link 
                href="/ContactPage" 
                className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-medium px-8 py-3.5 rounded-full transition-colors shadow-md shadow-blue-600/20"
              >
                Optimize Your Practice Now
              </Link>
            </div>

            <div className="relative">
              <div className="bg-sky-50 rounded-3xl p-4 border border-blue-100/60">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80" 
                  alt="Healthcare Professional" 
                  className="rounded-2xl w-full h-[450px] object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: STATS & TRUST */}
        <section className="py-16 bg-sky-50/50 border-t border-blue-100/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* UI Preview Image */}
              <div className="lg:col-span-5 bg-sky-100/50 p-4 rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" 
                  alt="Software Interface" 
                  className="rounded-2xl shadow-lg border border-white"
                />
              </div>

              {/* Stats Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-slate-900">
                    1000+ Healthcare Practices Use SoftbeckMedicare AI Medical Billing Software
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    Created with growth in mind, SoftbeckMedicare practice management and billing software currently supports 50+ specialties, with over 10 years of proven excellence.
                  </p>
                </div>

                {/* Action & Certifications Row */}
                <div className="flex flex-wrap items-center gap-6">
                  <Link 
                    href="/ContactPage" 
                    className="border-2 border-blue-600 text-blue-600 font-bold px-6 py-2.5 rounded-full flex items-center gap-3 hover:bg-blue-50 transition-colors"
                  >
                    <span>Explore For Free</span>
                    <span className="bg-blue-600 text-white rounded-full p-1">
                      <ArrowUpRight size={14} />
                    </span>
                  </Link>

                  <div className="flex items-center gap-4 border-l pl-6 border-slate-200">
                    <span className="text-xs font-bold text-blue-900">AAPC</span>
                    <span className="text-xs font-bold text-red-700">ASRM</span>
                    <span className="text-xs font-bold text-slate-700">ISO 9001:2015</span>
                    <span className="text-xs font-bold text-sky-800">BBB A+</span>
                  </div>
                </div>

                <hr className="border-slate-200" />

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">98.5%</div>
                    <p className="text-xs md:text-sm font-medium text-slate-600">Clean Claim Acceptance</p>
                  </div>
                  <div className="border-x border-slate-200 px-2">
                    <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">35%</div>
                    <p className="text-xs md:text-sm font-medium text-slate-600">Reduction in A/R</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">96%</div>
                    <p className="text-xs md:text-sm font-medium text-slate-600">Collection Ratio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: PRICING / PLANS */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Compare plans and pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Plan 1 */}
            <div className="bg-sky-50/70 p-8 rounded-3xl flex flex-col justify-between border border-blue-100 shadow-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Practice Management Software
                </h3>

                <ul className="space-y-3">
                  {[
                    "Automated SoftbeckMedicare Workflows",
                    "Smart Eligibility Verification",
                    "AI-Driven Coding",
                    "Automated Payment Posting",
                    "Streamlined Denial Management",
                    "Real-Time Financial Insights"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check size={16} className="text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/ContactPage" 
                className="mt-8 block text-center w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
              >
                Get Pricing
              </Link>
            </div>

            {/* Plan 2 (Highlighted) */}
            <div className="bg-blue-600 text-white p-8 rounded-3xl flex flex-col justify-between relative shadow-xl shadow-blue-600/20 transform lg:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full flex items-center gap-1 shadow">
                <Check size={14} /> FREE PMS
              </div>

              <div className="space-y-6 pt-2">
                <div className="inline-block bg-blue-700 text-blue-100 text-xs px-3 py-1 rounded-full font-medium">
                  Recommended
                </div>

                <h3 className="text-2xl font-bold">
                  AI-Powered Medical Billing
                </h3>

                <ul className="space-y-3">
                  {[
                    "End-to-End Billing Services",
                    "Automated Eligibility Verification",
                    "Fast Claim Submission & Tracking",
                    "Certified Expert Coding",
                    "Regulatory & Compliance Ready"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-blue-50">
                      <Check size={16} className="text-amber-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/ContactPage" 
                className="mt-8 block text-center w-full bg-white text-blue-900 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-sky-50/70 p-8 rounded-3xl flex flex-col justify-between border border-blue-100 shadow-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Revenue Cycle Management
                </h3>

                <ul className="space-y-3">
                  {[
                    "Full-Spectrum SoftbeckMedicare Solutions",
                    "AI-Enhanced AR Recovery Engine",
                    "Seamless Payment Posting",
                    "Automated Denial Management",
                    "Performance Dashboards & Reports"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check size={16} className="text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/ContactPage" 
                className="mt-8 block text-center w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
              >
                Get a Quote
              </Link>
            </div>

          </div>
        </section>

      </div>

      <LeadCaptureSection />
      <FaqAndBottomBanner />
      <Footer />
    </>
  );
}
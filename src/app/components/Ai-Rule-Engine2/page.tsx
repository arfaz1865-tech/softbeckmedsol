"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Cpu,
  Calculator,
  ShieldCheck,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Brain,
  Stethoscope,
  Ribbon,
  Accessibility,
  ScanLine,
  Baby,
  Smile,
  Activity,
  Hand,
  Home,
  Syringe,
  FileText,
  Sliders,
  Settings,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AIRuleEngineShowcase() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const enterpriseCards = [
    {
      title: "Policy-Driven Rule Architecture",
      icon: FileText,
      description:
        "Maps rules to specific payers, applies coverage rules by Date of Service, and validates medical necessity. Tracks policy revisions and ensures your practice remains compliant with evolving healthcare regulations.",
    },
    {
      title: "Audit-Ready Transparency",
      icon: Sliders,
      description:
        "Generates detailed decision logs, traceability, and policy references for each rule execution. This ensures defensible documentation during internal audits, payer reviews, and regulatory inspections.",
    },
    {
      title: "Enterprise Controls & Governance",
      icon: Settings,
      description:
        "Our solution features role based access control, rule version management, change approval workflows, and environment separation (Dev/Test/Prod), ensuring system stability and compliance.",
    },
    {
      title: "HIPAA Compliance",
      icon: ShieldAlert,
      description:
        "The AI Rule Engine supports HIPAA aligned billing operations by enforcing secure transaction validation (837P/837I), maintaining role based access, and generating audit ready logs.",
    },
  ];

  // Auto-scroll logic for Enterprise Compliance Cards
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % enterpriseCards.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [enterpriseCards.length]);

  const handleNextSlide = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % enterpriseCards.length);
  };

  const handlePrevSlide = () => {
    setActiveCardIndex((prevIndex) =>
      prevIndex === 0 ? enterpriseCards.length - 1 : prevIndex - 1
    );
  };

  const faqItems = [
    {
      q: "How is this different from standard billing software?",
      a: "Unlike basic medical billing software, our AI rule engine supports governed rule logic, practice specific rules, auto actions, and real time validation before claims reach the clearinghouse.",
    },
    {
      q: "Will this slow down our billing workflow?",
      a: "No, the engine processes claims in milliseconds using asynchronous scrubbing algorithms, allowing high-volume claim submissions without delay.",
    },
    {
      q: "Can rules be updated when payer policies change?",
      a: "Yes, our central rule database updates automatically as CMS and commercial payer rules change, keeping your practice compliant instantly.",
    },
    {
      q: "Who controls rule creation and approvals?",
      a: "Your billing team can configure custom rules or rely on system-managed global rules, with full role-based control and approval logs.",
    },
    {
      q: "What happens if a rule causes unexpected issues?",
      a: "The engine includes version control and roll-back capabilities, allowing you to instantly pause or revert any specific rule.",
    },
    {
      q: "How is pricing structured for the Rule Engine AI?",
      a: "Pricing is structured around monthly active claims volume with scalable tiers designed for both small practices and large enterprise groups.",
    },
  ];

  const specialties = [
    { name: "Mental Health", icon: Brain },
    { name: "Cardiology", icon: Stethoscope },
    { name: "Oncology", icon: Ribbon },
    { name: "DME", icon: Accessibility },
    { name: "Radiology", icon: ScanLine },
    { name: "Ob Gyn", icon: Baby },
    { name: "Dental", icon: Smile },
    { name: "Endocrinology", icon: Activity },
    { name: "Dermatology", icon: Hand },
    { name: "Family Practice", icon: Home },
    { name: "General Surgery", icon: Syringe },
    { name: "Pulmonology", icon: Syringe },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans relative">

      {/* ================= SECTION 1: 3-CARD ACCEPTANCE & REVENUE ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16 tracking-tight">
          How Our AI Rule Engine Improves Claim Acceptance & Revenue?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-50/40 border border-blue-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:border-blue-200 transition-all">
            <div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 leading-snug">
                How the Rule Engine Improves First-Pass Acceptance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Billing teams often submit claims without visibility into payer specific conditions, enrollment status, or coverage constraints, only discovering issues after the claim is rejected. The AI rule engine evaluates these variables at submission, enforcing payer logic in real time so only compliant, submission-ready claims move forward, which increases the first pass clean claim rate by 98.5%.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50/40 border border-blue-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:border-blue-200 transition-all">
            <div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 leading-snug">
                How the Rule Engine Protects Revenue Integrity
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Revenue is often lost when subtle coding conflicts or non-standard payer requirements go unnoticed until after payment is delayed or reduced. The rule engine AI scrubber software applies payer specific and custom logic upfront, identifying these risks early and ensuring claims align with reimbursement rules before submission.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50/40 border border-blue-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:border-blue-200 transition-all">
            <div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 leading-snug">
                How the Rule Engine Enables Auto Correction
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The AI Rule Engine automatically corrects common claim errors, reducing the need for manual intervention. For example, if a modifier 25 is required, the engine automatically places it in the claim. Similarly, if a POS code is missing or incorrect, the engine auto corrects it based on the claim's details, ensuring compliance and reducing claim errors without manual effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: BLUE HERO - HOW DOES OUR AI RULE ENGINE WORK ================= */}
      <section className="bg-blue-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              How Does Our AI Rule Engine Work?
            </h2>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed font-light">
              Billing rules often change, vary by payer, and differ across practices, making manual enforcement unreliable and inconsistent over time. Our AI rule engine is built on a governed rule lifecycle. Rules are defined with clear intent, mapped to payer policies, tested against real claim scenarios, approved through controlled workflows, and then deployed into production. Once active, these rules continuously monitor claims, apply logic driven validations or corrections, and are reviewed, versioned, or rolled back as policies evolve, ensuring long-term accuracy without disrupting billing operations.
            </p>
          </div>

          {/* Process Graphic Diagram */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg bg-blue-950/50 backdrop-blur border border-blue-400/20 rounded-3xl p-6 relative shadow-2xl">
              <div className="flex flex-col gap-6 items-center">

                {/* Upper Status Badges */}
                <div className="flex gap-3">
                  <span className="bg-white/90 text-blue-950 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                    Real-Time Checks
                  </span>
                  <span className="bg-white/90 text-blue-950 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                    Error Detection
                  </span>
                </div>

                {/* Main Node Diagram */}
                <div className="flex items-center justify-between w-full px-4 my-2">
                  <div className="space-y-3">
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-md">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-md">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-md">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Center Engine Chip */}
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-blue-400/50">
                    <Cpu className="w-10 h-10" />
                  </div>

                  <div className="space-y-3">
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-md">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-md">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-md">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Sub Badges */}
                <div className="flex gap-3">
                  <span className="bg-white/90 text-blue-950 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                    Rule Engine
                  </span>
                  <span className="bg-white/90 text-blue-950 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                    Compliance
                  </span>
                </div>

                {/* Bottom Metric Cards */}
                <div className="grid grid-cols-3 gap-3 w-full pt-2">
                  <div className="bg-white rounded-xl p-2.5 text-center shadow-sm">
                    <div className="text-[10px] text-slate-500 font-medium">Real-time Scrubbing</div>
                    <div className="text-xs font-bold text-blue-600 mt-0.5">Active</div>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 text-center shadow-sm">
                    <div className="text-[10px] text-slate-500 font-medium">Pre-submission Compliance</div>
                    <div className="text-xs font-bold text-blue-600 mt-0.5">100%</div>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 text-center shadow-sm">
                    <div className="text-[10px] text-slate-500 font-medium">Fewer Denials</div>
                    <div className="text-xs font-bold text-blue-600 mt-0.5">↓ 95%</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: 50+ SPECIALTIES ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            AI-Powered Claim Accuracy Rule Engine for 50+ Specialties
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Our AI rule engine is built for 50+ medical specialties:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-blue-50/80 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-800 text-sm">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-8 py-3 rounded-full transition-colors shadow-md">
            View All
          </button>
        </div>
      </section>

      {/* ================= SECTION 4: ENTERPRISE-GRADE COMPLIANCE CAROUSEL ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-100">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16 tracking-tight">
          Enterprise-Grade Compliance with AI Rule Engine
        </h2>

        {/* Outer Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{
              transform: `translateX(-${activeCardIndex * (100 / 4 + 1.5)}%)`,
            }}
          >
            {[...enterpriseCards, ...enterpriseCards].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 bg-blue-50/30 border border-blue-100 rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="w-10 h-10 text-blue-600 mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 mb-4 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Controls */}
        <div className="flex justify-between items-center mt-10 px-2">
          {/* Indicator Dots */}
          <div className="flex gap-2 items-center">
            {enterpriseCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCardIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeCardIndex % enterpriseCards.length === idx
                    ? "w-5 h-2.5 bg-blue-600"
                    : "w-2.5 h-2.5 bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>

          {/* Left/Right Control Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevSlide}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextSlide}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: ACCORDION FAQ ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-slate-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex justify-between items-center gap-4 focus:outline-none group"
              >
                <span className="font-semibold text-slate-900 text-base md:text-lg group-hover:text-blue-600 transition-colors">
                  {item.q}
                </span>
                {openFaqIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {openFaqIndex === index && (
                <div className="mt-4 text-slate-600 text-sm leading-relaxed pr-6">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
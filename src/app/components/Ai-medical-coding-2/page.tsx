"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
  Activity,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function AIMedicalCodingHowItWorks() {
  // FAQ accordion state handler
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Does the AI reduce claim denials, and how fast will I see results?",
      answer:
        "Within the first 30 days, most practices experience fewer denials. The AI reduces downstream revisions and expedites payment cycles by identifying code issues, missing fields, and compliance risks before submission.",
    },
    {
      question: "Is your AI coding tool HIPAA-compliant and secure?",
      answer:
        "Yes, our system is fully HIPAA-compliant, HITRUST CSF certified, and SOC 2 Type II certified. All data transmission and storage use end-to-end enterprise encryption protocols.",
    },
    {
      question: "Can the AI code inpatient and outpatient encounters?",
      answer:
        "Yes, the AI medical coding agent processes both inpatient (UB-04) and outpatient (CMS-1500) encounters, handling professional and facility billing codes across multi-specialty workflows.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Pricing is based on chart volume with tiered rates, typically running under $0.30 per chart with no hidden maintenance fees or long-term lock-in requirements.",
    },
    {
      question:
        "Will it work with my current billing company or internal coding team?",
      answer:
        "Absolutely. The agent works alongside internal teams and existing billing partners to automate repetitive coding workloads while providing real-time auditing and suggestion checks.",
    },
  ];

  const integrationLogos = [
    { name: "Epic", color: "text-blue-700" },
    { name: "ORACLE Cerner", color: "text-slate-800" },
    { name: "nextgen HEALTHCARE", color: "text-blue-600" },
    { name: "eClinicalWorks", color: "text-blue-500" },
    { name: "Allscripts", color: "text-indigo-600" },
    { name: "athenahealth", color: "text-blue-800" },
    { name: "GE HealthCare", color: "text-blue-900" },
    { name: "Greenway Health", color: "text-sky-600" },
    { name: "MEDITECH", color: "text-indigo-700" },
    { name: "practice fusion", color: "text-blue-600" },
    { name: "AdvancedMD", color: "text-slate-700" },
    { name: "kareo a tebra company", color: "text-blue-700" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* SECTION 1: HOW OUR AI AUTONOMOUS MEDICAL CODING SOFTWARE WORKS */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-white py-20 px-6 relative overflow-hidden border-b border-blue-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider block mb-3">
              Automation & Precision
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-slate-900">
              How Our AI Autonomous Medical Coding Software Works
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
              Our AI medical coding software reads clinical records and
              auto-populates all required coding fields on CMS-1500 and UB-04
              claims. It assigns CPT, ICD-10, and HCPCS codes into CMS-1500
              Boxes 21–24, mapping diagnosis pointers, POS codes, modifiers,
              units, and charge amounts. For UB-04, it completes FL 42–47
              (Revenue Codes, HCPCS, Service Dates, Units, Total Charges), FL
              66–69 (Diagnosis Codes), FL 31–34 (Occurrence Codes), and FL 76
              (Attending Provider). The system validates payer IDs, bill type,
              taxonomy, and NPI fields, automatically generating clean,
              submission-ready claims.
            </p>
          </div>

          {/* Right Visual Graphic Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-xl relative border border-blue-100">
              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 shadow-sm relative">
                {/* Floating Top Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border border-blue-200 p-2.5 rounded-full shadow-md flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>

                <div className="pt-4 text-center">
                  <span className="text-sm font-bold text-blue-900 block mb-6">
                    Procedure Codes Processing
                  </span>

                  {/* Mock Form Lines */}
                  <div className="space-y-3 mb-6">
                    <div className="h-2.5 bg-blue-100 rounded-full w-full" />
                    <div className="h-2.5 bg-blue-100 rounded-full w-3/4 mx-auto" />
                  </div>

                  <div className="my-4 py-2 px-4 bg-blue-600 rounded-lg inline-block text-white shadow-sm">
                    <span className="text-xs font-mono font-bold tracking-wide">
                      SGF 55628422
                    </span>
                  </div>

                  <div className="space-y-3 mt-6">
                    <div className="h-2.5 bg-blue-100 rounded-full w-5/6 mx-auto" />
                    <div className="h-2.5 bg-blue-100 rounded-full w-2/3 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: BUILT-IN COMPLIANCE INTELLIGENCE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Mock Dashboard UI */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-md bg-white border border-blue-100 rounded-2xl shadow-xl overflow-hidden">
              {/* Window Header */}
              <div className="bg-blue-900 text-white px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <div className="w-3 h-3 rounded-full bg-blue-300" />
                  <div className="w-3 h-3 rounded-full bg-blue-200" />
                </div>
                <span className="text-xs font-semibold text-blue-100 ml-4">
                  AI Medical Coding Dashboard
                </span>
              </div>

              {/* Dashboard Body */}
              <div className="p-6 space-y-5 bg-blue-50/30">
                {/* Metric Cards Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-blue-200 p-3.5 rounded-xl shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs text-blue-900 font-medium mb-1">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>Coding Accuracy</span>
                    </div>
                    <div className="text-2xl font-extrabold text-blue-950">
                      95.8%
                    </div>
                    <div className="text-[10px] text-blue-600 font-medium">
                      +2.3% from last month
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 p-3.5 rounded-xl shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs text-blue-900 font-medium mb-1">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span>Charts/Hour</span>
                    </div>
                    <div className="text-2xl font-extrabold text-blue-950">
                      200+
                    </div>
                    <div className="text-[10px] text-blue-600 font-medium">
                      +2.3% from last month
                    </div>
                  </div>
                </div>

                {/* Processing Pipeline Box */}
                <div className="bg-white border border-blue-100 rounded-xl p-4 space-y-3 shadow-sm">
                  <span className="text-xs font-bold text-blue-950 block">
                    Active Processing Pipeline
                  </span>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                      <span>Clinical Documentation</span>
                    </div>
                    <div className="w-full bg-blue-50 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-[90%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                      <span>NLP Analysis & Code Assignment</span>
                    </div>
                    <div className="w-full bg-blue-50 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full w-[80%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                      <span>Coded Output (CPT, ICD-10, HCPCS)</span>
                    </div>
                    <div className="w-full bg-blue-50 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-800 h-full w-[85%]" />
                    </div>
                  </div>
                </div>

                {/* Warning Alert Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3.5 text-xs">
                  <div className="flex items-center gap-2 font-bold text-blue-950 mb-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Auto-Detected Issue</span>
                  </div>
                  <p className="text-[11px] text-blue-900 mb-2">
                    Potential bundling conflict found in Chart #ED-2847
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-white px-2 py-0.5 rounded border border-blue-200 text-[10px] font-mono text-blue-900 font-semibold">
                      ICD-10: M25.511
                    </span>
                    <span className="bg-white px-2 py-0.5 rounded border border-blue-200 text-[10px] font-mono text-blue-900 font-semibold">
                      CPT: 29881
                    </span>
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="flex justify-between text-[10px] text-slate-600 font-semibold pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" /> 95%+ Accuracy
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" /> 200+ Charts/hr
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" /> Real-time Detection
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Built-In Compliance Intelligence for Medical Coding
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              SoftbeckMedicare 's artificial intelligence coding agent applies a
              multi-layer compliance engine that validates every claim against
              national and payer-specific regulatory frameworks. It executes
              real-time NCCI procedure-to-procedure checks, MUE thresholds,
              LCD/NCD coverage rules, and AMA CPT/HCPCS update cycles. The
              system cross-verifies taxonomy, bill type, TOB logic, occurrence
              and condition codes, and POS assignments to ensure regulatory
              alignment. It also maintains HIPAA-secure audit logs, generates
              compliance exception flags, and synchronizes coding libraries
              with CMS, commercial payer bulletins, and state-level mandates to
              keep every claim error-free and audit-ready.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: INTEGRATION COMPATIBILITY */}
      <section className="py-20 px-6 bg-blue-50/40 border-y border-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Integration Compatibility
          </h2>
          <p className="text-slate-600 text-base max-w-4xl mx-auto leading-relaxed mb-12">
            Our medical billing and coding AI is built with a universal
            interoperability layer that syncs seamlessly with all major EHR,
            PMS, RPM, and CCM platforms. The system connects using HL7, FHIR,
            X12, and RESTful API frameworks, enabling real-time data exchange
            for encounters, clinical notes, orders, lab/radiology feeds, and
            charge records. It auto-ingests structured and unstructured data,
            normalizes formats, maps provider IDs, and aligns encounter metadata
            across systems. The agent supports bidirectional updates, automated
            claim handoffs, and synchronous coding validation inside your
            existing workflows, no redesign required.
          </p>

          {/* Integration Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {integrationLogos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white border border-blue-100 rounded-xl py-5 px-4 flex items-center justify-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <span className={`font-bold text-base md:text-lg ${logo.color}`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-blue-100">
          {faqData.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex justify-between items-center gap-4 focus:outline-none group"
              >
                <span className="font-semibold text-slate-900 text-base md:text-lg group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                {openFaqIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-blue-600" />
                )}
              </button>

              {openFaqIndex === index && (
                <div className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed pr-6">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
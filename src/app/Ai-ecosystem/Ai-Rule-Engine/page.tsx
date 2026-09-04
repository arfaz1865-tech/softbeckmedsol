"use client";

import React, { useState } from "react";
import AIRuleEngineDetails from "@/app/components/Ai-Rule-Engine2/page";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";
import Link from "next/link"; 
import {
  Zap,
  ShieldCheck,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileCheck,
  Check,
  RefreshCw,
  Sliders,
  ShieldAlert,
} from "lucide-react";

export default function AIRuleEngine() {
  // Active step state for "Advanced AI Rule Engine for Billing Accuracy" section
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsData = [
    {
      id: 0,
      title: "Automatic Rule Triggering",
      icon: Zap,
      description:
        "Instantly triggers pre-configured global and practice-specific rules as soon as claims are generated or ingested into the system.",
      status: "Ready for clearinghouse submission",
      progressRules: 100,
      progressIntegrity: 100,
      progressCompliance: 100,
      claimId: "CLM-2026-8472",
    },
    {
      id: 1,
      title: "Compliance & Validation Checks",
      icon: ShieldCheck,
      description:
        "Validates CPT/ICD coding alignment, NCCI edits, MUE thresholds, LCD/NCD coverage policies, and payer-specific modifier requirements in real time.",
      status: "Running pre-submission scrubbing",
      progressRules: 98,
      progressIntegrity: 100,
      progressCompliance: 96,
      claimId: "CLM-2026-8473",
    },
    {
      id: 2,
      title: "Auto-Correction",
      icon: CheckCircle2,
      description:
        "Automatically applies missing modifiers, corrects unbundled codes, and updates diagnosis linkages based on intelligent rule logic without manual intervention.",
      status: "Auto-applied Modifier 25 & linked ICD-10",
      progressRules: 100,
      progressIntegrity: 100,
      progressCompliance: 100,
      claimId: "CLM-2026-8474",
    },
    {
      id: 3,
      title: "Error Review & Re-Scrub",
      icon: AlertTriangle,
      description:
        "Flags high-risk exception cases for human review, re-scrubbing updated data instantly to guarantee clean claim submission.",
      status: "Exception flagged: Physician authorization required",
      progressRules: 85,
      progressIntegrity: 92,
      progressCompliance: 88,
      claimId: "CLM-2026-8475",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans relative overflow-hidden">

        {/* ================= SECTION 1: HERO SECTION ================= */}
        <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto">
          {/* Background Decorative Gradient Blur */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-100/50 rounded-b-[100px] blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6 shadow-sm">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>AI Powered</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                AI Powered Rule Engine for Compliant Billing
              </h1>

              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                Our AI medical billing software scrubs claims in real time using built-in and practice-specific engine rules to ensure pre-submission compliance. It automatically detects and resolves errors, reducing denials and maintaining steady revenue flow.
              </p>

              {/* Compliance Badges */}
              <div className="flex flex-wrap gap-4 items-center mb-10">
                <div className="border border-sky-200 bg-sky-50 px-3 py-1.5 rounded text-xs font-bold text-sky-700">
                  HITRUST CSF Certified
                </div>
                <div className="border border-blue-200 bg-blue-50 px-3 py-1.5 rounded text-xs font-bold text-blue-700 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> HIPAA
                </div>
                <div className="border border-indigo-200 bg-indigo-50 px-3 py-1.5 rounded text-xs font-bold text-indigo-700">
                  AICPA SOC
                </div>
                <div className="border border-cyan-200 bg-cyan-50 px-3 py-1.5 rounded text-xs font-bold text-cyan-800">
                  PCI Security Standards
                </div>
              </div>

              {/* CTA & Trust Badge */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/ContactPage" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-full flex items-center gap-2 transition-colors shadow-md shadow-blue-500/20">
                  <span>Request a Demo</span>
                  <ArrowUpRight className="w-4 h-4 bg-white text-blue-600 rounded-full p-0.5" />
                </Link>

                <div className="flex items-center gap-3 border border-slate-200 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white" />
                    <div className="w-7 h-7 rounded-full bg-blue-200 border-2 border-white" />
                    <div className="w-7 h-7 rounded-full bg-blue-300 border-2 border-white" />
                  </div>
                  <span className="text-xs text-slate-600 font-semibold">
                    Trusted by 1000+ providers
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-md h-[420px] bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl flex items-end justify-center overflow-hidden relative shadow-lg border border-blue-100">
                <img
                  src="https://images.pexels.com/photos/5215009/pexels-photo-5215009.jpeg"
                  alt="AI Rule Engine Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: 6-FEATURE GRID ================= */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              Features of Logic Driven AI Rule Engine. Built for Clinical Precision & Compliance.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white border border-blue-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Auto Detects & Corrects Errors Before Submission
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Automatically identifies and corrects common coding issues like CPT/ICD mismatches, modifier conflicts, NCCI edits, and more before submission. It eliminates claim errors and improves the first-pass acceptance ratio.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-blue-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  AI-Powered Denial Prevention
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Prevent recurring denials by implementing dynamic, payer specific rules for Medicare, LCD/NCD compliance, commercial payers, and more. It stops the cycle of denials with intelligent, automated logic.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-blue-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Auto Denial Fixation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our AI Rule Engine analyzes denial patterns, automatically adjusting rule logic to prevent the same issues from recurring. By identifying root causes of denials, it continuously updates its processes, applies auto actions, and eliminates the need for manual corrections.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-blue-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Built In Compliance
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our AI Rule Engine guarantees strict adherence to CMS guidelines, practice SOPs, and specific rules. By automating compliance checks, it reduces audit risk and enhances operational accuracy across your billing processes.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-blue-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Reduces Manual Effort
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Empower your billing team by automating error detection and claim validation. Our AI Rule Engine takes over the tedious tasks, ensuring claims are accurate and ready for submission without constant human oversight.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-blue-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Insurance Policy Compliance
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ensures full adherence to payer specific guidelines, including LCD/NCD rules, NCCI Edits, MUE, Medicare policies, and contract requirements. It automates compliance to reduce rejections and increase first pass claims submission rate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: INTERACTIVE AI RULE ENGINE ================= */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Advanced AI Rule Engine for Billing Accuracy
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Interactive Step Selector */}
            <div className="lg:col-span-5 space-y-4">
              {stepsData.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                      isActive
                        ? "bg-white border-blue-600 shadow-md ring-1 ring-blue-600"
                        : "bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isActive
                            ? "bg-blue-100 text-blue-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3
                        className={`text-lg font-bold ${
                          isActive ? "text-slate-900" : "text-slate-500"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {isActive && (
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-14">
                        {step.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Dynamic Live Card Preview */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-lg bg-white border border-blue-100 rounded-3xl p-6 shadow-xl relative">
                
                {/* Floating Top Right Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>

                {/* Status Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Claim Validated
                    </h4>
                    <p className="text-xs text-blue-600 font-medium">
                      {stepsData[activeStep].status}
                    </p>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 font-medium mb-1">
                      <span>All Rules Passed</span>
                      <span>{stepsData[activeStep].progressRules}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full transition-all duration-500"
                        style={{ width: `${stepsData[activeStep].progressRules}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-600 font-medium mb-1">
                      <span>Data Integrity</span>
                      <span>{stepsData[activeStep].progressIntegrity}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-sky-500 h-full transition-all duration-500"
                        style={{ width: `${stepsData[activeStep].progressIntegrity}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-600 font-medium mb-1">
                      <span>Compliance Score</span>
                      <span>{stepsData[activeStep].progressCompliance}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-500 h-full transition-all duration-500"
                        style={{ width: `${stepsData[activeStep].progressCompliance}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Banner */}
                <div className="bg-blue-600 text-white p-3.5 rounded-xl flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-xs font-bold">Clearinghouse Ready</div>
                    <div className="text-[10px] text-blue-100 font-mono">
                      Claim ID: {stepsData[activeStep].claimId}
                    </div>
                  </div>
                  <button className="bg-white text-blue-600 font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-sm hover:bg-blue-50 transition-colors">
                    Submit Now
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 4: COMPARISON MATRIX ================= */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            What Is the Difference Between Manual Billing & AI Rule Engine Powered Billing?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Manual Billing Box */}
            <div className="border border-slate-200 bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <XCircle className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Manual Billing
                </h3>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">
                    Claims reviewed after submission, leading to clearinghouse rejections
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">
                    High risk of missed payer-specific or non-standard billing rules
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">
                    Manual modifier and ICD linking increase errors and rework
                  </span>
                </li>
              </ul>
            </div>

            {/* AI Rule Engine Powered Billing Box */}
            <div className="border-2 border-blue-600 bg-white rounded-2xl p-8 shadow-md relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  AI Rule Engine Powered Billing
                </h3>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">
                    Clean claims in real time before the clearinghouse submission
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">
                    Enforces global and practice specific payer rules automatically
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">
                    Auto actions e.g, it auto applies modifiers and ICD links using rule logic
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      <AIRuleEngineDetails />
      <Footer />
    </>
  );
}
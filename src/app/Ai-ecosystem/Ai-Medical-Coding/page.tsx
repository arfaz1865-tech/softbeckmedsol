import React from 'react';

import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';
import TestimonialsSection from '@/app/components/Testimonial/page';
import AIMedicalCodingHowItWorks from '@/app/components/Ai-medical-coding-2/page';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowUpRight, 
  MessageSquare, 
  Phone, 
  Mail, 
  ShieldCheck, 
  FileCheck, 
  Zap, 
  Clock, 
  Activity, 
  Database, 
  DollarSign 
} from 'lucide-react';

export default function AIMedicalCoding() {
  return (
    <>
      <Header/>
      <div className="min-h-screen bg-white text-slate-800 font-sans relative overflow-hidden">
        
      
        

        {/* SECTION 1: HERO SECTION */}
        <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto">
          {/* Background decorative curve */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/60 rounded-b-[100px] blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6 shadow-sm">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>AI Powered</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Achieve 95% Accuracy with Generative AI Medical Coding Agent
              </h1>

              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                Our AI medical coding agent uses NLP to read clinical documentation and assign CPT, ICD-10, and HCPCS codes with exceptional speed and accuracy. It processes over 200 ED charts per hour while detecting errors, bundling conflicts, and missing implant codes before claims go out.
              </p>

              {/* Compliance Badges */}
              <div className="flex flex-wrap gap-4 items-center mb-10">
                <div className="border border-blue-200 bg-blue-50/80 px-3 py-1.5 rounded text-xs font-bold text-blue-900">
                  HITRUST CSF Certified
                </div>
                <div className="border border-blue-200 bg-blue-50/80 px-3 py-1.5 rounded text-xs font-bold text-blue-700 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600" /> HIPAA
                </div>
                <div className="border border-blue-200 bg-blue-50/80 px-3 py-1.5 rounded text-xs font-bold text-blue-800">
                  AICPA SOC
                </div>
                <div className="border border-blue-200 bg-blue-50/80 px-3 py-1.5 rounded text-xs font-bold text-blue-900">
                  PCI Security Standards
                </div>
              </div>

              {/* CTA & Trust Badge */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-blue-600 text-white font-medium px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md">
                  <span>Request a Demo</span>
                  <ArrowUpRight className="w-4 h-4 bg-white text-blue-600 rounded-full p-0.5" />
                </button>

                <div className="flex items-center gap-3 border border-blue-100 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-blue-200 border-2 border-white" />
                    <div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-white" />
                    <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-white" />
                  </div>
                  <span className="text-xs text-slate-700 font-semibold">
                    Trusted by 1000+ providers
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-md h-[400px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-end justify-center overflow-hidden relative shadow-lg border border-blue-100">
                
                  <img src="https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURES GRID */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Features of AI Medical Coding Agent
            </h2>
            <p className="text-2xl md:text-3xl font-light text-blue-600">
              Built for Ease & Accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl flex flex-col justify-between hover:border-blue-200 transition-all">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  Automation Code Assignment
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our AI medical coding agent automates code assignment while accelerating claims, reducing denials, and powering scalable medical billing AI workflows across practices.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl flex flex-col justify-between hover:border-blue-200 transition-all">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  Compliance and Audit Protection
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  SoftbeckMedicare 's AI medical coding solutions ensure compliance with payer rules, supporting audits, minimizing risk, and strengthening revenue integrity through an intelligent AI medical coding engine platform.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl flex flex-col justify-between hover:border-blue-200 transition-all">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  Specialty Specific AI Coding
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our agent provides AI medical coding services that adapt to specialty workflows, delivering precise codes for complex cases while optimizing reimbursements through advanced AI medical billing and coding intelligence.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl flex flex-col justify-between hover:border-blue-200 transition-all">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  AI Driven Accuracy Check
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We validate documentation accuracy in real time using our AI medical coding software, reducing errors, rework, and denials while strengthening trust in our AI medical billing software outputs for your practice success.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl flex flex-col justify-between hover:border-blue-200 transition-all">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  Real-Time Coding Suggestions
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  AI medical coding agent delivers real-time suggestions during charting, accelerating workflows, improving accuracy, and supporting clinicians with intelligent AI medical coding and billing guidance tools.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-2xl flex flex-col justify-between hover:border-blue-200 transition-all">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  Integration with EHR & PMS
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  This AI medical billing software integrates seamlessly with your EHR and PMS platforms, enabling end-to-end automation through connected AI medical coding services and workflows for modern practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMPARISON MATRIX */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            What Is the Difference Between Manual & AI-Powered Medical Coding?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Manual Medical Coding Box */}
            <div className="border border-slate-200 bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <XCircle className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Manual Medical Coding
                </h3>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Relies on manual chart review and codebook lookups</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Higher risk of missed modifiers, incorrect code levels, and omissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Slower turnaround due to human-dependent workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Prone to denials from documentation and compliance gaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Difficult to scale with high chart volumes and rule changes</span>
                </li>
              </ul>
            </div>

            {/* AI-Powered Medical Coding Box */}
            <div className="border-2 border-blue-600 bg-white rounded-2xl p-8 shadow-md relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  AI-Powered Medical Coding
                </h3>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Pulls data directly from EMRs, labs, imaging, and operative systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Normalizes encounters and validates service sequencing automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Applies payer-specific coding rules and hierarchy logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Processes each chart in seconds for faster billing cycles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Scales instantly without increasing staffing or error rates</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: PRACTICE BENEFITS */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            How Can Your Practice Boost Accuracy and Revenue with Our AI Medical Coding Agent?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-blue-50/40 border border-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Reducing Staff Burden & Workflow Load
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                With rising chart volumes, human coders spend long hours reviewing notes, tracking encounters, and fixing repetitive issues. Our AI medical coding agent automates these routine tasks by organizing encounters, validating service dates, syncing with EMRs, and preparing claims instantly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-50/40 border border-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Cost Savings & Financial Impact
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Manual coding often costs $1.25–$3.00 per chart and increases when claims need rework or extra review time. Our AI medical billing engine processes charts at a fraction of that cost, often under $0.30 per chart, running 24/7 with no overtime or staffing gaps.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-blue-50/40 border border-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                AI Medical Coding Accuracy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our autonomous medical coding agent uses rule-driven logic, hierarchical code sets, and payer-specific validation layers to check every chart against clinical events in the correct order, maintaining high accuracy and cleaner claims across all specialties.
              </p>
            </div>
          </div>
        </section>

      </div>

      <AIMedicalCodingHowItWorks/>
      <TestimonialsSection/>
      <Footer/>
    </>
  );
}
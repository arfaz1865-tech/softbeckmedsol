'use client';

import React, { useState, useEffect, useRef } from 'react';
import  AIEcosystemWheel from '@/app/components/AIEcosystemWheel/AIEcosystemWheel'
import Image from 'next/image';
import Header from '../../components/Header/page';
import Footer from '../../components/Footer/page';
import { motion, useInView } from 'framer-motion';
import {
  MessageSquare,
  Phone,
  Mail,
  Sparkles,
  ArrowUpRight,
  Bot,
  Calendar,
  ShieldCheck,
  FileSearch,
  FileSignature,
  FileCheck2,
  Receipt,
  CreditCard,
  FileSpreadsheet,
  FileCode,
  Activity,
  TrendingUp,
  BarChart3,
  Clock,
  Target,
  Zap,
  Shield,
  CheckCircle,
  Database,
  PieChart,
  ChevronDown,
  ChevronUp,
  MessageCircle
} from 'lucide-react';

// --- Animated Counter for Impact Section ---
const StatCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const numericVal = match ? parseFloat(match[2].replace(/,/g, '')) : 0;
  const suffix = match ? match[3] : value;

  useEffect(() => {
    if (!isInView || isNaN(numericVal) || numericVal === 0) return;

    let frame = 0;
    const duration = 1800;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentVal = Math.floor(numericVal * (1 - Math.pow(1 - progress, 3)));

      if (frame >= totalFrames) {
        setDisplayValue(numericVal.toLocaleString());
        clearInterval(counter);
      } else {
        setDisplayValue(currentVal.toLocaleString());
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, numericVal]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export default function AIEcosystemPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const ecosystemNodes = [
    { title: 'AI Receptionist', desc: 'Handles all incoming patient calls', icon: Bot, pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-12' },
    { title: 'AI Patient Scheduling', desc: 'Automated appointment booking', icon: Calendar, pos: 'top-6 right-8 sm:right-16' },
    { title: 'AI Authorization Verification', desc: 'Real-time eligibility check', icon: ShieldCheck, pos: 'top-1/3 right-0 translate-x-4' },
    { title: 'HealUS EMR Health Assistant', desc: 'Scans and reads documents', icon: FileSearch, pos: 'bottom-1/3 right-0 translate-x-4' },
    { title: 'AI Scribe', desc: 'Populates clinical documentation', icon: FileSignature, pos: 'bottom-6 right-8 sm:right-16' },
    { title: 'AI Coder', desc: 'Automated CPT and ICD coding', icon: FileCode, pos: 'bottom-0 right-1/4 translate-y-12' },
    { title: 'Maximus PMS', desc: 'Auto-action, Error alerts & Warnings', icon: Activity, pos: 'bottom-0 left-1/4 translate-y-12' },
    { title: 'AI Claim Agent', desc: 'Scrubs claims for errors', icon: FileCheck2, pos: 'bottom-6 left-8 sm:left-16' },
    { title: 'AI Appeals & Auto Fax', desc: 'Auto-generates appeal letters', icon: FileSpreadsheet, pos: 'bottom-1/3 left-0 -translate-x-4' },
    { title: 'Payment Posting', desc: 'Apply payments & reconcile accounts', icon: CreditCard, pos: 'top-1/3 left-0 -translate-x-4' },
    { title: 'Patients Statement Agent', desc: 'Sends auto patient statements', icon: Receipt, pos: 'top-6 left-8 sm:left-16' },
  ];

  const SoftbeckMedicareFeatures = [
    {
      title: 'AR Claim Status & Follow-Ups',
      desc: 'Automated toxicology CPT coding with compliance guardrails',
      stat: '85% reduction in manual AR touchpoints',
      icon: Activity
    },
    {
      title: 'Authorization Status Check',
      desc: 'Real-time prior auth verification across all major payers',
      stat: '1,200+ auth checks automated / month',
      icon: ShieldCheck
    },
    {
      title: 'Blood CPT Coding Automation',
      desc: 'AI-driven CPT code assignment for laboratory & blood panels',
      stat: '98% coding accuracy, 70% faster turnaround',
      icon: FileCode
    },
    {
      title: 'TOX CPT Coding Automation',
      desc: 'Automated toxicology CPT coding with compliance guardrails',
      stat: '85% reduction in manual touchpoints',
      icon: FileSpreadsheet
    },
    {
      title: 'Patient Demographics & Charges Replacement',
      desc: 'Intelligent demographic correction and charge entry automation',
      stat: '99.2% demographic accuracy',
      icon: Receipt
    },
    {
      title: 'Pre-Submission Check & Reconciliation',
      desc: 'Multi-layer claim validation before payer submission',
      stat: 'Zero-day submission lag achieved',
      icon: FileCheck2
    }
  ];

  const faqs = [
    {
      q: 'What services are included in the SoftbeckMedicare AI ecosystem?',
      a: 'Our SoftbeckMedicare AI ecosystem includes AI-powered tools for patient statements, payment posting, appeals and auto fax, claim scrubbing, patient scheduling, eligibility and authorization verification, document reading, AI scribing, and AI assisted coding. These services are designed to support both clinical and revenue cycle workflows.'
    },
    {
      q: 'How does SoftbeckMedicare AI ecosystem improve revenue cycle performance?',
      a: 'It automates repetitive manual entry, reduces clean claim submission errors to near zero, accelerates prior authorization approvals, and continuously tracks denied claims for instant auto-appeals.'
    },
    {
      q: 'Can these AI services integrate with our current EHR or PM system?',
      a: 'Yes, SoftbeckMedicare AI provides native API connectors and HL7/FHIR compatibility, allowing seamless integration with major systems like Epic, Cerner, AthenaHealth, and practice management tools.'
    },
    {
      q: 'How do these AI tools improve front-end accuracy and downstream claim performance?',
      a: 'By validating patient demographics, coverage limits, and clinical documentation requirements in real time before service delivery, errors are caught prior to claim submission.'
    },
    {
      q: 'Which types of practices can benefit from these services?',
      a: 'Hospitals, specialty clinics, laboratory chains, outpatient centers, and ambulatory surgery centers of all sizes benefit from our scalable automation.'
    }
  ];

  return (

    <>
    <Header/>
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-sky-100 selection:text-sky-900 relative overflow-x-hidden">
      
 

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>AI Powered</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-tight">
              SoftbeckMedicare AI Ecosystem
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-emerald-600">
              AI-Powered Automation Across the Entire Revenue Cycle
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              We combine AI, RPA, and Business Intelligence to transform billing, coding, compliance, and revenue operations delivering speed, accuracy, and intelligence at every touchpoint.
            </p>

            {/* Certifications Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="border border-red-200 bg-red-50/50 px-3 py-1.5 rounded-lg text-xs font-bold text-red-600">
                HITRUST CSF Certified
              </div>
              <div className="border border-sky-200 bg-sky-50 px-3 py-1.5 rounded-lg text-xs font-bold text-sky-700">
                HIPAA Compliant
              </div>
              <div className="border border-sky-300 bg-sky-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                AICPA SOC
              </div>
              <div className="border border-slate-200 bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700">
                PCI Security
              </div>
            </div>

            {/* CTA + Trust Badge */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="bg-slate-950 hover:bg-slate-800 text-white font-medium px-7 py-3.5 rounded-full flex items-center gap-3 shadow-lg transition-all hover:scale-[1.02]">
                <span>Request a Demo</span>
                <div className="w-7 h-7 rounded-full bg-white text-slate-950 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>

              <div className="flex items-center gap-3 border border-emerald-200 bg-emerald-50/30 px-4 py-2 rounded-full">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-sky-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">Dr</div>
                  <div className="w-7 h-7 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">RN</div>
                  <div className="w-7 h-7 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">MD</div>
                </div>
                <span className="text-xs font-medium text-slate-700">Trusted by 1000+ providers</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Graphics Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex justify-center items-center min-h-[460px]"
          >
            {/* Background Arc Accent */}
            <div className="absolute right-0 top-0 w-[420px] h-[420px] rounded-full bg-emerald-100/60 -z-10 blur-2xl" />

            {/* Main Doctor Image Placeholder */}
            <div className="relative w-[340px] h-[440px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000"
                alt="Doctor with tablet"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Card - Real-Time Processing */}
            <div className="absolute top-4 left-2 sm:left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 text-xs w-48 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Real-Time Processing</div>
              <div className="flex items-end gap-1 h-8 pt-1">
                <div className="w-1/5 bg-sky-300 h-1/2 rounded-t" />
                <div className="w-1/5 bg-sky-400 h-3/4 rounded-t" />
                <div className="w-1/5 bg-sky-500 h-2/3 rounded-t" />
                <div className="w-1/5 bg-sky-400 h-4/5 rounded-t" />
                <div className="w-1/5 bg-emerald-500 h-full rounded-t" />
              </div>
              <div className="text-[11px] font-medium text-slate-500 pt-1">2,847 records processed today</div>
            </div>

            {/* Floating Tag - AI Rule Engine */}
            <div className="absolute top-28 left-0 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
              <div className="p-1.5 bg-sky-100 rounded-lg text-sky-600"><Bot className="w-4 h-4" /></div>
              <div>
                <p className="text-[11px] font-bold text-sky-900 leading-none">AI RULE ENGINE</p>
                <p className="text-[9px] text-slate-500">Smart Automation</p>
              </div>
            </div>

            {/* Floating Tag - AI Coder */}
            <div className="absolute top-44 right-2 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
              <div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-600"><FileCode className="w-4 h-4" /></div>
              <div>
                <p className="text-[11px] font-bold text-slate-900 leading-none">AI CODER</p>
                <p className="text-[9px] text-slate-500">CPT / ICD-10</p>
              </div>
            </div>

            {/* Floating Tag - EMR System */}
            <div className="absolute bottom-28 left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
              <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600"><Database className="w-4 h-4" /></div>
              <div>
                <p className="text-[11px] font-bold text-slate-900 leading-none">EMR SYSTEM</p>
                <p className="text-[9px] text-slate-500">Clinical Data</p>
              </div>
            </div>

            {/* Floating Tag - AI Claims */}
            <div className="absolute bottom-8 right-10 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
              <div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-600"><ShieldCheck className="w-4 h-4" /></div>
              <div>
                <p className="text-[11px] font-bold text-slate-900 leading-none">AI CLAIMS</p>
                <p className="text-[9px] text-slate-500">Auto Adjudication</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    <AIEcosystemWheel/>

      {/* --- 3. END-TO-END SoftbeckMedicare AUTOMATION GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight leading-tight">
            End-to-end revenue cycle automation — from eligibility to payment posting, every step powered by AI.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SoftbeckMedicareFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-sky-50/60 rounded-3xl p-8 border border-sky-100 flex flex-col justify-between space-y-6 hover:shadow-xl hover:border-sky-300 transition-all group"
              >
                <div className="space-y-4">
                  <div className="p-3.5 bg-white w-fit rounded-2xl shadow-sm text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl border border-sky-100">
                  <p className="text-xs font-bold text-sky-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    {item.stat}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- 4. REAL RESULTS / IMPACT METRICS BAR --- */}
      <section className="bg-sky-700 text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-3 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
              Real Results. Measurable Impact.
            </h2>
            <p className="text-sky-100 text-base sm:text-lg font-light">
              Numbers that prove the power of AI-driven revenue cycle transformation.
            </p>
          </motion.div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-sky-800/60 backdrop-blur-md p-8 rounded-3xl border border-sky-600/50 flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 bg-sky-600/50 rounded-2xl text-sky-200">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold tracking-tight">
                <StatCounter value="1,000 +" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold uppercase tracking-wider text-sky-200">Hours Saved</p>
                <p className="text-xs text-sky-300">PER MONTH</p>
              </div>
              <p className="text-xs text-sky-200 pt-2 border-t border-sky-600/40">
                Across payment posting, AR follow-up & coding workflows
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-sky-800/60 backdrop-blur-md p-8 rounded-3xl border border-sky-600/50 flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 bg-sky-600/50 rounded-2xl text-sky-200">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold tracking-tight">
                <StatCounter value="98 %" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold uppercase tracking-wider text-sky-200">Accuracy Rate</p>
                <p className="text-xs text-sky-300">AI-VERIFIED</p>
              </div>
              <p className="text-xs text-sky-200 pt-2 border-t border-sky-600/40">
                In coding, claim submission & payment reconciliation
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-sky-800/60 backdrop-blur-md p-8 rounded-3xl border border-sky-600/50 flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 bg-sky-600/50 rounded-2xl text-sky-200">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold tracking-tight">
                <StatCounter value="80 %" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold uppercase tracking-wider text-sky-200">Faster Processing</p>
                <p className="text-xs text-sky-300">TIME REDUCTION</p>
              </div>
              <p className="text-xs text-sky-200 pt-2 border-t border-sky-600/40">
                From documentation to claim submission & posting
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-sky-800/60 backdrop-blur-md p-8 rounded-3xl border border-sky-600/50 flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 bg-sky-600/50 rounded-2xl text-sky-200">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold tracking-tight">
                <StatCounter value="60 %" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold uppercase tracking-wider text-sky-200">Error Reduction</p>
                <p className="text-xs text-sky-300">50-60% AVG</p>
              </div>
              <p className="text-xs text-sky-200 pt-2 border-t border-sky-600/40">
                In billing, coding & claim-related errors across SoftbeckMedicare
              </p>
            </motion.div>

          </div>

          {/* Bottom Check Features Line */}
          <div className="mt-12 pt-8 border-t border-sky-600/50 flex flex-wrap justify-center items-center gap-8 text-xs font-semibold text-sky-100">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> HIPAA Compliant</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> SOC 2 Type II</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> HL7 / FHIR Ready</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Real-Time Processing</span>
          </div>
        </div>
      </section>

      {/* --- 5. SIX SIGMA & BI INTELLIGENCE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-slate-950 tracking-tight">
            Six Sigma & BI Intelligence
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We apply enterprise-grade Six Sigma methodology combined with real-time business intelligence to continuously optimize your SoftbeckMedicare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: DMAIC Process Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-2xl font-bold text-slate-950">
              Six Sigma Reporting Excellence
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              DMAIC framework applied to every revenue cycle process — eliminating defects, reducing variance, and sustaining performance improvements.
            </p>

            <div className="relative pl-8 space-y-8 before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-sky-200">
              
              <div className="relative flex items-start gap-4">
                <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-white border-2 border-sky-600 text-sky-700 font-bold text-xs flex items-center justify-center shadow-sm">D</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Define</h4>
                  <p className="text-xs text-slate-500">Identify SoftbeckMedicare inefficiencies, set measurable goals & scope</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-white border-2 border-sky-600 text-sky-700 font-bold text-xs flex items-center justify-center shadow-sm">M</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Measure</h4>
                  <p className="text-xs text-slate-500">Capture baseline KPIs — denial rates, TAT, payment lag</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-white border-2 border-sky-600 text-sky-700 font-bold text-xs flex items-center justify-center shadow-sm">A</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Analyze</h4>
                  <p className="text-xs text-slate-500">Root-cause analysis using AI pattern detection & BI dashboards</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 font-bold text-xs flex items-center justify-center shadow-sm">I</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Improve</h4>
                  <p className="text-xs text-slate-500">Deploy AI automations targeting identified bottlenecks</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 font-bold text-xs flex items-center justify-center shadow-sm">C</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Control</h4>
                  <p className="text-xs text-slate-500">Continuous monitoring, alerts & automated compliance checks</p>
                </div>
              </div>

            </div>

            {/* Quality Standard Card */}
            <div className="bg-sky-50/60 p-6 rounded-2xl border border-sky-100">
              <p className="text-lg font-bold text-slate-900">3.4 Defects per Million</p>
              <p className="text-xs text-slate-600 mt-1">Six Sigma quality standard applied to SoftbeckMedicare operations</p>
            </div>
          </div>

          {/* Right Column: BI Analytics Cards & Live Performance */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-950">
              BI & Data Analytics
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Real-time dashboards, predictive insights, and performance optimization powered by enterprise-grade business intelligence.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:border-sky-300 transition-colors">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl"><BarChart3 className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Real-Time Dashboards</h4>
                  <p className="text-xs text-slate-500">Live SoftbeckMedicare KPIs — AR aging, denial rates, collection velocity</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:border-sky-300 transition-colors">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><TrendingUp className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Predictive Analytics</h4>
                  <p className="text-xs text-slate-500">Forecast cash flow, denial trends & payer behavior patterns</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:border-sky-300 transition-colors">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl"><PieChart className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Revenue Intelligence</h4>
                  <p className="text-xs text-slate-500">AI-driven revenue leakage detection & optimization engine</p>
                </div>
              </div>
            </div>

            {/* Live Performance Overview Panel */}
            <div className="bg-sky-50/60 p-6 rounded-3xl border border-sky-100 space-y-4">
              <p className="text-xs font-bold text-sky-900 uppercase tracking-wider">Live Performance Overview</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-xl border border-sky-100 text-center">
                  <p className="text-lg font-bold text-sky-700">98.5%↑</p>
                  <p className="text-[10px] font-medium text-slate-500">Clean Claim Rate</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-sky-100 text-center">
                  <p className="text-lg font-bold text-sky-700">91.8%↑</p>
                  <p className="text-[10px] font-medium text-slate-500">First-Pass Rate</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-sky-100 text-center">
                  <p className="text-lg font-bold text-emerald-600">4.1%↓</p>
                  <p className="text-[10px] font-medium text-slate-500">Denial Rate</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-sky-100 text-center">
                  <p className="text-lg font-bold text-emerald-600">18.3↓</p>
                  <p className="text-[10px] font-medium text-slate-500">AR Days</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- 6. CTA BANNER --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-sky-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl"
        >
          {/* Background Decorative Accent */}
          <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="lg:col-span-8 space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
              Transform Your Revenue Cycle with AI
            </h2>
            <p className="text-sky-100 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              From documentation to payment posting — fully automated, fully intelligent. Join healthcare organizations already transforming their SoftbeckMedicare with SoftbeckMedicare AI.
            </p>
            <div>
              <button className="bg-lime-500 hover:bg-lime-600 text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-sm">
                Book a Free Demo Now!
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <Image
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800"
                alt="Doctor giving thumbs up"
                fill
                className="object-cover rounded-2xl shadow-xl border-2 border-white/20"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 7. CLIENT STORIES / TESTIMONIAL HEADER --- */}
      <section className="pt-16 pb-8 px-6 text-center">
        <h2 className="text-4xl font-light text-slate-950 tracking-tight">
          Client Stories
        </h2>
      </section>

      {/* --- 8. FREQUENTLY ASKED QUESTIONS SECTION --- */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-sky-700 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal pr-6"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>

    <Footer/>
    </>
  );
}
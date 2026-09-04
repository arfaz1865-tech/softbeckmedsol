'use client';

import Header from '@/app/components/Header/page'
import Footer from '@/app/components/Footer/page'

import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  BrainCircuit,
  Users,
  Network,
  Award,
  CreditCard,
  FileText,
  Calendar,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  ChevronDown,
  Phone,
  Activity,
  ShieldCheck,
  Check,
  Stethoscope,
  Pill,
  Clock,
  Send,
  Lock,
  DollarSign
} from 'lucide-react';

export default function HealUsEHRPage() {
  const [activeTab, setActiveTab] = useState<'clinical' | 'patient' | 'scheduling' | 'orders' | 'interop' | 'portal' | 'billing'>('clinical');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { label: 'Feature Suites', value: '7', icon: Layers },
    { label: 'Features', value: '180+', icon: FileText },
    { label: 'Unified Chart', value: '1', icon: Activity },
    { label: 'Portal Included', value: 'Included', icon: ShieldCheck },
  ];

  const valueProps = [
    {
      title: 'AI Scribe in the chart',
      desc: 'Document encounters by voice — the AI Scribe generates a structured note right inside HealUs, so charting keeps pace with the visit.',
      icon: Bot,
    },
    {
      title: 'Decision support built in',
      desc: 'Evidence-based and predictive Decision Support Interventions surface the right guidance at the point of care.',
      icon: BrainCircuit,
    },
    {
      title: 'A full patient portal',
      desc: 'Patients book, message the care team, view results, download records, and pay balances — cutting phone tag and no-shows.',
      icon: Users,
    },
    {
      title: 'Connected to everyone',
      desc: 'C-CDA and QRDA-I exchange, transitions of care, immunization registries, and syndromic surveillance — your data moves where it needs to.',
      icon: Network,
    },
    {
      title: 'Quality & MIPS ready',
      desc: 'CQM reporting plus group and individual MIPS reporting, with a complete audit trail across the record.',
      icon: Award,
    },
    {
      title: 'Billing without leaving the chart',
      desc: 'eSuperbill, payment collection, and modifier mapping flow straight into your revenue cycle — no double entry.',
      icon: CreditCard,
    },
  ];

  const categoryTabs = [
    { id: 'clinical', label: 'Clinical Charting', icon: Activity },
    { id: 'patient', label: 'Patient Chart', icon: Users },
    { id: 'scheduling', label: 'Scheduling', icon: Calendar },
    { id: 'orders', label: 'Orders & eRx', icon: FileText },
    { id: 'interop', label: 'Interoperability', icon: Network },
    { id: 'portal', label: 'Patient Portal', icon: ShieldCheck },
    { id: 'billing', label: 'Billing & Admin', icon: CreditCard },
  ];

  const faqs = [
    {
      q: 'How does the AI Scribe integrate with HealUs EHR?',
      a: 'The AI Scribe ambiently listens to patient-provider consultations and populates clinical notes directly into the structured EHR chart in real time.',
    },
    {
      q: 'Is HealUs compliant with MIPS and Quality Reporting?',
      a: 'Yes, HealUs includes built-in CQM reporting and automated data aggregation for both individual and group MIPS submissions.',
    },
    {
      q: 'Can patients pay their bills directly through the portal?',
      a: 'Absolutely. The portal features instant online payments, saved card profiles, and real-time billing ledger synchronization.',
    },
  ];

  // Dynamic Content Card Renderer based on activeTab
  const renderCategoryCard = () => {
    switch (activeTab) {
      case 'clinical':
        return (
          <div className="bg-slate-50 border border-sky-100 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="p-3 bg-sky-600 text-white rounded-2xl">
                <Activity className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Clinical Charting & Documentation</h3>
                <p className="text-sm text-slate-600">A structured chart with AI Scribe and decision support at the point of care.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">Encounter & Documentation</h4>
                <div className="flex flex-wrap gap-2">
                  {['Encounters + AI Scribe', 'History', 'Documents', 'Clinical Assessments', 'Complaints', 'Physical Examination', 'Review of Systems (ROS)', 'Evaluation & Outcomes'].map((tag, i) => (
                    <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${i === 0 ? 'bg-sky-100 text-sky-800 font-semibold' : 'bg-slate-100 text-slate-700'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">Problems, Meds & Allergies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Problems', 'Medications', 'Allergies', 'Health Concerns', 'Immunization', 'Interventions', 'Implantable Devices'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">Vitals, Status & Care</h4>
                <div className="flex flex-wrap gap-2">
                  {['Vitals', 'Health Status', 'Goals', 'Care Plan', 'Transitions of Care'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">Orders in the Chart</h4>
                <div className="flex flex-wrap gap-2">
                  {['Laboratory (Order & Results)', 'Imaging (Order & Results)', 'Procedures (Order & Results)'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-base font-bold text-sky-700">Clinical Decision Support</h4>
              <div className="flex flex-wrap gap-2">
                {['Clinical Decision Support', 'Decision Support Interventions', 'DSI — Evidence-Based', 'DSI — Predictive'].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-50 text-sky-700 border border-sky-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'patient':
        return (
          <div className="bg-slate-50 border border-sky-100 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="p-3 bg-sky-600 text-white rounded-2xl">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Patient Chart Management</h3>
                <p className="text-sm text-slate-600">Unified 360-degree view of patient demographics, histories, and clinical records.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">Demographics & Insurance</h4>
                <div className="flex flex-wrap gap-2">
                  {['Patient Profile', 'Insurance Coverage', 'Guarantor Details', 'Emergency Contacts', 'Eligibility Verification'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-50 text-sky-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">Historical Records</h4>
                <div className="flex flex-wrap gap-2">
                  {['Past Medical History', 'Surgical History', 'Family History', 'Social History', 'Past Encounters'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'scheduling':
        return (
          <div className="bg-slate-50 border border-sky-100 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="p-3 bg-sky-600 text-white rounded-2xl">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Smart Scheduling & Appointments</h3>
                <p className="text-sm text-slate-600">Automated multi-provider calendar scheduling, reminders, and waitlist management.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-sky-700">Calendar Management</h4>
                <p className="text-xs text-slate-600">Multi-resource booking with drag-and-drop schedule adjustments.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-sky-700">Automated Reminders</h4>
                <p className="text-xs text-slate-600">SMS and Email reminders to eliminate practice no-shows.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-sky-700">Telehealth Sync</h4>
                <p className="text-xs text-slate-600">Direct integration for virtual visit link distribution.</p>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="bg-slate-50 border border-sky-100 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="p-3 bg-sky-600 text-white rounded-2xl">
                <Pill className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Orders & e-Prescribing (eRx)</h3>
                <p className="text-sm text-slate-600">Instant electronic prescription routing and laboratory/imaging order workflows.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">e-Prescribing Features</h4>
                <div className="flex flex-wrap gap-2">
                  {['EPCS Certified', 'Drug Interaction Checks', 'Formulary Checking', 'Refill Request Processing', 'Retail & Mail Order Pharmacies'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-50 text-sky-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">Lab & Imaging Routing</h4>
                <div className="flex flex-wrap gap-2">
                  {['Quest & Labcorp Integration', 'Bi-directional Interfaces', 'Electronic Order Tracking', 'Auto-result Flagging'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'interop':
        return (
          <div className="bg-slate-50 border border-sky-100 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="p-3 bg-sky-600 text-white rounded-2xl">
                <Network className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Interoperability & Data Exchange</h3>
                <p className="text-sm text-slate-600">Seamless communication across health networks, state registries, and hospital systems.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-sky-700">Standards Compliant</h4>
                <p className="text-xs text-slate-600">Built-in support for FHIR APIs, C-CDA exchange, and Direct Secure Messaging.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-sky-700">Registry Connections</h4>
                <p className="text-xs text-slate-600">Automated reporting to state immunization registries and public health networks.</p>
              </div>
            </div>
          </div>
        );

      case 'portal':
        return (
          <div className="bg-slate-50 border border-sky-100 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="p-3 bg-sky-600 text-white rounded-2xl">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Patient Portal & Engagement</h3>
                <p className="text-sm text-slate-600">Empower patients with self-service booking, messaging, and digital payments.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-sky-700">Self-Service Booking</h4>
                <p className="text-xs text-slate-600">Patients can view provider openings and book visits online anytime.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-sky-700">Secure Messaging</h4>
                <p className="text-xs text-slate-600">HIPAA-compliant communication directly with the clinical care team.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-sky-700">Online Payments</h4>
                <p className="text-xs text-slate-600">Patients can view outstanding balances and pay statements in two clicks.</p>
              </div>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="bg-slate-50 border border-sky-100 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="p-3 bg-sky-600 text-white rounded-2xl">
                <CreditCard className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Integrated Billing & Administration</h3>
                <p className="text-sm text-slate-600">End-to-end revenue cycle management embedded right inside the patient chart.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">Revenue Cycle Features</h4>
                <div className="flex flex-wrap gap-2">
                  {['eSuperbill Generation', 'Automated Claim Scrubbing', 'Clearinghouse Integration', 'Denial Management', 'Payment Posting'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-50 text-sky-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-sky-700">Financial Reporting</h4>
                <div className="flex flex-wrap gap-2">
                  {['Aging Reports', 'Collections Ledger', 'Provider Productivity', 'MIPS & CQM Dashboard'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (

    <>
    <Header/>
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-sky-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md shadow-sky-600/20">
                <BrainCircuit className="w-4 h-4" /> AI Powered
              </span>
              <div className="inline-flex items-center gap-2 border border-sky-200 bg-white px-3 py-1.5 rounded-full text-xs text-slate-600 shadow-sm">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-sky-400 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-sky-600 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-sky-800 border border-white" />
                </div>
                <span>Trusted by 1000+ providers</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              HealUs — <span className="text-sky-600">EHR</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 mt-2">
                One chart for the whole practice — from first appointment to final payment.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              HealUs is SoftbeckMedicare ’s EHR. Clinical charting with a built-in AI Scribe, scheduling, labs, e-prescribing, decision support, interoperability, a full patient portal, and integrated billing — every workflow in a single system.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-slate-900 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-all shadow-md">
                Request a Demo
              </button>
              <button className="bg-sky-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-sky-700 transition-all shadow-md shadow-sky-600/20">
                See how Salus Works
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200 grid grid-cols-4 gap-4 items-center opacity-80">
              <span className="font-extrabold text-xs text-slate-400 tracking-widest uppercase">HITRUST Certified</span>
              <span className="font-extrabold text-xs text-sky-600 tracking-widest uppercase">HIPAA Compliant</span>
              <span className="font-extrabold text-xs text-slate-400 tracking-widest uppercase">AICPA SOC</span>
              <span className="font-extrabold text-xs text-slate-400 tracking-widest uppercase">PCI Security</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-3xl border border-sky-100 shadow-2xl overflow-hidden">
              <div className="bg-sky-600 text-white p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base">Jane Doe — 4/7</h4>
                  <p className="text-xs text-sky-100">Encounter: Today</p>
                </div>
                <button className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full backdrop-blur-sm transition">
                  Switch
                </button>
              </div>

              <div className="p-4 space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">PROB</span>
                  <ul className="space-y-1 text-slate-700 font-medium">
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Hypothyroidism — E03.9</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Hypertension — I10</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Type 2 Diabetes — E11.9</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">MED</span>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center"><span className="font-semibold text-slate-800">Levothyroxine</span> <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">50 mcg · Daily</span></div>
                    <div className="flex justify-between items-center"><span className="font-semibold text-slate-800">Lisinopril</span> <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">10 mg · Daily</span></div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">ALLERGY</span>
                  <div className="flex gap-2">
                    <span className="bg-rose-50 text-rose-700 px-2.5 py-1 rounded-full font-medium">Penicillin · Severe</span>
                    <span className="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-medium">Aspirin · Mild</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-slate-400 font-bold uppercase tracking-wider block mb-2">VITALS</span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-sky-50/50 border border-sky-100 p-2 rounded-xl">
                      <span className="text-[10px] text-slate-400 block">BP</span>
                      <span className="text-sm font-bold text-slate-900">128/82 <span className="text-[10px] text-slate-400 font-normal">mmHg</span></span>
                    </div>
                    <div className="bg-sky-50/50 border border-sky-100 p-2 rounded-xl">
                      <span className="text-[10px] text-slate-400 block">HR</span>
                      <span className="text-sm font-bold text-slate-900">68 <span className="text-[10px] text-slate-400 font-normal">bpm</span></span>
                    </div>
                  </div>
                </div>

                <div className="bg-sky-50 p-3 rounded-xl border border-sky-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-sky-600" />
                    <span className="text-sky-900 font-medium">AI Scribe generating note...</span>
                  </div>
                  <span className="bg-sky-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">LIVE</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- STATS BANNER --- */}
      <section className="bg-sky-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <Icon className="w-6 h-6 text-sky-100" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-sky-100 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- WHY HEALUS GRID SECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-sky-600 font-bold text-sm tracking-wide uppercase">Why HealUs</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            An EHR that does more of the work for you
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            The clinical depth of an enterprise system, with automation and patient engagement built in — not bolted on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- DYNAMIC INTERACTIVE MODULES CATEGORIES --- */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Interactive Navigation Pills */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-6 scrollbar-none">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Render Dynamic Interactive Card Preview */}
          <div className="mt-8">
            {renderCategoryCard()}
          </div>

        </div>
      </section>

      {/* --- PATIENT ENGAGEMENT SECTION --- */}
      <section className="bg-sky-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-sky-200 font-bold text-sm tracking-wide uppercase">Patient Engagement</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              A portal your patients will actually use
            </h2>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              Every self-service touchpoint in one place — fewer inbound calls, fewer no-shows, and faster patient payments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                'Book & request appointments',
                'Pay outstanding balances',
                'Message the care team',
                'View lab, imaging & procedure results',
                'Request record amendments',
                'Complete intake & evaluation forms',
                'Download & transmit clinical summaries',
                'Review referrals & care plan',
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-sky-50 font-medium">
                  <Check className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-sky-800/60 border border-sky-500/30 rounded-3xl p-6 backdrop-blur-md space-y-4">
              <div className="bg-sky-900/50 p-4 rounded-2xl border border-sky-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-sky-300" />
                  <div>
                    <h5 className="font-bold text-sm">Upcoming appointment</h5>
                    <p className="text-xs text-sky-200">Thu · 10:30 AM · Dr. Rivera</p>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-sky-300" />
              </div>

              <div className="bg-sky-900/50 p-4 rounded-2xl border border-sky-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-sky-300" />
                  <div>
                    <h5 className="font-bold text-sm">Outstanding balance</h5>
                    <p className="text-xs text-sky-200">Pay online in two taps</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-white">$45</span>
              </div>

              <div className="bg-sky-900/50 p-4 rounded-2xl border border-sky-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-sky-300" />
                  <div>
                    <h5 className="font-bold text-sm">New lab result</h5>
                    <p className="text-xs text-sky-200">CBC · ready to view</p>
                  </div>
                </div>
                <span className="bg-sky-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">New</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ECOSYSTEM SUITE SECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              HealUs doesn't work alone
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            The EHR is the chart at the center — connected to SoftbeckMedicare 's AI scribe, coder, and practice management, so one record powers the whole revenue cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-sky-600">HealUs-EHR</h3>
              <p className="text-sm text-slate-500 mt-1">The clinical chart at the center of it all.</p>
            </div>
            <div className="w-full h-48 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-400">
              <Users className="w-16 h-16 opacity-40" />
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-bold text-slate-900">Salus-AI Scribe</h4>
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">Documents encounters by voice, right inside HealUs.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-bold text-slate-900">Sophus-AI Coder</h4>
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">Turns the note into accurate, coding-ready claims.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-bold text-slate-900">Maximus-PMS</h4>
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">Full practice management integration for seamless claims.</p>
            </div>

            <div className="bg-sky-600 text-white p-6 rounded-3xl shadow-md flex flex-col justify-between space-y-4">
              <h4 className="text-lg font-bold">AI-Driven Technology Behind our Ecosystem</h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> API</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> RPA</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> AI Rule Engine</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> AI Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-800 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
            See HealUs run your whole practice.
          </h2>
          <p className="text-sky-100 text-sm sm:text-base max-w-xl mx-auto">
            Book a walkthrough with your SoftbeckMedicare  representative and see the chart, the portal, and integrated billing working as one.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="tel:8006406409" className="bg-white text-sky-700 font-bold px-6 py-3.5 rounded-xl hover:bg-sky-50 transition-all flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call 800-640-6409
            </a>
            <button className="bg-sky-900/40 border border-sky-300/40 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-sky-900/60 transition-all">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 font-bold text-slate-900 flex justify-between items-center bg-slate-50 hover:bg-slate-100/80 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
}
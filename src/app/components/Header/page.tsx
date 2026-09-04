'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Sparkles,
  Menu,
  X,
  Activity,
  ChevronRight,
  FileText,
  Bot,
  BarChart3,
  Cpu,
  Share2,
  Award,
  MessageSquare,
  Video,
  BookOpen,
  HelpCircle,
  Info,
  Layers,
  TrendingUp,
  Stethoscope,
  FileSpreadsheet,
  RotateCcw,
  Microscope,
  Building2,
  Scan,
  Users,
  HeartPulse,
  Monitor,
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Active side tab states for Mega Menus
  const [aiActiveTab, setAiActiveTab] = useState('healus');
  const [servicesActiveTab, setServicesActiveTab] = useState('SoftbeckMedicare');

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-blue-950 border-b border-blue-100 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-blue-600 flex items-center justify-center bg-blue-50 group-hover:bg-blue-600 transition-all duration-300">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-blue-950">SoftbeckMedicare</span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-blue-600"></span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-slate-500 font-light -mt-1 hidden xs:block">
                your growth, our promise
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">

            {/* 1. AI Eco-system Mega Menu Dropdown */}
            <div className="relative group py-6">
              <Link href="/Ai-ecosystem"
                className="flex items-center gap-1.5 text-blue-700 hover:text-blue-600 transition-colors focus:outline-none"
              >
                <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                <span>AI Eco-system</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              <div className="absolute top-full -left-20 w-[780px] bg-white border border-blue-100 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden flex">
                {/* Left Tabs List */}
                <div className="w-1/3 bg-blue-50 border-r border-blue-100 p-2 flex flex-col space-y-1">
                  {[
                    { id: 'healus', label: 'HEALUS EHR', link: '/Ai-ecosystem/ehr' },
                    { id: 'billing', label: 'AI MEDICAL BILLING SOFTWARE', link: '/Products/Medical-Billing' },
                    { id: 'scribe', label: 'AI SCRIBE', link: '/Ai-ecosystem/Ai-Scribe' },
                    { id: 'coding', label: 'AI MEDICAL CODING', link: '/Ai-ecosystem/Ai-Medical-Coding' },
                    { id: 'engine', label: 'AI RULE ENGINE', link: '/Ai-ecosystem/Ai-Rule-Engine' },
                  ].map((tab) => (
                    <Link
                      key={tab.id}
                      href={tab.link}
                      onMouseEnter={() => setAiActiveTab(tab.id)}
                      className={`w-full text-left px-3.5 py-3 rounded-lg text-xs font-semibold tracking-wide flex items-center justify-between transition-all ${
                        aiActiveTab === tab.id
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-blue-100'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>

                {/* Right Tab Content */}
                <div className="w-2/3 p-6 flex items-center justify-between bg-white">
                  {aiActiveTab === 'healus' && (
                    <div className="space-y-4">
                      <div className="p-6 border border-blue-100 rounded-xl bg-blue-50/50 text-center flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                          <Activity className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-bold tracking-tight text-blue-950">HealUs</h4>
                        <p className="text-[11px] uppercase tracking-wider text-slate-500">Electronic Health Record</p>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-blue-600">Healus EHR</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          HealUS is SoftbeckMedicare &apos;s EHR. Clinical charting with a built-in AI Scribe, scheduling, labs, e-prescribing, decision support, interoperability, a full patient portal, and integrated billing — every workflow in a single system.
                        </p>
                        <Link href="/Ai-ecosystem/ehr" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 mt-3">
                          Discover our Software <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {aiActiveTab === 'billing' && (
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-blue-600">AI Medical Billing Software</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Automated billing engine that detects claim errors before submission, accelerates approval rates, and maximizes provider reimbursements.
                      </p>
                      <Link href="/Products/Medical-Billing" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                        Explore Billing AI <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                  {aiActiveTab === 'scribe' && (
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-blue-600">AI Ambient Scribe</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Real-time clinical conversation transcription into structured SOAP notes, reducing practitioner documentation time by up to 70%.
                      </p>
                      <Link href="/Ai-ecosystem/Ai-Scribe" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                        See Ambient Scribe <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                  {aiActiveTab === 'coding' && (
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-blue-600">AI Medical Coding</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Autonomous ICD-10 and CPT code assignment driven by advanced NLP, ensuring compliance and preventing billing audits.
                      </p>
                      <Link href="/Ai-ecosystem/Ai-Medical-Coding" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                        View Autonomous Coding <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                  {aiActiveTab === 'engine' && (
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-blue-600">AI Rule Engine</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Dynamic rules database mapping rules across thousands of insurance payers to eliminate claim rejections instantly.
                      </p>
                      <Link href="/Ai-ecosystem/Ai-Rule-Engine" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                        Discover Rule Engine <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Services Mega Menu Dropdown */}
            <div className="relative group py-6">
              <button className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors focus:outline-none">
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full -left-28 w-[880px] bg-white border border-blue-100 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden flex">
                {/* Left Side Category Navigation */}
                <div className="w-1/3 bg-blue-50 border-r border-blue-100 p-2 flex flex-col space-y-1">
                  <button
                    onMouseEnter={() => setServicesActiveTab('SoftbeckMedicare')}
                    className={`w-full text-left px-4 py-3.5 rounded-lg text-xs font-bold tracking-wide flex items-center justify-between transition-all ${
                      servicesActiveTab === 'SoftbeckMedicare'
                        ? 'bg-blue-950 text-white shadow-sm'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-100/60'
                    }`}
                  >
                    <span>REVENUE CYCLE MANAGEMENT</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onMouseEnter={() => setServicesActiveTab('value-added')}
                    className={`w-full text-left px-4 py-3.5 rounded-lg text-xs font-bold tracking-wide flex items-center justify-between transition-all ${
                      servicesActiveTab === 'value-added'
                        ? 'bg-blue-950 text-white shadow-sm'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-100/60'
                    }`}
                  >
                    <span>VALUE ADDED SERVICES</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Cards Grid */}
                <div className="w-2/3 p-6 bg-white">
                  {servicesActiveTab === 'SoftbeckMedicare' ? (
                    <div className="grid grid-cols-2 gap-4">
                      {/* Item 1 - Revenue Cycle Management */}
                      <Link href="/services/revenue-cycle-management" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Revenue Cycle Management
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            Catalyze financial processes to get you paid faster
                          </p>
                        </div>
                      </Link>

                      {/* Item 2 - Physician Billing */}
                      <Link href="/services/physician-billing" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <Stethoscope className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Physician Billing
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            Your dedication to your patients is of the utmost importance.
                          </p>
                        </div>
                      </Link>

                      {/* Item 3 - Medical Billing */}
                      <Link href="/services/medical-billing" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <FileSpreadsheet className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Medical Billing
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            We take a comprehensive, all-inclusive approach.
                          </p>
                        </div>
                      </Link>

                      {/* Item 4 - AR Recovery */}
                      <Link href="/services/ar-recovery" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <RotateCcw className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            AR Recovery
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            To meet the unique needs of your organization.
                          </p>
                        </div>
                      </Link>

                      {/* Item 5 - Laboratory Billing */}
                      <Link href="/services/laboratory-billing" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <Microscope className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Laboratory Billing
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            Leverage experience and know-how to help chart a successful future.
                          </p>
                        </div>
                      </Link>

                      {/* Item 6 - Hospital Billing */}
                      <Link href="/services/hospital-billing" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Hospital Billing
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            We take a comprehensive, all-inclusive approach.
                          </p>
                        </div>
                      </Link>

                      {/* Item 7 - Imaging Billing */}
                      <Link href="/services/imaging-billing" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <Scan className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Imaging Billing
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            We will handle complicated coding for your imaging center.
                          </p>
                        </div>
                      </Link>

                      {/* Item 8 - Staffing and Workforce Services */}
                      <Link href="/services/staffing-and-workforce-services" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Staffing and Workforce Services
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            On-demand Front and Back Office Support to Increase Growth.
                          </p>
                        </div>
                      </Link>

                      {/* Item 9 - Chronic Care Management */}
                      <Link href="/services/chronic-care-management" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <HeartPulse className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Chronic Care Management
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            Streamline billing for chronic care and improve reimbursement accuracy.
                          </p>
                        </div>
                      </Link>

                      {/* Item 10 - Remote Patient Monitoring */}
                      <Link href="/services/remote-patient-monitoring" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <Monitor className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Remote Patient Monitoring
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            Enhance patient care through real-time monitoring.
                          </p>
                        </div>
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-5">
                      {/* Item 1 - BI Reporting Services */}
                      <Link href="/services/bi-reporting-services" className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <BarChart3 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            BI Reporting Services
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            Adaptable Dashboards for Dynamic Business Needs
                          </p>
                        </div>
                      </Link>

                      {/* Item 2 - Healthcare Data Integration Solutions */}
                      <Link href="/services/healthcare-data-integration-solutions" className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <Share2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Healthcare Data Integration Solutions
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            Comprehensive, Collaborative, and Client-Centered Interoperability
                          </p>
                        </div>
                      </Link>

                      {/* Item 3 - Robotic Process Automation Services */}
                      <Link href="/services/robotic-process-automation-services" className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            Robotic Process Automation Services
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            Fewer Errors, Faster Claims, and Accelerated Financial Performance
                          </p>
                        </div>
                      </Link>

                      {/* Item 4 - QMS and Lean Six Sigma Solutions */}
                      <Link href="/services/qms-and-lean-six-sigma-solutions" className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 group-hover/item:text-blue-700 transition-colors">
                            QMS and Lean Six Sigma Solutions
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-tight mt-1">
                            Optimize Day-to-Day Operations with Proactive, Data-Driven Approach
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Specialties Link */}
            <Link href="/specialities" className="text-slate-700 hover:text-blue-600 transition-colors">
              Specialties
            </Link>

            {/* 3. Resources Grid Dropdown */}
            <div className="relative group py-6">
              <button className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors focus:outline-none">
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full -left-44 w-[650px] bg-white border border-blue-100 rounded-2xl shadow-xl p-6 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-2 group-hover:translate-y-0 grid grid-cols-2 gap-x-6 gap-y-4">

                {/* Testimonials */}
                <Link href="/Testimonial" className="group/res flex items-start gap-3.5 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 group-hover/res:text-blue-600 transition-colors">
                      Testimonials
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">
                      Read client feedback on how we&apos;ve optimized their billing and increased revenue
                    </p>
                  </div>
                </Link>

                {/* Blog */}
                <Link href="/blogs" className="group/res flex items-start gap-3.5 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 group-hover/res:text-blue-600 transition-colors">
                      Blog
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">
                      Stay updated with industry trends, billing tips, and best practices
                    </p>
                  </div>
                </Link>

                {/* Webinars */}
                <Link href="/webinars" className="group/res flex items-start gap-3.5 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 group-hover/res:text-blue-600 transition-colors">
                      Webinars
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">
                      Join our live and on-demand webinars for expert billing insights and trends
                    </p>
                  </div>
                </Link>

                {/* White Papers */}
                <Link href="/whitepaper" className="group/res flex items-start gap-3.5 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 group-hover/res:text-blue-600 transition-colors">
                      White Papers
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">
                      Access reports and analyses to improve billing accuracy and compliance
                    </p>
                  </div>
                </Link>

                {/* Case Studies */}
                <Link href="/case-studies" className="group/res flex items-start gap-3.5 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 group-hover/res:text-blue-600 transition-colors">
                      Case Studies
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">
                      Discover how our billing solutions improved revenue cycle performance for clients
                    </p>
                  </div>
                </Link>

                {/* Guides */}
                <Link href="/guides" className="group/res flex items-start gap-3.5 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 group-hover/res:text-blue-600 transition-colors">
                      Guides
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">
                      Explore guides on reducing claim denials and boosting reimbursements
                    </p>
                  </div>
                </Link>

                {/* Comparisons */}
                <Link href="/comparisons" className="group/res flex items-start gap-3.5 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 group-hover/res:text-blue-600 transition-colors">
                      Comparisons
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">
                      Compare multiple industry leaders and selects the one that suits your practice
                    </p>
                  </div>
                </Link>

                {/* About Us */}
                <Link href="/about-us" className="group/res flex items-start gap-3.5 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 group-hover/res:text-blue-600 transition-colors">
                      About Us
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">
                      Learn about our mission and how we help healthcare providers achieve billing success
                    </p>
                  </div>
                </Link>

              </div>
            </div>

            {/* Contact Link */}
            <Link href="/ContactPage" className="text-slate-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* RIGHT ACTION BUTTON */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/ContactPage"
              className="bg-blue-600 text-white font-semibold text-sm px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-md active:scale-95 text-center whitespace-nowrap"
            >
              Request Demo
            </Link>
          </div>

          {/* MOBILE & TABLET TRIGGER */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/contact"
              className="sm:hidden bg-blue-600 text-white font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-blue-700 transition-all"
            >
              Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {/* MOBILE DRAWER */}
{mobileMenuOpen && (
  <div className="lg:hidden bg-white border-b border-blue-100 px-4 sm:px-6 pt-3 pb-6 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-xl">
    <div className="flex flex-col space-y-1 divide-y divide-blue-100">

      {/* Mobile AI Eco-system */}
      <div className="py-2">
        <button
          onClick={() => toggleDropdown('mobile-ai')}
          className="w-full flex items-center justify-between text-blue-950 py-2 text-base font-medium"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" /> AI Eco-system
          </span>
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeDropdown === 'mobile-ai' ? 'rotate-180' : ''}`} />
        </button>
        {activeDropdown === 'mobile-ai' && (
          <div className="pl-4 pt-1 pb-2 space-y-2.5 border-l-2 border-blue-600 ml-2 mt-1">
            <Link href="/Ai-ecosystem/ehr" className="block text-sm text-blue-600 font-semibold hover:text-blue-700">
              HEALUS EHR
            </Link>
            <Link href="/Products/Medical-Billing" className="block text-sm text-slate-600 hover:text-blue-600">
              AI MEDICAL BILLING SOFTWARE
            </Link>
            <Link href="/Ai-ecosystem/Ai-Scribe" className="block text-sm text-slate-600 hover:text-blue-600">
              AI SCRIBE
            </Link>
            <Link href="/Ai-ecosystem/Ai-Medical-Coding" className="block text-sm text-slate-600 hover:text-blue-600">
              AI MEDICAL CODING
            </Link>
            <Link href="/Ai-ecosystem/Ai-Rule-Engine" className="block text-sm text-slate-600 hover:text-blue-600">
              AI RULE ENGINE
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Services */}
      <div className="py-2">
        <button
          onClick={() => toggleDropdown('mobile-services')}
          className="w-full flex items-center justify-between text-blue-950 py-2 text-base font-medium"
        >
          <span>Services</span>
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
        </button>
        {activeDropdown === 'mobile-services' && (
          <div className="pl-4 pt-1 pb-2 space-y-2.5 border-l-2 border-blue-600 ml-2 mt-1">
            <p className="text-xs uppercase font-bold text-blue-950 tracking-wider pt-1">
              Revenue Cycle Management
            </p>
            <Link href="/services/revenue-cycle-management" className="block text-sm text-blue-600 font-medium hover:text-blue-700">
              Revenue Cycle Management
            </Link>
            <Link href="/services/physician-billing" className="block text-sm text-slate-600 hover:text-blue-600">
              Physician Billing
            </Link>
            <Link href="/services/medical-billing" className="block text-sm text-slate-600 hover:text-blue-600">
              Medical Billing
            </Link>
            <Link href="/services/ar-recovery" className="block text-sm text-slate-600 hover:text-blue-600">
              AR Recovery
            </Link>
            <Link href="/services/laboratory-billing" className="block text-sm text-slate-600 hover:text-blue-600">
              Laboratory Billing
            </Link>
            <Link href="/services/hospital-billing" className="block text-sm text-slate-600 hover:text-blue-600">
              Hospital Billing
            </Link>
            <Link href="/services/imaging-billing" className="block text-sm text-slate-600 hover:text-blue-600">
              Imaging Billing
            </Link>
            <Link href="/services/staffing-and-workforce-services" className="block text-sm text-slate-600 hover:text-blue-600">
              Staffing and Workforce Services
            </Link>
            <Link href="/services/chronic-care-management" className="block text-sm text-slate-600 hover:text-blue-600">
              Chronic Care Management
            </Link>
            <Link href="/services/remote-patient-monitoring" className="block text-sm text-slate-600 hover:text-blue-600">
              Remote Patient Monitoring
            </Link>

            <p className="text-xs uppercase font-bold text-blue-950 tracking-wider pt-2">
              Value Added Services
            </p>
            <Link href="/services/bi-reporting-services" className="block text-sm text-slate-600 hover:text-blue-600">
              BI Reporting Services
            </Link>
            <Link href="/services/healthcare-data-integration-solutions" className="block text-sm text-slate-600 hover:text-blue-600">
              Healthcare Data Integration Solutions
            </Link>
            <Link href="/services/robotic-process-automation-services" className="block text-sm text-slate-600 hover:text-blue-600">
              Robotic Process Automation Services
            </Link>
            <Link href="/services/qms-and-lean-six-sigma-solutions" className="block text-sm text-slate-600 hover:text-blue-600">
              QMS and Lean Six Sigma Solutions
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Specialties */}
      <div className="py-2">
        <Link href="/specialities" className="block text-blue-950 py-2 text-base font-medium hover:text-blue-600">
          Specialties
        </Link>
      </div>

      {/* Mobile Resources */}
      <div className="py-2">
        <button
          onClick={() => toggleDropdown('mobile-resources')}
          className="w-full flex items-center justify-between text-blue-950 py-2 text-base font-medium"
        >
          <span>Resources</span>
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} />
        </button>
        {activeDropdown === 'mobile-resources' && (
          <div className="pl-4 pt-1 pb-2 space-y-2 border-l-2 border-blue-100 ml-2 mt-1">
            <Link href="/Testimonial" className="block text-sm text-slate-600 hover:text-blue-600">
              Testimonials
            </Link>
            <Link href="/blogs" className="block text-sm text-slate-600 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/webinars" className="block text-sm text-slate-600 hover:text-blue-600">
              Webinars
            </Link>
            <Link href="/whitepaper" className="block text-sm text-slate-600 hover:text-blue-600">
              White Papers
            </Link>
            <Link href="/case-studies" className="block text-sm text-slate-600 hover:text-blue-600">
              Case Studies
            </Link>
            <Link href="/guides" className="block text-sm text-slate-600 hover:text-blue-600">
              Guides
            </Link>
            <Link href="/comparisons" className="block text-sm text-slate-600 hover:text-blue-600">
              Comparisons
            </Link>
            <Link href="/about-us" className="block text-sm text-slate-600 hover:text-blue-600">
              About Us
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Contact */}
      <div className="py-2">
        <Link href="/ContactPage" className="block text-blue-950 py-2 text-base font-medium hover:text-blue-600">
          Contact
        </Link>
      </div>

    </div>

    {/* Mobile CTA */}
    <div className="pt-6">
      <Link
        href="/ContactPage"
        className="block text-center w-full bg-blue-600 text-white font-semibold text-base py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md active:scale-95"
      >
        Request Demo
      </Link>
    </div>
  </div>
)}
    </header>
  );
}
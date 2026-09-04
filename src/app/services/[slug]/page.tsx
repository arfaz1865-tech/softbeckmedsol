'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import TestimonialsSection from '@/components/Testimonial/page';
import Client from '@/components/Client/Client';
import servicesData from '@/data/servicesData.json';
import { motion, useInView } from 'framer-motion';

import {
  MessageSquare,
  Phone,
  Mail,
  DollarSign,
  Stethoscope,
  TrendingUp,
  Pill,
  Sparkles,
  Check,
  CheckCircle2,
  UserCheck,
  Brain,
  FolderKanban,
  Search,
  ClipboardList,
  Users,
  FileText,
  LineChart,
  ShieldAlert,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  FileEdit,
  Scan,
  Send,
  Landmark,
  FileWarning,
  Building,
  Hospital,
  Activity,
  User
} from 'lucide-react';

// --- Animated Number Counter Component ---
const CounterNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  // Extracts target numeric value and surrounding characters (e.g., "$95M+" -> prefix "$", num 95, suffix "M+")
  const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const numericVal = match ? parseFloat(match[2].replace(/,/g, '')) : 0;
  const suffix = match ? match[3] : value;

  useEffect(() => {
    if (!isInView || isNaN(numericVal) || numericVal === 0) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation duration
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out progress calculation
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

// --- Accurate Icon Rendering for Reference Images ---
const renderIcon = (iconName?: string, className = 'w-5 h-5') => {
  switch (iconName) {
    case 'message-square': return <MessageSquare className={className} />;
    case 'phone': return <Phone className={className} />;
    case 'mail': return <Mail className={className} />;
    case 'hand-holding-dollar': return <DollarSign className={className} />;
    case 'stethoscope': return <Stethoscope className={className} />;
    case 'trending-up-chart': return <TrendingUp className={className} />;
    case 'pill': return <Pill className={className} />;
    case 'check': return <Check className={className} />;
    case 'check-circle': return <CheckCircle2 className={className} />;
    case 'user-check': return <UserCheck className={className} />;
    case 'calendar': return <Calendar className={className} />;
    case 'clipboard-check': return <ClipboardList className={className} />;
    case 'file-pen': return <FileEdit className={className} />;
    case 'scanner': return <Scan className={className} />;
    case 'send': return <Send className={className} />;
    case 'monitor-chart': return <LineChart className={className} />;
    case 'landmark': return <Landmark className={className} />;
    case 'file-warning': return <FileWarning className={className} />;
    case 'building': return <Building className={className} />;
    case 'hospital': return <Hospital className={className} />;
    case 'folder-medical': return <FolderKanban className={className} />;
    case 'search': return <Search className={className} />;
    case 'users': return <Users className={className} />;
    case 'file-text': return <FileText className={className} />;
    case 'line-chart': return <LineChart className={className} />;
    case 'shield-alert': return <ShieldAlert className={className} />;
    case 'brain': return <Brain className={className} />;
    case 'activity': return <Activity className={className} />;
    case 'user': return <User className={className} />;
    default: return <Activity className={className} />;
  }
};

// --- Circular workflow step positioning helper (Adjusted for scaled diagram) ---
const getCircularStepPosition = (stepId: number) => {
  switch (stepId) {
    case 1: return '-top-10 left-1/2 -translate-x-1/2'; 
    case 2: return 'top-2 right-2 sm:right-6'; 
    case 3: return 'top-1/2 -translate-y-1/2 -right-10'; 
    case 4: return 'bottom-2 right-2 sm:right-6'; 
    case 5: return '-bottom-10 left-1/2 -translate-x-1/2'; 
    case 6: return 'bottom-2 left-2 sm:left-6'; 
    case 7: return 'top-1/2 -translate-y-1/2 -left-10'; 
    case 8: return 'top-2 left-2 sm:left-6'; 
    default: return '';
  }
};

interface ServiceSchema {
  slug: string;
  metadata?: { pageTitle?: string; metaDescription?: string };
  heroSection?: {
    title: string;
    description: string;
    bgImage?: string;
    ctaButton?: { text: string; href: string };
    sidebarActions?: { type: string; icon: string }[];
  };
  successMetrics?: {
    title: string;
    metrics: { icon: string; label: string; value: string; isHighlighted?: boolean }[];
  };
  solutionsAndDocumentation?: {
    title: string;
    description: string;
    visualElements?: {
      tabs?: string[];
      overlayCard?: { title: string; subtitle: string; icon: string };
      backgroundGraphicText?: { heading: string; paragraph: string; cta: string };
      imageSrc?: string;
    };
  };
  highRiskPatients?: {
    badge?: { text: string; icon: string };
    title: string;
    description: string;
    image?: { alt: string; src: string };
  };
  enrollmentAndEligibility?: {
    title: string;
    description: string;
    features?: { title: string; description: string; icon: string }[];
    image?: { alt: string; src: string };
    floatingBadges?: { icon: string; title?: string; subtitle?: string; position: string }[];
  };
  denialPrevention?: {
    title: string;
    description: string;
    workflowDiagram?: {
      steps: { id: number; title: string; icon: string; color: string }[];
    };
  };
  whoWeServe?: {
    title: string;
    cards: { icon: string; title: string }[];
  };
  denialsManagementServices?: {
    title: string;
    description: string;
    cards: { icon: string; title: string; description: string }[];
    headerCta?: { text: string; href: string };
  };
  whyChooseUs?: {
    title: string;
    image?: { alt: string; src: string };
    points: string[];
  };
  faqsSection?: {
    title: string;
    items: { question: string; answer: string }[];
  };
  globalStickyWidgets?: {
    chatButton?: { label: string; icon: string };
  };
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const serviceList = servicesData as unknown as ServiceSchema[];
  const service = serviceList.find((item) => item.slug === slug);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return notFound();
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div 
        suppressHydrationWarning 
        className="bg-white text-slate-800 font-sans antialiased selection:bg-sky-100 selection:text-sky-900 relative"
      >

        
       

        {/* --- 1. HERO SECTION --- */}
        {service.heroSection && (
          <section className="relative min-h-[600px] bg-slate-950 text-white flex items-center justify-center text-center px-6 py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/95 z-10" />
            <Image
              src={service.heroSection.bgImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070'}
              alt={service.heroSection.title}
              fill
              className="object-cover object-center mix-blend-overlay opacity-30 z-0"
              priority
            />

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 max-w-6xl mx-auto space-y-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
                {service.heroSection.title}
              </h1>
              <p className="text-slate-200 text-lg sm:text-xl lg:text-2xl max-w-5xl mx-auto leading-relaxed font-extralight">
                {service.heroSection.description}
              </p>
              {service.heroSection.ctaButton && (
                <div className="pt-6">
                  <a
                    href={service.heroSection.ctaButton.href}
                    className="inline-block border border-sky-400 hover:bg-sky-600 hover:border-sky-600 text-white font-medium px-10 py-4 rounded-full transition-all text-base shadow-lg hover:scale-105 active:scale-95"
                  >
                    {service.heroSection.ctaButton.text}
                  </a>
                </div>
              )}
            </motion.div>
          </section>
        )}

        {/* --- 2. SUCCESS METRICS SECTION --- */}
        {service.successMetrics && (
          <section className="py-24 px-6 max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-light text-slate-950 text-center tracking-tight mb-16"
            >
              {service.successMetrics.title}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.successMetrics.metrics.map((metric, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`group p-10 rounded-3xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${
                    metric.isHighlighted 
                      ? 'bg-sky-700 text-white hover:bg-sky-600' 
                      : 'bg-slate-50 text-slate-950 border border-slate-100 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                  }`}
                >
                  <div className="p-4 bg-white/10 group-hover:bg-white/20 w-fit rounded-full mb-8 transition-colors">
                    {renderIcon(metric.icon, `w-8 h-8 transition-colors ${
                      metric.isHighlighted 
                        ? 'text-white' 
                        : 'text-slate-900 group-hover:text-white'
                    }`)}
                  </div>
                  <div className={`border-t pt-6 transition-colors ${
                    metric.isHighlighted 
                      ? 'border-sky-500 group-hover:border-sky-400' 
                      : 'border-slate-300 group-hover:border-sky-400'
                  }`}>
                    <p className={`text-base font-medium mb-2 transition-colors ${
                      metric.isHighlighted 
                        ? 'text-sky-100' 
                        : 'text-slate-700 group-hover:text-sky-100'
                    }`}>
                      {metric.label}
                    </p>
                    <p className="text-5xl font-bold tracking-tight">
                      <CounterNumber value={metric.value} />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* --- 3. SOLUTIONS & DOCUMENTATION SUPPORT --- */}
        {service.solutionsAndDocumentation && (
          <section className="py-20 px-6 bg-sky-50/50 relative overflow-hidden">
            <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-sky-100/50" />
            <div className="absolute -right-32 bottom-10 w-96 h-96 rounded-full bg-sky-100/50" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[5/4] border border-slate-100 p-2">
                    <Image
                      src={service.solutionsAndDocumentation.visualElements?.imageSrc || "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200"}
                      alt={service.solutionsAndDocumentation.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-3xl"
                    />
                </div>
                
                {service.solutionsAndDocumentation.visualElements?.overlayCard && (
                    <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-5 w-80 hover:bg-sky-600 hover:text-white transition-all group">
                        <div className="p-3 bg-sky-100 group-hover:bg-white/20 rounded-2xl text-sky-600 group-hover:text-white transition-colors">
                          {renderIcon(service.solutionsAndDocumentation.visualElements.overlayCard.icon, 'w-7 h-7')}
                        </div>
                        <div>
                        <p className="font-semibold text-slate-950 group-hover:text-white transition-colors text-base">
                            {service.solutionsAndDocumentation.visualElements.overlayCard.title}
                        </p>
                        <p className="text-sm text-slate-600 group-hover:text-sky-100 transition-colors">
                            {service.solutionsAndDocumentation.visualElements.overlayCard.subtitle}
                        </p>
                        </div>
                    </div>
                )}
                
                <div className="absolute top-8 right-8 bg-white p-4 rounded-full shadow-lg border border-slate-100 text-sky-600 hover:bg-sky-600 hover:text-white transition-colors">
                    <Calendar className="w-8 h-8" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-8 p-10"
              >
                <h2 className="text-5xl font-light text-slate-950 leading-tight">
                  {service.solutionsAndDocumentation.title}
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed font-light">
                  {service.solutionsAndDocumentation.description}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* --- 4. HIGH RISK / SPECIALTY CASE SECTION --- */}
        {service.highRiskPatients && (
          <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden relative">
            <div className="absolute -right-32 top-10 w-96 h-96 rounded-full bg-sky-50" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-8 p-10"
              >
                {service.highRiskPatients.badge && (
                  <div className="inline-flex items-center gap-3 bg-sky-600 text-white text-sm font-medium px-6 py-2.5 rounded-full shadow-lg">
                    {renderIcon(service.highRiskPatients.badge.icon, 'w-4 h-4')}
                    <span>{service.highRiskPatients.badge.text}</span>
                  </div>
                )}
                <h2 className="text-5xl lg:text-6xl font-light text-slate-950 leading-tight tracking-tight">
                  {service.highRiskPatients.title}
                </h2>
                <p className="text-slate-700 text-xl leading-relaxed font-light">
                  {service.highRiskPatients.description}
                </p>
              </motion.div>

              {service.highRiskPatients.image && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 relative p-4"
                >
                  <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                    <Image
                      src={service.highRiskPatients.image.src}
                      alt={service.highRiskPatients.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* --- 5. ENROLLMENT & ELIGIBILITY --- */}
        {service.enrollmentAndEligibility && (
          <section className="py-24 px-6 bg-sky-50 overflow-hidden relative">
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-100/70" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
              {service.enrollmentAndEligibility.image && (
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-6 relative p-5"
                >
                  <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2">
                    <Image
                      src={service.enrollmentAndEligibility.image.src}
                      alt={service.enrollmentAndEligibility.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <div className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-5 w-80 hover:bg-sky-600 hover:text-white transition-all group">
                        <CheckCircle2 className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                        <div>
                        <p className="font-semibold text-slate-950 group-hover:text-white transition-colors text-base">
                            Eligibility Verified
                        </p>
                        <p className="text-sm text-slate-600 group-hover:text-sky-100 transition-colors">
                            Medicare Validated
                        </p>
                        </div>
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-full shadow-lg border border-slate-100 text-sky-600 hover:bg-sky-600 hover:text-white transition-colors">
                      <User className="w-10 h-10" />
                  </div>
                </motion.div>
              )}

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-8 p-10"
              >
                <h2 className="text-5xl font-light text-slate-950 leading-tight">
                  {service.enrollmentAndEligibility.title}
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed font-light">
                  {service.enrollmentAndEligibility.description}
                </p>

                {service.enrollmentAndEligibility.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                    {service.enrollmentAndEligibility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-sky-600 hover:text-white group">
                        {renderIcon(feature.icon, 'w-6 h-6 text-sky-600 group-hover:text-white transition-colors mt-1 shrink-0')}
                        <div>
                          <h3 className="font-semibold text-slate-950 group-hover:text-white transition-colors text-lg">{feature.title}</h3>
                          <p className="text-slate-600 group-hover:text-sky-100 transition-colors text-base font-light">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        )}

        {/* --- 6. DENIAL PREVENTION WORKFLOW DIAGRAM (REDUCED MAIN CIRCLE SIZE) --- */}
        {service.denialPrevention && (
          <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden relative">
            <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-sky-50" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto text-center space-y-5 mb-16 relative z-10"
            >
              <h2 className="text-5xl sm:text-6xl font-light text-slate-950 tracking-tight">
                {service.denialPrevention.title}
              </h2>
              <p className="text-slate-700 text-xl leading-relaxed max-w-4xl mx-auto font-light">
                {service.denialPrevention.description}
              </p>
            </motion.div>

            {service.denialPrevention.workflowDiagram?.steps && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                /* Reduced max-width from max-w-4xl to max-w-md / max-w-lg to scale down the circle height & width */
                className="relative max-w-xs sm:max-w-md md:max-w-lg mx-auto py-12 aspect-square flex items-center justify-center"
              >
                {/* Workflow center point and scaled circle track */}
                <div className="absolute inset-0 rounded-full border-4 border-slate-200 aspect-square shadow-inner" />
                <div className="absolute w-6 h-6 rounded-full bg-white border-4 border-sky-400 z-10 shadow-md" />

                {/* Circular Steps */}
                {service.denialPrevention.workflowDiagram.steps.map((step) => (
                  <div key={step.id} className={`absolute flex flex-col items-center max-w-[150px] sm:max-w-[180px] ${getCircularStepPosition(step.id)}`}>
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-2.5 shadow-xl border-4 ${step.id % 2 === 0 ? 'border-sky-300' : 'border-sky-200'} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-sky-500 group cursor-pointer`}>
                        <div className={`p-3 ${step.id % 2 === 0 ? 'bg-sky-100 text-sky-600' : 'bg-sky-50 text-sky-500'} rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors`}>
                             {renderIcon(step.icon, 'w-7 h-7 sm:w-8 sm:h-8')}
                        </div>
                    </div>
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm mt-3 text-center leading-snug">{step.title}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </section>
        )}

        {/* --- 7. WHO WE SERVE --- */}
        {service.whoWeServe && (
          <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-sky-100/50" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-light text-slate-950 text-center tracking-tight mb-20"
              >
                {service.whoWeServe.title}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.whoWeServe.cards.map((card, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group bg-white hover:bg-sky-600 p-12 rounded-3xl border border-slate-100 hover:border-sky-600 shadow-xl flex flex-col justify-between aspect-[4/3] transition-all duration-300 hover:scale-[1.03]"
                  >
                    <div className="p-4 bg-slate-100 group-hover:bg-white/20 w-fit rounded-full mb-10 text-slate-800 group-hover:text-white transition-colors">
                      {renderIcon(card.icon, 'w-9 h-9')}
                    </div>
                    <div className="border-t border-slate-200 group-hover:border-sky-400 pt-6 transition-colors">
                        <p className="font-bold text-slate-950 group-hover:text-white transition-colors text-xl leading-tight">{card.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Client />

        {/* --- 8. DENIAL MANAGEMENT SERVICES --- */}
        {service.denialsManagementServices && (
          <section className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-20 space-y-5"
            >
              {service.denialsManagementServices.headerCta && (
                <div className="mb-10">
                  <a
                    href={service.denialsManagementServices.headerCta.href}
                    className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium px-10 py-4 rounded-full transition-all text-base shadow-lg hover:scale-105 active:scale-95"
                  >
                    {service.denialsManagementServices.headerCta.text}
                  </a>
                </div>
              )}
              <h2 className="text-5xl sm:text-6xl font-light text-slate-950 tracking-tight leading-tight">
                {service.denialsManagementServices.title}
              </h2>
              <p className="text-slate-700 text-xl leading-relaxed max-w-4xl mx-auto font-light pt-3">
                {service.denialsManagementServices.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.denialsManagementServices.cards.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group bg-sky-50/50 hover:bg-sky-600 p-10 rounded-3xl border border-sky-100 hover:border-sky-600 shadow-sm space-y-6 flex flex-col aspect-[4/5] transition-all duration-300 hover:scale-[1.03]"
                >
                  <div className="p-4 bg-sky-100 group-hover:bg-white/20 text-sky-600 group-hover:text-white w-fit rounded-full mb-6 transition-colors">
                    {renderIcon(item.icon, 'w-8 h-8')}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 group-hover:text-white transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 group-hover:text-sky-100 transition-colors text-base leading-relaxed font-light flex-grow">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* --- 9. WHY CHOOSE US --- */}
        {service.whyChooseUs && (
          <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="absolute -right-32 bottom-10 w-96 h-96 rounded-full bg-sky-100/50" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
              {service.whyChooseUs.image && (
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 relative p-4"
                >
                  <div className="relative h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                    <Image
                      src={service.whyChooseUs.image.src}
                      alt={service.whyChooseUs.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-8 p-10"
              >
                <h2 className="text-5xl lg:text-6xl font-light text-slate-950 leading-tight">
                  {service.whyChooseUs.title}
                </h2>

                <div className="space-y-5 pt-6">
                  {service.whyChooseUs.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-sky-600 hover:text-white group">
                      <CheckCircle2 className="w-6 h-6 text-sky-600 group-hover:text-white mt-1 shrink-0 transition-colors" />
                      <p className="text-slate-700 group-hover:text-white transition-colors text-lg sm:text-xl font-light leading-snug">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        <TestimonialsSection />

        {/* --- 10. FREQUENTLY ASKED QUESTIONS SECTION --- */}
        {service.faqsSection && (
          <section className="py-24 px-6 max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-light text-slate-950 tracking-tight mb-16"
            >
              {service.faqsSection.title}
            </motion.h2>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {service.faqsSection.items.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="py-6 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                    >
                      <span className="text-lg sm:text-xl font-semibold text-slate-950 group-hover:text-sky-700 transition-colors">
                        {faq.question}
                      </span>
                      <span className="text-slate-500 shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-sky-700" />
                        ) : (
                          <ChevronDown className="w-6 h-6 group-hover:text-sky-700" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-5 pr-10 text-slate-700 text-base sm:text-lg leading-relaxed font-light"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </>
  );
}
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Calendar,
  ShieldCheck,
  FileSearch,
  FileSignature,
  FileCode,
  Activity,
  FileCheck2,
  FileSpreadsheet,
  CreditCard,
  Receipt,
  Sparkles
} from 'lucide-react';

export default function AIEcosystemWheel() {
  const nodes = [
    {
      title: 'AI Receptionist',
      desc: 'Handles all incoming patient calls',
      icon: Bot,
      // Desktop radial positions around a center point
      positionClass: 'lg:top-[0%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2',
    },
    {
      title: 'AI Patient Scheduling',
      desc: 'Automated booking & calendar sync',
      icon: Calendar,
      positionClass: 'lg:top-[12%] lg:right-[8%]',
    },
    {
      title: 'AI Authorization Check',
      desc: 'Real-time eligibility verification',
      icon: ShieldCheck,
      positionClass: 'lg:top-[34%] lg:right-[0%]',
    },
    {
      title: 'HealUS EMR Assistant',
      desc: 'Scans & reads clinical docs',
      icon: FileSearch,
      positionClass: 'lg:top-[58%] lg:right-[2%]',
    },
    {
      title: 'AI Scribe',
      desc: 'Populates clinical documentation',
      icon: FileSignature,
      positionClass: 'lg:bottom-[10%] lg:right-[10%]',
    },
    {
      title: 'AI Coder',
      desc: 'Automated CPT & ICD-10 coding',
      icon: FileCode,
      positionClass: 'lg:bottom-[-4%] lg:right-[30%]',
    },
    {
      title: 'Maximus PMS',
      desc: 'Auto-actions & error alerts',
      icon: Activity,
      positionClass: 'lg:bottom-[-4%] lg:left-[30%]',
    },
    {
      title: 'AI Claim Agent',
      desc: 'Scrubs claims before submission',
      icon: FileCheck2,
      positionClass: 'lg:bottom-[10%] lg:left-[10%]',
    },
    {
      title: 'AI Appeals & Auto Fax',
      desc: 'Auto-generates appeal letters',
      icon: FileSpreadsheet,
      positionClass: 'lg:top-[58%] lg:left-[2%]',
    },
    {
      title: 'Payment Posting',
      desc: 'Applies payments & reconciles',
      icon: CreditCard,
      positionClass: 'lg:top-[34%] lg:left-[0%]',
    },
    {
      title: 'Patient Statements',
      desc: 'Sends digital billing notifications',
      icon: Receipt,
      positionClass: 'lg:top-[12%] lg:left-[8%]',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Integrated AI Ecosystem Nodes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            End-to-end automation modules seamlessly surrounding core medical software.
          </p>
        </div>

        {/* --- MAIN DIAGRAM CONTAINER --- */}
        {/* On desktop (lg): Radial Wheel | On mobile/tablet: Clean 2-column Grid */}
        <div className="relative w-full min-h-[750px] flex items-center justify-center">
          
          {/* 1. Dotted Guideline Ring (Desktop Only) */}
          <div className="hidden lg:block absolute w-[620px] h-[620px] rounded-full border-2 border-dashed border-sky-200 pointer-events-none" />

          {/* 2. Center Hub Circle */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex absolute z-20 w-64 h-64 rounded-full bg-white border-4 border-sky-500 shadow-2xl flex-col items-center justify-center text-center p-6 space-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-1">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
              SoftbeckMedicare <span className="text-sky-600">AI</span>
            </h3>
            <p className="text-lg font-bold text-slate-700">Eco System</p>
            <p className="text-[11px] text-slate-500 max-w-[170px] pt-1">
              Centralized Healthcare Intelligence Engine
            </p>
          </motion.div>

          {/* 3. Outer Nodes (Radial Positioned on Desktop, Responsive Grid on Mobile) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:block lg:absolute lg:inset-0 gap-4">
            
            {/* Center Mobile Hub Card (Only visible on mobile/tablet) */}
            <div className="lg:hidden col-span-full bg-gradient-to-r from-sky-600 to-sky-800 text-white p-6 rounded-3xl text-center space-y-2 shadow-lg mb-4">
              <h3 className="text-2xl font-bold">SoftbeckMedicare AI Eco System</h3>
              <p className="text-xs text-sky-100">Centralized Healthcare Intelligence Engine</p>
            </div>

            {nodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className={`
                    bg-white border border-sky-100 shadow-md hover:shadow-xl hover:border-sky-400 
                    p-3.5 sm:p-4 rounded-2xl transition-all duration-300 group flex items-center gap-3.5
                    lg:absolute lg:w-56 lg:z-10 ${node.positionClass}
                  `}
                >
                  <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-sky-700 transition-colors">
                      {node.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-2">
                      {node.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
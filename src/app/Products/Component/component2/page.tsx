'use client';

import React from 'react';
import { ArrowUpCircle } from 'lucide-react';

export default function LeadCaptureSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white">
      {/* Left Feature Details */}
      <div className="lg:col-span-7 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
          Stay Ahead of Denials with AI Medical Billing Software
        </h2>
        <p className="text-slate-600 text-base leading-relaxed">
          Benefit from a cloud-based medical billing software that automates scheduling, billing, and reporting, while intelligent denial management and AI-enhanced appeals help you recover claims faster and keep revenue on track.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <ArrowUpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-blue-600">Denial Management</h3>
              <p className="text-slate-600 text-sm mt-1">
                Quickly identify, track, and resolve claim denials. Customized appeals help improve reimbursements and reduce revenue loss.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-blue-600 text-white p-5 rounded-2xl shadow-lg shadow-blue-500/10">
            <ArrowUpCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold">Integrated Workflow</h3>
              <p className="text-sky-100 text-sm mt-1">
                Bring billing, scheduling, and records together. One unified platform streamlines operations across your entire practice.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ArrowUpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-blue-600">Completely Compliant</h3>
              <p className="text-slate-600 text-sm mt-1">
                Stay HIPAA-compliant with built-in security features. Encryption, audit logs, and access control protect patient data at every step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Card */}
      <div className="lg:col-span-5 bg-sky-50/70 border border-blue-100/80 rounded-3xl p-8 relative">
        <div className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
          ✨ AI Powered
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">See SoftbeckMedicare Billing Software in Action</h3>
        <p className="text-slate-600 text-xs leading-relaxed mb-6">
          Book a free live walkthrough of SoftbeckMedicare medical billing software and discover how automated billing and real-time insights can help scale your practice.
        </p>

        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
          <input type="text" placeholder="Your Organization" className="w-full px-4 py-3 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
          <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
          <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold py-3.5 rounded-full transition-all shadow-md shadow-blue-600/20 mt-2">
            Book a FREE Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
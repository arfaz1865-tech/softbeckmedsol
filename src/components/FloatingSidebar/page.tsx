'use client';

import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, X } from 'lucide-react';

export default function FloatingSidebar() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* FLOATING TOOLBAR (Bottom bar on Mobile, Right Sidebar on Desktop) */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 z-40 flex flex-row md:flex-col bg-blue-900/95 backdrop-blur-md text-white md:rounded-l-xl shadow-2xl py-2.5 px-4 md:py-3 md:px-2.5 justify-around md:justify-start gap-4 md:gap-6 border-t md:border-t-0 md:border-l border-blue-800/80">
        
        {/* Chat / Query */}
        <button
          onClick={() => setIsChatOpen((prev) => !prev)}
          aria-label="Live Chat"
          className="p-2 text-white/90 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
        </button>

        {/* Phone / Call */}
        <a
          href="tel:+18005550199"
          aria-label="Call Us"
          className="p-2 text-white/90 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
        </a>

        {/* Email / Contact */}
        <a
          href="mailto:info@SoftbeckMedicare.com"
          aria-label="Email Us"
          className="p-2 text-white/90 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
        </a>
      </div>

      {/* FLOATING "CHAT WITH US!" WIDGET (Adjusted bottom offset to prevent bar overlap on mobile) */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3">
        
        {/* Tooltip Badge (Hidden on mobile for clean screen real estate) */}
        <div className="hidden sm:flex bg-white text-slate-800 font-medium text-xs sm:text-sm px-3.5 py-2 rounded-lg shadow-lg border border-slate-100 items-center gap-2 select-none animate-fade-in">
          <span>Chat With Us!</span>
        </div>

        {/* Floating Chat Trigger Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label="Toggle Live Chat Window"
          className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isChatOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          )}
        </button>
      </div>
    </>
  );
}
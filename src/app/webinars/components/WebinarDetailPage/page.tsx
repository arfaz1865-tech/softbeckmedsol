'use client';

import React from 'react';
import Image from 'next/image';
import { Webinar } from '@/app/webinars/page';

interface WebinarDetailProps {
  webinar: Webinar;
  onBack: () => void;
}

export default function WebinarDetailPage({ webinar, onBack }: WebinarDetailProps) {
  return (
    <div className="min-h-screen bg-slate-50/40 font-sans text-slate-800 pb-20">
      {/* Top Navigation */}
      <div className="bg-white border-b border-blue-50 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-[#00529b] transition-colors hover:text-blue-800"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Webinars
          </button>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#00529b]">
            {webinar.category}
          </span>
        </div>
      </div>

      {/* Webinar View Container */}
      <article className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-6 md:p-10 border border-blue-50 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl leading-snug">
          {webinar.title}
        </h1>
        
        <p className="mb-6 text-sm text-slate-600 leading-relaxed">
          {webinar.summary}
        </p>

        {/* Video / Player Display Area */}
        <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-xl bg-slate-900 md:h-[480px] flex items-center justify-center">
          <Image
            src={webinar.image}
            alt={webinar.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <button
            type="button"
            aria-label="Play Webinar"
            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#00529b] text-white shadow-xl transition-transform hover:scale-110"
          >
            <svg className="h-8 w-8 fill-current ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-blue-50/50 p-4 border border-blue-100">
          <div>
            <p className="text-xs font-semibold text-slate-500">Resource Download</p>
            <p className="text-sm font-bold text-slate-900">Presentation Deck & CPT Guidelines</p>
          </div>
          <a
            href={webinar.slidesUrl || '#'}
            download
            className="rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#00529b]"
          >
            Download Slides PDF
          </a>
        </div>
      </article>
    </div>
  );
}
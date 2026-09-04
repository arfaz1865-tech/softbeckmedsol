'use client';

import React from 'react';
import Image from 'next/image';
import { Guide } from '../GuidePage/page';

interface GuideDetailProps {
  guide: Guide;
  onBack: () => void;
}

export default function GuideDetailPage({ guide, onBack }: GuideDetailProps) {
  return (
    <div className="min-h-screen bg-slate-50/40 font-sans text-slate-800 pb-20">
      {/* Sticky Back Navigation Bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-[#00529b] transition-colors hover:text-blue-800"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Knowledge Hub
          </button>
          {guide.category && (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#00529b]">
              {guide.category}
            </span>
          )}
        </div>
      </div>

      {/* Main Article Card */}
      <article className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-6 md:p-12 border border-slate-100 shadow-sm">
        <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
          <span>{guide.date}</span>
          {guide.readTime && <span>{guide.readTime}</span>}
        </div>

        <h1 className="mb-6 text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
          {guide.title}
        </h1>

        <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-2xl bg-slate-100 md:h-[400px]">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Body */}
        {guide.content ? (
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-base font-medium text-slate-800 leading-relaxed">
              {guide.content.overview}
            </p>

            {guide.content.keyTakeaways && (
              <div className="rounded-xl bg-blue-50/50 p-6 border border-blue-100">
                <h3 className="text-sm font-bold text-[#00529b] uppercase tracking-wider mb-3">
                  Key Takeaways
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {guide.content.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#00529b] font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-sm text-slate-600 leading-relaxed">
              {guide.content.body}
            </p>
          </div>
        ) : (
          <p className="text-slate-600 text-sm leading-relaxed">{guide.summary}</p>
        )}
      </article>
    </div>
  );
}
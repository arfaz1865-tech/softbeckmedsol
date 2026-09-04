'use client';

import React from 'react';
import Image from 'next/image';
import { WhitePaper } from '@/app/whitepaper/page';

interface DetailProps {
  whitepaper: WhitePaper;
  onBack: () => void;
}

export default function WhitePaperDetailPage({ whitepaper, onBack }: DetailProps) {
  return (
    <div className="min-h-screen bg-slate-50/40 font-sans text-slate-800 pb-20">
      {/* Header Bar */}
      <div className="bg-white border-b border-slate-100 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-[#00529b] transition-colors hover:text-blue-800"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to White Papers
          </button>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#00529b]">
            {whitepaper.category}
          </span>
        </div>
      </div>

      {/* Reader Container */}
      <article className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-6 md:p-12 border border-slate-100 shadow-sm">
        <div className="mb-3 text-xs font-medium text-slate-400">
          Published {whitepaper.date}
        </div>

        <h1 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl leading-snug">
          {whitepaper.title}
        </h1>

        <div className="relative mb-8 h-[280px] w-full overflow-hidden rounded-2xl bg-slate-100 md:h-[380px]">
          <Image
            src={whitepaper.image}
            alt={whitepaper.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-slate max-w-none prose-p:text-slate-600">
          <p className="text-base font-medium leading-relaxed text-slate-700 mb-6">
            {whitepaper.summary}
          </p>

          {whitepaper.content ? (
            <>
              <p className="leading-relaxed mb-6">{whitepaper.content.introduction}</p>

              {whitepaper.content.sections?.map((section, idx) => (
                <div key={idx} className="my-6">
                  <h2 className="mb-2 text-xl font-bold text-[#00529b]">
                    {section.heading}
                  </h2>
                  <p className="leading-relaxed text-slate-600">{section.body}</p>
                </div>
              ))}

              {whitepaper.content.conclusion && (
                <div className="mt-8 rounded-xl bg-slate-50 p-6 border border-slate-200">
                  <h3 className="mb-2 text-sm font-bold text-[#00529b]">Summary Takeaway</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {whitepaper.content.conclusion}
                  </p>
                </div>
              )}
            </>
          ) : (
            <p className="text-slate-500 italic">Full research document available upon request.</p>
          )}
        </div>
      </article>
    </div>
  );
}
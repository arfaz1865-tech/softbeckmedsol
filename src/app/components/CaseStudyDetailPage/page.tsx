'use client';

import React from 'react';
import Image from 'next/image';
import { CaseStudy } from '@/app/components/CaseStudiesPage/page';

interface DetailProps {
  caseStudy: CaseStudy;
  onBack: () => void;
}

export default function CaseStudyDetailPage({ caseStudy, onBack }: DetailProps) {
  return (
    <div className="min-h-screen bg-slate-50/40 font-sans text-slate-800 pb-20">
      {/* Navigation Header */}
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
            Back to Case Studies
          </button>
          {caseStudy.client && (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#00529b]">
              {caseStudy.client}
            </span>
          )}
        </div>
      </div>

      {/* Main Content Article */}
      <article className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-6 md:p-12 border border-slate-100 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl leading-snug">
          {caseStudy.title}
        </h1>

        <div className="relative mb-8 h-[280px] w-full overflow-hidden rounded-2xl bg-slate-100 md:h-[380px]">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Highlighted Key Metrics */}
        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-6 border border-slate-100">
            {caseStudy.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-extrabold text-[#7cb342]">{m.value}</p>
                <p className="text-xs font-medium text-slate-500 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Challenge, Solution, Results Sections */}
        {caseStudy.content ? (
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-[#00529b] mb-2">The Challenge</h2>
              <p className="text-sm text-slate-600">{caseStudy.content.challenge}</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#00529b] mb-2">The Solution</h2>
              <p className="text-sm text-slate-600">{caseStudy.content.solution}</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#00529b] mb-2">The Results</h2>
              <p className="text-sm text-slate-600">{caseStudy.content.results}</p>
            </div>
          </div>
        ) : (
          <p className="text-slate-600 text-sm leading-relaxed">{caseStudy.summary}</p>
        )}
      </article>
    </div>
  );
}
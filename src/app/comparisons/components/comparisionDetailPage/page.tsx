'use client';

import React from 'react';
import Image from 'next/image';
import { ComparisonItem } from '../comparisionPage/page';

interface DetailProps {
  comparison: ComparisonItem;
  onBack: () => void;
}

export default function ComparisonDetailPage({ comparison, onBack }: DetailProps) {
  return (
    <div className="min-h-screen bg-slate-50/40 font-sans text-slate-800 pb-20">
      {/* Sticky Header Navigation */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-semibold text-[#00529b] transition-colors hover:text-blue-800"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Comparisons
          </button>
          {comparison.category && (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#00529b]">
              {comparison.category}
            </span>
          )}
        </div>
      </div>

      {/* Main Content Article */}
      <article className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-6 md:p-12 border border-slate-100 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
          {comparison.title}
        </h1>

        <div className="relative mb-8 h-[280px] w-full overflow-hidden rounded-2xl bg-slate-100 md:h-[380px]">
          <Image
            src={comparison.image}
            alt={comparison.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        {comparison.content ? (
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              {comparison.content.overview}
            </p>

            {/* Criteria List */}
            {comparison.content.criteria && (
              <div className="rounded-xl bg-slate-50 p-6 border border-slate-100">
                <h3 className="text-xs font-bold text-[#00529b] uppercase tracking-wider mb-3">
                  Evaluation Criteria
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {comparison.content.criteria.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#00529b]">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Top Picks List */}
            {comparison.content.topPicks && (
              <div className="rounded-xl bg-blue-50/50 p-6 border border-blue-100">
                <h3 className="text-xs font-bold text-[#00529b] uppercase tracking-wider mb-3">
                  Top Recommended Solutions
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {comparison.content.topPicks.map((pick, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#00529b] font-bold">•</span>
                      {pick}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p className="text-slate-600 text-xs leading-relaxed">{comparison.summary}</p>
        )}
      </article>
    </div>
  );
}
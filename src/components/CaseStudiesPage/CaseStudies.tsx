'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface CaseStudy {
  id: string;
  title: string;
  isFeatured?: boolean;
  metrics?: { value: string; label: string }[];
  image: string;
  summary: string;
  client?: string;
  industry?: string;
  content?: {
    challenge: string;
    solution: string;
    results: string;
  };
}

interface CaseStudiesProps {
  caseStudies?: CaseStudy[];
  onSelectCaseStudy?: (item: CaseStudy) => void;
}

export default function CaseStudiesPage({
  caseStudies = [],
  onSelectCaseStudy,
}: CaseStudiesProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const safeData = caseStudies || [];
  const featuredItem = safeData.find((item) => item.isFeatured) || safeData[0];

  const filteredItems = safeData.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title?.toLowerCase().includes(query) ||
      item.summary?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Top Hero Section */}
      <section className="bg-slate-50/70 px-6 py-12 border-b border-blue-50 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Case Studies
            </h1>
            <h2 className="mb-6 text-2xl font-bold leading-snug text-[#00529b] sm:text-3xl">
              Strategic Insights, Perspectives, and Industry Trends
            </h2>
            <button
              type="button"
              className="rounded-full bg-[#00529b] px-7 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#003d75]"
            >
              Talk to a Billing Expert
            </button>
          </div>

          <div className="relative h-full w-full max-w-md md:h-[320px]">
            <Image
              src="https://images.pexels.com/photos/8376233/pexels-photo-8376233.jpeg"
              alt="Billing Specialist with Laptop"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Case Study Hero Banner */}
      {featuredItem && (
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-8">
          <div className="grid grid-cols-1 gap-8 rounded-3xl bg-blue-50/40 p-6 border border-blue-100 md:grid-cols-12 md:items-center">
            {/* Image Box */}
            <div
              onClick={() => onSelectCaseStudy?.(featuredItem)}
              className="relative h-64 w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-100 md:col-span-5 md:h-80"
            >
              <Image
                src={featuredItem.image}
                alt={featuredItem.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Details Box */}
            <div className="flex flex-col justify-center md:col-span-7">
              <div>
                <span className="inline-block rounded-full bg-[#00529b] px-4 py-1 text-xs font-semibold text-white mb-4">
                  Featured
                </span>
                <h2
                  onClick={() => onSelectCaseStudy?.(featuredItem)}
                  className="mb-6 text-2xl font-bold leading-snug text-slate-900 cursor-pointer transition-colors hover:text-[#00529b] md:text-3xl"
                >
                  {featuredItem.title}
                </h2>
              </div>

              {/* Stats Boxes & Description Row */}
              <div className="flex flex-wrap items-center gap-6">
                {featuredItem.metrics?.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex min-w-[130px] flex-col justify-center rounded-2xl bg-white p-5 text-center border border-blue-100/80 shadow-sm"
                  >
                    <span className="text-2xl font-extrabold text-[#00529b] md:text-3xl">
                      {metric.value}
                    </span>
                    <span className="mt-1 text-xs font-medium text-slate-500">
                      {metric.label}
                    </span>
                  </div>
                ))}

                <div className="flex-1 min-w-[220px]">
                  <p className="mb-4 text-xs leading-relaxed text-slate-600 md:text-sm">
                    {featuredItem.summary}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy?.(featuredItem)}
                    className="inline-flex items-center gap-2 rounded-full border border-[#00529b] bg-white px-6 py-2 text-xs font-semibold text-[#00529b] transition-all hover:bg-[#00529b] hover:text-white"
                  >
                    Read More
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search Bar Input */}
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Case Study"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all focus:border-[#00529b] focus:ring-1 focus:ring-[#00529b]"
          />
          <svg
            className="absolute left-3.5 top-3 h-4 w-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </section>

      {/* Case Studies Cards Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 border border-slate-100 transition-all duration-300 hover:border-blue-200 hover:shadow-md"
            >
              <div>
                {/* Thumbnail Card */}
                <div
                  onClick={() => onSelectCaseStudy?.(item)}
                  className="relative h-52 w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-100"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content Area */}
                <div className="pt-5 pb-2">
                  <h3
                    onClick={() => onSelectCaseStudy?.(item)}
                    className="line-clamp-2 text-base font-bold text-slate-900 cursor-pointer transition-colors hover:text-[#00529b]"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-500">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Pill Button with Eye Icon */}
              <div className="mt-5 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectCaseStudy?.(item)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-1.5 text-xs font-semibold text-[#00529b] transition-all hover:bg-[#00529b] hover:border-[#00529b] hover:text-white"
                >
                  Read More
                  <svg
                    className="h-3.5 w-3.5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No case studies found matching your query.
          </div>
        )}
      </section>
    </div>
  );
}
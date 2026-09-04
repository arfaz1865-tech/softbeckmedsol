'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { WhitePaper } from '@/app/whitepaper/page';

interface WhitePapersProps {
  whitepapers?: WhitePaper[];
  onSelectWhitePaper?: (item: WhitePaper) => void;
}

export default function WhitePapersPage({
  whitepapers = [],
  onSelectWhitePaper,
}: WhitePapersProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const safeWhitepapers = whitepapers || [];

  const filteredItems = safeWhitepapers.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title?.toLowerCase().includes(query) ||
      item.summary?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Header Section */}
      <section className="bg-slate-50/60 px-6 py-12 border-b border-slate-100 md:px-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              White Papers
            </h1>
            <h2 className="mb-6 text-2xl font-bold leading-snug text-[#00529b] sm:text-3xl">
              Strategic Insights, Perspectives, and Industry Trends
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-slate-600 md:text-base">
              SoftbeckMedicare  has listed authoritative, research-based topics that provide information and expert analysis of medical billing in the healthcare landscape. Healthcare providers can easily find solutions to the problems their practice or organization faces here. If there&apos;s any confusion or you need professional consultation, you can request a callback, and a billing master will get back to you right away.
            </p>
            <button
              type="button"
              className="rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#00529b]"
            >
              Request a Consultation
            </button>
          </div>

          <div className="relative h-[280px] w-full max-w-md md:h-[360px]">
            <Image
              src="https://images.pexels.com/photos/8376150/pexels-photo-8376150.jpeg"
              alt="Healthcare Consultant"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </section>

      {/* Search Input Bar (Matching Image 2) */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Whitepaper"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all focus:border-[#00529b] focus:ring-1 focus:ring-[#00529b]"
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

      {/* White Papers Grid (Matching Images 2, 3, 4) */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Image Banner Container */}
                <div
                  onClick={() => onSelectWhitePaper?.(item)}
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
                    onClick={() => onSelectWhitePaper?.(item)}
                    className="line-clamp-2 text-base font-bold text-slate-900 cursor-pointer transition-colors hover:text-[#00529b]"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-500">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Exact Pill Action Button ("Read More" + Eye Icon) */}
              <div className="mt-5 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectWhitePaper?.(item)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-5 py-1.5 text-xs font-semibold text-slate-900 transition-all hover:bg-[#00529b] hover:border-[#00529b] hover:text-white"
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
            No white papers found matching your criteria.
          </div>
        )}
      </section>
    </div>
  );
}
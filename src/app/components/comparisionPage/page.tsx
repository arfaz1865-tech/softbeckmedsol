'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface ComparisonItem {
  id: string;
  title: string;
  image: string;
  category?: string;
  summary: string;
  content?: {
    overview: string;
    criteria: string[];
    topPicks: string[];
  };
}

interface ComparisonsPageProps {
  comparisons?: ComparisonItem[];
  onSelectComparison?: (item: ComparisonItem) => void;
}

export default function ComparisonsPage({
  comparisons = [],
  onSelectComparison,
}: ComparisonsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = (comparisons || []).filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title?.toLowerCase().includes(query) ||
      item.summary?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Header Section (Image 1) */}
      <section className="bg-slate-50/60 px-6 py-12 border-b border-slate-100 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Comparisons
            </h1>
            <h2 className="mb-4 text-2xl font-bold leading-snug text-[blue] sm:text-3xl">
              Compare the Best Medical Billing Companies State by State, City by City
            </h2>
            <p className="mb-6 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Explore unbiased, data-driven listicles of top medical billing services across
              every U.S. market. See side-by-side comparisons on KPIs like clean-claim
              rate, A/R days, pricing, and specialties. Choose with confidence: read
              reviews, download scorecards, and find the right partner for your practice.
            </p>
            <button
              type="button"
              className="rounded-full bg-slate-900 px-7 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#00529b]"
            >
              Request a Consultation
            </button>
          </div>

          <div className="relative h-[260px] w-full max-w-md md:h-[320px]">
            <Image
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Healthcare Consultant with Laptop"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </section>

      {/* Search Bar Input (Image 2) */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search Comparisons"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs text-slate-700 outline-none transition-all focus:border-[#00529b] focus:ring-1 focus:ring-[#00529b]"
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

      {/* 3-Column Card Grid - 6 Items (Images 2 & 3) */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-2 transition-all duration-300"
            >
              <div>
                {/* Rounded Thumbnail Image */}
                <div
                  onClick={() => onSelectComparison?.(item)}
                  className="relative h-52 w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-100"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content Header & Body */}
                <div className="pt-4 px-1">
                  <h3
                    onClick={() => onSelectComparison?.(item)}
                    className="line-clamp-2 text-base font-bold text-slate-900 cursor-pointer transition-colors hover:text-[#00529b]"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-500">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Read More Black Pill Button */}
              <div className="mt-5 px-1 pb-1">
                <button
                  type="button"
                  onClick={() => onSelectComparison?.(item)}
                  className="rounded-full bg-slate-900 px-6 py-2 text-xs font-semibold text-white transition-all hover:bg-[#00529b]"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No comparisons found matching your search.
          </div>
        )}
      </section>
    </div>
  );
}
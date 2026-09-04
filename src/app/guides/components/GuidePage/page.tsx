'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface Guide {
  id: string;
  title: string;
  date: string;
  image: string;
  category?: string;
  readTime?: string;
  summary?: string;
  content?: {
    overview: string;
    keyTakeaways: string[];
    body: string;
  };
}

interface GuidesPageProps {
  guides?: Guide[];
  onSelectGuide?: (guide: Guide) => void;
}

export default function GuidesPage({ guides = [], onSelectGuide }: GuidesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGuides = (guides || []).filter((guide) => {
    const query = searchQuery.toLowerCase();
    return (
      guide.title?.toLowerCase().includes(query) ||
      guide.category?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <section className="bg-slate-50/60 px-6 py-12 border-b border-slate-100 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Billing Knowledge <span className="text-[blue]">Hub</span>
            </h1>
            <p className="mb-6 text-lg font-medium text-slate-600 sm:text-xl">
              Expert billing guides that cut denials & raise your collections.
            </p>
            <button
              type="button"
              className="rounded-full bg-slate-900 px-7 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#00529b]"
            >
              Learn More
            </button>
          </div>

          <div className="relative w-full max-w-2xl h-[380px] sm:h-[450px] md:h-[520px]">
  <Image
    src="https://images.pexels.com/photos/7195311/pexels-photo-7195311.jpeg"
    alt="Medical Billing Expert"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover md:object-contain object-center md:object-right"
    priority
  />
</div>
        </div>
      </section>

      {/* Search Input Section */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search Guide..."
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

      {/* 2-Column Guides Grid (6 Items) */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {filteredGuides.map((guide) => (
            <article
              key={guide.id}
              onClick={() => onSelectGuide?.(guide)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-100 md:h-72">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="pt-5">
                  <h2 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#00529b] md:text-2xl">
                    {guide.title}
                  </h2>
                  <p className="mt-3 text-xs font-medium text-slate-400">
                    {guide.date}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No guides found matching your query.
          </div>
        )}
      </section>
    </div>
  );
}
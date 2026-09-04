'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Webinar } from '@/app/webinars/page';

interface WebinarsProps {
  webinars?: Webinar[];
  onSelectWebinar?: (webinar: Webinar) => void;
}

const CATEGORIES = [
  'All',
  'AR Recovery',
  'Medical Billing',
  'CPT Codes',
  'Practice Management',
  'EHR/EMR',
];

export default function WebinarsPage({ webinars = [], onSelectWebinar }: WebinarsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const safeWebinars = webinars || [];

  const filteredWebinars = safeWebinars.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800">
      {/* Hero Header Section matching the Reference Design */}
      <section className="bg-gradient-to-b from-blue-50/40 to-white px-6 py-12 md:px-12 md:py-20 border-b border-blue-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-[1.15]">
              Inspire, Learn, Grow, <br />
              <span className="text-[#00529b]">Scale Your Medical Practice</span> with Insider Know-How
            </h1>
            <p className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg">
              Unlock the secrets to skyrocket your revenue generation! SoftbeckMedicare  lets you discover the secret ingredients to conquer in your specialty and get financial freedom. Step into the spotlight and learn from proven tactics and groundbreaking strategies to revolutionize your revenue cycle management.
            </p>
            <button
              type="button"
              className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#00529b] hover:shadow-lg"
            >
              Learn More
            </button>
          </div>

          <div className="relative h-[280px] w-full max-w-md md:h-[360px]">
            <Image
              src="https://images.pexels.com/photos/29335353/pexels-photo-29335353.jpeg"
              alt="Healthcare Professional with Laptop"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </section>

      {/* Title & Filter Bar Controls */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Past Webinars</h2>
        
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Search Input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search webinars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-blue-100 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none shadow-sm transition-all focus:border-[#00529b] focus:ring-2 focus:ring-blue-100"
            />
            <svg
              className="absolute left-3.5 top-3 h-4 w-4 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#00529b] text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-[#00529b]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Webinars Cards Grid Matching Image 2 and 3 */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200"
            >
              <div>
                {/* Webinar Banner Image Card */}
                <div 
                  onClick={() => onSelectWebinar?.(webinar)}
                  className="relative h-48 w-full cursor-pointer overflow-hidden rounded-xl bg-slate-100"
                >
                  <Image
                    src={webinar.image}
                    alt={webinar.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content Details */}
                <div className="pt-5 pb-2">
                  <h3 
                    onClick={() => onSelectWebinar?.(webinar)}
                    className="line-clamp-2 text-base font-bold text-slate-900 cursor-pointer transition-colors hover:text-[#00529b]"
                  >
                    {webinar.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-500">
                    {webinar.summary}
                  </p>
                </div>
              </div>

              {/* Exact Dual Button Action Row as Seen in Image Reference */}
              <div className="mt-4 flex items-center gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectWebinar?.(webinar)}
                  className="flex-1 rounded-full bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-white transition-all hover:bg-[#00529b]"
                >
                  Download Slides
                </button>
                <button
                  type="button"
                  onClick={() => onSelectWebinar?.(webinar)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-300 px-3 py-2 text-center text-xs font-semibold text-slate-800 transition-all hover:border-[#00529b] hover:text-[#00529b]"
                >
                  Watch Now
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredWebinars.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No webinars found matching your criteria.
          </div>
        )}
      </section>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
}

interface InsightsProps {
  posts?: BlogPost[];
  onSelectPost?: (post: BlogPost) => void;
}

const CATEGORIES = [
  'All',
  'AI',
  'AR Recovery',
  'CPT Codes',
  'EHR/EMR',
  'ICD-10 Codes',
  'Medical Billing',
  'PMS',
];

export default function InsightsPage({ posts = [], onSelectPost }: InsightsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Fallback to empty array if posts is null/undefined
  const safePosts = posts || [];

  const filteredPosts = safePosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Header Section */}
      <section className="bg-slate-50/70 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Healthcare Growth & Revenue Insights
            </h1>
            <p className="mb-8 text-base text-slate-600 md:text-lg">
              AI-powered healthcare solutions, compliance, and practice growth strategies.
            </p>
            <button
              type="button"
              className="rounded-full bg-black px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Learn More
            </button>
          </div>

          <div className="relative h-[260px] w-full max-w-md md:h-[340px]">
            <Image
              src="https://images.pexels.com/photos/7659566/pexels-photo-7659566.jpeg"
              alt="Healthcare Insights Professional"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </section>

      {/* Filter Bar & Search Controls */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Search Bar */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search something..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all focus:border-[#00529b] focus:ring-1 focus:ring-[#00529b]"
            />
            <svg
              className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400"
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
                      ? 'bg-black text-white'
                      : 'bg-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost && onSelectPost(post)}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white transition-all hover:shadow-md"
            >
              {/* Card Banner Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-100 sm:h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="pt-4 pb-2">
                <h2 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#00529b]">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-[#00529b]">{post.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No articles found matching your criteria.
          </div>
        )}
      </section>
    </div>
  );
}
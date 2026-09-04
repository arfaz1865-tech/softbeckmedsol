'use client';

import React from 'react';
import Image from 'next/image';

interface ArticleContent {
  introduction: string;
  sections: { heading: string; body: string }[];
  conclusion: string;
}

interface BlogPostDetail {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content: ArticleContent;
}

interface DetailProps {
  post: BlogPostDetail;
  onBack: () => void;
}

export default function BlogDetailPage({ post, onBack }: DetailProps) {
  return (
    <article className="min-h-screen bg-white font-sans text-slate-800">
      {/* Top Navigation */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-[#00529b] transition-colors hover:text-[#003d75]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Insights
          </button>
        </div>
      </div>

      {/* Detail Header */}
      <header className="bg-slate-50/60 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-block rounded-full bg-[#e3f2fd] px-4 py-1 text-xs font-bold text-[#00529b]">
            {post.category}
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm font-medium text-slate-500">{post.date}</p>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Article Banner */}
        <div className="relative mb-10 h-64 w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Introduction */}
        <p className="mb-8 text-lg font-medium leading-relaxed text-slate-700">
          {post.content.introduction}
        </p>

        {/* Section Blocks */}
        {post.content.sections.map((sec, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              {sec.heading}
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              {sec.body}
            </p>
          </div>
        ))}

        {/* Conclusion */}
        <div className="mt-10 rounded-2xl bg-[#e3f2fd]/50 p-6 border border-[#00529b]/10">
          <h3 className="mb-2 text-lg font-bold text-[#00529b]">Summary Key Takeaway</h3>
          <p className="text-sm leading-relaxed text-slate-700">
            {post.content.conclusion}
          </p>
        </div>
      </div>
    </article>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

import { HugeiconsIcon } from '@hugeicons/react';

import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Check,
  TrendingUp,
  FileCheck,
  Percent,
  RefreshCcw,
  Building2,
  Stethoscope,
  PlusSquare,
  Siren,
  LayoutGrid,
  Bot,
  Code2,
  Layers,
  Database,
  FileBarChart,
  ShieldCheck,
  Clock,
} from 'lucide-react';

import { getSpecialtyIcon } from '@/app/lib/specialityIcons';

/* =========================================================
   TYPES
========================================================= */

interface Stat {
  icon?: string;
  value: string;
  label: string;
}

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

interface WhoWeServeItem {
  icon: string;
  title: string;
}

interface AiProduct {
  icon: string;
  title: string;
  description: string;
}

interface AiTechItem {
  icon: string;
  title: string;
  description: string;
}

interface SpecialtyDetailData {
  id: string;
  slug: string;
  name: string;
  icon: string;

  seo?: {
    title: string;
    metaDescription: string;
  };

  hero: {
    title: string;
    subtitle: string;
    primaryButton: string;
    primaryButtonLink: string;
    secondaryButton: string;
    secondaryButtonLink: string;
    backgroundImage?: string;
  };

  whyOutsource: {
    heading: string;
    paragraphs: string[];
    image?: string;
  };

  results: {
    heading: string;
    description: string;
    stats: Stat[];
  };

  spotlight: {
    heading: string;
    paragraphs: string[];
    image?: string;
  };

  servicesAccordion: {
    heading: string;
    description: string;
    categories: ServiceCategory[];
  };

  whoWeServe: {
    heading: string;
    items: WhoWeServeItem[];
  };

  aiEcosystem: {
    heading: string;
    description: string;
    products: AiProduct[];
  };

  aiTech: {
    heading: string;
    description: string;
    items: AiTechItem[];
    ctaText: string;
    ctaLink: string;
  };

  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

/* =========================================================
   ICON HELPERS
========================================================= */

const statIcons: Record<string, React.ElementType> = {
  TrendingUp,
  FileCheck,
  Percent,
  RefreshCcw,
};

const serveIcons: Record<string, React.ElementType> = {
  Building2,
  Stethoscope,
  PlusSquare,
  Siren,
};

const aiProductIcons: Record<string, React.ElementType> = {
  LayoutGrid,
  Bot,
  Code2,
  Layers,
};

const aiTechIcons: Record<string, React.ElementType> = {
  Database,
  FileBarChart,
  ShieldCheck,
  Clock,
};

/* =========================================================
   COMPONENT
========================================================= */

export default function SpecialtyDetail({
  data,
}: {
  data: SpecialtyDetailData;
}) {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  /* -------------------------------------------------------
     Safety guard
  ------------------------------------------------------- */

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-950">
            Specialty Not Found
          </h1>

          <p className="mt-2 text-slate-600">
            The requested specialty could not be found.
          </p>

          <Link
            href="/specialities"
            className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            View Specialties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const SpecialtyIcon = getSpecialtyIcon(data.icon);

  const stats = data.results?.stats ?? [];
  const categories = data.servicesAccordion?.categories ?? [];
  const whoWeServe = data.whoWeServe?.items ?? [];
  const aiProducts = data.aiEcosystem?.products ?? [];
  const aiTechItems = data.aiTech?.items ?? [];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-slate-500">

          <Link
            href="/"
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          <ChevronRight className="w-3 h-3" />

          <Link
            href="/specialities"
            className="hover:text-blue-600 transition-colors"
          >
            Specialties
          </Link>

          <ChevronRight className="w-3 h-3" />

          <span className="text-blue-950 font-medium">
            {data.name}
          </span>

        </nav>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

          <div className="space-y-6">

            <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
              {data.name} Medical Billing
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 tracking-tight leading-tight">
              {data.hero.title}
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl">
              {data.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">

              <Link
                href={data.hero.primaryButtonLink}
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95"
              >
                {data.hero.primaryButton}

                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={data.hero.secondaryButtonLink}
                className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm px-6 py-3.5 rounded-full border border-blue-100 hover:bg-blue-50 transition-all"
              >
                {data.hero.secondaryButton}
              </Link>

            </div>

          </div>

          {/* Specialty Icon */}

          <div className="w-44 h-44 md:w-60 md:h-60 rounded-3xl bg-blue-600 flex items-center justify-center shadow-xl shrink-0 mx-auto lg:mx-0">

            {SpecialtyIcon && (
              <HugeiconsIcon
                icon={SpecialtyIcon}
                size={96}
                strokeWidth={1.3}
                className="text-white"
              />
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY OUTSOURCE
      ===================================================== */}

      <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-y border-blue-100">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Why Outsource
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">
              {data.whyOutsource.heading}
            </h2>

          </div>

          <div className="space-y-5">

            {(data.whyOutsource.paragraphs ?? []).map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-600 leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </p>
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          RESULTS / STATS
      ===================================================== */}

      <section className="py-16 md:py-20 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mx-auto text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              {data.results.heading}
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              {data.results.description}
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {stats.map((stat, index) => {

              const StatIcon =
                statIcons[stat.icon ?? ''] ?? TrendingUp;

              return (
                <div
                  key={`${stat.label}-${index}`}
                  className="bg-white border border-blue-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
                >

                  <div className="w-11 h-11 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-4">

                    <StatIcon className="w-5 h-5 text-blue-600" />

                  </div>

                  <p className="text-2xl md:text-3xl font-extrabold text-blue-600">
                    {stat.value}
                  </p>

                  <p className="text-xs md:text-sm text-slate-500 mt-2">
                    {stat.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          SPOTLIGHT
      ===================================================== */}

      <section className="py-16 md:py-24 px-6 md:px-12 bg-blue-950">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Our Expertise
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              {data.spotlight.heading}
            </h2>

          </div>

          <div className="space-y-5">

            {(data.spotlight.paragraphs ?? []).map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="text-blue-100 leading-relaxed text-base"
                >
                  {paragraph}
                </p>
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES ACCORDION
      ===================================================== */}

      <section className="py-16 md:py-24 px-6 md:px-12">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              {data.servicesAccordion.heading}
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-slate-600 leading-relaxed">
              {data.servicesAccordion.description}
            </p>

          </div>

          <div className="space-y-4">

            {categories.map((category, categoryIndex) => {

              const isOpen = openCategory === categoryIndex;

              return (
                <div
                  key={`${category.title}-${categoryIndex}`}
                  className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenCategory(
                        isOpen ? null : categoryIndex
                      )
                    }
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-blue-50/50 transition"
                    aria-expanded={isOpen}
                  >

                    <span className="text-lg font-bold text-blue-950">
                      {category.title}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {(category.items ?? []).map(
                          (service, serviceIndex) => (
                            <div
                              key={`${service.title}-${serviceIndex}`}
                              className="p-5 rounded-xl bg-slate-50 border border-slate-100"
                            >

                              <div className="flex items-start gap-3">

                                <span className="mt-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">

                                  <Check className="w-3.5 h-3.5 text-white" />

                                </span>

                                <div>

                                  <h3 className="font-bold text-blue-950">
                                    {service.title}
                                  </h3>

                                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                    {service.description}
                                  </p>

                                </div>

                              </div>

                            </div>
                          )
                        )}

                      </div>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}

      <section className="py-16 md:py-20 px-6 md:px-12 bg-white border-y border-blue-100">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              {data.whoWeServe.heading}
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {whoWeServe.map((item, index) => {

              const ServeIcon =
                serveIcons[item.icon] ?? Building2;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="group p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all"
                >

                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">

                    <ServeIcon className="w-6 h-6 text-blue-600" />

                  </div>

                  <h3 className="font-bold text-blue-950 leading-snug group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          AI ECOSYSTEM
      ===================================================== */}

      <section className="py-16 md:py-24 px-6 md:px-12">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl mx-auto text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              {data.aiEcosystem.heading}
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              {data.aiEcosystem.description}
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {aiProducts.map((product, index) => {

              const ProductIcon =
                aiProductIcons[product.icon] ?? Bot;

              return (
                <div
                  key={`${product.title}-${index}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all"
                >

                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">

                      <ProductIcon className="w-6 h-6 text-blue-600" />

                    </div>

                    <div>

                      <h3 className="text-lg font-bold text-blue-950 group-hover:text-blue-600 transition">
                        {product.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {product.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          AI TECHNOLOGY
      ===================================================== */}

      <section className="py-16 md:py-24 px-6 md:px-12 bg-slate-100">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl mx-auto text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              {data.aiTech.heading}
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              {data.aiTech.description}
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {aiTechItems.map((item, index) => {

              const TechIcon =
                aiTechIcons[item.icon] ?? Database;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition"
                >

                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">

                    <TechIcon className="w-6 h-6 text-blue-600" />

                  </div>

                  <h3 className="font-bold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

          {/* AI Tech CTA */}

          <div className="text-center mt-10">

            <Link
              href={data.aiTech.ctaLink}
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition"
            >
              {data.aiTech.ctaText}

              <ArrowRight className="w-4 h-4" />

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="py-16 md:py-20 px-6 md:px-12">

        <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">

          <div className="text-center md:text-left">

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {data.cta.title}
            </h2>

            <p className="text-blue-50 mt-3 text-sm md:text-base max-w-xl leading-relaxed">
              {data.cta.description}
            </p>

          </div>

          <Link
            href={data.cta.buttonLink}
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-blue-50 transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            {data.cta.buttonText}

            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

      </section>

    </div>
  );
}


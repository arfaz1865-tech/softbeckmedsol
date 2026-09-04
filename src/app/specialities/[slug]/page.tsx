// app/specialities/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';
import SpecialtyDetail from '@/app/specialities/Speciality-Detail/SpecialityDetail';
import specialtiesData from '@/data/specialities-detail.json';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getSpecialty(slug: string) {
  return specialtiesData.find((item) => item.slug === slug);
}

export async function generateStaticParams() {
  return specialtiesData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) return {};

  return {
    title: specialty.seo.title,
    description: specialty.seo.metaDescription,
  };
}

export default async function SpecialtyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const specialty = getSpecialty(slug);

  if (!specialty) {
    notFound();
  }

  return (
    <>
      <Header />
      <SpecialtyDetail
        data={specialty as unknown as React.ComponentProps<typeof SpecialtyDetail>['data']}
      />
      <Footer />
    </>
  );
}
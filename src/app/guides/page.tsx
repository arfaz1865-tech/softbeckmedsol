'use client';

import React, { useState } from 'react';
import GuidesPage, { Guide } from '@/components/GuidePage/page';
import GuideDetailPage from '@/components/GuideDetailPage/page';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import guidesData from '@/data/guides.json';

export default function Page() {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  if (selectedGuide) {
    return (
        <>
        <Header />
      <GuideDetailPage
        guide={selectedGuide}
        onBack={() => setSelectedGuide(null)}
      />
      <Footer />
      </>
    );
  }

  return (
    <>
    <Header />
    <GuidesPage
      guides={guidesData as Guide[]}
      onSelectGuide={(guide) => setSelectedGuide(guide)}
    />
    <Footer />
    </>
  );
}
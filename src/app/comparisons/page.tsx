'use client';

import React, { useState } from 'react';
import ComparisonsPage, { ComparisonItem } from '../components/comparisionPage/page';
import ComparisonDetailPage from '../components/comparisionDetailPage/page';
import comparisonsData from '@/data/comparison.json';
import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';

export default function Page() {
  const [selectedComparison, setSelectedComparison] = useState<ComparisonItem | null>(null);

  if (selectedComparison) {
    return (
        <>

        <Header />
      <ComparisonDetailPage
        comparison={selectedComparison}
        onBack={() => setSelectedComparison(null)}
      />
      <Footer />
      </>
    );
  }

  return (
    <>

    <Header />
    <ComparisonsPage
      comparisons={comparisonsData as ComparisonItem[]}
      onSelectComparison={(item) => setSelectedComparison(item)}
    />
    <Footer />
    </>
  );
}
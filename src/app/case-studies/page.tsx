'use client';

import React, { useState } from 'react';
import CaseStudiesPage, { CaseStudy } from '../../components/CaseStudiesPage/CaseStudies';
import CaseStudyDetailPage from '../../components/CaseStudyDetailPage/CaseStudiesDetailPage';
import caseStudiesData from '@/data/casestudies.json';

import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';

export default function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  if (selectedCaseStudy) {
    return (
      <CaseStudyDetailPage
        {...({
          caseStudy: selectedCaseStudy,
          onBack: () => setSelectedCaseStudy(null),
        } as any)}
      />
    );
  }

  return (
    <div>
      <Header />
      <CaseStudiesPage
        caseStudies={caseStudiesData as CaseStudy[]}
        onSelectCaseStudy={(item) => setSelectedCaseStudy(item)}
      />
      <Footer />
    </div>
  );
}
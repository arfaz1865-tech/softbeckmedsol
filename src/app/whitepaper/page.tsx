'use client';

import React, { useState } from 'react';
import WhitePapersPage from '../components/WhitePaperPage/page';
import WhitePaperDetailPage from '../components/WhitePaperDetail/page';
import whitepapersData from '@/data/whitepaper.json';
import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';

export interface WhitePaper {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content?: {
    introduction: string;
    sections: { heading: string; body: string }[];
    conclusion: string;
  };
}

export default function Page() {
  const [selectedWhitePaper, setSelectedWhitePaper] = useState<WhitePaper | null>(null);

  if (selectedWhitePaper) {
    return (

      <>
      <Header />
      <WhitePaperDetailPage
        whitepaper={selectedWhitePaper}
        onBack={() => setSelectedWhitePaper(null)}
      />
      <Footer />
      </>
    );
  }

  return (
    <>
    <Header />
    <WhitePapersPage
      whitepapers={whitepapersData as WhitePaper[]}
      onSelectWhitePaper={(item) => setSelectedWhitePaper(item)}
    />
    <Footer />
    </>
  );
}
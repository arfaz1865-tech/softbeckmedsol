'use client';

import React, { useState } from 'react';
import WebinarsPage from '../components/WebinarPage/page';
import WebinarDetailPage from '../components/WebinarDetailPage/page';
import webinarsData from '@/data/webinars.json';
import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';

export interface Webinar {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  videoUrl?: string;
  slidesUrl?: string;
  speaker?: {
    name: string;
    role: string;
  };
}

export default function Page() {
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);

  if (selectedWebinar) {
    return (
      <>
      <Header />
      <WebinarDetailPage
        webinar={selectedWebinar}
        onBack={() => setSelectedWebinar(null)}
      />
      <Footer />
      </>
    );
  }

  return (
    <>
    <Header />
    <WebinarsPage
      webinars={webinarsData as Webinar[]}
      onSelectWebinar={(webinar) => setSelectedWebinar(webinar)}
    />
    <Footer />
    </>
  );
}
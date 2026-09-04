'use client';

import React, { useState } from 'react';
import InsightsPage from '../blogs/component/Insight/page';
import BlogDetailPage from '../blogs/component/BlogDetail/page';
import blogsData from '@/data/blogs.json';
import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';

export default function BlogsContainer() {
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  if (selectedPost) {
    return (
        <>
        <Header />
      <BlogDetailPage
        post={selectedPost}
        onBack={() => setSelectedPost(null)}
      />
      <Footer />    
      </>
    );
  }

  return (
    <>
      <Header />
      <InsightsPage
        posts={blogsData}
        onSelectPost={(post) => setSelectedPost(post)}
      />
      <Footer />
    </>
  );
}
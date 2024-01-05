"use client";

import Link from 'next/link'
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs, allRecommendations, allAbouts } from "contentlayer/generated"
import Startups from "@/components/startups";
import PreviewUrl from "@/components/preview-url";
import Blogs from "@/components/blogs";
import Recommendations from '@/components/recommendations';

export default function Landing() {
  const [selectedSegment, setSelectedSegment] = useState('recommendations');

  return (
    <div className="bg-black text-zinc-200 flex items-center justify-center overflow-x-hidden">
        <section className="flex flex-col w-full max-w-[3000px] mx-auto min-h-screen">
          <Header />
          <div className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto p-8 md:p-0">
            <Main />
            <Startups />
            <div className="flex space-x-4 -m-4 py-8 overflow-x-auto scrollbar-hide">
              <Button 
                variant='ghost' 
                onClick={() => setSelectedSegment('writings')} 
                className={`${selectedSegment !== 'writings' ? 'text-zinc-500' : 'text-zinc-200'} hover:text-zinc-200 hover:bg-zinc-900 text-base`}>
                  writings
                  <span className="pl-1 text-zinc-500 text-sm">・ {allBlogs.length}</span>
              </Button>
              <Button 
                variant='ghost' 
                onClick={() => setSelectedSegment('recommendations')} 
                className={`${selectedSegment !== 'recommendations' ? 'text-zinc-500' : 'text-zinc-200'} hover:text-zinc-200 hover:bg-zinc-900 text-base`}>
                  what i like
                  <span className="pl-1 text-zinc-500 text-sm">・ {allRecommendations.length}</span>
              </Button>
            </div>
            {selectedSegment === 'writings' && <Blogs />}
            {selectedSegment === 'recommendations' && <Recommendations />}
          </div>
          <Footer />
      </section>
    </div>
  );
}

function Main() {
  return (
    <div className="flex flex-col justify-center h-64 pt-40 pb-24">
      <div className="flex flex-col items-start justify-center text-left gap-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-zinc-200 text-2xl font-medium tracking-tighter">adam</h1>
          <img 
            src="/adam.jpg" 
            alt="Adam Zvada" 
            className="w-8 h-8 rounded-full border-1 border-zinc-800 object-cover transition-transform duration-2000 hover:duration-200 animate-spin" 
          />
          <h1 className="text-zinc-200 text-2xl font-medium tracking-tighter">zvada</h1>
        </div> 
        <h2 className="text-xl font-small text-zinc-500 tracking-tighter">curious human being who loves to build <br/> and think about the future</h2>
      </div>
    </div>
  );
}




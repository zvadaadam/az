"use client";

import Link from 'next/link'
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs, allRecommendations, allAbouts } from "contentlayer/generated"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselIndicator } from "@/components/ui/carousel";

export default function Landing() {
  const [selectedSegment, setSelectedSegment] = useState('writings');

  return (
    <div className="bg-black text-white flex items-center justify-center overflow-x-hidden">
        <section className="flex flex-col w-full max-w-[3000px] mx-auto min-h-screen">
          <Header />
          <div className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto p-8 md:p-0">
            <Main />
            <Startups />
            <div className="flex space-x-4 -m-4 py-8 overflow-x-auto scrollbar-hide">
              <Button 
                variant='ghost' 
                onClick={() => setSelectedSegment('writings')} 
                className={`${selectedSegment !== 'writings' ? 'text-zinc-500' : 'text-white'} hover:text-white hover:bg-zinc-900 text-base tracking-tighter`}>
                  Writings 
                  <span className="pl-1 text-zinc-500 text-sm">・ {allBlogs.length}</span>
              </Button>
              <Button 
                variant='ghost' 
                onClick={() => setSelectedSegment('recommendations')} 
                className={`${selectedSegment !== 'recommendations' ? 'text-zinc-500' : 'text-white'} hover:text-white hover:bg-zinc-900 text-base tracking-tighter`}>
                  Recommendations
                  <span className="pl-1 text-zinc-500 text-sm">・ {allRecommendations.length}</span>
              </Button>
            </div>
            {selectedSegment === 'writings' && <Writings />}
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
        <h1 className="text-2xl font-medium tracking-tighter">Adam Zvada</h1>
        <h2 className="text-xl font-small text-zinc-500 tracking-tighter">curious human being who loves to build <br/> and think about the future</h2>
      </div>
    </div>
  );
}

function Startups() {
  const startups = [
    { name: 'Singular (e.g., NFTScoring)', description: 'NFT Exchange for Market Makers', traction: "YC-backed startup with over half a million users. Reched $100k MRR before the NFT market crashed.", website: 'https://google.com', content: "https://arc.net/og.png", timeRange: "2021 - 2023" },
    { name: 'GoDeliver', description: 'Platform for hyper-local delivery', traction: "TODO", website: 'https://google.com', content: "https://arc.net/og.png", timeRange: "2021 - 2023" },
    { name: 'Cognitic', description: 'Data Science & AI Studio', traction: "TODO", website: 'https://google.com', content: "https://arc.net/og.png", timeRange: "2021 - 2023" },
    { name: 'Fuzee', description: 'City planning app combing all modes of transport', traction: "TODO", website: 'https://google.com', content: "https://arc.net/og.png", timeRange: "2021 - 2023" },
    { name: 'Qusion', description: 'Web & Mobile Sudio', website: 'https://google.com', traction: "TODO", content: "https://arc.net/og.png", timeRange: "2021 - 2023" },
  ];

  return (
    <Carousel itemCount={startups.length} className="w-full mb-12">
      <CarouselContent className="-ml-1">
        {startups.map((startup, index) => (
          <CarouselItem key={index} className="pl-1">
            <div className="p-1 relative group rounded-md">
              <img src={startup.content} alt={startup.name} className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:opacity-50 rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 ease-in-out group-hover:bg-opacity-50 rounded-lg">
                <div className="flex flex-col aspect-square items-start justify-start p-6 opacity-0 group-hover:opacity-100">
                  <h2 className="text-xl font-semibold text-white tracking-tighter">{startup.name}</h2>
                  <p className="text-base text-zinc-200">{startup.description}</p>
                  <p className="text-sm text-zinc-400 absolute top-0 right-0 p-5">{startup.timeRange}</p>
                  <p className="text-sm text-zinc-200 absolute bottom-0 left-0 p-5">{startup.traction}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='text-zinc-500 bg-black border-zinc-500'/>
      <CarouselNext className='text-zinc-500 bg-black border-zinc-500'/>
    </Carousel>
  )
}

function Writings() {
  const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="flex-col pb-24">
      <div className="prose dark:prose-invert">
        {blogs.map((blog, index) => (
          <Link href={blog.slug} key={index}>
            <article className="cursor-pointer py-4 hover:bg-zinc-900 border-b border-zinc-800 w-full">
              <div className="flex justify-between items-center pb-1">
                <h2 className='pb-1'>{blog.title}</h2>
                <span className="text-zinc-500 tracking-tighter text-sm pr-2">{format(parseISO(blog.date), 'MMM yy')}</span>
              </div>
              {blog.description && <p className="text-zinc-500 text-sm font-light">{blog.description}</p>}
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

function Recommendations() {

  return (
    <div className="mx-auto pb-24">
      <div className="prose dark:prose-invert">
        {allRecommendations.map((recommendation, index) => (
          <ContentCard 
            key={index}
            title={recommendation.product} 
            description={recommendation.description} 
            website={recommendation.website} 
            contentImg={recommendation.content} 
          />
        ))}
      </div>
    </div>
  )
}


function ContentCard({key, title, description, website, contentImg}: {key: number, title: string, description: string, website: string, contentImg: string}) {
  
  return (
    <Link href={website} key={key}>
      <article className="cursor-pointer border-b border-zinc-800 w-full py-6">
        <div className="flex flex-col gap-1 pb-2">
          <h2 className="pb-1">{title}</h2>
          {description && <p className="text-zinc-500 text-sm font-light">{description}</p>}
        </div>
        <PreviewUrl contentImg={contentImg} website={website} />
      </article>
    </Link>
  )
}

function PreviewUrl({contentImg, website}: {contentImg: string, website: string}) {
  
  const getBaseUrl = (url: string) => new URL(url).hostname;
  
  return (
    <div className="relative mb-2">
      <img src={contentImg} alt={website} className="w-full h-auto rounded hover:ring-2 hover:ring-zinc-500 transition-all" />
      <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs p-1 rounded-md">
        {getBaseUrl(website)}
      </div>
    </div>
  )

}
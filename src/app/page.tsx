"use client";

import Link from 'next/link'
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs, allRecommendations, allInterestings } from "contentlayer/generated"


export default function Landing() {
  const [selectedSegment, setSelectedSegment] = useState('writings');

  return (
    <div className="bg-black text-white flex items-center justify-center overflow-x-hidden">
        <section className="flex flex-col w-full max-w-[3000px] mx-auto min-h-screen">
          <Header />
          <div className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto pb-48 p-8 md:p-0">
            <Main />
            <div className="flex space-x-4 -m-4 py-8 overflow-x-auto scrollbar-hide">
              <Button variant='ghost' onClick={() => setSelectedSegment('writings')} className={`${selectedSegment !== 'writings' ? 'text-gray-500' : 'text-white'} hover:text-white hover:bg-gray-900 text-base tracking-tighter`}>Writings</Button>
              <Button variant='ghost' onClick={() => setSelectedSegment('recommendations')} className={`${selectedSegment !== 'recommendations' ? 'text-gray-500' : 'text-white'} hover:text-white hover:bg-gray-900 text-base tracking-tighter`}>Recommendations</Button>
              <Button variant='ghost' onClick={() => setSelectedSegment('interestings')} className={`${selectedSegment !== 'interestings' ? 'text-gray-500' : 'text-white'} hover:text-white hover:bg-gray-900 text-base tracking-tighter`}>Find Interesting</Button>
            </div>
            {selectedSegment === 'writings' && <Writings />}
            {selectedSegment === 'recommendations' && <Recommendations />}
            {selectedSegment === 'interestings' && <Interestings />}
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
        <h2 className="text-xl font-small text-gray-500 tracking-tighter">curious human being who loves to build <br/> and think about the future</h2>
      </div>
    </div>
  );
}

function Writings() {
  const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="flex-col">
      <div className="prose dark:prose-invert">
        {blogs.map((blog, index) => (
          <Link href={blog.slug} key={index}>
            <article className="cursor-pointer py-4 hover:bg-gray-900 border-b border-gray-800 w-full">
              <div className="flex justify-between items-center pb-1">
                <h2>{blog.title}</h2>
                <span className="text-gray-500 tracking-tighter">{format(parseISO(blog.date), 'MMM yy')}</span>
              </div>
              {blog.description && <p className="text-gray-500 text-sm font-light">{blog.description}</p>}
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

function Recommendations() {

  return (
    <div className="mx-auto">
      <div className="prose dark:prose-invert">
        {allRecommendations.map((recommendation, index) => (
          <ContentCard 
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

function Interestings() {

  return (
    <div className="mx-auto">
      <div className="prose dark:prose-invert">
        {allInterestings.map((interesting, index) => (
          <ContentCard 
            title={interesting.product} 
            description={interesting.description} 
            website={interesting.website} 
            contentImg={interesting.content} 
          />
        ))}
      </div>
    </div>
  );
}


function ContentCard({title, description, website, contentImg}: {title: string, description: string, website: string, contentImg: string}) {
  
  return (
    <Link href={website}>
      <article className="cursor-pointer border-b border-gray-800 w-full py-3">
        <div className="flex flex-col gap-1 pb-2">
          <h2 className="">{title}</h2>
          {description && <p className="text-gray-500 text-sm font-light">{description}</p>}
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
      <img src={contentImg} alt={website} className="w-full h-auto rounded hover:ring-2 hover:ring-gray-500 transition-all" />
      <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs p-1 rounded-md">
        {getBaseUrl(website)}
      </div>
    </div>
  )

}
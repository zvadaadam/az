"use client";

import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs, allRecommendations } from "contentlayer/generated"
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Landing() {
  const [selectedSegment, setSelectedSegment] = useState('writings');

  return (
    <div className="bg-black text-white flex items-center justify-center overflow-x-hidden">
        <section className="flex flex-col w-full max-w-[3000px] mx-auto min-h-screen">
          <Header />
          <div className="flex flex-col items-start justify-center w-full md:w-1/3 mx-auto pb-48 p-8">
            <Main />
            <div className="flex space-x-4 -m-4 py-6 overflow-x-auto scrollbar-hide">
              <Button variant='ghost' onClick={() => setSelectedSegment('writings')} className={`${selectedSegment !== 'writings' ? 'text-gray-500' : 'text-white'} hover:text-white hover:bg-gray-900 text-base tracking-tighter`}>Writings</Button>
              <Button variant='ghost' onClick={() => setSelectedSegment('recommendations')} className={`${selectedSegment !== 'recommendations' ? 'text-gray-500' : 'text-white'} hover:text-white hover:bg-gray-900 text-base tracking-tighter`}>Recommendations</Button>
              <Button variant='ghost' onClick={() => setSelectedSegment('readings')} className={`${selectedSegment !== 'readings' ? 'text-gray-500' : 'text-white'} hover:text-white hover:bg-gray-900 text-base tracking-tighter`}>Find Interesting</Button>
            </div>
            {selectedSegment === 'writings' && <Writings />}
            {selectedSegment === 'recommendations' && <Recommendations />}
            {selectedSegment === 'readings' && <Readings />}
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
      {/* <h1 className="text-xl mb-4 text-left">Writings</h1> */}
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
      <h1 className="text-xl mb-4 text-left">What I like</h1>
      <div className="prose dark:prose-invert">
        {allRecommendations.map((recommendation, index) => (
          <Link href={recommendation.website} key={index}>
            <article className="cursor-pointer py-4 hover:bg-gray-900 border-b border-gray-800 w-full flex">
              <div className="flex">
                <img src={recommendation.content} alt={recommendation.product} width={500} height={500} className="w-full h-auto" />
                <div className="flex flex-col items-left pb-1">
                  <h2>{recommendation.product}</h2>
                  {recommendation.description && <p className="text-gray-500 text-sm font-light">{recommendation.description}</p>}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

function Readings() {

  return (
    <div className="mx-auto">
      <h1 className="text-xl mb-4 text-left">What I like</h1>
      <div className="prose dark:prose-invert">
        {allRecommendations.map((recommendation, index) => (
          <Link href={recommendation.website} key={index}>
            <article className="cursor-pointer py-4 hover:bg-gray-900 border-b border-gray-800 w-full flex">
              <div className="flex">
                <img src={recommendation.content} alt={recommendation.product} className="w-full h-auto" />
                <div className="flex flex-col items-left pb-1">
                  <h2>{recommendation.product}</h2>
                  {recommendation.description && <p className="text-gray-500 text-sm font-light">{recommendation.description}</p>}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

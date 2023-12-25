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


export default function Landing() {
  const [selectedSegment, setSelectedSegment] = useState('writings');

  return (
    <div className="bg-black text-white flex items-center justify-center">
        <section className="flex flex-col w-full max-w-[3000px] mx-auto min-h-screen">
          <Header />
          <div className="flex flex-col items-start justify-center w-1/3 mx-auto">
            <Main />
            <div className="flex space-x-4 -m-4 py-6">
              <Button variant='ghost' onClick={() => setSelectedSegment('writings')} className={`${selectedSegment !== 'writings' ? 'text-gray-500' : 'text-white'} hover:text-white hover:bg-gray-900 text-base tracking-tighter`}>What I Think</Button>
              <Button variant='ghost' onClick={() => setSelectedSegment('recommendations')} className={`${selectedSegment !== 'recommendations' ? 'text-gray-500' : 'text-white'} hover:text-white hover:bg-gray-900 text-base tracking-tighter`}>What I Like</Button>
              <Button variant='ghost' onClick={() => setSelectedSegment('readings')} className={`${selectedSegment !== 'readings' ? 'text-gray-500' : 'text-white'} hover:text-white hover:bg-gray-900 text-base tracking-tighter`}>What I Read</Button>
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
    <div className="flex flex-col justify-center h-64 py-24">
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


function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center w-full justify-between p-6">
      <Image src="/az.svg" alt="AZ Logo" width={32} height={32} priority/>
      <div className="flex justify-end gap-2 items-center group">
        <span className="font-light text-xs uppercase text-white text-opacity-25 group-hover:translate-x-[-10px] transition-transform md:inline hidden">Adam&apos;s socials -&gt;</span> 
        <a href="https://twitter.com/adamzvada" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
          <FaXTwitter className="h-4 w-4 " />
        </a>
        <a href="https://github.com/zvadaadam" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
          <FaLinkedin className="h-4 w-4 " />
        </a>
        <a href="https://www.instagram.com/zvadaadam" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
          <FaInstagram className="h-4 w-4 " />
        </a>
        <a href="https://www.tiktok.com/@zvadaadam" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
          <FaTiktok className="h-4 w-4 " />
        </a>
        <a href="https://github.com/zvadaadam" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
          <FaGithub className="h-4 w-4 " />
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="sticky bottom-0 z-50 w-full px-6 pb-6 bg-black">
      <div className="flex items-center justify-between border-t border-gray-800 pt-3">
        <div className="text-sm text-white">
          <span>Adam Zvada</span>
          <span className="hidden md:inline text-gray-500"> — hello@adamzvada.com</span>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <a href="https://twitter.com/adamzvada" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
            <FaXTwitter className="h-4 w-4 " />
          </a>
          <a href="https://github.com/zvadaadam" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
            <FaLinkedin className="h-4 w-4 " />
          </a>
          <a href="https://www.instagram.com/zvadaadam" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
            <FaInstagram className="h-4 w-4 " />
          </a>
          <a href="https://www.tiktok.com/@zvadaadam" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
            <FaTiktok className="h-4 w-4 " />
          </a>
          <a href="https://github.com/zvadaadam" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-all">
            <FaGithub className="h-4 w-4 " />
          </a>
        </div>
      </div>
    </div>
  )
}

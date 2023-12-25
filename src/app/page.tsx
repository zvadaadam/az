"use client";

import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs } from "contentlayer/generated"


export default function Landing() {
  return (
    <div className="bg-black text-white flex items-center justify-center">
        <section className="flex flex-col h-screen justify-between w-full max-w-[3000px] mx-auto min-h-screen">
          <Header />
          <Main />
          <Content />
          <Footer />
      </section>
    </div>
  );
}

function Main() {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-24">
      <div className="flex flex-col items-start justify-center text-left gap-2">
        <h1 className="text-2xl font-medium tracking-tighter">Adam Zvada</h1>
        <h2 className="text-xl font-small text-gray-500 tracking-tighter">curious human being who loves to build <br/> and think about the future</h2>
      </div>
    </div>
  );
}

function Content() {
  const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-xl py-8 h-full">
      <h1 className="text-xl mb-8 text-left">Writings</h1>
      <div className="prose dark:prose-invert">
        {blogs.map((blog) => (
          <Link href={blog.slug}>
            <article key={blog._id} className="cursor-pointer hover:underline">
              <div className="flex justify-between items-center">
                <h2>{blog.title}</h2>
                <span>{format(parseISO(blog.date), 'MMMM dd, yyyy')}</span>
              </div>
              {blog.description && <p>{blog.description}</p>}
              <hr />
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}


function Header() {
  return (
    <div className="flex items-center w-full justify-between p-6">
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
    <div className="w-full p-6">
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

import Link from 'next/link'
import React, { useState } from "react";
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs, allRecommendations, allAbouts } from "contentlayer/generated"


function Blogs() {
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

export default Blogs;
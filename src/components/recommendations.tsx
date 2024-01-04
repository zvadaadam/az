import Link from 'next/link'
import React, { useState } from "react";
import { allBlogs, allRecommendations, allAbouts } from "contentlayer/generated"
import PreviewUrl from "@/components/preview-url";

function Recommendations() {

    return (
      <div className="mx-auto pb-24">
        <div className="prose dark:prose-invert">
          {allRecommendations.map((recommendation, index) => (
            <Link href={recommendation.website} key={index}>
            <article className="cursor-pointer border-b border-zinc-800 w-full py-6">
              <div className="flex flex-col gap-1 pb-2">
                <h2 className="pb-1">{recommendation.product}</h2>
                {recommendation.description && <p className="text-zinc-500 text-sm font-light">{recommendation.description}</p>}
              </div>
              <PreviewUrl contentImg={recommendation.content} website={recommendation.website} />
            </article>
          </Link>
          ))}
        </div>
      </div>
    )
}

export default Recommendations;
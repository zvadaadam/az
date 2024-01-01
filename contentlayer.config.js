// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  }

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: computedFields,
}))

export const Recommendations = defineDocumentType(() => ({
    name: 'Recommendations',
    filePathPattern: `recommendations/**/*.mdx`,
    contentType: "mdx",
    fields: {
      product: { type: 'string', required: true },
      date: { type: 'date', required: true },
      description: { type: 'string', required: true },
      category: { type: 'string', required: true },
      website: { type: 'string', required: true },
      content: { type: 'string', required: true },
    },
    computedFields: computedFields,
}))

export const About = defineDocumentType(() => ({
    name: 'About',
    filePathPattern: `about/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: { type: 'string', required: true },
      susbtitle: { type: 'string', required: true },
    },
    computedFields: computedFields,
}))

export default makeSource({ 
    contentDirPath: './content',
    mdx: { rehypePlugins: [remarkGfm] },
    documentTypes: [Blog, Recommendations, About] 
})
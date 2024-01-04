// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"


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
  name: "Blog",
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
    name: "Recommendations",
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
    name: "About",
    filePathPattern: `about/**/*.mdx`,
    contentType: 'mdx',
    fields: {
      title: { type: 'string', required: true },
      subtitle: { type: 'string', required: true },
    },
    computedFields: computedFields,
}))

export default makeSource({ 
    contentDirPath: 'content',
    documentTypes: [Blog, Recommendations, About],
    mdx: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "github-dark",
            onVisitLine(node) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }]
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push("line--highlighted")
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ["word--highlighted"]
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    },
})
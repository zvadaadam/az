// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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

export default makeSource({ 
    contentDirPath: './content', 
    documentTypes: [Blog] 
})
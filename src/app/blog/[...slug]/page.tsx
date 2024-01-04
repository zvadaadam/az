import { notFound } from "next/navigation"
import { allBlogs } from "contentlayer/generated"
import { Metadata } from "next"
import { Mdx } from "./../../../components/mdx-components"
import { format, parseISO } from 'date-fns'
import Header from "@/components/header"
import Footer from "@/components/footer"


interface BlogProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: BlogProps["params"]) {
  const slug = params?.slug?.join("/")
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug)

  if (!blog) {
    null
  }

  return blog
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const blog = await getPostFromParams(params)

  if (!blog) {
    return {}
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

export async function generateStaticParams(): Promise<BlogProps["params"][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: BlogProps) {
  const blog = await getPostFromParams(params)

  if (!blog) {
    notFound()
  }

  console.log(blog)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <article className="py-40 mx-auto max-w-xl flex-grow">
        <h1 className="text-4xl font-semibold tracking-tighter mb-2 text-slate-200">{blog.title}</h1>
        {blog.description && (
          <p className="text-base mt-0 text-slate-500">
            {blog.description}
          </p>
        )}
        <time dateTime={blog.date} className="mb-1 text-xs text-slate-600">
          {format(parseISO(blog.date), 'LLLL d, yyyy')}
        </time>
        <hr className="my-4 border-zinc-800" />
        <div className="text-slate-200 text-base mb-36">
          <Mdx code={blog.body.code} />
        </div>
      </article>
      <Footer />
    </div>
  )
}
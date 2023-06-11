import { groq } from "next-sanity"
import { client } from "@/lib/sanity.client"
import PreviewSuspense from "@/components/PreviewSuspense"
import BlogList from "@/components/BlogList"
import PreviewBlogList from "@/components/PreviewBlogList"
import { previewData } from "next/headers"

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->,
} | order(_createdAt desc)
`

export const revalidate = 30; // revalidate this page every 30 seconds

export default async function HomePage() {
    if(previewData()) {
        return (
        <PreviewSuspense fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Carregando pré-visualização...
            </p>
          </div>
        }>
          <PreviewBlogList query={query} />
        </PreviewSuspense>
        )
    }
    const posts = await client.fetch(query);
    return <BlogList posts={posts} />
}
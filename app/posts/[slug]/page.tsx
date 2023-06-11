import PostComponent from "@/components/PostComponent";
import PreviewPost from "@/components/PreviewPost";
import PreviewSuspense from "@/components/PreviewSuspense";
import { client } from "@/lib/sanity.client";
import { Post } from "@/typings";
import { groq } from "next-sanity";
import { previewData } from "next/headers";


type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 30; // revalidate this page every 30 seconds

export async function generateStaticParams() {
  const query = groq`
    *[_type == "post"]
    {
      slug
    }
  `
  const posts: Post[] = await client.fetch(query);
  const slugRoutes = posts.map((post) => post.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Posts({params: {slug}}: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->,
    }
  `
  if(previewData()) 
    return (
      <PreviewSuspense fallback={
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
            Carregando pré-visualização...
          </p>
        </div>
      }>
        <PreviewPost query={query} slug={slug} />
      </PreviewSuspense>
    );
  
  const post: Post = await client.fetch(query, { slug });
  // const views = 0;
  return <div>
    {/* <div>Visualizações: {views}</div> */}
    <PostComponent post={post} />
  </div>
}
import { client } from "@/lib/sanity.client";
import { Post } from "@/typings";
import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sitemap(req: NextApiRequest, res: NextApiResponse) {

    const query = groq`
        *[_type == "post"]
        {
        slug,
        _updatedAt
        }
    `
    const posts: Post[] = await client.fetch(query);

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      // generate sitemap here
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url><loc>https://www.seducercast.com/</loc></url>
        ${posts.map((post) => `<url>
          <loc>https://www.seducercast.com/posts/${post.slug.current}</loc>
          <lastmod>${post._updatedAt}</lastmod>
        </url>`).join("\n")}
      </urlset>`
  
    res.end(xml)
  }
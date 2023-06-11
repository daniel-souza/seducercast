import urlFor from "@/lib/urlFor";
import { Post } from "@/typings";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

type Propos = {
    posts: Post[];
}

export default function BlogList({ posts }: Propos) {
  // console.log("´posts",posts.length,posts);
  return (
    <div className="bg-slate-100 dark:bg-slate-600 mt-10 pt-20">
      {/* <hr className="border-[#6D0992] dark:border-red-300 border-2 mt-5 mb-10" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {
          posts.map((post) => (
            <ClientSideRoute key={post._id} route={`/posts/${post.slug.current}`}>
              <div className="flex flex-col group cursor-pointer">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    className="object-cover object-left lg:object-center"
                    src={(post.mainImage) ? urlFor(post.mainImage).url() : "https://via.placeholder.com/500x300"}
                    alt={post.author.name!}
                    fill
                  />
                  <div className="flex justify-between absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadown-lg text-white p-5">
                    <div>
                      <p className="font-bold">
                        {post.title}
                      </p>
                      <p >
                        {
                          new Date(post._createdAt).toLocaleDateString("pt-BR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        }
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {
                        (post.categories) ?
                            post.categories.map((category) => (
                            <div className="bg-[#6D0992] text-center text-white px-3 py-1 rounded-full text-sm font-semibold">
                              <p>{category.title}</p>
                            </div>
                          ))
                        : null
                      }
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 flex-1">
                  <p className="underline text-lg font-bold">{post.title}</p>
                  <p className="line-clamp-2 dark:text-red-200 text-gray-500">{post.description}</p>
                </div>

                <p className="mt-5 font-bold flex items-center group-hover:underline">
                  Ler publicação
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </p>

              </div>
            </ClientSideRoute>
          ))
        }
      </div>
    </div>
  )
}
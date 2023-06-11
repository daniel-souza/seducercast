import { RichTextComponents } from "@/components/RichTextComponents";
import urlFor from "@/lib/urlFor";
import { Post } from "@/typings";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    post: Post;
}

export default function PostComponent({ post }: Props) {
    console.log(post.body)
    
    return (
        // <article className="px-5 pb-28 mt-5">
        <article className="px-10 pb-28">
            <section className="space-y-2 border border-[#E5B8F4] text-white">
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image
                        className="object-cover object-left mx-auto"
                        src={(post.mainImage) ? urlFor(post.mainImage).url() : "https://via.placeholder.com/500x300"}
                        alt={post.author.name!}
                        fill
                        />
                    </div>
                </div>
            </section>
    
            <section className="p-5 bg-[#C147E9] dark:bg-[#810CA8] w-full">
                <div className="flex flex-col md:flex-row justify-between gap-y-5">
                    <div>
                        <h1 className="text-4xl font-extrabold">
                        {post.title}
                        </h1>
                        <p>
                        {
                            new Date(post._createdAt).toLocaleDateString("pt-BR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            })
                        }
                        </p>
                    </div>
                    <div
                        className="flex items-center space-x-2"
                        //className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center"
                    >
                        <Image 
                            src={(post.author.image) 
                            ? urlFor(post.author.image).url() 
                            : "https://via.placeholder.com/500x300"
                            } 
                            width={50} 
                            height={50} 
                            className="rounded-full"
                            alt={post.author.name!} 
                        />
        
                        <div className="w-64">
                            <h3 className="text-lg font-bold">{post.author.name}</h3>
                            <p>{/** TODO Author BIO */}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="italic pt-10">
                        {post.description}
                    </h2>
                    <div className="flex items-center justify-end mt-auto space-x-2">
                        {post.categories.map((category) => (
                            <p key={category.title} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                            {category.title}
                            </p> 
                        ))}
                    </div>
                </div>
            </section>
        
            <PortableText value={post.body}
                components={RichTextComponents} />
        </article>
    )
}



import urlFor from "@/lib/urlFor"
import Image from "next/image"
import Link from "next/link"


export const RichTextComponents = {
    types: {
      image: ({value}: any) => {
        return (
          <div className="relative w-full h-96 m-10 mx-auto">
            <Image
              className="object-contain"
              src={(value) ? urlFor(value).url() : "https://via.placeholder.com/500x300"}
              alt="Post Image"
              fill
            />
          </div>
        );
      },
    },

    list: {
      bullet: ({children, type}: any) => {
        return (
          // <ul className="list-disc list-inside">
          <ul className="list-disc ml-10 py-5 space-y-1">
            {children}
          </ul>
        )
      },
      number: ({children, type}: any) => {
        return (
          <ol className="list-decimal ml-10 py-5 space-y-1">
            {children}
          </ol>
        )
      },
    },

    block: {
      normal: ({children}: any) => {
        return (
          <p className="py-1 text-justify font-sans">
            {children}
          </p>
        )
      },      
      h1: ({children}: any) => {
        return (
          <h1 className="text-5xl py-10 font-extrabold">
            {children}
          </h1>
        )
      },
      h2: ({children}: any) => {
        return (
          <h2 className="text-4xl py-10 font-bold">
            {children}
          </h2>
        )
      },
      h3: ({children}: any) => {
        return (
          <h3 className="text-3xl py-10 font-bold">
            {children}
          </h3>
        )
      },
      h4: ({children}: any) => {
        return (
          <h4 className="text-2xl py-10 font-bold">
            {children}
          </h4>
        )
      },
      blockquote: ({children}: any) => {
        return (
          <blockquote className="border-l-4 border-l-[#F7AB0A] pl-5 py-5 my-5">
            {children}
          </blockquote>
        )
      },
    },
    marks: {
      link: ({children, value}: any) => {
        const rel = !value.href.startsWith('/') 
          ? 'noreferrer noopener' 
          : undefined

        return (
          <Link 
            href={value.href}
            rel={rel}
            className="underline  decoration-[#F7AB0A] hover:decoration-black"
          >
            {children}
          </Link>
        )
      },
    },
}

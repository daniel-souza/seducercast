"use client";

import { usePreview } from "@/lib/sanity.preview";
import PostComponent from "./PostComponent";

type Props = {
    query: string,
    slug: string,
}

export default function PreviewPost({ query, slug }: Props) {
    const post = usePreview(null, query, { slug });
    return <PostComponent post={post} />
}
"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
    throw new Error("Impossível pré-visualizar, uma vez que você não está logado!");
}

if(!projectId || !dataset) {
    throw new Error("projectId ou dataset não foi providenciado. Verifique os arquivos sanity.json ou .env");
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})


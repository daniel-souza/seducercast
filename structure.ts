import Iframe from "sanity-plugin-iframe-pane";
import { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType }
) => {
    if (schemaType === "post") {
        return S.document().views([
            S.view.form(),

            S.view
                .component(Iframe)
                .options({
                    // Required: Accepts an async function
                    // OR a string
                    url: `${
                        process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
                    }/api/preview`,
                    // Optional: Set the default size
                    defaultSize: "desktop", // Accepts "mobile", "tablet", "desktop"
                    // Optional: Add a reaload button, or reload on new document revisions
                    reload: {
                        button: true, // default `undefined`
                    },
                    // Optional: Pass attributes to underlying `iframe` element:
                    attributes: {},
                })
                .title("Preview"),
        ]);
    }
}
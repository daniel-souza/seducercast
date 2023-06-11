import { NextApiRequest, NextApiResponse } from "next";
// import { draftMode } from "next/headers";

export default async function exit(req: NextApiRequest, res: NextApiResponse) {
    res.clearPreviewData({});
    // draftMode().disable();
    res.writeHead(307, { Location: "/" });
    res.end();
    // res.redirect("/");
}
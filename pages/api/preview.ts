import { NextApiRequest, NextApiResponse } from "next";

export default async function draft(req: NextApiRequest, res: NextApiResponse) {
    // draftMode().enable();
    res.setPreviewData({});
    res.writeHead(307, {Location: '/'});
    res.end();
}
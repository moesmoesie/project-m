export default function preview(req, res) {
  if (!req?.query?.secret) {
    return res.status(401).json({ message: "No secret token" });
  }

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.NEXT_PUBLIC_PREVIEW) {
    return res.status(401).json({ message: "Invalid secret token" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  const slug = req?.query?.slug ? `${req?.query?.slug}` : "/";

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: slug });

  return res.end();
}

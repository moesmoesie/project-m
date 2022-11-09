// pages/api/revalidate.js

export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.body?.slug) {
    return res.status(402).json({ message: "No slug provided" });
  }

  console.log(req.body?.slug);

  try {
    if (req.body?.beforeSlug) {
      await res.revalidate(req.body.slug);
    }
    await res.revalidate(req.body.slug);
    return res.json({ revalidated: true, slug: req.body.slug, beforeSlug: req.body?.beforeSlug ?? "" });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}

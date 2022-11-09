export default function exit(req, res) {
  res.clearPreviewData();
  const slug = req?.query?.slug ? `/${req?.query?.slug}` : "/";
  res.writeHead(307, { Location: slug });
}

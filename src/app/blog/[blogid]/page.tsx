// params

interface PageProps {
  params: Promise<{ blogid: string }>;
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { blogid } = await params;

  // value slug > key > search DB

  return <div>Ini adalah dynamic route {blogid}</div>;
}

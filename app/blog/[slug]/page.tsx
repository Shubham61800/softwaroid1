import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const post = await fetchBySlug(params.slug);
  if (!post) {
    return <div>Post Not found</div>;
  }
  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });
  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-4 md:px-20 py-28">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8 group font-medium"
        >
          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
        {!post ? (
          <div className="text-center text-muted-foreground">
            Blog post not found.
          </div>
        ) : (
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        )}
      </section>
      <Footer />
    </div>
  );
}

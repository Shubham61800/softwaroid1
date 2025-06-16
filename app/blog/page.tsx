/* eslint-disable */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { fetchPages } from "@/lib/notion";

export default async function Page() {
  const posts = await fetchPages();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-4 md:px-20 py-28">
        <h1 className="text-4xl font-bold text-primary-500 mb-8">Blog</h1>

        {posts?.results.map((post: any) => (
          <Link
            key={post.id}
            href={`/blog/${
              post?.properties?.slug?.rich_text?.[0]?.plain_text ?? "no-slug"
            }`}
            className="block"
          >
            <Card className="hover:shadow-md transition-shadow bg-white cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">
                  {post?.properties?.Title?.title?.[0]?.plain_text ??
                    "Untitled"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {post?.properties?.description?.rich_text?.[0]?.plain_text ??
                    ""}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  );
}

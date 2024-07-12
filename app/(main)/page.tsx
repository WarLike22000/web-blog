import { getBlogs } from "@/actions/blog";
import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";

export default async function Home() {

  const blogs = await getBlogs();
  
  return (
    <div className="flex flex-col space-y-8 px-5 md:px-12 lg:px-28">
      <Hero />
      <BlogSection
        blogs={blogs?.slice(0, 8)}
      />
    </div>
  );
}

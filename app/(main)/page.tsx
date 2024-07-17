import { getBlogs } from "@/actions/blog";
import BlogSection from "@/components/BlogSection";
import CategorySection from "@/components/CategorySection";
import Hero from "@/components/Hero";

export default async function Home() {

  const blogs = await getBlogs();
  
  return (
    <div className="flex flex-col space-y-8">
      <Hero />
      <CategorySection />
      { blogs?.length! > 0 && <BlogSection blogs={blogs?.slice(0, 8)} /> }
    </div>
  );
}

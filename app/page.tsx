import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8">
      <Hero />
      <BlogSection />
    </div>
  );
}

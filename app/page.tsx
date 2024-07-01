import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 px-5 md:px-12 lg:px-28">
      <Hero />
      <BlogSection />
    </div>
  );
}

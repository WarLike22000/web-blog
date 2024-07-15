import { getBlogs } from "@/actions/blog";
import BlogCard from "@/components/BlogCard";
import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import { SearchX } from "lucide-react";
import { Suspense } from "react";

const Blogs = async ({ searchParams: { title, category } } : { searchParams: { title: string, category: string } }) => {

    const blogs = await getBlogs();
    const searchBlogs = blogs?.filter((blog) => {
        if(title) {
            return blog.title.toLowerCase().includes(title?.toLowerCase() ?? "")
        } else if(category) {
            return blog.category.toLowerCase().includes(category?.toLowerCase() ?? "")
        } else {
            return blogs
        }
    })

    return ( 
        <div className="space-y-8 px-5 md:px-12 lg:px-28 py-6 w-full h-full">
            <h4 className="text-4xl text-gray-700">
                All Blogs
            </h4>
            <Suspense fallback={<h1>Loading...</h1>}>
                <SearchInput />
            </Suspense>
            {
                    blogs?.length! == 0 ||searchBlogs?.length! == 0 ? (
                    <div className="py-5">
                        <EmptyState label="Not Found any Blog" icon={SearchX} />
                    </div>
                    
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
                            {searchBlogs?.map(({ id, title, description, image, category, author }) => (
                                <BlogCard
                                    key={id}
                                    id={id}
                                    title={title}
                                    description={description}
                                    image={image}
                                    category={category}
                                    author={author}
                                />
                            ))}
                        </div>
                    </>
                )
            }
        </div>
     );
}
 
export default Blogs;
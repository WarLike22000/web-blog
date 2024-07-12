import { getBlogs } from "@/actions/blog";
import BlogCard from "@/components/BlogCard";
import SearchInput from "@/components/SearchInput";
import { Suspense } from "react";

const Blogs = async ({ searchParams: { title } } : { searchParams: { title: string } }) => {

    const blogs = await getBlogs();
    const searchBlogs = blogs?.filter((blog) => blog.title.includes(title ?? ""))

    return ( 
        <div className="space-y-8 px-5 md:px-12 lg:px-28 py-4">
            <h4 className="text-4xl text-gray-700">
                All Blogs
            </h4>
            <Suspense fallback={<h1>Loading...</h1>}>
                <SearchInput />
            </Suspense>
                {
                     blogs?.length! == 0 ||searchBlogs?.length! == 0 ? (
                        <>
                            <h6 className="text-center text-2xl w-full">
                                blog not found
                            </h6>
                        </>
                        
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {(title ? searchBlogs : blogs)?.map(({ id, title, description, image, category, author }) => (
                                    <BlogCard
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
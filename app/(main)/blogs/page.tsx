import { getBlogsBySearch } from "@/actions/blog";

const Blogs = async () => {

    const blogs = await getBlogsBySearch("tes");
    
    return ( 
        <div>
            {
                blogs?.map((blog) => (
                    <div>
                        {blog.title}
                    </div>
                ))
            }
        </div>
     );
}
 
export default Blogs;
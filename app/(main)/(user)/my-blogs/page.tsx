import { getBlogsUser } from "@/actions/blog";
import Image from "next/image";
import Published from "./_Components/published";

const MyBlogs = async () => {

    const blogsUser = await getBlogsUser();
    
    return ( 
        <section className="w-full rounded-lg shadow-md border p-2 overflow-x-auto">
            <table className="w-full">
                <tr>
                    <th>
                        poster
                    </th>
                    <th>
                        title
                    </th>
                    <th>
                        category
                    </th>
                    <th>
                        creation date
                    </th>
                    <th>
                        published
                    </th>
                </tr>

                {
                    blogsUser?.map((blog) => (
                        <tr key={blog.id} className="border-t text-center">
                            <td className="border-r p-2">
                                <Image
                                    src={`${blog.image}`}
                                    alt="blog"
                                    width={100}
                                    height={100}
                                    className="object-cover rounded-lg mx-auto"
                                />
                            </td>

                            <td className="truncate max-w-32 border-r p-2">
                                {blog.title}
                            </td>
                            

                            <td className="truncate max-w-28 p-2 border-r">
                                {blog.category}
                            </td>

                            <td className="p-2 border-r">
                                {blog.createdAt.getDate()} / {blog.createdAt.getDay()} / {blog.createdAt.getFullYear()}
                            </td>

                            <td className="p-2 mx-auto">
                                <Published id={blog.id} published={blog.published} />
                            </td>
                        </tr>
                    ))
                }
            </table>
        </section>
     );
}
 
export default MyBlogs;
import { getBlogsUser } from "@/actions/blog";
import Image from "next/image";
import Published from "./_Components/published";
import Button from "@/components/Button";
import Link from "next/link";
import DeleteBlog from "./_Components/DeleteBlog";
import EditModal from "./_Components/EditModal";

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
                    <th>
                        delete
                    </th>
                    <th>

                    </th>
                </tr>

                {
                    blogsUser?.map((blog) => (
                        <tr key={blog.id} className="border-t text-center">
                            <td className="border-r p-2">
                                <Link href={`/blogs/${blog.id}`}>
                                    <Image
                                        src={`${blog.image}`}
                                        alt="blog"
                                        width={100}
                                        height={100}
                                        className="object-cover rounded-lg mx-auto"
                                    />
                                </Link>
                            </td>

                            <td className="truncate max-w-32 border-r p-2">
                                <Link href={`/blogs/${blog.id}`}>
                                    {blog.title}
                                </Link>
                            </td>
                            

                            <td className="truncate max-w-28 p-2 border-r">
                                {blog.category}
                            </td>

                            <td className="p-2 border-r">
                                {blog.createdAt.getMonth()} / {blog.createdAt.getDate()} / {blog.createdAt.getFullYear()}
                            </td>

                            <td className="p-2 mx-auto">
                                <Published id={blog.id} published={blog.published} />
                            </td>
                            
                            <td className="p-2 mx-auto">
                                <DeleteBlog id={blog.id} fileKey={blog.fileKey} />
                            </td>
                            <td className="p-2 mx-auto">
                                <EditModal blog={blog}/>
                            </td>
                        </tr>
                    ))
                }
            </table>
            {
                blogsUser?.length === 0 && (
                    <div className="w-full flex items-center justify-center h-[200px]">
                        <div className="flex flex-col items-center gap-2">
                            <p>
                                Empty
                            </p>
                            <Link href="/create-blog">
                                <Button>
                                    Create Blog
                                </Button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </section>
     );
}
 
export default MyBlogs;
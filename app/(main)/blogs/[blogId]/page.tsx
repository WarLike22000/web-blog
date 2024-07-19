import { getBlog } from "@/actions/blog";
import Social from "@/components/Social";
import Image from "next/image";
import CommentsList from "./_Components/CommetsList";
import { getComments } from "@/actions/comment";

const Blog = async ({ params: { blogId } } : { params: { blogId: string } }) => {

    const data = await getBlog(Number(blogId));
    const comments = await getComments(Number(blogId));

    return ( 
        <>
            <div className="bg-gray-800 w-full h-[250px] sm:h-[500px]" />
            <div className="flex flex-col  gap-4 items-center text-center px-5 md:px-12 lg:px-28 mt-[-250px] sm:mt-[-550px] py-20">
                <section className="flex flex-col items-center gap-2">
                    <h3 className="text-3xl md:text-5xl text-white text-center">
                        {data?.title}
                    </h3>
                    <h5 className="text-base text-gray-200 text-center">
                        {data?.category}
                    </h5>
                </section>
                
                <Image
                    src={data?.image as string}
                    alt="blog"
                    width={700}
                    height={700}
                    className="object-cover rounded-md bg-gray-400"
                />

                <section className="flex justify-between gap-4 items-center w-full max-w-xl">
                    <div className="flex items-center gap-2">
                        <div className="relative h-[40px] w-[50px]">
                            <Image
                                src={data?.author.image ? data?.author.image : "/assets/placeholder.jpg"}
                                alt={data?.author.name as string}
                                width={50}
                                height={50}
                                className="rounded-full bg-gray-400 absolute size-full"
                            />
                        </div>
                        <h4 className="text-lg text-gray-600">
                            {data?.author.name}
                        </h4>
                    </div>
                    <p className="text-lg text-gray-600">
                    {data?.createdAt.getMonth()} / {data?.createdAt.getDate()} / {data?.createdAt.getFullYear()}
                    </p>
                </section>

                <div className="max-w-3xl space-y-20 w-full">
                    <section className="text-gray-800 text-lg text-justify border p-3 rounded-md">
                        {data?.description}
                    </section>
                    
                    <section className="flex flex-col gap-2 w-full items-start">
                        <h6 className="text-xl font-semibold text-left">
                            Share this article on social media
                        </h6>
                        <div className="w-fit">
                            <Social />
                        </div>
                    </section>

                    <section>
                        <CommentsList comments={comments} />
                    </section>
                </div>
            </div>
        </>
     );
}
 
export default Blog;
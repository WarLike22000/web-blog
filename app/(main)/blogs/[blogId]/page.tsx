import Social from "@/components/Social";
import { blogs } from "@/constants";
import { BlogCardProps } from "@/types";
import Image from "next/image";

const Blog = async ({ params: { blogId } } : { params: { blogId: string } }) => {

    const [ data ]: BlogCardProps[] = blogs.filter((blog) => blog.id == +blogId)
    
    return ( 
        <>
            <div className="bg-gray-800 w-full h-[500px]" />
            <div className="flex flex-col gap-4 items-center text-center px-5 md:px-12 lg:px-28 mt-[-550px] py-20">
                <section className="flex flex-col items-center gap-2">
                    <h3 className="text-3xl md:text-5xl text-white text-center">
                        {data.title}
                    </h3>
                    <h5 className="text-base text-gray-200 text-center">
                        {data.category}
                    </h5>
                </section>
                
                <Image
                    src={data.image}
                    alt="blog"
                    width={700}
                    height={700}
                    className="object-cover rounded-md bg-gray-400"
                />

                <section className="flex justify-between gap-4 items-center w-full max-w-xl">
                    <div className="flex items-center gap-2">
                        <Image
                            src={data.authorImage}
                            alt={data.author}
                            width={50}
                            height={50}
                            className="rounded-full bg-gray-400"
                        />
                        <h4 className="text-lg text-gray-600">
                            {data.author}
                        </h4>
                    </div>
                    <p className="text-lg text-gray-600">
                        {data.date}
                    </p>
                </section>

                <section className="text-gray-800 text-lg text-justify">
                    {data.description}
                </section>
                
                <section className="mr-auto pt-16 flex flex-col gap-2">
                    <h6 className="text-lg font-semibold">
                        Share this article on social media
                    </h6>
                    <Social />
                </section>
            </div>
        </>
     );
}
 
export default Blog;
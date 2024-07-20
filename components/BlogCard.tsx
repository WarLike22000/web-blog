"use client"

import { BlogCardProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const BlogCard = ({
    id,
    title,
    description,
    image,
    category,
    author,
}: BlogCardProps) => {

    const router = useRouter();
    
    return ( 
        <motion.div
            key={id}
            onClick={() => router.push(`/blogs/${id}`, { scroll: true })}
            className="flex flex-col overflow-hidden rounded-xl p-2 border cursor-pointer hover:scale-105 transition-all h-[350px] shadow-xl"
        >
            <div className="relative min-h-[150px]">
                <Image
                    src={image}
                    alt="blog"
                    fill
                    className="object-cover rounded-lg absolute size-full"
                />
            </div>
            <div className="flex items-center gap-2 text-sm pt-2">
                <div className="relative h-[40px] w-[40px]">
                    <Image
                        src={author?.image ?? "/assets/placeholder.jpg"}
                        alt="author"
                        fill
                        className="rounded-full absolute size-full object-cover"
                    />
                </div>
                <p>
                    {author?.name}
                </p>
            </div>
            <div className="text-sm text-slate-400">
                {category}
            </div>
            <h2 className="text-lg text-slate-700 pt-3">
                {title}
            </h2>
            <p className="truncate text-slate-500 text-wrap">
                {description}
            </p>
        </motion.div>
     );
}
 
export default BlogCard;
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
            onClick={() => router.push(`/blogs/${id}`)}
            className="flex flex-col overflow-hidden rounded-xl p-2 shadow border cursor-pointer hover:scale-105 transition-all h-[350px]"
        >
            <motion.div className="border-b pb-2">
                <motion.img
                    src={image}
                    alt="blog"
                    className="object-cover w-full h-[150px] rounded-lg"
                />
            </motion.div>
            <div className="flex items-center gap-2 text-sm pt-2">
                <Image
                    src="/assets/blog.svg"
                    alt="author"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                {author.name}
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
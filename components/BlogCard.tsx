"use client"

import { BlogCardProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogCard = ({
    id,
    title,
    description,
    image,
    date,
    category,
    author,
    authorImage,
}: BlogCardProps) => {
    return ( 
        <motion.div key={id} className="flex flex-col overflow-hidden rounded-xl p-2 shadow border cursor-pointer hover:scale-105 transition-all">
            <motion.div className="border-b pb-2">
                <motion.img
                    src={image}
                    alt="blog"
                    className="object-cover w-full h-[150px]"
                />
            </motion.div>
            <div className="flex items-center gap-2 text-sm pt-2">
                <Image
                    src={authorImage}
                    alt="author"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                {author}
            </div>
            <div className="text-sm text-slate-400">
                {category} - {date}
            </div>
            <h2 className="text-lg text-slate-700 pt-3">
                {title}
            </h2>
            <p className="truncate text-slate-500">
                {description}
            </p>
        </motion.div>
     );
}
 
export default BlogCard;
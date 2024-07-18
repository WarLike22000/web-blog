"use client";

import BlogCard from "./BlogCard";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { buttonCategory } from "@/constants";
import Button from "./Button";
import { ArrowRight, ListFilter } from "lucide-react";
import clsx from "clsx";
import Menu from "./Menu";
import { BlogCardProps } from "@/types";

const variantCards: Variants = {
    offscreen: {
        y: 100,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        },
    },
};

const BlogSection = ({ blogs }: { blogs: BlogCardProps[] | undefined }) => {

    const [isMounted, setIsMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState("all");

    const data = blogs?.filter((blog) => blog.category === category);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) return null;
    
    return ( 
        <motion.div
            variants={variantCards}
            className="space-y-6 h-fit py-10 px-5 md:px-12 lg:px-28"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="text-xl md:text-3xl flex items-center justify-between">
                <h1 className='text-gray-600 text-xl sm:text-3xl'>
                    Latest blogs
                </h1>
                <section className="relative flex items-center gap-2">
                    <Button
                        onClick={() => setOpen((prev) => !prev)}
                        className="cursor-pointer flex items-center gap-2 text-base bg-gray-800 test-white"
                    >
                        Filter <ListFilter size={18} />
                    </Button>
                    <Menu open={open} setOpen={setOpen}>
                        <div className="flex flex-col gap-1 bg-gray-800 rounded-md overflow-hidden">
                            {buttonCategory.map(({ label, name }) => (
                                <h6
                                    onClick={() => {
                                        setCategory(name)
                                        setOpen(false);
                                    }}
                                    className={clsx("text-base text-center text-white py-1 px-4 cursor-pointer hover:bg-slate-100 hover:text-slate-800 transition-all",
                                        category === name && "bg-slate-100 text-black bg-opacity-30 hover:bg-slate-100")}
                                >
                                    {label}
                                </h6>
                            ))}
                        </div>
                    </Menu>
                    <Link href="/blogs" className="text-lg text-slate-600 flex items-center gap-1 hover:text-slate-400 transition">
                        All
                        <ArrowRight size={15} />
                    </Link>
                </section>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                    {
                        category === "all" ? (
                            <>
                                {blogs?.map(({ id, title, description, image, category, author }) => (
                                    <BlogCard
                                        id={id}
                                        title={title}
                                        description={description}
                                        image={image}
                                        category={category}
                                        author={author}
                                    />
                                ))}
                            </>
                        ) : (
                            <>
                                {data?.map(({ id, title, description, image, category, author }) => (
                                    <BlogCard
                                        id={id}
                                        title={title}
                                        description={description}
                                        image={image}
                                        category={category}
                                        author={author}
                                    />
                                ))}
                            </>
                        )
                    }
                </AnimatePresence>
            </div>
        </motion.div>
     );
}
 
export default BlogSection;
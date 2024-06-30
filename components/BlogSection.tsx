"use client";

import BlogCard from "./BlogCard";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { blogs, buttonCategory } from "@/constants";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

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

const BlogSection = () => {

    const [isMounted, setIsMounted] = useState(false);
    const [category, setCategory] = useState("all");

    const data = blogs.filter((blog) => blog.category === category);

    useEffect(() => {
        setIsMounted(true);
    });

    if(!isMounted) return null;
    
    return ( 
        <motion.div
            variants={variantCards}
            className="space-y-6 h-fit py-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="text-3xl flex items-center justify-between">
                <h1>
                    Latest blogs
                </h1>
                <section className="flex items-center gap-2">
                    <Button onClick={() => setCategory("all")}>
                        All
                    </Button>
                    {buttonCategory.map(({ label, name }) => (
                        <Button onClick={() => setCategory(name)}>
                            {label}
                        </Button>
                    ))}
                </section>
                <Link href="/" className="text-lg text-slate-600 flex items-center gap-1 hover:text-slate-400 transition">
                    All
                    <ArrowRight size={15} />
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                    {
                        category === "all" ? (
                            <>
                                {blogs.map(({ id, title, description, image, date, category, author, authorImage }) => (
                                    <BlogCard
                                        id={id}
                                        title={title}
                                        description={description}
                                        image={image}
                                        date={date}
                                        category={category}
                                        author={author}
                                        authorImage={authorImage}
                                    />
                                ))}
                            </>
                        ) : (
                            <>
                                {data.map(({ id, title, description, image, date, category, author, authorImage }) => (
                                    <BlogCard
                                        id={id}
                                        title={title}
                                        description={description}
                                        image={image}
                                        date={date}
                                        category={category}
                                        author={author}
                                        authorImage={authorImage}
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
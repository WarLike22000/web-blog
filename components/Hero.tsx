"use client"

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useSession } from "next-auth/react";

const variantImage: Variants = {
    offscreen: {
        x: -100,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.5
        },
    },
};

const variantText: Variants = {
    offscreen: {
        x: 100,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.5
        },
    },
};

const Hero = () => {

    const session = useSession();
    
    return ( 
        <motion.div
            className="w-full flex flex-col md:flex-row justify-between items-center gap-y-2 gap-x-16 mx-auto"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div variants={variantImage}>
                <Image
                    src="/assets/blog.svg"
                    alt="blog"
                    width={550}
                    height={550}
                />
            </motion.div>
            <motion.div className="w-full max-w-lg flex flex-col gap-3" variants={variantText}>
                <h1 className="text-5xl">
                    Blog.com
                </h1>
                <p className="text-base text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center gap-2">
                    <Link href={session ? "/create-blog" : "/login"}>
                        <Button className="rounded-md">
                            Create Now
                        </Button>
                    </Link>
                    <Link href="/blogs">
                        <Button className="rounded-md">
                                All Blogs
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </motion.div>
     );
}
 
export default Hero;
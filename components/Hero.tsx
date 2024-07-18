"use client"

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useSession } from "next-auth/react";

// const variantImage: Variants = {
//     offscreen: {
//         x: -100,
//         opacity: 0
//     },
//     onscreen: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             type: "spring",
//             bounce: 0.3,
//             duration: 0.5
//         },
//     },
// };

// const variantText: Variants = {
//     offscreen: {
//         x: 100,
//         opacity: 0
//     },
//     onscreen: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             type: "spring",
//             bounce: 0.3,
//             duration: 0.5
//         },
//     },
// };

const Hero = () => {

    const session = useSession();
    
    return ( 
        <div
            className="w-full flex items-center justify-center mx-auto relative h-[500px] px-5 md:px-12 lg:px-28"
        >
            <Image
                src="/assets/hero.jpg"
                fill
                alt="hero"
                className="size-full object-cover absolute z-0 filter brightness-50"
            />
            <div className="w-full max-w-xl flex flex-col gap-3 absolute">
                <h1 className="text-xl sm:text-4xl text-center text-white px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h1>
                <p className="text-sm sm:text-base text-center text-white px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center gap-3 w-fit mx-auto">
                    <Link href={session ? "/create-blog" : "/login"}>
                        <Button className="bg-opacity-40 hover:bg-opacity-40 outline outline-1 outline-offset-2 hover:bg-none outline-blue-500">
                            Get started
                        </Button>
                    </Link>
                    <Link href="/blogs">
                        <Button className="bg-opacity-40 hover:bg-opacity-40 outline outline-1 outline-offset-2 hover:bg-none">
                                All Blogs
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;
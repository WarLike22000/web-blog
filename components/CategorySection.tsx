"use client";

import Image from "next/image";
import Button from "./Button";
import { motion, Variants } from "framer-motion";

const variantLeft: Variants = {
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

const variantRight: Variants = {
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

const CategorySection = () => {
    return ( 
    <motion.div
        className="space-y-4"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
    >
        <h2 className="text-gray-600 text-3xl">
            Category
        </h2>
            <section className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-10 gap-2 w-full sm:h-[400px] md:h-[600px]">
                <motion.div variants={variantLeft} className="sm:row-span-10 sm:col-span-1 w-full h-[300px] sm:h-[100%] relative select-none rounded-2xl overflow-hidden border">
                    <Image
                        src="/assets/lifestyle.jpg"
                        alt="lifestyle"
                        fill
                        className="absolute size-full object-cover"
                    />
                    <div className="z-20 absolute p-2 flex flex-col justify-between h-full w-full">
                        <div className="flex flex-col gap-3 bg-white/55 p-1 rounded-xl">
                            <h2 className="text-base text-gray-600">
                                Lifestyle
                            </h2>
                            <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                        <Button className="sm:text-xl">
                            see more
                        </Button>
                    </div>
                </motion.div>
                <motion.div variants={variantRight} className="sm:col-span-2 h-[300px] sm:h-[100%] relative sm:row-span-5 rounded-2xl overflow-hidden select-none border">
                    <Image
                        src="/assets/startup.jpg"
                        alt="startup"
                        fill
                        className="absolute size-full object-cover"
                    />
                    <div className="z-20 absolute p-2 flex flex-col justify-between h-full w-full">
                        <div className="flex flex-col gap-3 bg-white/55 p-1 rounded-xl">
                            <h2 className="text-base text-gray-600">
                                Startup
                            </h2>
                            <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                        <Button className="sm:text-xl">
                            see more
                        </Button>
                    </div>
                </motion.div>
                <motion.div variants={variantRight} className="sm:col-span-2 h-[300px] sm:h-[100%] relative sm:row-span-5 select-none rounded-2xl overflow-hidden border">
                    <Image
                        src="/assets/technology.jpg"
                        alt="technology"
                        fill
                        className="absolute size-full object-cover"
                    />
                    <div className="z-20 absolute p-2 flex flex-col justify-between h-full w-full">
                        <div className="flex flex-col gap-3 bg-white/55 p-1 rounded-xl">
                            <h2 className="text-base text-gray-600">
                                Technology
                            </h2>
                            <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                        <Button className="sm:text-xl">
                            see more
                        </Button>
                    </div>
                </motion.div>
            </section>
        </motion.div>
     );
}
 
export default CategorySection;
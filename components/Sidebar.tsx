"use client";

import { navbarRoutes } from "@/constants";
import { useClickOutside } from "@/hook/useClickOutside";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Button from "./Button";
import { useSession } from "next-auth/react";

const variants: Variants = {
    open: {
        x: 0,
        display: "block",
        position: "fixed",
        top: 0,
        right: 0,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4
        },
    },
    close: {
        x: 400,
        display: "none",
        position: "fixed",
        top: 0,
        right: 0,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4
        },
    },
};

const Sidebar = () => {

    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const session = useSession();
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(sidebarRef, () => setOpen(false));
    
    return ( 
        <section className="block md:hidden">
            <Menu onClick={() => setOpen(true)} className="cursor-pointer text-gray-600 hover:text-gray-500 transition" />
            <motion.section
                variants={variants}
                initial={false}
                animate={open ? "open" : "close"}
                ref={sidebarRef}
            >
                <ul className="px-4 pb-4 pt-14 flex flex-col items-center gap-4 bg-white w-full sm:max-w-md max-w-[250px] h-screen border-l shadow-2xl relative">
                    <X size={26} onClick={() => setOpen(false)} className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-500 transition"/>
                {
                    navbarRoutes.map((route) => (
                        <Link
                            key={route.href}
                            onClick={() => setOpen(false)}
                            href={route.href}
                            className={clsx(
                            "px-3 py-2 rounded-md transition-all hover:text-gray-500 w-[200px] sm:w-[300px]",
                            pathname === route.href && "bg-gray-600 text-white hover:text-white"
                        )}>
                            <li className="w-full flex items-center gap-3">
                                {<route.Icon />} {route.label}
                            </li>
                        </Link>
                    ))
                }
                {!session.data ? (
                    <Link href="/register" className="w-full mt-auto">
                        <Button className="items-center gap-2 flex w-full justify-center py-3 text-lg">
                            Sign up
                            <ArrowRight size={17} />
                        </Button>
                    </Link>
                ) : null}
                </ul>
            </motion.section>
        </section>
     );
}
 
export default Sidebar;
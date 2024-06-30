"use client";

import { useClickOutside } from "@/hook/useClickOutside";
import { MenuProps } from "@/types";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";


const variant: Variants = {
    open: {
        opacity: 1,
        display: "block",
        position: "absolute",
        top: 35,
        right: 30,
        zIndex: 5
    },
    close: {
        opacity: 0,
        position: "absolute",
        top: 30,
    },
};

const Menu = ({
    children,
    open,
    setOpen,
}: MenuProps) => {

    const menuRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(menuRef, () => setOpen(false))
    
    return ( 
        <motion.div
            variants={variant}
            initial={false}
            animate={open ? "open" : "close"}
            ref={menuRef}
        >
            {children}
        </motion.div>
     );
}
 
export default Menu;
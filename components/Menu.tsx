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
        top: 36,
        right: 35,
        zIndex: 5,
        scale: 1
    },
    close: {
        opacity: 0,
        position: "absolute",
        top: 36,
        right: 35,
        scale: 0,
        display: "none"
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
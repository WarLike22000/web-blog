"use client";

import { useClickOutside } from "@/hook/useClickOutside";
import { ModalProps } from "@/types";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const variants: Variants = {
    open: {
        position: "fixed",
        inset: 0,
        display: "block",
        opacity: 1,
        y: 0,
        zIndex: 50,
        backgroundColor: "rgba(120, 120, 120, 0.5)",

    },
    close: {
        position: "fixed",
        inset: 0,
        display: "none",
        opacity: 0,
        y: 60
    },
};

const Modal = ({
    children,
    open,
    setOpen
}: ModalProps) => {

    const modalRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(modalRef, () => setOpen(false));
    
    return ( 
        <motion.div
            variants={variants}
            initial={false}
            animate={open ? "open" : "close"}
            ref={modalRef}
        >
            <div className="flex items-center justify-center h-full">
                {children}
            </div>
        </motion.div>
     );
}
 
export default Modal;
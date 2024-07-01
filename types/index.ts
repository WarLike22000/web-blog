import { Dispatch, SetStateAction } from "react";

export interface ButtonProps {
    children: React.ReactNode;
    className?: string
    onClick?: () => void;
};

export interface BlogCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    author: string;
    authorImage: string;
};

export interface MenuProps {
    children: React.ReactNode;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
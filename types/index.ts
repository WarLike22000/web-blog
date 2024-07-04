import { Dispatch, SetStateAction } from "react";

export interface ButtonProps {
    children: React.ReactNode;
    className?: string
    onClick?: () => void;
    type?: "submit" | "button";
    disabled?: boolean;
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

export interface InputProps {
    className?: string;
    type: "text" | "email" | "password";
    placeholder?: string;
    id?: string;
    name?: string;
};

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string
};
import { Dispatch, SetStateAction } from "react";

export interface IResponse {
    error: boolean;
    success?: boolean;
    user?: IUser;
    message?: string;
};

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
    author: IUser;
    authorId?: number;
    published?: boolean
};

export interface MenuProps {
    children: React.ReactNode;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export interface ModalProps {
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
    required?: boolean;
};

export interface TextareaProps {
    className?: string;
    placeholder?: string;
    id?: string;
    name?: string;
    required?: boolean;
    rows?: number;
};

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    image: string | null;
};
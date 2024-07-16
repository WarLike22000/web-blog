import { LucideIcon } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IResponse {
    error: boolean;
    success?: boolean;
    user?: IUser;
    blog?: BlogCardProps;
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
    author?: IUser;
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
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export interface TextareaProps {
    className?: string;
    placeholder?: string;
    id?: string;
    name?: string;
    required?: boolean;
    rows?: number;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
};

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    image: string | null;
};

export interface EmptyStateProps {
    label: string;
    icon: LucideIcon;
};

export interface Comment {
    id: number;
    description: string;
    userId: number;
    blogId: number;
    user: IUser;
    createdAt: Date;
    updatedAt: Date;
};

export interface CommentsListProps {
    comments: Comment[] | undefined;
};
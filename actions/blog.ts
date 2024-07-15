"use server";

import { BlogCardProps, IResponse } from "@/types";
import axios from "axios";
import * as z from "zod";
import { getCurrentUser } from "./getCurrentUser";
import prisma from "@/libs/db";

const blogSchema = z.object({
    title: z.string().min(1, { message: "title is require" }),
    description: z.string().min(1, { message: "description is require" }),
    category: z.string().min(1, { message: "category is require" }),
    image: z.any(),
});

export const getBlogs = async (): Promise<BlogCardProps[] | undefined> => {
    try {
        const blogs = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/blog`);
        return blogs.data;
    } catch (error) {
        console.log(error);
    }
};

export const createBlog = async (state: any, formData: FormData): Promise<IResponse | undefined> => {
    try {
        const title = formData.get("title") as string;
        const image = formData.get("image") as string;
        const description = formData.get("description") as string;
        const category = formData.get("category") as string;
        

        const user = await getCurrentUser();
        const validateField = blogSchema.safeParse({ title, description, category, image });
        
        if(!validateField.success) {
            return {
                message: validateField.error.flatten().fieldErrors as string,
                error: true,
                success: false
            };
        }
        
        if(!user) {
            return {
                error: true,
                success: false,
                message: "user Unauthenticated",
            };
        };
        
        const blog = await prisma.blog.create({
            data: {
                title,
                description,
                image,
                authorId: user.id,
                category,
            }
        });

        return {
            error: false,
            success: true,
            message: "blog created",
            blog
        };

    } catch (error) {
        console.log(error);
    }
};

export const getBlog = async (id: number) => {
    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id
            },
            include: {
                author: true
            }
        });

        return blog;
    } catch (error) {
        console.log(error);
    }
};

export const getBlogsUser = async () => {
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        const blogs = await prisma.blog.findMany({
            where: {
                authorId: currentUser.id
            },
        });

        return blogs;
    } catch (error) {
        console.log(error);
    }
};

export const updateBlog = async (blogData: object, id: number) => {
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        const blog = await prisma.blog.update({
            data: {
                ...blogData,
            },
            where: {
                id
            },
        });
        
        return blog
    } catch (error) {
        console.log(error);
    }
};

export const getBlogsBySearch = async (search: string) => {
    try {
        const blogs = await prisma.blog.findMany({
            where: {
                title: {
                    search
                }
            },
            include: {
                author: true
            }
        });

        return blogs;
    } catch (error) {
        console.log(error);
    }
};

export const deleteBlog = async (id: number) => {
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        const deleteBlog = await prisma.blog.delete({
            where: {
                id
            }
        });

        return deleteBlog;
    } catch (error) {
        console.log(error);
    }
};
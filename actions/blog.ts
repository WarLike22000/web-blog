"use server";

import { auth } from "@/auth";
import { IResponse } from "@/types";
import axios from "axios";
import * as z from "zod";
import { getCurrentUser } from "./getCurrentUser";

const blogSchema = z.object({
    title: z.string().min(1, { message: "title is require" }),
    description: z.string().min(1, { message: "description is require" }),
    category: z.string().min(1, { message: "category is require" }),
    image: z.any(),
});

export const createBlog = async (state: any, formData: FormData): Promise<IResponse | undefined> => {
    try {
        const title = formData.get("title");
        const description = formData.get("description");
        const category = formData.get("category");
        const image = formData.get("image");
        

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
        formData.append("userId", user.id as any);
        
        const blog = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/blog`, formData);

        return blog.data;

    } catch (error) {
        console.log(error);
    }
};
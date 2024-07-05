"use server";

import { auth } from "@/auth";
import { IResponse } from "@/types";
import axios from "axios";
import * as z from "zod";

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

        const session = await auth();

        const validateField = blogSchema.safeParse({ title, description, category, image });

        if(!validateField.success) {
            return {
                message: validateField.error.flatten().fieldErrors as string,
                error: true,
                success: false
            };
        }

        if(!session) {
            return {
                error: true,
                success: false,
                message: "user Unauthenticated",
            };
        };

        const blog = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/blog`, formData);

        if(blog) {
            return {
                error: false,
                success: true,
                message: "blog Created"
            }
        };

    } catch (error) {
        console.log(error);
    }
};
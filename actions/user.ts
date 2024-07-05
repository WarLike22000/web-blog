"use server";

import { auth, signIn } from "@/auth";
import { IResponse, IUser } from "@/types";
import axios from "axios";
import { redirect } from "next/navigation";
import * as z from "zod";

const registerSchema = z.object({
    name: z.string().min(1, { message: "Field is require" }),
    email: z.string().min(1, { message: "Field is require" }).email({ message: "email must be valid" }),
    password: z.string().min(1, { message: "Field is require" }).max(12, { message: "max character 12" }),
});

const loginSchema = z.object({
    email: z.string().min(1, { message: "Field is require" }).email({ message: "email must be valid" }),
    password: z.string().min(1, { message: "Field is require" }).max(12, { message: "max character 12" }),
});

export const register = async (state: any, formData: FormData): Promise<IResponse | undefined> => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const session = await auth();
    
    const validateFields = registerSchema.safeParse({ name, email, password });

    if(!validateFields.success) {
        return {
            message: validateFields.error.flatten().fieldErrors as string,
            error: true,
            success: false
        };
    }
    try {

        if(session) {
            return {
                message: "User has been already exist",
                error: true,
                success: false
            };
        };
        
        const user = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/register`, formData);
        
        if(user.data.success) {
            await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            return {
                message: "User created",
                user: user.data,
                success: true,
                error: false
            }
        } else {
            return {
                error: true,
                message: "Something went wrong",
                success: false
            }
        }
    } catch (error) {
        console.log(error);
    }
};

export const login = async (state: any, formData: FormData): Promise<IResponse | undefined> => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const session = await auth();
    
    const validateFields = loginSchema.safeParse({ email, password });

    if(!validateFields.success) {
        return {
            message: validateFields.error.flatten().fieldErrors as string,
            error: true,
            success: false
        };
    }
    try {
        
        await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/",
        })

    } catch (error) {
        console.log(error);
    }
    redirect("/");
};

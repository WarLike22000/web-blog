"use server";

import { auth, signIn } from "@/auth";
import { IResponse } from "@/types";
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation";
import * as z from "zod";
import { getCurrentUser } from "./getCurrentUser";
import prisma from "@/libs/db";
import { AuthError } from "next-auth";

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
        
        const existUser = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if(existUser) {
            throw new Error("user has been already exist");
        }
        
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });
        
        if(user.id) {
            await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            return {
                message: "User created",
                user,
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
        }).then((res) => console.log(res))

        redirect("/");
    } catch (error) {
		if (error instanceof Error) {
			const { message, cause } = error as AuthError;
            console.log({cause: cause?.err?.message});
            if(message === "NEXT_REDIRECT") {
                return {
                    success: true,
                    error: false,
                    message: "welcome back"
                };
            } else if(cause?.err?.message === "Invalid Credentials") {
                    return {
                        success: false,
                        error: true,
                        message: cause.err.message
                    }
            } else {
                return {
                    success: false,
                    error: true,
                    message: "Something went wrong"
                };
            }
		}

		throw error;
    }
};

export const updateUser = async (data: object) => {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        const user = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data
        });

        return user;
    } catch (error) {
        console.log(error);
    }
};
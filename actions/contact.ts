"use server";

import prisma from "@/libs/db";
import { getCurrentUser } from "./getCurrentUser";
import * as z from "zod";
import { Contact } from "@prisma/client";

const ContactSchema = z.object({
    name: z.string().min(1),
    phone: z.string().min(1),
    message: z.string().min(1),
}); 

export const createContact = async (state: any, formData: FormData): Promise<Partial<Contact> & { success: boolean, resMessage: string, error: boolean, statusCode?: number } | undefined> => {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            throw new Error("unauthorized");
        };

        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const message = formData.get("message") as string;

        if(!name || !phone || !message) {
            return {
                error: true,
                success: false,
                resMessage: "Field is require",
            };
        };
        
        const validateSchema = ContactSchema.safeParse({
            name,
            phone,
            message
        });

        if(!validateSchema.success) {
            return {
                resMessage: validateSchema.error.flatten().fieldErrors as string,
                success: false,
                error: true,
                statusCode: 400,
            };
        };
        
        const contact = await prisma.contact.create({
            data: {
                name,
                phone,
                message,
                userId: currentUser.id
            },
        });
        
        return {
            success: true,
            error: false,
            resMessage: "We will contact you soon",
            statusCode: 201,
            ...contact
        };
    } catch (error) {
        console.log(error);
        return {
            error: true,
            success: false,
            resMessage: "please first sign in",
            statusCode: 401,
        }
    }
};

export const getMessages = async () => {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        const messages = await prisma.contact.findMany({
            where: {
                userId: currentUser.id,
            },
            include: {
                user: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        return messages;
    } catch (error) {
        console.log(error);
    }
};

export const deleteMessage = async (id: number) => {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        const deletedMessage = await prisma.contact.delete({
            where: {
                id
            }
        });

        return deletedMessage;
    } catch (error) {
        console.log(error);
    }
};
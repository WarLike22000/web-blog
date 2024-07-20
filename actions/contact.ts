"use server";

import prisma from "@/libs/db";
import { getCurrentUser } from "./getCurrentUser";
import * as z from "zod";
import { Contact } from "@prisma/client";

const ContactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email({ message: "email must be valid" }),
    phone: z.string().min(5),
    message: z.string().min(5),
}); 

export const createContact = async (state: any, formData: FormData): Promise<Partial<Contact> & { success: boolean, resMessage: string } | undefined> => {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const message = formData.get("message") as string;

        const validateSchema = ContactSchema.safeParse({
            name,
            email,
            phone,
            message
        });

        if(!validateSchema.success) {
            return {
                resMessage: validateSchema.error.flatten().fieldErrors as string,
                success: false,
            };
        };
        
        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                phone,
                message,
                userId: currentUser.id
            },
        });
        
        return {
            success: true,
            resMessage: "We will contact you soon",
            ...contact
        };
    } catch (error) {
        console.log(error);
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

        return deleteMessage;
    } catch (error) {
        console.log(error);
    }
};
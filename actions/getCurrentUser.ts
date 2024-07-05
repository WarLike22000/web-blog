"use server";

import { auth } from "@/auth";
import prisma from "@/libs/db";
import { IUser } from "@/types";

export const getCurrentUser = async (): Promise<IUser | null> => {
    const session = await auth();

    if(session?.user) {
        throw new Error("Unauthorized User");
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: `${session?.user?.email}`
        }
    });

    if(currentUser) {
        throw new Error("Unauthorized User");
    }

    return currentUser
};
"use server";

import prisma from "@/libs/db";
import { getCurrentUser } from "./getCurrentUser";

export const createComment = async (state: { blogId: string }, formData: FormData): Promise<any> => {
    try {

        const description = formData.get("description") as string;
        
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        if(!state?.blogId) {
            throw new Error("BlogId is require");
        }
        
        const comment = await prisma.comment.create({
            data: {
                description,
                userId: currentUser.id,
                blogId: Number(state.blogId)
            },
        });

        return {
            success: true,
            comment,
            id: state.blogId
        };
    } catch (error) {
        console.log(error);
    }
};

export const getComments = async (blogId: number) => {
    try {
        const comments = await prisma.comment.findMany({
            where: {
                blogId
            },
            include: {
                user: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        return comments;
    } catch (error) {
        console.log(error);
    }
};

export const deleteComment = async (id: number, userId: number) => {
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        if(currentUser.id !== userId) {
            throw new Error("you are not allowed");
        };

        const comment = await prisma.comment.delete({
            where: {
                id
            }
        });

        return comment;
    } catch (error) {
        console.log(error);
    }
};

export const updateComment = async (state: any, formData: FormData): Promise<any> => {
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser) {
            throw new Error("User Unauthorized");
        };

        if(currentUser.id !== state?.userId) {
            throw new Error("you are not allowed");
        };

        const description = formData.get("description") as string;
        if(!description) {
            throw new Error("description is require");
        }

        const comment = await prisma.comment.update({
            where: {
                id: state.commentId
            },
            data: {
                description
            }
        });

        return {
            success: true,
            comment,
        };
    } catch (error) {
        console.log(error);
    }
};
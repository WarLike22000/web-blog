import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params: { blogId } }: { params: { blogId: string } }) {
    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(blogId)
            },
            include: {
                author: true
            }
        });

        return NextResponse.json(blog);
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import prisma from "@/libs/db";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function GET(req: Request) {

};

export async function POST(req: Request) {
    try {
        const currentUser = await getCurrentUser();

        // if(!currentUser) {
        //     return new NextResponse("Unauthorized", { status: 401 });
        // };
        
        const formData = await req.formData(); 
        const timestamp = Date.now();

        const title = formData.get("title")
        const image = formData.get("image") as File;
        const description = formData.get("description")
        const category = formData.get("category");

        if(!title || !image || !description || !category) {
            return new NextResponse("field require", { status: 400 });
        }
    
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/images/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        const imageUrl = `/images/${timestamp}_${image.name}`;
    
        const blog = await prisma.blog.create({
            data: {
                title: `${title}`,
                description: `${description}`,
                image: `${imageUrl}`,
                authorId: Number(currentUser?.id),
                category: `${category}`
            }
        });

        return NextResponse.json({
            success: true,
            error: false,
            data: blog,
            message: "blog created successfully"
        });
    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 })
    }
};
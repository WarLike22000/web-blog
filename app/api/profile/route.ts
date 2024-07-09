import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/db";
import { getExtname } from "@/utils/getExtname";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    try {
        const formData = await req.formData();
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            throw new Error("Unauthorized");
        };

        const image = formData.get("image") as File;
        

        if(!image) {
            return new NextResponse("file image is require", { status: 400 });
        };

        const timestamp = Date.now();

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/profile/${timestamp}.${getExtname(image.name)}`
        await writeFile(path, buffer);
        const imageUrl = `/profile/${timestamp}.${getExtname(image.name)}`

        const user = await prisma.user.update({
            where: {
                id: currentUser?.id
            },
            data: {
                image: imageUrl
            },
        });

        return NextResponse.json(user);;
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", { status: 500 });
    }
};
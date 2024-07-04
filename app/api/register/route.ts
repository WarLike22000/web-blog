import prisma from "@/libs/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        
        if(!name || !email || !password) {
            return new NextResponse("fields is Require");
        };

        const existUser = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if(existUser) {
            return new NextResponse("user has been already exist", { status: 400 });
        }
        
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        return NextResponse.json({
            success: true,
            data: user
        });
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};
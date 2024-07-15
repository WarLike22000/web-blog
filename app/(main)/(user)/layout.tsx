import { PropsWithChildren } from "react";
import Sidebar from "./_Components/Sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }: PropsWithChildren) {
    const session = await auth();
    if(!session) {
        redirect("/login");
    }
    return (
        <div className="flex items-center gap-2 px-5 md:px-12 lg:px-28">
            <Sidebar />
            <main className="flex-grow flex-1 w-full md:pl-[265px] lg:pl-72 py-5">
                {children}
            </main>
        </div>
    )
};
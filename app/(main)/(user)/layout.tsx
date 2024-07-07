import { PropsWithChildren } from "react";
import Sidebar from "./_Components/Sidebar";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="flex items-center gap-2 px-5 md:px-12 lg:px-28">
            <Sidebar />
            <main className="flex-grow flex-1 w-full md:pl-[265px] lg:pl-72 py-5">
                {children}
            </main>
        </div>
    )
};
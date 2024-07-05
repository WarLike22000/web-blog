"use client";

import { sidebar } from "@/constants";
import clsx from "clsx";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {

    const pathname = usePathname();
    
    return ( 
        <section className="hidden md:block w-full max-w-[250px] border p-2 rounded-lg bg-white fixed left-5 md:left-10 lg:left-28 top-24 overflow-y-auto">
            <div className="flex flex-col gap-2 justify-center">
                {
                    sidebar.map(({ label, href, Icon }) => (
                        <Link
                            href={href}
                            key={href}
                            className={clsx(
                                "flex items-center gap-2 text-gray-700 p-2 rounded-lg transition-all hover:underline underline-offset-2",
                                pathname === href && "bg-gray-500 text-white"
                            )}
                        >
                            <Icon /> {label}
                        </Link>
                    ))
                }
                <div className="mt-10 border-t pt-3">
                    <div
                        className="flex items-center gap-2 cursor-pointer text-white bg-red-500 hover:bg-red-300 p-2 rounded-lg transition-all "
                        onClick={() => signOut()}
                    >
                        <LogOut /> Sign out
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Sidebar;
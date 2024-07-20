"use client";

import Link from "next/link";
import Button from "./Button";
import { User } from "lucide-react";
import { useState } from "react";
import Menu from "./Menu";
import { signOut } from "next-auth/react";

const UserButton = () => {

    const [open, setOpen] = useState(false);
    
    return ( 
        <section className="relative flex gap-2">
            <Button onClick={() => setOpen((prev) => !prev)}>
                <User />
            </Button>
            <Menu open={open} setOpen={setOpen}>
                <ul className="flex flex-col text-center bg-gray-600 text-white w-[200px] cursor-pointer transition text-sm rounded-lg overflow-hidden shadow-2xl">
                    <Link href="/profile" onClick={() => setOpen(false)}>
                        <li className="bg-gray-600 hover:bg-gray-400 transition-colors p-2 w-full">
                            Profile
                        </li>
                    </Link>
                    <Link href="/create-blog" onClick={() => setOpen(false)}>
                        <li className="bg-gray-600 hover:bg-gray-400 transition-colors p-2 w-full">
                                Create Blog
                        </li>
                    </Link>
                    <Link href="/my-blogs" onClick={() => setOpen(false)}>
                        <li className="bg-gray-600 hover:bg-gray-400 transition-colors p-2 w-full">
                                My Blogs
                        </li>
                    </Link>
                    <Link href="/messages" onClick={() => setOpen(false)}>
                        <li className="bg-gray-600 hover:bg-gray-400 transition-colors p-2 w-full">
                            Messages
                        </li>
                    </Link>
                    <li
                        className="text-white bg-red-600 transition-colors hover:bg-red-400 p-2"
                        onClick={() => signOut()}
                    >
                        Sign out
                    </li>
                </ul>
            </Menu>
        </section>
     );
}
 
export default UserButton;
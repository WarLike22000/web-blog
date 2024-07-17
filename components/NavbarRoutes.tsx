"use client";

import { navbarRoutes } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarRoutes = () => {

    const pathname = usePathname();
    
    return ( 
        <ul className="hidden md:flex items-center gap-2">
            {
                navbarRoutes.map((route) => (
                    <Link href={route.href} key={route.href} className={clsx(
                        "px-3 py-2 rounded-md transition-all hover:text-gray-500",
                        pathname === route.href && "bg-gray-600 text-white hover:text-white"
                    )}>
                        <li>
                            {route.label}
                        </li>
                    </Link>
                ))
            }
        </ul>
     );
}
 
export default NavbarRoutes;
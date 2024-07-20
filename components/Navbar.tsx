import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { auth } from "@/auth";
import UserButton from "./UserButton";
import NavbarRoutes from "./NavbarRoutes";
import Sidebar from "./Sidebar";

const Navbar = async () => {
    
    const session = await auth();

    return ( 
        <div className="py-5 px-5 md:px-12 lg:px-28 relative z-20 border-b">
            <div className="flex justify-between items-center gap-3">
                <Link href="/">
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </Link>
                <NavbarRoutes />
                <div className="flex items-center gap-4">
                    {
                        session ? (
                            <UserButton />
                        ) : (
                            <Link href="/register">
                                <Button className="items-center gap-2 hidden sm:flex">
                                    Sign up
                                    <ArrowRight size={17} />
                                </Button>
                            </Link>
                        )
                    }
                    <Sidebar />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { auth } from "@/auth";
import UserButton from "./UserButton";
import NavbarRoutes from "./NavbarRoutes";

const Navbar = async () => {
    
    const session = await auth();

    return ( 
        <div className="py-5 px-5 md:px-12 lg:px-28 relative z-20">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </Link>
                <NavbarRoutes />
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
            </div>
        </div>
     );
}
 
export default Navbar;
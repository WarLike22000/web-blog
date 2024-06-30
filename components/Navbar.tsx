import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    return ( 
        <div className="py-5">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </Link>
                <Button className="flex items-center gap-2">
                    Get started
                    <ArrowRight size={17} />
                </Button>
            </div>
        </div>
     );
}
 
export default Navbar;
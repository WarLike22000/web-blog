import { Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="text-center flex flex-col md:flex-row md:justify-between items-center justify-center gap-4 w-full bg-slate-800 text-white px-5 md:px-12 lg:px-28 py-4">
            <h1 className="text-4xl">
                BlogApp
            </h1>
            <div className="flex items-center gap-4 flex-wrap">
                <Link className="text-white hover:text-slate-300 transition" href="#">Home</Link>
                <Link className="text-white hover:text-slate-300 transition" href="#">About us</Link>
                <Link className="text-white hover:text-slate-300 transition" href="#">Contact us</Link>
            </div>
            <div className="flex items-center gap-3 text-slate-800">
                <div className="p-2 rounded-full bg-slate-50 cursor-pointer hover:bg-slate-300 transition">
                    <Facebook />
                </div>
                <div className="p-2 rounded-full bg-slate-50 cursor-pointer hover:bg-slate-300 transition">
                    <Twitter />
                </div>
                <div className="p-2 rounded-full bg-slate-50 cursor-pointer hover:bg-slate-300 transition">
                    <Github />
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
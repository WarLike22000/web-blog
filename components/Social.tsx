import { Facebook, Github, Twitter } from "lucide-react";

const Social = () => {
    return ( 
        <div className="flex items-center gap-3 text-slate-800">
            <div className="p-2 shadow-md rounded-full bg-slate-50 cursor-pointer hover:bg-slate-300 transition">
                <Facebook />
            </div>
            <div className="p-2 shadow-md rounded-full bg-slate-50 cursor-pointer hover:bg-slate-300 transition">
                <Twitter />
            </div>
            <div className="p-2 shadow-md rounded-full bg-slate-50 cursor-pointer hover:bg-slate-300 transition">
                <Github />
            </div>
        </div>
     );
}
 
export default Social;
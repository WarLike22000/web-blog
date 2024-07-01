import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

const LayoutRoot = ({ children }: PropsWithChildren) => {
    return ( 
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="flex-grow flex-1">
                {children}
            </main>
            <Footer />
        </div>
     );
}
 
export default LayoutRoot;
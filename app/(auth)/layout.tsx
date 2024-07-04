import { PropsWithChildren } from "react";

const LayoutRoot = ({ children }: PropsWithChildren) => {
    return ( 
        <div className="flex flex-col h-screen">
            <main className="flex-grow flex-1 flex items-center justify-center min-h-full px-5 md:px-12 lg:px-28">
                {children}
            </main>
        </div>
     );
}
 
export default LayoutRoot;
import { PropsWithChildren } from "react";

const LayoutRoot = ({ children }: PropsWithChildren) => {
    return ( 
        <div className="flex flex-col h-screen">
            <main className="flex-grow flex-1">
                {children}
            </main>
        </div>
     );
}
 
export default LayoutRoot;
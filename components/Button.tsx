import { ButtonProps } from "@/types";
import clsx from "clsx";

const Button = ({
    children,
    onClick,
    className
}: ButtonProps) => {
    return ( 
        <button
            onClick={onClick}
            className={clsx(
                "px-2 sm:px-3 py-1 rounded-2xl text-white bg-gray-700 hover:bg-gray-400 transition text-[14px] sm:text-base",
                className
            )}
        >
            {children}
        </button>
     );
}
 
export default Button;
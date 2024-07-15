import { ButtonProps } from "@/types";
import clsx from "clsx";

const Button = ({
    children,
    onClick,
    className,
    type,
    disabled
}: ButtonProps) => {
    return ( 
        <button
            disabled={disabled}
            type={type || "button"}
            onClick={onClick}
            className={clsx(
                "px-2 sm:px-3 py-1 rounded-2xl text-white bg-gray-700 hover:bg-gray-400 transition text-[14px] sm:text-base disabled:opacity-75 disabled:cursor-not-allowed",
                className
            )}
        >
            {children}
        </button>
     );
}
 
export default Button;
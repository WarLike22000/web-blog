import { InputProps } from "@/types";
import clsx from "clsx";

const Input = ({
    type,
    className,
    placeholder,
    id,
    name,
    required,
    onChange,
    value
}: InputProps) => {
    return ( 
        <input
            value={value}
            required={required}
            onChange={onChange}
            name={name}
            type={type}
            className={clsx(`
                    py-1 px-3 rounded-lg w-full outline-none focus-visible:outline-gray-500 focus-visible:outline-offset-2 transition-all outline-gray-300
                `, className)}
            placeholder={placeholder}
            id={id}
        />
     );
}
 
export default Input;
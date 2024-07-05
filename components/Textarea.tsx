import { TextareaProps } from "@/types";
import clsx from "clsx";

const Textarea = ({
    className,
    placeholder,
    id,
    name,
    required,
    rows
}: TextareaProps) => {
    return ( 
        <textarea
            rows={rows}
            required={required}
            name={name}
            className={clsx(`
                    py-1 px-3 rounded-lg w-full outline-none focus-visible:outline-gray-500 focus-visible:outline-offset-2 transition-all outline-gray-300
                `, className)}
            placeholder={placeholder}
            id={id}
        />
     );
}
 
export default Textarea;
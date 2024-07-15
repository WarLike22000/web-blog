import { EmptyStateProps } from "@/types";

const EmptyState = ({
    label,
    icon: Icon
} : EmptyStateProps) => {
    return ( 
        <section className="flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center text-gray-600">
                <Icon size={50} />
                <h6 className="text-xl sm:text-2xl text-center">
                    {label}
                </h6>
            </div>
        </section>
     );
}
 
export default EmptyState;
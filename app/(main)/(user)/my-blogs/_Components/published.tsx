"use client";

import { updateBlog } from "@/actions/blog";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Published = ({ id, published } : { id: number, published: boolean }) => {

    const [checked, setChecked] = useState(published);
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    useEffect(() => {
        const publishHandler = async () => {
            setLoading(true);
            // setChecked((prev) => {
            //     if(prev) {
            //         return false;
            //     } else {
            //         return true;
            //     }
            // })
            try {
                await updateBlog({ published: checked }, id);
                toast.success(checked ? "blog Published" : "blog unPublished");
                router.refresh();
            } catch (error) {
                toast.error("Something went wrong");
            } finally {
                setLoading(false);
                setClicked(false);
            }
        };
        if(clicked) {
            publishHandler();
        }
    }, [clicked])
    
    return ( 
        <>
            {
                loading ? (
                    <div className="mx-auto w-fit">
                        <Loader2 size={15} className="animate-spin"/>
                    </div>
                ) : (
                    <label onClick={() => {
                        setChecked((prev) => !prev)
                        setClicked(true)
                    }} className={clsx("p-2 rounded-xl cursor-pointer hover:opacity-75 transition-opacity",
                        published && "bg-green-400 text-green-800",
                        !published && "bg-gray-400 text-gray-800",
                        loading && "opacity-85",
                    )} htmlFor={`${id}`}>
                        {published ? "unPublish" : "Publish"}
                    </label>
                )
            }
            {/* <input type="checkbox" hidden id={`${id}`} checked={checked} onChange={(e) => setChecked(e.target.checked)} /> */}
        </>
     );
}
 
export default Published;
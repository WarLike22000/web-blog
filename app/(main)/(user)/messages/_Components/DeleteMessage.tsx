"use client";

import { deleteMessage } from "@/actions/contact";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

const DeleteMessage = ({ id } : { id: number }) => {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const deleteHandler = async () => {
        try {
            startTransition(async () => {
                await deleteMessage(id)
                    .then(() => {
                        toast.success("message deleted");
                        router.refresh();
                    })
            });
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    
    return ( 
        <Button disabled={isPending} onClick={deleteHandler} className="text-white bg-rose-600 hover:bg-rose-400">
            Delete
        </Button>
     );
}
 
export default DeleteMessage;
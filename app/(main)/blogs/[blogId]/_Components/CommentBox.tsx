"use client";

import { deleteComment, updateComment } from "@/actions/comment";
import { IUser } from "@/types";
import { displayedAt } from "@/utils/displayTime";
import { Edit, Ellipsis, Trash, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Menu from "@/components/Menu";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import { useFormState, useFormStatus } from "react-dom";

const CommentBox = ({
    description,
    user,
    createdAt,
    commentId,
} : {
    description: string;
    user: IUser;
    createdAt: Date;
    commentId: number;
}) => {

    const router = useRouter();
    const session = useSession();
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [state, action] = useFormState(updateComment, { commentId, userId: user.id });
    const [desc, setDesc] = useState(description ?? "");
    
    const deleteHandler = async () => {
        try {
            await deleteComment(commentId, user.id)
                .then(() => {
                    router.refresh();
                    toast.success("your comment removed");
                })
            setOpen(false);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        if(state?.success) {
            toast.success("comment updated");
            setOpenModal(false);
            setDesc(state?.comment?.description);
            router.refresh();
        };
    }, [state]);
    
    return ( 
        <div className="w-full p-2 flex gap-3 border rounded-xl bg-gray-200">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                    src={user.image! ?? "/assets/placeholder.jpg"}
                    alt={user.name}
                    fill
                    className="absolute size-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <div className="flex items-center justify-between w-full">
                    <section className="flex items-center gap-3">
                        <p className="text-sm sm:text-base">{user.name}</p> {"."}
                        <p className="text-[12px] sm:text-base">{displayedAt(createdAt)}</p>
                    </section>
                    {
                        Number(session.data?.user?.id) == user.id ? (
                            <div className="relative">
                                <Ellipsis
                                    onClick={() => setOpen(true)}
                                    className="cursor-pointer text-gray-700 hover:text-gray-500 transition size-5 sm:size-7"
                                />

                                <Menu open={open} setOpen={setOpen}>
                                    <div className="flex flex-col bg-gray-600 rounded-lg overflow-hidden shadow-2xl">
                                        <Button onClick={() => setOpenModal(true)} className="text-white bg-gray-700 hover:bg-gray-600 rounded-none flex items-center gap-2">
                                            <Edit size={15} /> Edit
                                        </Button>
                                        <Button onClick={deleteHandler} className="text-white bg-red-600 hover:bg-red-500 rounded-none flex items-center gap-2">
                                            <Trash size={15} /> Delete
                                        </Button>
                                    </div>
                                </Menu>

                                <Modal open={openModal} setOpen={setOpenModal}>
                                <form action={action} className="py-5 px-8 w-full relative max-w-md bg-white rounded-lg flex flex-col gap-4">
                                    <X className="absolute top-1 right-1 cursor-pointer text-gray-700 hover:text-gray-600" onClick={() => setOpenModal(false)} size={25} />
                                    <p className="text-left text-lg">
                                        your comment
                                    </p>
                                    <Textarea
                                        name="description"
                                        rows={6}
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                    <Submit />
                                </form>
                                </Modal>
                            </div>
                        ) : null
                    }
                </div>
                <p className="text-left text-wrap text-sm sm:text-base">
                    {description}
                </p>
            </div>
        </div>
     );
}
 
function Submit() {

    const { pending } = useFormStatus();
    
    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Saving..." : "Save"}
        </Button>
    )
};

export default CommentBox;
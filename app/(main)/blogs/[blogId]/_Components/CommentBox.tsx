"use client";

import { deleteComment } from "@/actions/comment";
import Button from "@/components/Button";
import { IUser } from "@/types";
import { displayedAt } from "@/utils/displayTime";
import { Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
    
    const deleteHandler = async () => {
        try {
            await deleteComment(commentId, user.id)
                .then(() => {
                    router.refresh();
                    toast.success("your comment removed");
                })
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    
    return ( 
        <div className="w-full p-2 flex gap-3 border rounded-xl bg-gray-200">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                    src={user.image! ?? "/assets/placeholder.jpg"}
                    alt={user.name}
                    fill
                />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <div className="flex items-center justify-between w-full">
                    <section className="flex items-center gap-3">
                        <p>{user.name}</p> {"."}
                        <p>{displayedAt(createdAt)}</p>
                    </section>
                    {
                        Number(session.data?.user?.id) == user.id ? (
                            <Button onClick={deleteHandler} className="text-white bg-red-600 hover:bg-red-500">
                                <Trash size={15} />
                            </Button>
                        ) : null
                    }
                </div>
                <p className="text-left text-wrap">
                    {description}
                </p>
            </div>
        </div>
     );
}
 
export default CommentBox;
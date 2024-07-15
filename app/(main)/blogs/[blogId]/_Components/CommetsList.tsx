"use client";

import { createComment } from "@/actions/comment";
import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import { CommentsListProps } from "@/types";
import { SearchX, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import CommentBox from "./CommentBox";
import { useSession } from "next-auth/react";

const CommentsList = ({
    comments
} : CommentsListProps) => {

    const [open, setOpen] = useState(false);
    const { blogId } = useParams();
    const router = useRouter();
    const session = useSession();
    
    const [state, action] = useFormState(createComment, { blogId });

    const handleOpen = () => {
        if(!session.data) {
            toast("please first sign in");
            return router.push("/login");
        };
        setOpen(true);
    };
    
    useEffect(() => {
        if(state.success) {
            toast.success("Comment created");
            setOpen(false);
            router.refresh();
        }
    }, [state]);
    
    return ( 
        <div>
            <section className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-left">
                    Comments
                </h5>
                <Button onClick={handleOpen}>
                    New Comment
                </Button>
                <Modal open={open} setOpen={setOpen}>
                    <form action={action} className="py-5 px-8 w-full relative max-w-md bg-white rounded-lg flex flex-col gap-4">
                        <X className="absolute top-1 right-1 cursor-pointer text-gray-700 hover:text-gray-600" onClick={() => setOpen(false)} size={25} />
                        <p className="text-left text-lg">
                            your comment
                        </p>
                        <Textarea name="description" rows={6} />
                        <Submit />
                    </form>
                </Modal>
            </section>

            <section>
                {
                    comments?.length === 0 ? (
                        <div className="w-full h-full pt-8">
                            <EmptyState icon={SearchX} label="No Comments Found" />
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3 pt-8">
                            {
                                comments?.map(({ description, user, createdAt, id }) => (
                                    <Suspense fallback={<h1>Loading...</h1>}>
                                        <CommentBox description={description} user={user} commentId={id} createdAt={createdAt} />
                                    </Suspense>
                                ))
                            }
                        </div>
                    )
                }
            </section>
        </div>
     );
}
 
function Submit() {

    const { pending } = useFormStatus();
    
    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Submitting" : "Submit"}
        </Button>
    )
};

export default CommentsList;
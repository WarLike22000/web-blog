"use client";

import { createBlog } from "@/actions/blog";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { UploadDropzone } from "@/utils/uploadthing";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Create = () => {

    const [response, action] = useFormState(createBlog, null);
    const [image, setImage] = useState("");
    const router = useRouter();

    useEffect(() => {
        if(response?.success && response.message && response.blog?.id) {
            toast.success(
                response.message
            );
            router.push("/my-blogs");
        } else if(response?.error) {
            toast.error(response?.message!);
        }
    }, [response]);

    return ( 
        <form action={action} className="space-y-8 w-full">
            <div className="flex flex-col gap-2">
                <h6 className="text-xl">
                    Upload thumbnail
                </h6>
                <label className="cursor-pointer" htmlFor="image">
                    {
                        image ? (
                            <Image
                                src={image}
                                alt="upload image"
                                width={500}
                                height={500}
                                className="object-cover rounded-lg w-full"
                            />
                        ) : (
                            <UploadDropzone
                                endpoint="imageUploader"
                                onClientUploadComplete={async (res) => {
                                    setImage(res[0].url);
                                    toast.success("upload successfully");
                                }}
                                onUploadError={async (error: Error) => {
                                    toast.error(error.message);
                                }}
                            />
                        )
                    }
                </label>
                <input name="image" value={image} hidden id="image" required />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="title">
                    Blog Title
                </label>
                <Input name="title" id="title" type="text" required placeholder="title" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="description">
                    Blog description
                </label>
                <Textarea name="description" id="description" required placeholder="description" rows={6}/>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="category">
                    Blog Category
                </label>
                <select required name="category" className="py-1 px-3 rounded-lg w-full outline-none focus-visible:outline-gray-500 focus-visible:outline-offset-2 transition-all outline-gray-300">
                    <option value="startup">Startup</option>
                    <option value="lifestyle">LifeStyle</option>
                    <option value="technology">Technology</option>
                </select>
            </div>

            <Submit />
        </form>
     );
}
 
function Submit() {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} type="submit" className="disabled:cursor-not-allowed disabled:bg-opacity-75 transition w-full">
            {pending ? <Loader2 size={20} className="animate-spin mx-auto"/> : "Create"}
        </Button>
    )
}

export default Create;
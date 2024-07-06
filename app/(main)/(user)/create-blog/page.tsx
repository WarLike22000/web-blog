"use client";

import { createBlog } from "@/actions/blog";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { ImageUp, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const Create = () => {

    const [response, action] = useFormState(createBlog, null);
    const [image, setImage] = useState<File>();

    useEffect(() => {
        if(response?.success && response.message) {
            toast.success(response.message!);
        } else if(response?.error) {
            toast.error(response?.message!);
        }
    }, [response]);
    
    return ( 
        <form action={action} className="space-y-8">
            <div className="flex flex-col gap-2">
                <h6 className="text-xl">
                    Upload thumbnail
                </h6>
                <label className="cursor-pointer" htmlFor="image">
                    {
                        image ? (
                            <Image
                                src={image ? URL.createObjectURL(image) : "/upload-image.jpg"}
                                alt="upload image"
                                width={500}
                                height={500}
                                className="object-cover rounded-lg"
                            />
                        ) : (
                            <div className="border-dashed p-6 border flex items-center justify-center rounded-lg text-gray-400 max-w-[600px] h-[200px]">
                                <ImageUp size={50}/>
                            </div>
                        )
                    }
                </label>
                <input name="image" onChange={(e) => setImage(e.target.files![0])} hidden id="image" type="file" required />
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
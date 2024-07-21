"use client";

import { updateBlog } from "@/actions/blog";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import { UploadDropzone } from "@/utils/uploadthing";
import { Blog } from "@prisma/client";
import { Edit, Loader2, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, useTransition } from "react";
import toast from "react-hot-toast";

const EditModal = ({ blog } : { blog: Blog }) => {

    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [editImage, setEditImage] = useState(false);
    const [image, setImage] = useState(blog.image);
    const [fileKey, setFileKey] = useState(blog.fileKey);
    const [form, setForm] = useState({
        title: blog.title ?? "",
        description: blog.description ?? "",
        category: blog.category ?? "",
    });
    const router = useRouter();
    
    const changeHandler = (e: ChangeEvent<any>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };
    
    const updateHandler = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            startTransition(async () => {
                await updateBlog({...form, image, fileKey}, blog.id)
                    .then(() => {
                        setOpen(false);
                        router.refresh();
                        toast.success("update blog");
                    })
            });
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    
    return ( 
        <>
            <Edit onClick={() => setOpen(true)} size={22} className="text-blue-500 hover:text-blue-400 transition-all cursor-pointer" />

            <Modal open={open} setOpen={setOpen}>
                <form onSubmit={updateHandler} className="space-y-8 w-full max-w-xl bg-white p-4 rounded-md overflow-y-auto relative max-h-[97vh]">
                    <X onClick={() => setOpen(false)} className="absolute top-1 right-1 cursor-pointer text-gray-600 hover:text-gray-500 transition" />
                    <section className="flex sm:flex-row flex-col items-center gap-8 w-full ">
                        <div className="flex flex-col gap-2 w-full max-w-[250px]">
                            <div className="flex items-center justify-between gap-2">
                                <h6 className="text-lg text-left">
                                    Upload thumbnail
                                </h6>
                                <Button onClick={() => setEditImage((prev) => !prev)} className="sm:text-sm text-sm">
                                    {editImage ? "cancel" : "edit"}
                                </Button>
                            </div>
                            <div className="cursor-pointer w-full max-h-[200px] bg-white">
                                {
                                    !editImage ? (
                                        <div className="relative w-full min-h-[200px]">
                                            <Image
                                                src={image}
                                                alt="upload image"
                                                fill
                                                className="object-cover rounded-lg absolute size-full"
                                            />
                                        </div>
                                    ) : (
                                        <UploadDropzone
                                            endpoint="imageUploader"
                                            onClientUploadComplete={async (res) => {
                                                setImage(res[0].url);
                                                setFileKey(res[0].key);
                                                toast.success("update poster");
                                            }}
                                            onUploadError={async (error: Error) => {
                                                toast.error(error.message);
                                            }}
                                            className="max-h-[200px]"
                                        />
                                    )
                                }
                                
                            </div>
                        </div>
                        <section className="flex flex-col gap-8 w-full sm:min-w-[220px]">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg text-left" htmlFor="title">
                                    Blog Title
                                </label>
                                <Input onChange={changeHandler} value={form.title} name="title" id="title" type="text" required placeholder="title" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg text-left" htmlFor="category">
                                    Blog Category
                                </label>
                                <select value={form.category} onChange={changeHandler} required name="category" className="py-1 px-3 rounded-lg w-full outline-none focus-visible:outline-gray-500 focus-visible:outline-offset-2 transition-all outline-gray-300">
                                    <option value="startup">Startup</option>
                                    <option value="lifestyle">LifeStyle</option>
                                    <option value="technology">Technology</option>
                                </select>
                            </div>
                        </section>
                        
                    </section>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg text-left" htmlFor="description">
                            Blog description
                        </label>
                        <Textarea onChange={changeHandler} value={form.description} name="description" id="description" required placeholder="description" rows={6}/>
                    </div>

                    <Button disabled={isPending} type="submit" className="disabled:cursor-not-allowed disabled:bg-opacity-75 transition w-full">
                        {isPending ? <Loader2 size={20} className="animate-spin mx-auto"/> : "Create"}
                    </Button>
                </form>
            </Modal>
        </>
     );
}
 
export default EditModal;
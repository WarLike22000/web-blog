"use client";

import { updateUser } from "@/actions/user";
import Modal from "@/components/Modal";
import { UploadButton } from "@/utils/uploadthing";
import { Camera, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const UploadProfile = () => {

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const [image, setImage] = useState<File | null>(null);
    const router = useRouter();

    const uploadHandler = async (image: string) => {
        setIsLoading(true);
        try {
            // const formData = new FormData();
            // formData.append("image", image!)
            // await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/profile`, formData);
            await updateUser({ image });
            toast.success("upload successfully");
            setOpen(false)
            router.refresh();
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };
    
    return ( 
        <div>
            <div onClick={() => setOpen(true)} className="p-2 sm:p-3 text-white bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400 transition-all absolute z-20 bottom-0 left-0 sm:bottom-1 sm:left-1">
                <Camera className="w-6 h-6" />
            </div>
            {/* <input
                id="camera"
                type="file"
                disabled={isLoading}
                hidden
                onChange={(e) => setImage(e.target.files![0])}
            /> */}

            <Modal open={open} setOpen={setOpen}>
                {/* <section className="w-full max-w-md bg-white rounded-lg border flex items-center justify-center relative">
                    <X size={25} onClick={() => {
                        setOpen(false);
                        setImage(null);
                    }} className="absolute top-1 right-1 text-gray-600 cursor-pointer" />

                    <div className="flex flex-col gap-3 p-6 w-full">
                        <p className="text-slate-600 text-xl">
                            Profile image
                        </p>

                        <label className={clsx(
                            "cursor-pointer w-full transition-all",
                            isLoading && "cursor-not-allowed opacity-70"
                        )} htmlFor="camera">
                            {
                                image ? (
                                    <Image
                                        src={URL.createObjectURL(image)}
                                        alt="upload image"
                                        width={500}
                                        height={500}
                                        className="object-cover rounded-lg w-full"
                                    />
                                ) : (
                                    <div className="border-dashed p-6 border-2 flex items-center justify-center rounded-lg text-gray-400 w-full h-full">
                                        <ImageUp size={50}/>
                                    </div>
                                )
                            }
                        </label>

                        <Button onClick={uploadHandler} disabled={isLoading}>
                            Upload
                        </Button>
                    </div>
                </section> */}

                <section className="w-full max-w-md bg-white rounded-lg border flex items-center justify-center relative">
                    <X size={25} onClick={() => {
                        setOpen(false);
                    }} className="absolute top-1 right-1 text-gray-600 cursor-pointer" />

                    <div className="flex flex-col gap-3 p-6 w-full">
                        <p className="text-slate-600 text-xl">
                            Profile image
                        </p>

                        <UploadButton 
                            endpoint="imageUploader"
                            onClientUploadComplete={async (res) => {
                                await uploadHandler(res[0].url);
                                toast.success("upload successfully");
                            }}
                            onUploadError={(error: Error) => {
                                toast.error(error.message);
                            }}
                        />
                    </div>
                </section>
            </Modal>
        </div>
     );
}
 
export default UploadProfile;
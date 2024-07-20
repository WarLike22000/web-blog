"use client";

import { createContact } from "@/actions/contact";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const ContactUs = () => {

    const [response, action] = useFormState(createContact, null);

    useEffect(() => {
        if(!response?.success && response?.error) {
            toast.error(response?.resMessage!, {duration: 4000});
        };

        if(response?.success && !response.error) {
            toast.success(response.resMessage!, { duration: 8000 });
        };
    }, [response]);
    
    return ( 
        <div className="relative w-full h-full">
            <Image
                src="/assets/contact-us.jpg"
                alt="contact us"
                fill
                className="object-cover size-full absolute filter brightness-[15%] z-0"
            />

            <div className="flex items-center justify-center w-full h-full z-10 p-5">
                <div className="size-full rounded-lg bg-opacity-65 bg-gray-800 max-w-5xl backdrop-blur-sm p-3 h-fit relative">
                    <Link href="/">
                        <div className="hover:bg-white hover:bg-opacity-10 p-2 rounded-full transition absolute top-2 left-2 text-white">
                            <Home />
                        </div>
                    </Link>
                    <section className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-5">

                        <div className="flex flex-col items-center text-center text-white max-w-md gap-5 sm:gap-10">
                            <h3 className="text-3xl text-white font-bold">
                                Contact
                            </h3>
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <div>
                                <h6 className="text-xl">
                                    Address
                                </h6>
                                <p className="text-white text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                            <div>
                                <h6 className="text-xl">
                                    Phone
                                </h6>
                                <p className="text-white text-sm">
                                    +98 992 619 7211
                                </p>
                            </div>
                            <div>
                                <h6 className="text-xl">
                                    Email
                                </h6>
                                <p className="text-white text-sm">
                                    kamalialireza788@gmail.com
                                </p>
                            </div>
                        </div>

                        <form action={action} className="rounded-md w-full p-4 space-y-4 max-w-md">
                            <div className="space-y-2">
                                <label className="text-white text-lg" htmlFor="name">
                                    Name
                                </label>
                                <Input className="bg-white bg-opacity-5 outline-gray-700 text-white" name="name" id="name" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white text-lg" htmlFor="email">
                                    Email
                                </label>
                                <Input className="bg-white bg-opacity-5 outline-gray-700 text-white" name="email" id="email" type="email" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white text-lg" htmlFor="phone">
                                    Phone number
                                </label>
                                <Input className="bg-white bg-opacity-5 outline-gray-700 text-white" name="phone" id="phone" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white text-lg" htmlFor="message">
                                    Message
                                </label>
                                <Textarea className="bg-white bg-opacity-5 outline-gray-700 text-white" name="message" id="message" rows={2} />
                            </div>
                            <Submit />
                        </form>
                        
                    </section>
                    
                </div>
            </div>
        </div>
     );
}
 
function Submit() {

    const { pending } = useFormStatus();
    
    return (
        <Button disabled={pending} type="submit" className="bg-white bg-opacity-10 outline outline-1 outline-blue-500 outline-offset-2 w-full hover:bg-white hover:bg-opacity-20">
            Send Message
        </Button>
    );
};

export default ContactUs;
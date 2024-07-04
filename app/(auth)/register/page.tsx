"use client";

import { useFormState, useFormStatus } from "react-dom";

import { register } from "@/actions/user";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";

const Register = () => {
    const [response, formAction] = useFormState(register, null);
    const router = useRouter();
    const session = useSession();
    
    if(response?.success && !response.error) {
        toast.success(response?.message!);
        router.push("/");
    } else if(response?.error && !response.success) {
        toast.error(response?.message!);
    };

    if(session.data) {
        router.push("/");
    }
    
    
    return ( 
        <form action={formAction} className="w-full max-w-sm shadow-md border rounded-xl p-4 flex flex-col gap-5">
            <section>
                <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width={200}
                    height={200}
                />
            </section>
            <section className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-700">Name</label>
                <Input type="text" name="name" placeholder="enter your name" id="name" />
            </section>
            <section className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-700">Email</label>
                <Input type="email" name="email" placeholder="enter your name" id="email" />
            </section>
            <section className="flex flex-col gap-2">
                <label htmlFor="password" className="text-gray-700">Password</label>
                <Input type="password" name="password" placeholder="enter your name" id="password" />
            </section>

            <Submit />
        </form>
     );
};

 
function Submit() {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} type="submit" className="disabled:cursor-not-allowed disabled:bg-opacity-75 transition">
            {pending ? <Loader2 size={20} className="animate-spin mx-auto"/> : "Sign up"}
        </Button>
    )
}

export default Register;
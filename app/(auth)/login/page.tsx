"use client";

import { useFormState, useFormStatus } from "react-dom";

import { login } from "@/actions/user";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

const Login = () => {
    const [response, formAction] = useFormState(login, null);
    console.log(response)
    const router = useRouter();
    const session = useSession();

    if(response?.success && !response.error) {
        toast.success(response?.message!);
        router.push("/");
    } else if(response?.error && !response.success) {
        toast.error(response?.message!);
    };

    useEffect(() => {
        router.refresh();
    }, [response?.success]);

    useEffect(() => {
        if(session.data) {
            router.push("/");
        }

        return () => {
            router.refresh();
        }
    }, [session]);
    
    
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
            {pending ? <Loader2 size={20} className="animate-spin mx-auto"/> : "Sign in"}
        </Button>
    )
}

export default Login;
"use client";

import Button from "@/components/Button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
    return ( 
        <Button onClick={() => signOut()} className="bg-red-600 hover:bg-red-500">
            Sign Out
        </Button>
     );
}
 
export default SignOutButton;
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Input from "./Input";
import { useEffect, useState } from "react";

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const title = searchParams.get("title");
    
    useEffect(() => {
        if(!title && !search) {
            router.push(pathname);
        } else {
            router.push(pathname + "?title=" + search);
        };
    }, [search]);

    
    return ( 
        <section>
            <Input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search here..."
            />
        </section>
     );
}
 
export default SearchInput;
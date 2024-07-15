"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Input from "./Input";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "./Button";

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const title = searchParams.get("title");
    const category = searchParams.get("category");
    
    const searchHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(pathname + "?title=" + search);
    }
    
    return ( 
        <form onSubmit={searchHandler} className="flex items-center justify-between gap-5">
            <Input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search here..."
            />
            <Button type="submit">
                Search
            </Button>
        </form>
     );
}
 
export default SearchInput;
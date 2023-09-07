'use client';

import { useState,useEffect } from "react";
import { useBook } from "@/hooks/useBooks";


export const SearchInput = ()=>{
    const {books,setBooks}  = useBook();

    const [search,setSearch] = useState('');

    const handleInputSearch = async()=>{
        const res = await fetch(`http://apibooks.mauridesenvolvedor.com/api/books?search=${search}`);
        const json = await res.json();
        setBooks(json);
    }
    useEffect(()=>{
        if(search){
            handleInputSearch();
        }
    },[search])
    
    

    return(
        <div>
            <input 
            className="p-2 outline-none text-black rounded-md"
             type="text"
             placeholder="Procurar" 
             value={search}
             onChange={(e)=>setSearch(e.target.value)}/>
        </div>
    )
}
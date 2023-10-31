'use client'

import { Book } from "@/types/book";
import Image from "next/image";

type BookItemType = {
    id:number;
    title:string;
    description:string;
    img:string;
    price:number;
    author:string;
    onClick:()=>void
    
}

export const BookItem = ({title, description, img,price,author,onClick}:BookItemType)=>{
    return(
        <div onClick={onClick}  className="w-[400px] dark:bg-slate-400 dark:text-gray-200  cursor-pointer hover:bg-slate-100 transition-all border border-gray-300  rounded-md bg-gray-200 mr-2 p-4 m-5 flex flex-col items-center">
            <img   src={ img} className="h-[300px]  w-[250px]  mb-3 p-5" />
            <h2 className="text-3xl mb-3 text-center">{title}</h2>
            <h3 className="text-2xl mb-3 text-center">{author}</h3>
            <span className="text-xl"> R$ {price.toFixed(2)}</span>
            <p className="text-start p-2">{description}</p>
        </div>
    )
}
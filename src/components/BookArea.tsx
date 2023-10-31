'use client';

import { BookItem } from "./BookItem";
import { useState,useEffect } from "react";
import axios from "axios";
import { useBook } from "@/hooks/useBooks";
import { Book } from "@/types/book";
import { Modal } from "./Modal";


export const BookArea = ()=>{
    const [loading,setLoading] = useState(false);


    const [showModal,setShowModal] = useState(false);
    const [bookModal,setBookModal] = useState<Book>();


    
    
    return(
        <div className="h-auto dark:bg-slate-800 mb-4">
            <h1 className="text-center text-5xl  font-bold text-[#8e5436] p-4 dark:text-white">Best Sellers</h1>
            <div className="max-w-[1600px] flex flex-wrap justify-between  m-auto ">
                {/* {books.isLoading && 'Carregando...'}

                {books.data?.map(item=>(
                        <BookItem 
                        author={item.author}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        onClick={()=>openModal(item.id)}
                            />
                       
                ))} */}
            </div>
            {/* {showModal &&
                <Modal book={bookModal as Book} closeModal={closeModal}/>
            } */}
        </div>
    )
}
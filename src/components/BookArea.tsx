'use client';
let BASE = 'http://apibooks.mauridesenvolvedor.com/api/books';
import { useEffect, useState } from "react";
import { BookItem } from "./BookItem";
import { Book } from "@/types/book";
import { Modal } from "./Modal";
import { Aside } from "./Aside";
import { useBook } from "@/hooks/useBooks";
import { useAside } from '@/hooks/useAside';


export const BookArea = ()=>{
    const {books,setBooks}  = useBook();

    const [showModal,setShowModal] = useState(false);
    const [bookModalInfo,setBookModalInfo] = useState<Book|null>(null);

    
   


    const openModal = (id:number)=>{
        setShowModal(true);
        const book = books.find(item=>item.id===id);
        if(book){
            setBookModalInfo(book)
        }
    }

    const closeModal = ()=>{
        setShowModal(false);
    }

   

    const getBooks = async ()=>{
        const res = await fetch(BASE);
        const json = await res.json();
        setBooks(json);
    }
    useEffect(()=>{
        getBooks();
    },[])

    return(
        <div className="h-auto dark:bg-slate-800">
            <h1 className="text-center text-5xl font-bold text-[#8e5436] p-4 dark:text-white">Best Sellers</h1>
            <div className="max-w-[1600px] flex flex-wrap justify-between  m-auto ">

                {books.map((item)=>(
                    <BookItem  key={item.id}
                        book={
                            {   id:item.id,
                                img:item.img,
                                title:item.title,
                                author:item.author,
                                price:item.price,
                                description:item.description,
                                
                            }
                        }
                        onClick={()=>{openModal(item.id)}}
                    />
                ))}
                {showModal &&
                    <Modal bookModalInfo={bookModalInfo} closeModal={closeModal}/>
                }

           
            </div>
        </div>
    )
}
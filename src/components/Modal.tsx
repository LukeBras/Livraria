'use client'

import { Book } from "@/types/book"
import { useState } from "react"
import { Aside } from "./Aside"

type modalProps = {
    book:Book,
    closeModal:()=>void
}


export const Modal = ({book,closeModal}:modalProps)=>{

    const [showAside,setShowAside] = useState(false);

    const openAside = ()=>{

    }



    return(
        <div className="fixed    top-0 bottom-0 left-0 flex justify-center items-center right-0 bg-black/80">
            <div className="max-w-4xl w-full flex bg-zinc-500 border border-gray-500 rounded-md">
                <img className="max-w-[400px] max-h-[400px] p-3 object-contain" src={book.img} alt="book image" />
                <div className="flex flex-col justify-between flex-1 p-4">
                    <div className="text-white">
                        <h1 className="text-5xl font-bold text-center">{book.title}</h1>
                        <h2 className="text-2xl font-semibold mt-5">{book.author}</h2>
                        <p className="text-base font-semibold mt-5">preço R$ {book.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <button className="bg-gray-300 rounded-md p-3 m-2 text-black w-[100px]">-</button>
                            <span className="text-white" >1</span>
                            <button className="bg-gray-300 rounded-md p-3 m-2 text-black w-[100px]">+</button>
                        </div>
                        <div>
                            <button onClick={()=>openAside} className="bg-green-500 rounded-md p-3 m-2 text-white w-[200px]" >Comprar</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div onClick={closeModal} className=" cursor-pointer fixed top-8 right-8 text-white text-5xl">
                X
            </div>

            {showAside &&
                <Aside/>
            }

            
        </div>
    )
}
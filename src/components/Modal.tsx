'use client'

import { Book } from "@/types/book";
import { useState } from "react";
import { Aside } from "./Aside";
import { useCart } from "@/hooks/useCart";
import { useAside } from '@/hooks/useAside';

type PropsModal = {
    closeModal:()=>void;
    bookModalInfo:Book|null;
}

export const Modal = ({closeModal,bookModalInfo}:PropsModal)=>{

    const {cart,setCart} = useCart();
    const {setAside} = useAside();

    const [CurrentNumber,setCurrentNumber] = useState(1)

    const handlePlusButton = ()=>{
        setCurrentNumber(CurrentNumber+1);
    }
    
    const handleMinusButton = ()=>{
        if(CurrentNumber>1){
            setCurrentNumber(CurrentNumber-1);
        }
    }
   
   

    const openAside = ()=>{
        setAside(true);
        const book = {
            id:bookModalInfo?.id,
            title:bookModalInfo?.title,
            author:bookModalInfo?.author,
            description:bookModalInfo?.description,
            img:bookModalInfo?.img,
            price:bookModalInfo?.price,
        } as Book

        const bookCartIndex = cart.findIndex((item)=>{
            if(item.id===book.id){
                return item;
            }
            
        })
        if(bookCartIndex!=-1 ){
            let newBookCart = [...cart];
            newBookCart[bookCartIndex].quantity+=CurrentNumber;
            setCart(newBookCart);
    
            
        }else{
            setCart([
                ...cart,
                {
                    id:book.id,
                    title:book.title,
                    author:book.author,
                    description:book.description,
                    img:book.img,
                    price:book.price,
                    quantity:CurrentNumber,
                    totalPrice:book.price*CurrentNumber
                }
            ])
        }
     
       closeModal()
        
        
      
        
        
    }




    return(
        <div className="fixed   top-0 bottom-0 left-0 flex justify-center items-center right-0 bg-black/80">
            <div className="flex dark:bg-slate-500  dark:text-white rounded-lg  w-[700px] text-[#8e5436] bg-white p-5">
                <img className="h-[300px] mr-3" src={bookModalInfo?.img} alt="" />
                <div className="flex flex-col justify-start items-center">
                    
                    <div onClick={closeModal} className="text-[30px] w-full flex justify-end cursor-pointer text-[#8e5436]">
                        X
                    </div>

                    <h1 className="text-4xl mb-3">{bookModalInfo?.title}</h1>
                    <h2 className="text-3xl mb-3">{bookModalInfo?.author}</h2>
                    <span className="text-2xl">R$ {bookModalInfo?.price.toFixed(2)}</span>
                    <p>{bookModalInfo?.description}</p>

                    <div className=" w-full flex justify-between mt-5">
                        <div className=" flex justify-around items-center w-32">
                            <button onClick={handleMinusButton} className="bg-[#8e5436] dark:bg-slate-800  w-28 p-2 rounded-md text-white">-</button>
                            <div className="mr-4 ml-4">{CurrentNumber}</div>
                            <button onClick={handlePlusButton}  className="bg-[#8e5436] dark:bg-slate-800  w-28 p-2 rounded-md text-white">+</button>
                        </div>
                            <button onClick={openAside} className="bg-[#8e5436] dark:bg-slate-800 w-32 rounded-md text-white p-3">Comprar</button>
                    </div>
                </div>
            </div>
           

            
        </div>
    )
}
import {ChevronLeftIcon} from 'lucide-react'
import { useEffect, useState } from 'react';
import { useCart } from "@/hooks/useCart";

type AsideItemProps = {
    title:string;
    author:string;
    price:number;
    img:string;
    quantity:number
    id:number;
}


export const AsideItem = ({title,author,price,img,quantity,id}:AsideItemProps)=>{
    const {cart,setCart} = useCart();

    const [asideNumber,setAsideNumber] = useState(quantity);
    const [asidePrice,setAsidePrice] = useState(price);

  
    const updateCart = ()=>{
        const bookCartIndex = cart.findIndex((item)=>{
            if(item.id===id){
                return item;
            }
        })
        if(bookCartIndex!=-1 ){
            let newBookCart = [...cart];
            newBookCart[bookCartIndex].quantity=asideNumber;
            setCart(newBookCart);
        }
    }

 
    useEffect(()=>{
         setAsideNumber(quantity)
    },[quantity])
    
    useEffect(()=>{
        updateCart();
    },[asideNumber])
    
    const asideMinusButton = ()=>{
        if(asideNumber>1){
            setAsideNumber(asideNumber-1);
        }
    }
    const asidePlusButton = ()=>{
        setAsideNumber(asideNumber+1);
    }

    return(
        <div>
            <div className=" p-3 flex justify-between w-full h-28 border-b border-b-white  text-white ">
                <img src={img}  />
                <div className="flex  flex-col justify-center text-center">
                    <h2 className="text-2xl" >{title}</h2>
                    <h3>{author}</h3>
                    <p>R${asidePrice*asideNumber}</p>
                </div>
                <div className=" flex justify-around items-center  w-32">
                    <button onClick={asideMinusButton} className="bg-gray-400 w-5   rounded-md text-white">-</button>
                    <div className="text-white">{asideNumber}</div>
                    <button onClick={asidePlusButton} className="bg-gray-400  w-5  rounded-md text-white">+</button>
                </div>
            </div>
        </div>
        
    )
}
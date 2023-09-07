 'use client';
let BASE = 'http://apibooks.mauridesenvolvedor.com/api/orders';
import { headers } from "next/dist/client/components/headers";
import { useState,useEffect } from "react";
import { MyOrderItem } from "@/components/myOrderItem";
import { Book } from "@/types/book";
import { useRouter } from "next/navigation";
import { useOrderBooks } from "@/hooks/useOrderBooks";


export const MyOrders = ()=>{
    
    const {orderBooks,setOrderBooks} = useOrderBooks();

    const getBookOrders = async()=>{
        const res = await fetch(BASE,{
            headers:{
                'Content-type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` 

            },
        })
        
        const json = await res.json();
        setOrderBooks(json.orders);
        
    }
    useEffect(()=>{
        
        getBookOrders();
    },[])

    return(
        <div className="min-h-screen">
            <h1 className="text-center p-5 text-3xl">Meus Pedidos.</h1>
            <div className="max-w-7xl flex flex-col m-auto ">
               {orderBooks.map((item)=>(
                  <MyOrderItem 
                  key={item.id}
                  id={item.id}
                  total={item.total}
                  status={item.status}
                  data={item.data}
                  client={item.client}
                  /> 
               ))}
              
                
            </div>
        </div>
    )
 }

 export default MyOrders;
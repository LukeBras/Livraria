'use client'

import { useCart } from "@/hooks/useCart";
import { OrderItem } from "@/components/OrderItem";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const OrdersPreview = ()=>{
    const route = useRouter();
    const {cart} = useCart();
    const [total,setTotal] = useState(0);


    const calcTotal = ()=>{
        let total = 0;
        for(let i in cart){
            total += cart[i].totalPrice;
        } 
        setTotal(total);

    }
    useEffect(()=>{
        calcTotal();
    },[])

    const MakeCartOrder = ()=>{
        let orders:any = {
            total,
            orders_items:[],
        }
        for(let i in cart){
            let orderItem = {
                id_book:cart[i].id,
                quantity:cart[i].quantity,
                unit_price:cart[i].price,
                total_price:total,
            }
            orders.orders_items.push(orderItem);
        }
        return orders;


    }


    const handleOrders = async()=>{
        let orders = MakeCartOrder();
      
        const res = await fetch('http://apibooks.mauridesenvolvedor.com/api/orders',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` 

            },
            body:JSON.stringify(
                orders
            )    
        })
        
        const json = await res.json();

        if(json.status==='success'){
            route.push('/myorders');
        }
       
    }


    return(
        <div className="min-h-screen  dark:bg-slate-400">
                <div className="max-w-3xl w-full m-auto   flex justify-between">
                    <div className=" mt-3 dark:bg-slate-200  flex flex-col justify-center ">
                        <h1>products</h1>
                        {cart.map((item,index)=>(
                            <OrderItem key={index}
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <p className="text-2xl">subtotal:{total.toFixed(2)}</p>
                        <h2 className="text-2xl">Total: {total.toFixed(2)}</h2>
                        <button onClick={handleOrders} className="bg-blue-300 p-4 rounded-md w-36 text-white">finalizar</button>
                    </div>
                </div>
                
                   
        </div>
    )
}
export default OrdersPreview;
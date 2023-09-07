'use client';

import { useOrderBooks } from "@/hooks/useOrderBooks";
import { useState,useEffect } from "react";
import { DetailItem, DetailItemProps } from "@/components/DetailItem";

type OrdersProps={
    params:{
        id:string
    }
}

export const PageDetails = ({params}:OrdersProps)=>{
    const {orderBooks} = useOrderBooks();
    const [detail,setDetail] = useState<DetailItemProps|null>(null);

    useEffect(()=>{
        
        const detailFind =  orderBooks.find(item=>item.id==params.id);
        
        
        setDetail(detailFind);
    },[])

    return(
        <div className="flex max-w-7xl m-auto min-h-screen border border-solid border-gray-600  ">
            <div className="flex flex-col flex-1 ">
                <div className=" mb-5 h-20 border-b border-gray-500 w-full">
                        <h1 className="text-2xl">ID</h1>
                        {detail?.id}
                </div>
                <div className=" h-20 w-full border-b border-gray-500">
                    <h1 className="text-2xl">Status</h1>
                    {detail?.status}

                </div>
                <div className=" h-20 w-full border-b border-gray-500">
                    <h1 className="text-2xl">Total</h1>
                  R$  {detail?.total},00

                </div>
            </div>
            <div className="flex-1">
            <h1 className="p-4 text-2xl">Items de compra</h1>
                {detail?.order_items.map((item:any,index)=>(
                    <DetailItem key={index}
                        total={item.total}
                        status={item.status}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        author={item.author}
                        description={item.description}
                        quantity={item.quantity}
                        order_items={item.order}

                    />
            ))}
            </div>
          
        </div>
    )
}
export default PageDetails;
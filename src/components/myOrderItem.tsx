'use client';

import { useRouter } from "next/navigation";


    type OrderProps = {
        id:number;
        total:number;
        status:number;
        data:string;
        client:string;
    }



export const MyOrderItem  = ({id,total,status,data,client}:OrderProps)=>{
    


    const route = useRouter();

    const showDetails = ()=>{
        route.push(`/details/${id}`);
    }

    return(
        <div className="flex">
            <div  className="bg-gray-400 text-white p-4 w-full rounded-md mt-3 mb-2 flex justify-between">
                <span>
                    id:
                    {id}
                </span>
                <h3>
                    total:
                    {total}
                </h3>
                <p>
                    status:
                    {status}
                </p>
                <h3>
                    data:
                    {data}
                </h3>
                <p>
                    client:
                    {client}
                </p>
            </div>

            <button className="bg-red-400 hover:bg-red-300 transition-all text-white rounded-md p-2 m-3" onClick={showDetails}>detalhes</button>
           
        </div>
    
    )
}
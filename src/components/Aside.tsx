import { Book } from "@/types/book";
import {ChevronLeftIcon} from 'lucide-react';
import { AsideItem } from "./AsideItem";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useAside } from "@/hooks/useAside";



export const Aside = ()=>{
    const {setAside} = useAside();

    const route = useRouter();

    const {cart} = useCart();

    const goToOrdersReview = ()=>{
        route.push('/orders');
        setAside(false)
    }
     
    return(
        <div className="fixed p-4 rounded-md right-0 top-24 min-h-screen dark:bg-slate-500  flex flex-col  bg-[#8a3119] w-[400px]">
             <div className="flex items-center justify-center text-white">
                <ChevronLeftIcon onClick={()=>setAside(false)} className="cursor-pointer" />
                <h1 className="text-center border-b border-black p-3 text-2xl ">Cart</h1>
            </div>
           {cart.map((item,index)=>(
                <AsideItem
                    key={index} 
                    title={item.title}
                    author={item.author}
                    img={item.img}
                    price={item.totalPrice}
                    quantity={item.quantity}
                    id={item.id}

                />
           ))}
           <button onClick={goToOrdersReview} className="bg-[#dbbe96] dark:bg-slate-800  p-4 m-2 rounded-md mt-5 text-white">Finalizar Pedido</button>
        </div>
    )
}
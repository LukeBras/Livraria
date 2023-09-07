type OrderProps = {
    img:string;
    title:string;
    price:number;
    quantity:number;
}

export const OrderItem = ({img,title,price,quantity}:OrderProps)=>{
    return(
        <div className="flex  p-4 mb-5 justify-between  border-b border-gray-400  w-[500px]">
            <div>
                <img className="w-32 p-3 bg-gray-300" src={img} alt="" />
            </div>
             <div className="flex flex-col justify-center">
                <h2 className="text-2xl">{title}</h2>
                <p className="text-xl">R$ {price.toFixed(2)}</p>
            </div>
                <div className=" flex justify-around items-center  w-32">
                     <button className="bg-[#8e5436] w-10 p-2 rounded-md text-white">-</button>
                        <div className="mr-4 ml-4">{quantity}</div>
                    <button   className="bg-[#8e5436]  w-10 p-2 rounded-md text-white">+</button>
                </div>
        </div>
    )
}
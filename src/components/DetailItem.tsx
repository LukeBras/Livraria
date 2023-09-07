export type DetailItemProps = {
    total:number;
    status:string;
    id:number;
    img:string;
    title:string;
    author:string;
    description:string;
    quantity:number
    order_items:[]
}

export const DetailItem  = ({img,title,author,description,quantity}:DetailItemProps)=>{
    return(
       
            <div className="flex p-4 mt-4 flex-col  border-b border-gray-600">
                <img className="w-[100px]" src={img} alt="" />
                <h2>Título{title}</h2>
                <h3>Autor:{author}</h3>
                <p>Descrição:{description}</p>
                <div>Quantidade:{quantity}</div>
            </div>
    )
}
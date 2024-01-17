'use client'

import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { useBooks } from "@/utils/queries";



const Page = ()=>{
  const books = useBooks();
  return(
    <div>
      <Banner/>
      {books.isLoading && 'carregando...'}

      {books.data  &&
      <div className="flex flex-col items-center">
          {books.data?.map(item=>(
            <div >
              <img src={`${item.img}`} alt="" />
              {item.title}
              </div>
          ))}
      </div>
      
      }
        
        
    </div>
  )
}
export default Page;
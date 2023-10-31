'use client'
import { Aside } from "@/components/Aside";
import { Banner } from "@/components/Banner";
import { BookArea } from "@/components/BookArea";
import { useAside } from "@/hooks/useAside";
import { LogIn } from "lucide-react";


const Page = ()=>{
  return(
    <div>
      <Banner/>
      <BookArea/>
      
      
    </div>
  )
}
export default Page;
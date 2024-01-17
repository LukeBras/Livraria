'use client'

import {User2,ShoppingCart,BookOpen, MoonIcon,SunIcon} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';




export const Header =()=>{


    return(
        <header className=' text-white border-b-1 bg-[#8e5436] dark:bg-black'>
            <div className="max-w-7xl m-auto flex justify-between p-7 items-center ">
                
                <Link href={'/'}  className='flex font-[Parisienne] flex-1 '>
                    <BookOpen className='cursor-pointer mr-3'/>
                    LB
                </Link>

                <nav >
                   <ul className='flex justify-evenly items-center w-[300px] '>
                     <ShoppingCart cursor={'pointer'}/>

                    <Link className='cursor-pointer' href={'/login'}>
                        Login
                    </Link>

                   
                   </ul>
                </nav>
             
       
            </div>

        </header>
    )
}
'use client'

import {User2,ShoppingCart,BookOpen, MoonIcon,SunIcon} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { useAside } from '@/hooks/useAside';



export const Header =()=>{
    const route = useRouter();
    const {mode,setMode} = useDarkMode();
    const {aside,setAside} = useAside();

    const changeMode = ()=>{
        if(mode===''){
            setMode("dark")
          
            
        }else{
            setMode("");
            
        }
    }

    const handleAside = ()=>{
        setAside(!aside);
    }

    return(
        <header className=' text-white border-b-1 bg-[#8e5436] dark:bg-black'>
            <div className="max-w-7xl m-auto flex justify-between p-7 items-center ">
                
                <Link href={'/'}  className='flex font-[Parisienne] flex-1 '>
                    <BookOpen className='cursor-pointer mr-3'/>
                    LB
                </Link>

                <nav >
                   <ul className='flex justify-evenly items-center w-[300px] '>
                      
                        {!localStorage.getItem("token")&&(

                            <>

                       

                        <li className='flex hover:text-[#dbbe96]'>
                                    
                                <User2/>
                                <Link href={'/login'}>
                                        login
                                </Link>
                        </li>
                                                            
                            </>
                        )}
                      {localStorage.getItem("token")&&(
                            <>
                            <li className='flex hover:text-[#dbbe96]'>                                 
                                <User2/>
                                <Link onClick={(e)=>{e.preventDefault()
                                    localStorage.removeItem('token')
                                    route.push('/')
                                }} href={'/'}>
                                        Sair
                                </Link>
                            </li>
                             <li className='hover:text-[c]'>
                                <Link href={'/myorders'}>
                                    Meus Pedidos
                                </Link> 
                         </li>
                            </>
                            
                      )}

                       
                        <li className='flex hover:text-[#dbbe96]' >
                            <ShoppingCart onClick={handleAside}  />
                        </li>
                   </ul>
                </nav>
               {mode === '' && (
                    <MoonIcon onClick={changeMode}  className='absolute right-8 cursor-pointer'/>
               )}
                {mode === 'dark' && (
                    <SunIcon onClick={changeMode}  className='absolute right-8 cursor-pointer'/>
               )}

               <SearchInput/>
            </div>

        </header>
    )
}
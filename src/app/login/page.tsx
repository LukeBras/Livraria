'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'

const page = ()=>{

    const route = useRouter();

    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');

    const handlelogin = async()=>{
        const response = await axios.post('http://localhost:4000/login',{
            email,
            password
        });

        console.log(response);
        
        if(!response.data.status){
            alert('digite login corretamente');
           
        }else{

            route.push('/')
        }
        
        
    }

    return(
        <div className="bg-gray-400 mt-3 h-screen container m-auto flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <div>
                <label className="text-3xl" >
                    Email: <br />
                    <input 
                    className="w-96 rounded-md mb-5 outline-none" 
                    type="text"
                    value={email}
                    onChange={e=>setEmail(e.target.value)} />
                </label>
                <br />
                <label className="text-3xl "   >
                    Password: <br />
                    <input 
                    className="w-96 rounded-md outline-none" 
                     type="text"
                     value={password}
                     onChange={e=>setpassword(e.target.value)} />
                </label>
                <div className="mb-6 underline text-white">
                    <Link href={'/register'}>ainda não tem conta? cadastre-se</Link>
                </div>

                    
                <button onClick={handlelogin} className="bg-green-500  text-white w-44 p-5 rounded-md m-auto">Entrar</button>
                
            </div>
        </div>
    )
}

export default page;
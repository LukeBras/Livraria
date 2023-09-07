'use client';

import { useState } from "react";
import {useRouter} from 'next/navigation';
import Link from "next/link";




const PageLogin = ()=>{

    const route = useRouter();

const [email,setEmail] = useState<string>("");
const [password,setPassword]= useState<string>('');

const handleLogin = async ()=>{
    const res = await fetch('http://apibooks.mauridesenvolvedor.com/api/login',{
        method:'Post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            email:email,
            password:password,
        })    
    
    })
    const json = await res.json();
    if(json.status==='success'){
        console.log(json);
        
        localStorage.setItem('token',json.token);
        route.push("/")
    }
    

    
}



    return(
        <div className="h-screen bg-gray-400 flex justify-center items-center rounded-sm">
            <div className="max-w-2xl w-full p-5 m-auto bg-gray-100">
                <h1 className="text-4xl font-bold text-center p-4">Login</h1>

                <div className="p-4">
                    <label className="text-2xl">
                        Email:
                    </label> 
                    <br />
                    <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                    type="email"
                    placeholder="contato@gmail.com" 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className="p-4">
                    <label className="text-2xl">
                        senha:
                    </label>
                    <br />
                    <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                     type="password"
                    placeholder="123" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin} className=" w-full p-3 rounded-md text-white   bg-blue-400 ">Logar</button>

                <div className="flex justify-end mt-10 ">
                    <p className="p-3">Ainda Não tem conta?</p>
                    <Link href={'/register'}>
                        <button className="bg-blue-400 p-3 text-white rounded-md" >
                            Cadastre-se
                        </button>
                    </Link>
                   
                </div>
            </div>

        </div>
    )
}
export default PageLogin;
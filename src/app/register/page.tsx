'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";



const Register = ()=>{

    const route = useRouter();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassWord] = useState("");
    const [cep,setCep] =useState("");
    const [street,setStreet] = useState("");
    const [number,setNumber] = useState("");
    const [bairro,setBairro] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");

    const handleRegister = async()=>{
        const res = await fetch('http://apibooks.mauridesenvolvedor.com/api/user',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                email:email,
                password:password,
                cep:cep,
                street:street||'',
                number:number,
                neighborhood:bairro,
                city:city,
                state:state

            })

        });
        const json = await res.json();
        if(json.status==='success'){
            route.push('/login')
        }
        
    
    }

   
    return(
        <div className="h-auto bg-gray-400 flex justify-center items-center rounded-sm">
        <div className="max-w-2xl w-full mt-10 mb-10 p-6 m-auto bg-gray-100">
            <h1 className="text-4xl font-bold text-center p-4">Register</h1>

            <div className="p-4">
                <label className="text-2xl">
                    Nome
                </label> 
                <br />
                <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                type="text"
                placeholder="digite seu nome" 
                value={name}
                onChange={e=>setName(e.target.value)}
                />
            </div>
            <div className="p-4">
                <label className="text-2xl">
                    email:
                </label>
                <br />
                <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                 type="text"
                placeholder="digite seu email" 
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
                 type="text"
                placeholder="digite sua senha" 
                value={password}
                onChange={e=>setPassWord(e.target.value)}
                />
            </div>
            <div className="p-4">
                <label className="text-2xl">
                    CEP:
                </label>
                <br />
                <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                 type="text"
                placeholder="digite seu cep" 
                value={cep}
                onChange={e=>setCep(e.target.value)}
                />
            </div>
            <div className="p-4">
                <label className="text-2xl">
                    Rua:
                </label>
                <br />
                <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                 type="text"
                placeholder="digite sua rua" 
                value={street}
                onChange={e=>setStreet(e.target.value)}
                />
            </div>
            <div className="p-4">
                <label className="text-2xl">
                    numero:
                </label>
                <br />
                <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                 type="text"
                placeholder="digite sua rua" 
                value={number}
                onChange={e=>setNumber(e.target.value)}
                />
            </div>
            <div className="p-4">
                <label className="text-2xl">
                    Bairro:
                </label>
                <br />
                <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                 type="text"
                placeholder="digite sua rua" 
                value={bairro}
                onChange={e=>setBairro(e.target.value)}
                />
            </div>
            <div className="p-4">
                <label className="text-2xl">
                    cidade:
                </label>
                <br />
                <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                 type="text"
                placeholder="digite sua rua" 
                value={city}
                onChange={e=>setCity(e.target.value)}
                />
            </div>
            <div className="p-4">
                <label className="text-2xl">
                    Estado:
                </label>
                <br />
                <input className="w-full p-3 border border-gray-500 outline-none rounded-md"
                 type="text"
                placeholder="digite sua rua" 
                value={state}
                onChange={e=>setState(e.target.value)}
                />
            </div>
            <button onClick={handleRegister} className=" w-full p-3 rounded-md text-white   bg-blue-400 ">Registrar</button>

          
        </div>

    </div>
    )
}
export default Register;
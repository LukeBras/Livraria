// 'use client'

// import { Book } from "@/types/book";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const req = axios.create({
//     baseURL:'http://apibooks.mauridesenvolvedor.com/api'
// })

// //requisição

// export const getBooks = async():Promise<Book[]>=>{
//     const result = await req.get('/books');
//     return result.data
// }

// //hooks

// export const useBooks = ()=>{
//     const query  = useQuery({
//         queryKey:['books'],
//         queryFn:getBooks,
//         staleTime:Infinity,
//         enabled:true
//     })
//     return query;
// }
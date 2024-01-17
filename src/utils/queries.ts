import { useQuery } from "@tanstack/react-query";
import { getBooks } from "./api";

export const useBooks = ()=>{
    const query =   useQuery({
        queryKey:['posts'],
        queryFn:getBooks
    }) 
    return query;
}

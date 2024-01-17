import { Book } from "@/types/Book"
import axios from "axios"

const req = axios.create({
    baseURL:'http://apibooks.mauridesenvolvedor.com/api/'
})


export const getBooks = async():Promise<Book[]>=>{
    const result = await req.get('/books');
    return result.data;
}
import { create } from "zustand";
import { Book } from "@/types/book";

interface BookStore {
    books:Book[]
    setBooks: (books: Book[]) => void;
  }
  
export const useBook = create<BookStore>((set) => ({
    books: [],
    setBooks(books) {
        set({ books });
    },
}));
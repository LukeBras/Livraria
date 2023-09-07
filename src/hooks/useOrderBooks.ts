import { create } from "zustand";

interface useOrderBook {
    orderBooks:any[]
    setOrderBooks: (orderBooks: any[]) => void;
  }
  
export const useOrderBooks = create<useOrderBook>((set) => ({
    orderBooks: [],
    setOrderBooks(orderBooks) {
        set({  orderBooks });
    },
}));
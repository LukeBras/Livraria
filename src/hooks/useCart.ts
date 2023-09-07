import { CartItem } from "@/types/cart";
import { create } from "zustand";

interface CartStore {
  cart:CartItem[]
  setCart: (cart: CartItem[]) => void;
}

export const useCart = create<CartStore>((set) => ({
  cart: [],
  setCart(cart) {
    set({ cart });
  },
}));
import { create } from "zustand";

interface AsideStore {
    aside:boolean
    setAside: (aside:boolean) =>void;
  }
  
export const useAside = create<AsideStore>((set) => ({
    aside: false,
    setAside(aside) {
        set({ aside });
    },
}));
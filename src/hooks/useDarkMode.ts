import { create } from "zustand";

interface useDarkMode {
    mode:'dark'|'';
    setMode: (mode:'dark'|'') => void;
  }

  export const useDarkMode = create<useDarkMode>((set) => ({
    mode:'',
    setMode(mode) {
      set({ mode });
    },
  }));
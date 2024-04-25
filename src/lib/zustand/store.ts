import { AppStoreInterface } from "@/interface/zustandInterface";
import { create } from "zustand";

export const useAppStore = create<AppStoreInterface>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  username: "Hasan Molla",
  updateName: (username) => set({ username }),
}));
import createStore from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type AppState = { page: string };

const appStateDefault: AppState = {
  page: "main-menu",
};

export const useInstance = createStore<AppState>()(
  persist(
    immer<AppState>((set) => {
      return appStateDefault;
    }),
    { name: "app-state-01", getStorage: () => sessionStorage }
  )
);

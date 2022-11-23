import createStore from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AppPageKey } from "~/pages/App";

export const appStateActions = {
  setPage: (value: AppPageKey) => {
    useStore.setState((state) => {
      state.page = value;
    });
  },
  setShowInventory: (value: boolean) => {
    useStore.setState((state) => {
      state.showInventory = value;
    });
  },
};

type AppState = { page: AppPageKey; showInventory: boolean };

const appStateDefault: AppState = {
  page: "main_menu",
  showInventory: false,
};

const useStore = createStore<AppState>()(
  persist(
    immer<AppState>((set) => {
      return appStateDefault;
    }),
    { name: "app-state-01", getStorage: () => sessionStorage }
  )
);

// export function useAppPage(): string {
//   return useAppState((state) => state.page);
// }
export const useAppPage = () => useStore((state) => state.page);
export const useShowInventory = () => useStore((state) => state.showInventory);

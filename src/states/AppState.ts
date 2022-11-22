import createStore from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AppPageKey } from "~/pages/App";

export const appStateActions = {
  setPage: (value: AppPageKey) => {
    useStore.setState((state: AppState) => {
      state.page = value;
    });
  },
};

type AppState = { page: AppPageKey };

const appStateDefault: AppState = {
  page: "main_menu",
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

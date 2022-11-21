import createStore from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const stateActions = {
  setPage: (value: string) => {
    useAppState.setState((state: AppState) => {
      state.page = value;
    });
  },
};

type AppState = { page: string };

const appStateDefault: AppState = {
  page: "main-menu",
};

export const useAppState = createStore<AppState>()(
  persist(
    immer<AppState>((set) => {
      return appStateDefault;
    }),
    { name: "app-state-01", getStorage: () => sessionStorage }
  )
);

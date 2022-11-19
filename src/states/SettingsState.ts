import createStore from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type SettingsState = {
  theme: string;
};

const settingsStateDefault: SettingsState = {
  theme: "light",
};

export const useInstance = createStore<SettingsState>()(
  persist(
    immer<SettingsState>((set) => {
      return settingsStateDefault;
    }),
    { name: "settings-state-01" }
  )
);

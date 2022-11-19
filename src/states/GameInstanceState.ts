import createStore from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const instanceActions = {
  resetToDefault: () => {
    useInstance.setState((state: InstanceState) => {
      state = instanceStateDefault;
    });
  },
  setName: (value: string) => {
    useInstance.setState((state: InstanceState) => {
      state.name = value;
    });
  },
  addBot: (value: Bot) => {
    useInstance.setState((state: InstanceState) => {
      state.playerTeam.push(value);
    });
  },
  setMoney: (value: number) => {
    useInstance.setState((state: InstanceState) => {
      state.inventory.money = value;
    });
  },
  addMoney: (value: number) => {
    useInstance.setState((state: InstanceState) => {
      state.inventory.money += value;
    });
  },
  addInventoryItem: (value: Item) => {
    useInstance.setState((state: InstanceState) => {
      state.inventory.items.push(value);
    });
  },
};

export type InstanceState = {
  isActive: boolean;
  name: string;
  page: string;
  inventory: Inventory;
  playerTeam: Bot[];
};

const instanceStateDefault: InstanceState = {
  isActive: false,
  name: "NAME",
  page: "explore",
  inventory: { money: 0, maxItemCount: 10, items: [] },
  playerTeam: [],
};

export type Bot = {
  id: string;
  name: string;
  template: BotTemplate;
  health: number;
  maxHealth: number;
};

export type BotTemplate = {
  id: string;
  name: string;
  maxHealth: number;
};

export type Inventory = {
  money: number;
  maxItemCount: number;
  items: Item[];
};

export type Item = {
  id: string;
  name: string;
};

export const useInstance = createStore<InstanceState>()(
  persist(
    immer<InstanceState>((set) => {
      return instanceStateDefault;
    }),
    { name: "instance-state-01" }
  )
);

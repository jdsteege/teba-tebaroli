import createStore from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type InstanceState = {
  name: string;
  worldLocation: number;
  inventory: Inventory;
  playerTeam: Bot[];
};

const instanceStateDefault = {
  name: "NAME",
  worldLocation: 0,
  inventory: { money: 0, maxItemCount: 10, items: [] },
  playerTeam: [],
};

type Bot = {
  id: string;
  name: string;
  template: BotTemplate;
  health: number;
  maxHealth: number;
};

type BotTemplate = {
  id: string;
  name: string;
  maxHealth: number;
};

type Inventory = {
  money: number;
  maxItemCount: number;
  items: Item[];
};

type Item = {
  id: string;
  name: string;
};

type InstanceActions = {
  setName: (value: string) => void;
  // setWorldLocation: (value: number) => void;
  // addBot: (value: Bot) => void;
  // setMoney: (value: number) => void;
  // addInventoryItem: (value: Item) => void;
};

export const useInstance = createStore<InstanceState>()(
  persist(
    immer<InstanceState>((set) => instanceStateDefault),
    { name: "instance-state-01" }
  )
);

//
//
//
type BearInfo = {
  count: number;
  place: string;
  groupName: string;
};

type BearState = {
  bears: BearInfo;
};

const bearsDefault = { count: 0, place: "Alaska", groupName: "Grizzlies" };

type BearActions = {
  increase: (by: number) => void;
  reset: (val: number) => void;
};

export const useBearStore = createStore<BearState & BearActions>()(
  persist(
    immer<BearState & BearActions>((set) => ({
      bears: bearsDefault,
      increase: (by) =>
        set((state) => {
          state.bears.count = state.bears.count + by;
        }),
      reset: (val) =>
        set((state) => {
          state.bears.count = val;
        }),
    })),
    {
      name: "bear-storage2",
    }
  )
);

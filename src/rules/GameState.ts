import createStore from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type BearInfo = {
  count: number;
  place: string;
  groupName: string;
};

interface BearState {
  bears: BearInfo;
}

const bearsDefault = { count: 0, place: "Alaska", groupName: "Grizzlies" };

interface BearActions {
  increase: (by: number) => void;
  reset: () => void;
}

export const useBearStore = createStore<BearState & BearActions>()(
  persist(
    immer<BearState & BearActions>((set) => ({
      bears: bearsDefault,
      increase: (by) =>
        set((state) => {
          state.bears.count = state.bears.count + by;
        }),
      reset: () =>
        set((state) => {
          state.bears.count = state.bears.count = 0;
        }),
    })),
    {
      name: "bear-storage2",
    }
  )
);

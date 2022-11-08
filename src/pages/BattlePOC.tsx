import { Button, Text } from "@mantine/core";
import HUD from "../components/HUD";

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

interface BearActions {
  increase: (by: number) => void;
  reset: () => void;
}

const useBearStore = createStore<BearState & BearActions>()(
  persist(
    immer<BearState & BearActions>((set) => ({
      bears: { count: 0, place: "Alaska", groupName: "Grizzlies" },
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

export default function BattlePage() {
  const bearCount: number = useBearStore((state) => state.bears.count);
  const clickMore = useBearStore((state) => state.increase);
  const reset = useBearStore((state) => state.reset);

  return (
    <>
      <HUD />
      <Text>Battle Page</Text>
      <Text>Bears is {bearCount}</Text>
      <Button onClick={() => clickMore(1)}>Moar Bears</Button>
      <Button onClick={reset}>None Bears</Button>
    </>
  );
}

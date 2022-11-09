import { Button, Text } from "@mantine/core";

import HUD from "~/components/HUD";
import { useBearStore } from "~/rules/GameState";
import { useInstance, instanceActions } from "~/rules/GameState";

export default function BattlePage() {
  const money: number = useInstance((state) => state.inventory.money);

  const bearCount: number = useBearStore((state) => state.bears.count);
  const clickMore = useBearStore((state) => state.increase);
  const reset = useBearStore((state) => state.reset);

  // This technique might be preferable to avoid tons of hooks
  const resetExternal = () =>
    useBearStore.setState(() => ({ bears: { count: 5 } }));

  return (
    <>
      <HUD />
      <Text>Battle Page</Text>
      <div>
        <Text>Bears is {bearCount}</Text>
        <Button onClick={() => clickMore(1)}>Moar Bears</Button>
        <Button onClick={() => reset(1)}>One Bears</Button>
        <Button onClick={() => resetExternal()}>Five</Button>
      </div>
      <div>
        <Text>Money? {money}</Text>
        <Button onClick={() => instanceActions.addMoney(3)}>
          Money Please!
        </Button>
      </div>
    </>
  );
}

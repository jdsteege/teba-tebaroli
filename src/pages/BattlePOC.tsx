import { AppShell, Button, Header, Stack, Text } from "@mantine/core";

import HUD from "~/components/GameHeader";
import { useInstance, instanceActions } from "~/states/GameInstanceState";

export default function BattlePage() {
  const money: number = useInstance((state) => state.inventory.money);

  let header = (
    <Header height={110}>
      <HUD />
    </Header>
  );
  return (
    <>
      <AppShell header={header}>
        <Stack align="flex-start" justify="flex-start" spacing={"md"}>
          <div>
            <Text>Money? {money}</Text>
            <Button onClick={() => instanceActions.addMoney(3)}>
              Money Please!
            </Button>
          </div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
        </Stack>
      </AppShell>
    </>
  );
}

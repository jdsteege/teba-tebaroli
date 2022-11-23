import { AppShell, Button, Header, Text } from "@mantine/core";
import GameHeader from "~/components/GameHeader";
import Inventory from "~/components/Inventory";
import { appStateActions, useShowInventory } from "~/states/AppState";

export function GamePage() {
  const showInventory = useShowInventory();

  const handleMainMenu = () => {
    appStateActions.setPage("main_menu");
  };

  let content = (
    <>
      <Button onClick={handleMainMenu}>Menu</Button>
      <Text>Game Page</Text>
    </>
  );

  if (showInventory) {
    content = (
      <>
        <Inventory />
      </>
    );
  }

  return (
    <>
      <AppShell
        header={
          <Header height={60} p="xs">
            <GameHeader />
          </Header>
        }
      >
        {content}
      </AppShell>
    </>
  );
}

import { Button, Text } from "@mantine/core";
import { appStateActions } from "~/states/AppState";

export function GamePage() {
  const handleMainMenu = () => {
    appStateActions.setPage("main_menu");
  };
  return (
    <>
      <Button onClick={handleMainMenu}>Menu</Button>
      <Text>Game Page</Text>
    </>
  );
}

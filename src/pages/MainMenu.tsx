import { Button, Center, Stack } from "@mantine/core";
import { appStateActions } from "~/states/AppState";
import { instanceActions, useInstance } from "~/states/GameInstanceState";

export default function MainMenu() {
  const instance = useInstance();

  const handleContinue = () => {
    appStateActions.setPage("game_instance");
  };

  const handleNewGame = () => {
    instanceActions.resetToDefault();
    appStateActions.setPage("game_instance");
  };

  const handleSettings = () => {
    appStateActions.setPage("settings");
  };

  let continueButton = <Button disabled>Continue</Button>;
  if (instance.isActive) {
    continueButton = <Button onClick={handleContinue}>Continue</Button>;
  }

  return (
    <>
      <Stack align="center" justify={"center"} style={{ minHeight: "100vh" }}>
        {continueButton}
        <Button onClick={handleNewGame}>New Game</Button>
        <Button onClick={handleSettings}>Settings</Button>
      </Stack>
    </>
  );
}

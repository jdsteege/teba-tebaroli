import { Button, Center, Stack } from "@mantine/core";
import { instanceActions, useInstance } from "~/rules/Instance";

export default function MainMenu() {
  const instance = useInstance();

  const handleContinue = () => {};

  const handleNewGame = () => {
    instanceActions.resetToDefault();
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
      </Stack>
    </>
  );
}

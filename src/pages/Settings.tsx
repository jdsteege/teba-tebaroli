import { Button, CloseButton, Header, Text } from "@mantine/core";
import { appStateActions } from "~/states/AppState";

export function Settings() {
  const handleClose = () => {
    appStateActions.setPage("main_menu");
  };

  return (
    <>
      <Text>Settings</Text>
      <CloseButton title="Exit" size="lg" onClick={handleClose} />
      <Button>Do Nothing</Button>
    </>
  );
}

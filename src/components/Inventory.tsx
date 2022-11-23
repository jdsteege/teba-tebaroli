import { Button, Text } from "@mantine/core";
import { appStateActions } from "~/states/AppState";

export default function Inventory() {
  const handleClose = () => {
    appStateActions.setShowInventory(false);
  };

  return (
    <>
      <Button onClick={handleClose}>Close</Button>
      <div>Inventory</div>
    </>
  );
}

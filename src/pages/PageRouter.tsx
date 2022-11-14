import BattlePage from "./BattlePOC";
import MainMenu from "./MainMenu";

export type AppPageDef = {
  name: string;
  component: JSX.Element;
};

export const Pages = {
  mainMenu: { name: "mainMenu", component: <MainMenu /> },
  battle: <BattlePage />,
};

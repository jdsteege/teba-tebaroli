import { useAppPage } from "~/states/AppState";
import { GamePage } from "./GamePage";
import MainMenu from "./MainMenu";
import { Settings } from "./Settings";

export type AppPageKey = "main_menu" | "settings" | "game_instance";

type PageDef = {
  component: JSX.Element;
};

export default function App() {
  const pageKey = useAppPage();

  let page = pages[pageKey];

  return <>{page.component}</>;
}

const pages: Record<AppPageKey, PageDef> = {
  main_menu: { component: <MainMenu /> },
  settings: { component: <Settings /> },
  game_instance: { component: <GamePage /> },
};

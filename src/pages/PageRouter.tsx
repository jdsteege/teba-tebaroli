import MainMenu from "./MainMenu";
import BattlePage from "./BattlePOC";
import { Settings } from "./Settings";
import { GamePage } from "./GamePage";

export enum PageID {
  MainMenu = "main-menu",
  Settings = "settings",
  Game = "game-page",
  Explore = "explore",
  ExploreEvent = "event",
  Battle = "battle",
}

export const AppPages = {
  mainMenu: { name: PageID.MainMenu, component: <MainMenu /> } as PageDef,
  settings: { name: PageID.Settings, component: <Settings /> } as PageDef,
  game: { name: PageID.Game, component: <GamePage /> } as PageDef,
};

export const GamePages = {
  explore: { name: PageID.Explore, component: <div /> } as PageDef,
  exploreEvent: { name: PageID.ExploreEvent, component: <div /> } as PageDef,
  battle: { name: PageID.Battle, component: <BattlePage /> } as PageDef,
};

export type PageDef = {
  name: PageID;
  component: JSX.Element;
};

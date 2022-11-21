import { useAppPage } from "~/states/AppState";
import { GamePage } from "./GamePage";
import MainMenu from "./MainMenu";
import { Settings } from "./Settings";

function App() {
  const pageString = useAppPage();

  let component: JSX.Element = <></>;
  if (pageString == "main-menu") {
    component = <MainMenu />;
  } else if (pageString == "settings") {
    component = <Settings />;
  } else if (pageString == "gameInstance") {
    component = <GamePage />;
  }

  return <>{component}</>;
}

function GetPageContent() {

}

export default App;

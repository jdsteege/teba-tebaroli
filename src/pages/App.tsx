import { useAppState } from "~/states/AppState";
import { GamePage } from "./GamePage";
import MainMenu from "./MainMenu";
import { Settings } from "./Settings";

function App() {
  const pageString: string = useAppState((state) => state.page);

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

export default App;

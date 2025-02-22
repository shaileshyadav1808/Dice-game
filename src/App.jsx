import styled from "styled-components";
import StartGame from "./Components/StartGame";
import { useState } from "react";
import Game from "./Components/Game";

function App() {
  const [gameStart, setGameStart] = useState(false);

  const toggleGamePlay = (e) => {
    setGameStart((prev) => !prev);
    e.previewDefault();
  };

  return <>{gameStart ? <Game /> : <StartGame toggle={toggleGamePlay} />}</>;
}

export default App;

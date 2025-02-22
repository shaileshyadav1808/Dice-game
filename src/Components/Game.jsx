import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import Roll from "./Roll";
import { useState } from "react";
import { Button, OutlineButton } from "./styled/Button";

const Game = () => {
  const [score, setScore] = useState(0);
  const [selectNum, setSelectNum] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, setError] = useState();

  const rollDice = () => {
    if (!selectNum) {
      setError("YO!! Bro Select A Number DUDE!!");
      return;
    }
    const randomFace = Math.floor(Math.random() * 6) + 1;
    setcurrentDice(randomFace);

    if (selectNum == randomFace) {
      setScore((prev) => prev + randomFace);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectNum(undefined);
  };

  const resetGame = () => {
    setScore(0);
    setSelectNum(undefined);
    setcurrentDice(1);
    setError(undefined);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectNum={selectNum}
          setSelectNum={setSelectNum}
          error={error}
          setError={setError}
        />
      </div>
      <Roll currentDice={currentDice} rollDice={rollDice} />
      <div>
        <div className="btns">
          <OutlineButton onClick={resetGame}>Reset Game</OutlineButton>
        </div>
      </div>
    </MainContainer>
  );
};

export default Game;

const MainContainer = styled.main`
  padding-top: 50px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

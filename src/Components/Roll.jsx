import styled from "styled-components";
import { useState } from "react";

const Roll = ({ currentDice, rollDice }) => {
  const diceFace = [
    "/images/dice/dice-1.png",
    "/images/dice/dice-2.png",
    "/images/dice/dice-3.png",
    "/images/dice/dice-4.png",
    "/images/dice/dice-5.png",
    "/images/dice/dice-6.png",
  ];

  return (
    <DiceContainer>
      <div className="dice">
        <img
          src={diceFace[currentDice - 1]}
          alt="dice.img"
          onClick={rollDice}
          style={{ height: "150px" }}
        />
      </div>
      <p>Click On The Dice </p>
    </DiceContainer>
  );
};

export default Roll;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice img {
    cursor: pointer;
    border-radius: 1rem;
    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    font-size: 24px;
  }
`;

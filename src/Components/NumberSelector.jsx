import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({ setError, selectNum, setSelectNum, error }) => {
  const arrayNumb = [1, 2, 3, 4, 5, 6];
  const numberSelectoreHandler = (value) => {
    setSelectNum(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumb.map((value, i) => (
          <Box
            isSelected={value == selectNum}
            key={i}
            onClick={() => numberSelectoreHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select A Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .error {
    color: red;
  }
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 34px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

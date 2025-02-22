import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dice.png" alt="" />
      </div>

      <div className="content">
        <h1>ROLL THE DICE</h1>
        <Button onClick={toggle}>Play Here !!</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .content {
    h1 {
      font-size: 56px;
    }
  }
`;

const Button = styled.button`
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 18px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.2s background ease-out;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s background ease-in-out;
  }
`;

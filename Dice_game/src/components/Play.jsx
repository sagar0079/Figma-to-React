import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberChoice from "./NumberChoice";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlinedButton } from "../styled.js/Button";
import Rules from "./Rules";

const Play = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

    const getRandom = (min, max) => {
      return Math.floor(Math.random()
          * (max - min + 1)) + min;
    };

  const handleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
      const randomDice = getRandom(1, 6);
      setCurrentDice(randomDice);


      if (selectedNumber === randomDice) {
        setScore((val) => val + randomDice)
      } else {
        setScore((val) => val - 2)
      }

      setSelectedNumber(undefined);
  };

  const handleReset = () => {
    setScore(0);
  }



  return (
    <Main>
        <div className="playscreen">
          <TotalScore score = {score}/>
          <NumberChoice
          setError={setError}
          error={error} 
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice}
        handleDice={handleDice}/>
        <div className="btns">
          <OutlinedButton onClick={handleReset}>Reset</OutlinedButton>
          <Button onClick={() => setShowRules(val => !val)}>{showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        {showRules && <Rules />}
    </Main>
  )
}

export default Play;

const Main = styled.div`

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 30px;
  }

 .playscreen {
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
 }

  margin-top: 64px;
  height: calc(100vh - 64px);
`;
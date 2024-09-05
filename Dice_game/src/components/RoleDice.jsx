import styled from "styled-components";

const RoleDice = ({currentDice, handleDice}) => {

  return (
    <DiceContainer>
        <div onClick={handleDice}>
            <img src = {`/images/dice/dice_${currentDice}.png`} alt="dice1" />
        </div>
        <span className="dice_msg">Click on Dice to roll</span>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`

    span {
        font-size: 24px;
        font-weight: 500;
        margin-top: 15px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
`;
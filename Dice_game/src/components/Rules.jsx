import React from 'react';
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How To Play Dice Game</h1>
        <div className="instructions">
            <span>Select any number</span>
            <span>Click on dice image</span>
            <span>after click on  dice  if selected number is equal to dice number you will get same point as dice if you get wrong guess then  2 point will be dedcuted</span>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    width: 794px;
    height: calc(243px - 54px);
    background: #FBF1F1;
    margin: 44px auto 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
        font-size: 24px;
        font-weight: 700;
        margin-top: 20px;
        margin-left: 20px;
    }

    .instructions {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
    }

`;
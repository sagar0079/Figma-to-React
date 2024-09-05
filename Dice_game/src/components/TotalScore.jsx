import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <ScoreContainer className="score">
        <h1>{score}</h1>
        <span>Total Score</span>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
    /* background: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 150px;
    width: 100%;
    height: 151px;
    position: relative;
    h1 {
        font-size: 100px;
        font-weight: 500;
        line-height: 112px;
        position: absolute;
        bottom: 20px;
    }

    span {
        font-size: 24px;
        font-weight: 500;
        position: absolute;
        bottom: 0;
        line-height: 36px;
    }
`;
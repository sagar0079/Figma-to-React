import styled from "styled-components";
import { Button } from "../styled.js/Button";


const StartScreen = ( {startGame} ) => {
  return (
    <Container>
        <img src="/images/dices.png" />
        <div className="text">
            <span>DICE GAME</span>
            <Button onClick={startGame}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartScreen;

const Container = styled.div`
    max-width: 1182px;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0 auto;

    .text {
        span {
            font-size: 96px;
            font-weight: 700;
        }
        display: flex;
        flex-direction: column;
        align-items: end;
    }
`;
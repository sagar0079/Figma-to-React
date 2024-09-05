import styled from "styled-components";

const NumberChoice = ({setError, error, selectedNumber, setSelectedNumber}) => {


  const numberHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }

  const numArray = [1, 2, 3, 4, 5, 6];
  return (
    <MainContainer>
    <span>{error}</span>
    <BoxContainer>
      {numArray.map((value, i) => (
        <Box 
        isSelected = {value === selectedNumber}
        key={i}
        onClick={() => numberHandler(value)}>
        {value}
      </Box>
      ))}
    </BoxContainer>
    <NumberText>Select Number</NumberText>
    </MainContainer>
  )
}

export default NumberChoice;

const MainContainer = styled.div`
  width: 552px;
  height: 138px;
  display: flex;
  background: #a709a7;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  span {
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    bottom: 100%;
    color: red;
  }
`;

const NumberText = styled.div`
  font-size: 24px;
  font-weight: 700;
`;



const BoxContainer = styled.div`
  width: 552px;
  height: 138px;
  /* background: #cc26cc; */
  display: flex;
  gap: 24px;
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  background: ${(props) => (props.isSelected ? "black" : "white") };
  color: ${(props) => (!props.isSelected ? "black" : "white") };
`;
import styled from "styled-components";

export const Button = styled.button`
    min-width: 220px;
    padding: 10px 18px;
    border-radius: 5px;
    background: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
    font-weight: 600;
    border: 1px solid transparent;
    transition: 0.2s background ease-in;
    &:hover {
        background: white;
        color: black;
        border: 1px solid black;
        transition: 0.2s background ease-in;
    }
`;

export const OutlinedButton = styled(Button)`

    background: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background: black;
        color: white;
        border: 1px solid white;
    }
`;
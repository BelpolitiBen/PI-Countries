import styled from "styled-components";

export const StyledInputButton = styled.input`
    background-color: ${({ theme }) => theme.colors.lightBlue};
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
    :hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;

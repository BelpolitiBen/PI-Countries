import styled from "styled-components";

export const StyledSearchBar = styled.div`
    display: flex;
    box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow};
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    height: 2rem;
    border: none;
    border-radius: 0.5em;
    color: ${({ theme }) => theme.colors.overlayText};
    margin: 0;
    input {
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        color: ${({ theme }) => theme.colors.overlayText};
        border: none;
        border-radius: 0.5em;
        :focus {
            outline: none;
        }
    }
    button {
        box-shadow: none;
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        cursor: pointer;
        border: none;
        border-radius: 0.5em;
        overflow: hidden;
        color: ${({ theme }) => theme.colors.overlayText};
        :hover {
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }
`;

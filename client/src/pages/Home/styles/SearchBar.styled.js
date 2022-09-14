import styled from "styled-components";

export const StyledSearchBar = styled.div`
    display: flex;
    position: relative;
    input {
        box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow};
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.thirdBackground};
        border: none;
        border-radius: 0.5em;
        color: ${({ theme }) => theme.colors.overlayText};
        margin: 0;
    }
    button {
        box-shadow: none;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.thirdBackground};
        top: 3px;
        right: 3px;
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

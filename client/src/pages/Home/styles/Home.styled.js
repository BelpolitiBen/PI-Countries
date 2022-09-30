import styled from "styled-components";

export const StyledHome = styled.div`
    .container {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .reload {
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        border: none;
        border-radius: 0.5em;
        box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow};
        color: ${({ theme }) => theme.colors.overlayText};
        cursor: pointer;
        :hover {
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }
`;

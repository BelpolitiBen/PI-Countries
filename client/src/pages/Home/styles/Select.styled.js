import styled from "styled-components";

export const StyledSelect = styled.select`
    box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow};
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.thirdBackground};
    border: none;
    border-radius: 0.5em;
    color: ${({ theme }) => theme.colors.overlayText};
    :hover {
        color: ${({ theme }) => theme.colors.lightBlue};
    }
`;

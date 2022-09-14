import styled from "styled-components";

export const StyledFilterButtons = styled.ul`
    padding: 0;
    .clicked {
        background-color: ${({ theme }) => theme.colors.green};
    }
`;

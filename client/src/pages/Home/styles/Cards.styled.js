import styled from "styled-components";

export const StyledCards = styled.div`
    display: grid;
    padding: 0 10px;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    gap: 1rem;
    align-items: flex-start;
    a {
        text-decoration: none;
    }
`;

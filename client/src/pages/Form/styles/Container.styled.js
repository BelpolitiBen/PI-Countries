import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    gap: 35px;

    label {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.thirdText};
    }
    .input {
        display: flex;
        flex-direction: column;
        padding: 5px;
        align-items: center;
        position: relative;
    }
`;

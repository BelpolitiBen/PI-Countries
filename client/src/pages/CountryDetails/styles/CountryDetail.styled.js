import styled from "styled-components";

export const StyledDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 30%;
    div {
        width: 150%;
        display: flex;
        flex-direction: row;
    }
    ul {
        background-color: ${({ theme }) => theme.colors.thirdBackground};
        padding: 0 20px;
    }
    img {
        margin-right: 10px;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        max-height: 400px;
        max-width: 600px;
        object-position: center;
    }
    p {
        text-align: start;
        white-space: pre-line;
    }
`;

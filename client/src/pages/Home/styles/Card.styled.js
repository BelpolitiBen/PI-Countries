import styled from "styled-components";

export const StyledCard = styled.div`
    box-shadow: 0 2px 15px 0 ${({ theme }) => theme.colors.shadow};
    border-radius: 0.25rem;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.thirdBackground};
    max-width: 600px;

    .card-header {
        font-size: 1.5rem;
        padding: 0;
        overflow: hidden;
        padding-bottom: 0;
        margin-bottom: 0.5rem;
    }

    .card-header > img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        max-height: 200px;
        object-position: center;
        transition: 200ms transform ease-in-out;
        color: ${({ theme }) => theme.colors.mainText};
    }
    :hover > .card-header > img {
        transform: scale(1.025);
    }
    .card-body {
        padding: 0 1rem;
        color: ${({ theme }) => theme.colors.mainText};
    }
    :hover > .card-body {
        color: ${({ theme }) => theme.colors.lightBlue};
    }
    .card-footer {
        margin-top: 1rem;
        padding: 1rem;
        padding-top: 0;
    }
    .card-footer ul {
        padding-left: 0;
        list-style-type: none;
    }
    .card-footer li {
        display: inline-block;
        margin: 2px;
        margin-bottom: 0px;
    }
`;

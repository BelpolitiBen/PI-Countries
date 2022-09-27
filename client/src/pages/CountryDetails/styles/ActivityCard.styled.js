import styled from "styled-components";

export const StyledActivityCard = styled.div`
    box-shadow: 0 2px 15px 0 ${({ theme }) => theme.colors.shadow};
    border-radius: 0.25rem;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    max-width: 345px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .card-header {
        font-size: 1.5rem;
        padding: 0;
        overflow: hidden;
        padding-bottom: 0;
        h5 {
            margin: 15px;
        }
    }
    .card-body {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        color: ${({ theme }) => theme.colors.mainText};
    }
    p {
        margin: 5px;
    }

    .card-footer {
        padding: 0 1rem;
        padding-bottom: 1rem;
        list-style-type: none;
    }
    .card-footer li {
        display: inline-block;
        margin: 2px;
        margin-bottom: 0px;
    }
`;

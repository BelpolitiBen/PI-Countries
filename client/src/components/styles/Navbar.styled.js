import styled from "styled-components";

export const StyledNavbar = styled.div`
    margin: 0;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    width: 100%;
    box-shadow: 0 1px 30px ${({ theme }) => theme.colors.shadow};
    position: sticky;
    top: 0;
    h1 {
        margin: 0;
        padding: 0;
        top: 1px;
        color: ${({ theme }) => theme.colors.secondaryText};
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.secondaryText};
        font-weight: bold;
        :hover {
            color: ${({ theme }) => theme.colors.mainText};
        }
    }

    ul {
        margin: 0;
        margin-bottom: 3px;
        padding: 0;
        min-width: 696px;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    ul li {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
    }
    .one {
        justify-content: flex-start;
        align-items: center;
        padding-right: 0;
        padding-left: 25px;
        button {
            height: 24px;
            padding: 0;
            cursor: pointer;
            background-color: ${({ theme }) =>
                theme.colors.secondaryBackground};
            border: none;
            color: ${({ theme }) => theme.colors.secondaryText};
            :hover {
                color: ${({ theme }) => theme.colors.mainText};
            }
        }
    }
    .three {
        justify-content: flex-end;
    }
`;

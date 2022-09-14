import styled from "styled-components";

export const StyledPagination = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        li {
            display: inline-block;
            padding: 0 5px;
        }
        button {
            width: 2rem;
            height: 2rem;
            background-color: ${({ theme }) =>
                theme.colors.secondaryBackground};
            border: none;
            border-radius: 0.5em;
            box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow};
            color: ${({ theme }) => theme.colors.overlayText};
            cursor: pointer;
            :hover {
                color: ${({ theme }) => theme.colors.lightBlue};
            }
        }
        .current button {
            color: ${({ theme }) => theme.colors.lightBlue};
            :hover {
                color: ${({ theme }) => theme.colors.mainText};
            }
        }
    }
`;

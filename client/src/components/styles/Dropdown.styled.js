import styled from "styled-components";

export const StyledDropdown = styled.div`
    position: relative;
    padding: 0;
    .searchInputs {
        display: flex;
    }

    .searchInputs input {
        color: ${({ theme }) => theme.colors.secondaryText};
        background-color: ${({ theme }) => theme.colors.thirdBackground};
        box-shadow: 0 1px 10px ${({ theme }) => theme.colors.shadow};
        border: none;
        border-radius: 0.5em;
        margin: 0;
        height: 2rem;
        cursor: text;
    }

    .searchInputs input:focus {
        outline: none;
    }

    .dataResult {
        background-color: ${({ theme }) => theme.colors.thirdBackground};
        position: absolute;
        width: 100%;
        top: 40px;
        overflow: hidden;
        overflow-y: auto;
    }

    .dataResult::-webkit-scrollbar {
        display: none;
    }

    .dataResult .dataItem {
        background-color: ${({ theme }) => theme.colors.thirdBackground};
        border-radius: 0;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        color: black;
        color: ${({ theme }) => theme.colors.secondaryText};
    }
    .dataItem.clicked {
        background-color: ${({ theme }) => theme.colors.green};
        color: white;
        :hover {
            transform: scale(1);
        }
    }

    .dataItem p {
        margin-left: 10px;
    }
    a {
        text-decoration: none;
    }

    a:hover {
        background-color: lightgrey;
    }

    #clearBtn {
        cursor: pointer;
    }
`;

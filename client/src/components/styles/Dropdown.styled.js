import styled from "styled-components";

export const StyledDropdown = styled.div`
    position: relative;
    padding: 0;

    .dropdownContainer {
        display: flex;
        align-items: center;
        box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow};
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        height: 2rem;
        border: none;
        border-radius: 0.5em;
        color: ${({ theme }) => theme.colors.overlayText};
        margin: 0;
        input {
            background-color: ${({ theme }) =>
                theme.colors.secondaryBackground};
            color: ${({ theme }) => theme.colors.overlayText};
            border: none;
            border-radius: 0.5em;
            :focus {
                outline: none;
            }
        }
        button {
            box-shadow: none;
            padding: 1px 4px;
            background-color: ${({ theme }) =>
                theme.colors.secondaryBackground};
            cursor: pointer;
            border: none;
            border-radius: 0.5em;
            overflow: hidden;
            color: ${({ theme }) => theme.colors.overlayText};
            :hover {
                color: ${({ theme }) => theme.colors.lightBlue};
            }
        }
    }
    #fake {
        cursor: default;
        :hover {
            color: ${({ theme }) => theme.colors.overlayText};
        }
    }
    #clearBtn {
        cursor: pointer;
    }

    .dataResult {
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
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
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
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
`;

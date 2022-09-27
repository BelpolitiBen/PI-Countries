import styled from "styled-components";

export const StyledForm = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    h1 {
        padding-left: 10px;
    }
    .error {
        color: red;
        font-size: 0.75rem;
        white-space: nowrap;
        margin: 0;
        padding-top: 3px;
    }
    .error.duration {
        padding-right: 5px;
    }
    .error.difficulty {
        opacity: 0;
    }
    .error.difficulty.visible {
        opacity: 100;
    }
    .clicked {
        background-color: ${({ theme }) => theme.colors.green};
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin-top: 0;
        li {
            padding-top: 0;
        }
        input {
            background-color: ${({ theme }) => theme.colors.lightBlue};
            color: white;
            font-weight: bold;
            border: none;
            border-radius: 0.25em;
            cursor: pointer;
            :hover {
                opacity: 0.9;
                transform: scale(0.98);
            }
        }
    }
    li {
        padding: 10px 0;
    }
    .textInput,
    .numberInput,
    .selected {
        color: ${({ theme }) => theme.colors.secondaryText};
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
        border: none;
        border-radius: 0.5em;
        margin-top: 3px;
    }
    #selectedCountries {
        margin-top: 10px;
        width: fit-content;
        align-self: center;
    }
    .textInput,
    .numberInput {
        height: 2rem;
        cursor: text;
        :focus {
            outline: none;
        }
    }
    .numberInput {
        width: 2rem;
    }
    .numberInput::-webkit-outer-spin-button,
    .numberInput::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .numberInput[type="number"] {
        -moz-appearance: textfield;
    }
    .duration {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        gap: 3px;
        .numberInput {
            margin-right: 0;
        }
    }

    .seasons button,
    .submit {
        cursor: pointer;
        border: none;
        border-radius: 0.5em;
        box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow};
        font-weight: bold;
        color: ${({ theme }) => theme.colors.mainText};
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        :hover {
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }
`;

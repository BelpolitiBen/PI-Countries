import styled from "styled-components";

export const StyledCustomSelect = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow};
    height: 2rem;
    min-width: 10rem;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    border-radius: 0.5em;
    color: ${({ theme }) => theme.colors.overlayText};
    outline: none;

    .values {
        flex-grow: 1;
        display: flex;
        gap: 5px;
    }

    .divider {
        background-color: ${({ theme }) => theme.colors.overlayText};
        align-self: stretch;
        width: 0.05rem;
    }
    .caret {
        translate: 0 25%;
        border: 0.25rem solid transparent;
        border-top-color: ${({ theme }) => theme.colors.overlayText};
    }
    :hover > .caret {
        border-top-color: ${({ theme }) => theme.colors.lightBlue};
    }
    .clearBtn {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        font-size: 1.25em;
        color: ${({ theme }) => theme.colors.overlayText};
        :hover {
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }
    .options {
        margin: 0;
        padding: 0;
        list-style: none;
        position: absolute;
        display: none;
        max-height: 15rem;
        overflow-y: auto;
        border-radius: 0.5em;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        left: 0;
        top: calc(100% + 0.25em);
        z-index: 1;
    }
    .options.show {
        display: flex;
        flex-direction: column;
    }

    .option {
        padding: 0.25rem 0.5rem;
        font-weight: bold;
        cursor: pointer;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.secondaryText};
        border: none;
        background: none;
        cursor: pointer;
        :hover {
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }

    .option.selected {
        background-color: ${({ theme }) => theme.colors.green};
        color: white;
        :hover {
            color: black;
        }
    }
    .optionButton {
        display: flex;
        align-items: center;
        border-radius: 0.5em;
        padding: 5px 8px;
        border: none;
        gap: 0.25rem;
        cursor: pointer;
        background: none;
        outline: none;
        color: ${({ theme }) => theme.colors.mainText};
        background-color: rgb(30, 42, 56);
        .removeBtn {
            color: ${({ theme }) => theme.colors.mainText};
            border: none;
            background: none;
        }
        :hover,
        :focus {
            .removeBtn {
                color: ${({ theme }) => theme.colors.lightBlue};
            }
        }
    }
    .placeholder {
        font-size: 0.8em;
        opacity: 0.5;
        color: light grey;
        cursor: default;
    }
`;

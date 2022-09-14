import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    color: ${({ theme }) => theme.colors.mainText};
    font-family: "Segoe UI";
}

*, *::before, *::after {
    box-sizing: border-box;
}

input {
    margin: 0 2.5px;
}
`;

import { createGlobalStyle, css } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  a, a:visited, a:hover, a:active {
  color: inherit;
}

body {
  overflow: hidden;
}
`;

export const VerticalCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

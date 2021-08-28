import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid orange;
  color: orange;
  padding: 0.25em 1em;
  cursor: pointer;

  ${({ width }) =>
    width
      ? `
			width: ${width}`
      : `min-width: 65px;`};

  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
`;

export const VerticalCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled, { createGlobalStyle, css } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  a, a:visited, a:hover, a:active {
  color: inherit;
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

  ${({ stock }) => {
    if (stock === 0) {
      return `
      color: #e8e8e8;
      border: 2px solid #e8e8e8;
      `;
    }
  }}
`;

export const VerticalCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

export const Loader = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 150px;
  height: 150px;
`;

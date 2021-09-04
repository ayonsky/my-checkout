import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid orange;
  color: orange;
  padding: 0.25em 1em;
  cursor: pointer;
  width: 65px;

  ${({ disabled }) => {
    if (disabled) {
      return `
      color: #e8e8e8;
      border: 2px solid #e8e8e8;
      `;
    }
  }}
`;

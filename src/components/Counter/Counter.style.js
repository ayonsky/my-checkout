import styled from "styled-components";

export const CounterButton = styled.button`
  text-align: center;
  font-size: 18px;
  color: grey;
  width: 25px;
  height: 25px;
  border: none;
  background-color: transparent;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  cursor: pointer;

  ${({ action }) =>
    action === "decrement"
      ? `border-left: 1px solid gainsboro`
      : `border-right: 1px solid gainsboro;`};

  ${({ action, max, counter }) => {
    if (
      (action === "decrement" && counter === 0) ||
      (action === "increment" && max === 0)
    ) {
      return `color: #e8e8e8`;
    }
  }}
`;

export const CounterInput = styled.input`
  width: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  color: grey;
  height: 23px;
  outline: none;
  border: none;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
`;
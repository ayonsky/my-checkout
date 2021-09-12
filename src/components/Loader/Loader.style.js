import styled, { keyframes } from "styled-components";

const LoaderAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  cursor: progress;
`;

export const StyledLoader = styled.div`
  position: relative;
  height: 5px;
  width: 100%;
  background-color: orange;
  animation-name: ${LoaderAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

import React from "react";
import { LoaderContainer, StyledLoader } from "./Loader.style";
import useLoader from "../../hooks/useLoader";

function Loader() {
  const { loading } = useLoader();
  return (
    <>
      {loading && (
        <LoaderContainer>
          <StyledLoader />
        </LoaderContainer>
      )}
    </>
  );
}

export default Loader;

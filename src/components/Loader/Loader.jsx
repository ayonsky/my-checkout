import React from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { LoaderContainer, StyledLoader } from "./Loader.style";
import useLoader from "../../hooks/useLoader";

function Loader() {
  const { loading } = useLoader();
  return (
    <>
      {loading && (
        <LoaderContainer>
          <StyledLoader>
            <CircleLoader color={"orange"} loading={loading} size={150} />
          </StyledLoader>
        </LoaderContainer>
      )}
    </>
  );
}

export default Loader;

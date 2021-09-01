import React from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { LoaderContainer, StyledLoader } from "./Loader.style";
import useProducts from "../../hooks/useProducts";

function Loader() {
  const { loading } = useProducts();
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

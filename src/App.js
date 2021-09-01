import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { GlobalStyles, Loader, LoaderContainer } from "./App.style";
import CircleLoader from "react-spinners/CircleLoader";
import RoutesHandler from "./routes/RoutesHandler";
import useProducts from "./hooks/useProducts";

function App() {
  const { loading } = useProducts();

  return (
    <>
      <GlobalStyles />
      {loading && (
        <LoaderContainer>
          <Loader>
            <CircleLoader color={"orange"} loading={loading} size={150} />
          </Loader>
        </LoaderContainer>
      )}
      <BrowserRouter>
        <Switch>
          <RoutesHandler />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

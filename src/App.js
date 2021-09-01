import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { GlobalStyles } from "./App.style";
import RoutesHandler from "./routes/RoutesHandler";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <>
      <GlobalStyles />
      <Loader />
      <BrowserRouter>
        <Switch>
          <RoutesHandler />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

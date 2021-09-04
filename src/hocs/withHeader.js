import React from "react";
import { Header } from "../components/Header/Header.style";
import NavBar from "../components/NavBar/NavBar";

function withHeader(Component, options) {
  const { pageName = "" } = options;
  function withHeaderWrapper({ ...props }) {
    return (
      <Header>
        <NavBar pageName={pageName} />
        <Component {...props} />
      </Header>
    );
  }

  return withHeaderWrapper;
}

export default withHeader;

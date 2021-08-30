import React from "react";
import NavBar from "../components/NavBar/NavBar";

function withHeader(Component, options) {
  const { pageName = "" } = options;
  function withHeaderWrapper({ ...props }) {
    return (
      <div
        className={"headerContainer"}
        style={{ display: "flex", flexFlow: "column", height: "100vh" }}
      >
        <NavBar pageName={pageName} />
        <Component {...props} />
      </div>
    );
  }

  return withHeaderWrapper;
}

export default withHeader;

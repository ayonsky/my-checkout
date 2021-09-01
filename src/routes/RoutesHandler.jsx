import React from "react";
import { Route } from "react-router-dom";
import { routes } from "./routes";

function RoutesHandler() {
  return routes.map((route, index) => <Route key={index} {...route} />);
}

export default RoutesHandler;

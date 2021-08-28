import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./App.style";
import CartView from "./views/Cart/Cart";
import ProductListLayout from "./views/ProductList/ProductListLayout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/cart">
          <CartView />
        </Route>
        <Route path="/">
          <ProductListLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

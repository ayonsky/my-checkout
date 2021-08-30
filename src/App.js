import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles, Loader, LoaderContainer } from "./App.style";
import CartView from "./views/Cart/Cart";
import ProductListLayout from "./views/ProductList/ProductListLayout";
import CircleLoader from "react-spinners/CircleLoader";
import useProducts from "./hooks/useProducts";

function App() {
  const { loading } = useProducts();

  return (
    <>
      {loading && (
        <LoaderContainer>
          <Loader>
            <CircleLoader color={"orange"} loading={loading} size={150} />
          </Loader>
        </LoaderContainer>
      )}
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
    </>
  );
}

export default App;

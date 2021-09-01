import CartView from "../views/Cart/Cart";
import ProductListLayout from "../views/ProductList/ProductListLayout";

export const routes = [
  { path: "/", exact: true, component: ProductListLayout },
  { path: "/cart", exact: true, component: CartView },
];

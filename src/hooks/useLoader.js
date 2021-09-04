import { useSelector } from "react-redux";

function useLoader() {
  return {
    loading: useSelector(
      (state) => state.products.loading || state.cart.loading
    ),
  };
}

export default useLoader;

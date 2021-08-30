import { get, patch } from "axios";
import { parseItem, parseList } from "../../utils";
import { API } from "./config";

const headers = {
  "Content-Type": "application/json",
};

export const loadProductsAPI = async () => {
  const response = await get(`${API}/grocery`);
  return parseList(response, 200);
};

export const updateProductAPI = async (product) => {
  const { id } = product;
  const response = await patch(`${API}/grocery/${id}`, product, { headers });
  return parseItem(response, 200);
};

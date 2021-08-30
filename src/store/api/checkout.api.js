import { get, patch } from "axios";
import { parseItem, parseList } from "../../utils";
import { API } from "./config";

const headers = {
  "Content-Type": "application/json",
};

export const loadProductsAPI = async () => {
  const response = await get(`${API}/grocery?_page=1&_limit=20`);
  return parseList(response, 200);
};

export const loadMoreProductsAPI = async (page) => {
  const response = await get(`${API}/grocery?_page=${page}&_limit=20`);
  return parseList(response, 200);
};

export const loadFavoriteProductsAPI = async () => {
  const response = await get(`${API}/grocery?favorite=1`);
  return parseList(response, 200);
};

export const updateProductAPI = async (product) => {
  const { id } = product;
  const response = await patch(`${API}/grocery/${id}`, product, { headers });
  return parseItem(response, 200);
};

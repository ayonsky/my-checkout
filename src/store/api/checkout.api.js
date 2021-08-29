import axios, {get} from "axios";
import { parseList } from "../../utils";
import { API_ENDPOINT } from "../config";

export const loadProducts = async () => {
    const response = await get(`${API_ENDPOINT}/grocery`);
    return parseList(response, 200);
};

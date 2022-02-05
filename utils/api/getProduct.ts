import type { ProductType } from "../../types";
import axios from "axios";
export const getAllProducts = (): ProductType[] => {
	const data = axios
		.get<ProductType[]>("https://fakestoreapi.com/products")
		.then((res) => res.data);
	return data;
};

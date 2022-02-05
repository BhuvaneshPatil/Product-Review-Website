import { ProductType } from "../../types";
import * as api from "../../utils/api";
import * as actionNames from "../actions/actionConstants";
export const putProducts = () => async (dispatch) => {
	try {
		const data = await api.getAllProducts();
		dispatch({ type: actionNames.FETCH_ALL, payload: data });
	} catch (error) {}
};

export const putRouteProduct = (data: ProductType | {}) => async (dispatch) => {
	try {
		dispatch({ type: actionNames.ADD_ROUTE_PRODUCT, payload: data });
	} catch (error) {}
};

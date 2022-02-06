import { ProductType } from "../../types";
import * as actionNames from "../actions/actionConstants";
export default (product: ProductType | {} = {}, action) => {
	switch (action.type) {
		case actionNames.ADD_ROUTE_PRODUCT:
			return action.payload;
		default:
			return product;
	}
};

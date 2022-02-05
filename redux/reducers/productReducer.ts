import * as actionNames from "../actions/actionConstants";
export default (products: [] = [], action: unknown) => {
	switch (action.type) {
		case actionNames.FETCH_ALL:
			return [...action.payload];
		default:
			return products;
	}
};

import { applyMiddleware, combineReducers, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

import productReducer from "./reducers/productReducer";
import productRouteReducer from "./reducers/productRouteReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
	products: productReducer,
	routeProduct: productRouteReducer,
	user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export const wrapper = createWrapper(store, { debug: true });

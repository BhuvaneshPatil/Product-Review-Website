import { UserType } from "../../types/user/userType";
import * as actionNames from "../actions/actionConstants";
export default (user: UserType | {} = {}, action) => {
	switch (action.type) {
		case actionNames.ADD_USER:
			return action.payload;
		case actionNames.LOG_OUT:
			localStorage.removeItem("token");
			return {};
		default:
			return user;
	}
};

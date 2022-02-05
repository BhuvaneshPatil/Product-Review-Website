import { UserType } from "../../types/user/userType";
import * as actionNames from "./actionConstants";
import { getUser } from "../../utils/api";
export const addUserToStore = () => async (dispatch) => {
	try {
		const data = await getUser();
		dispatch({ type: actionNames.ADD_USER, payload: data });
	} catch (error) {}
};

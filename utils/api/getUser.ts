import axios from "axios";
import { UserType } from "../../types/user/userType";

export const getUser = (): UserType | {} => {
	const data = axios
		.get<UserType | {}>("https://randomuser.me/api/?inc=name,picture")
		.then((res) => {
			let comingUser = res.data.results[0];
			let user: UserType | {} = {};
			user.name = {
				firstName: comingUser.name.first,
				lastName: comingUser.name.last,
			};
			user.imageUrl = comingUser.picture.thumbnail;
			return user;
		});

	return data;
};

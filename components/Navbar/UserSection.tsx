import { Avatar, Button, useTab, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserToStore, logout } from "../../redux/actions/userActions";
import { RootState } from "../../redux/store";
import { UserType } from "../../types/user/userType";

const UserSection = () => {
	const user: UserType | {} = useSelector((state: RootState) => state.user);
	const [isAuth, setIsAuth] = useState(false);
	const dispatch = useDispatch();
	const router = useRouter();
	const toast = useToast();
	useEffect(() => {
		if (localStorage.getItem("token")) {
			if (!user?.name) {
				dispatch(addUserToStore());
			}
			setIsAuth(true);
		}
	}, [user]);
	const handleLogout = () => {
		dispatch(logout());
		setIsAuth(false);
		toast({
			title: "Logged out successfully",
			status: "info",
			isClosable: true,
			duration: 3000,
		});
	};
	if (isAuth) {
		return (
			<>
				<Avatar src={user?.imageUrl}></Avatar>
				<Button onClick={handleLogout} ml={"10px"} colorScheme={"red"}>
					Log out
				</Button>
			</>
		);
	} else {
		return (
			<Button
				onClick={() => router.push("/signin")}
				colorScheme={"green"}
			>
				Sign in
			</Button>
		);
	}
};

export default UserSection;

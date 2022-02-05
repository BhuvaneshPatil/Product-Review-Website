import { Avatar, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { UserBlockProps } from "../../types/user/userType";

const UserBlock = ({ user }: UserBlockProps) => {
	return (
		<Box display={"flex"} gap={"10px"} alignItems="center" mb={"2"}>
			<Avatar src={user?.imageUrl} />
			<Heading
				size={"sm"}
			>{`${user?.name?.firstName} ${user?.name?.lastName}`}</Heading>
		</Box>
	);
};

export default UserBlock;
// export default UserBlock;

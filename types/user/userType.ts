export type UserType = {
	_id?: string;
	name: {
		firstName: string;
		lastName: string;
	};
	imageUrl: string;
};

export type UserBlockProps = {
	user: UserType;
};

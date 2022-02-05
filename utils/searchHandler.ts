import { ProductType } from "../types";

export const searchHandler = (
	query: string,
	list: ProductType[]
): ProductType[] | [] => {
	query = query.toLowerCase().trim();
	//  1 - using includes method
	// const arr = list.filter((item: ProductType) => {
	// 	return item.title.toLowerCase().includes(query);
	// });
	// 2 - using regex
	const regex = new RegExp(query);
	const arr = list.filter((item: ProductType) => {
		return regex.test(item.title.toLowerCase());
	});
	return arr;
};

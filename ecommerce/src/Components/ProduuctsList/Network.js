import { GetResource } from "../../Services";

export const getProducts = ( onSuccess, onFail) => {

	let path = `product-details/`;

	GetResource(path, onSuccess, onFail);
};


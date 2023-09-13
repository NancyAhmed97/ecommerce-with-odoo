import axios from "axios";


export const baseUrl = "https://q8coders-staging-8077346.dev.odoo.com/";



export function PostResource(path, data, onSuccess, onFail, reqAuth, formData) {
	const requestData = {
		method: "post",
		url: baseUrl + path,
		headers: {
            // Authorization:
        },
		data,
	};

	// if (formData) {
	// 	requestData.headers = {
	// 		"content-type": "multipart/form-data",
	// 	};
	// }

	// if (reqAuth && token) {
	// 	requestData.headers = {
	// 		Authorization: "Bearer " + token,
	// 	};
	// }

	axios(requestData)
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((err) => {
			onFail(err.response);
			// onFailStatus(err.response);
			console.log(err);
		});
}

export function GetResource(path, onSuccess, onFail) {
//     const GetToken=()=>{
//         const x = useSelector((state) => state);
// console.log(x);
//     }	
//     GetToken()
    const requestData = {
		method: "get",
		url: baseUrl + path,
		headers: {Authorization:"f03d2aba9902f38eb0925cbd66ee0a5cb096d0ec"},
	};


	// if (reqAuth && token) {
	// 	requestData.headers = {
	// 		Authorization: "Bearer " + token,
	// 	};
	// }

	axios(requestData)
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((err) => {
			onFail(err.response);
			// onFailStatus(err.response);
			console.log(err);
		});
}

export function deleteResource(path, onSuccess, onFail, reqAuth) {
	const requestData = {
		method: "delete",
		url: baseUrl + path,
		headers: {},
	};

	// if (reqAuth && token) {
	// 	requestData.headers = {
	// 		Authorization: "Bearer " + token,
	// 	};
	// }

	axios(requestData)
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((err) => {
			onFail(err.response);
			// onFailStatus(err.response);
			console.log(err);
		});
}

export function PatchResource(
	path,
	data,
	onSuccess,
	onFail,
	reqAuth,
	formData
) {
	const requestData = {
		method: "patch",
		url: baseUrl + path,
		headers: {},
		data,
	};
	// if (formData) {
	// 	requestData.headers = {
	// 		"content-type": "multipart/form-data",
	// 	};
	// }

	// if (reqAuth && token) {
	// 	requestData.headers = {
	// 		Authorization: "Bearer " + token,
	// 	};
	// }
	axios(requestData)
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((err) => {
			onFail(err.response);
			console.log(err);
			// onFailStatus(err.response);
		});
}


export function PutResource(
	path,
	data,
	onSuccess,
	onFail,
	reqAuth,
	formData
) {
	const requestData = {
		method: "put",
		url: baseUrl + path,
		headers: {},
		data,
	};
	// if (formData) {
	// 	requestData.headers = {
	// 		"content-type": "multipart/form-data",
	// 	};
	// }

	// if (reqAuth && token) {
	// 	requestData.headers = {
	// 		Authorization: "Bearer " + token,
	// 	};
	// }
	axios(requestData)
		.then((res) => {
			onSuccess(res);
		})
		.catch((err) => {
			onFail(err.response);
			console.log(err);
			// onFailStatus(err.response);
		});
}




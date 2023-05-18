import { actionTypes } from "../constants/actionTypes";

export const handledarkMode = (e) => {
	localStorage.setItem("darkmode", e);

	return {
		type: actionTypes.DARK_MODE,
		payload: e,
	};
};

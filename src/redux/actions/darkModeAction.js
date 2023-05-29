import { actionTypes } from "../constants/actionTypes";

export const handledarkMode = (e) => {
	return {
		type: actionTypes.DARK_MODE,
		payload: e,
	};
};

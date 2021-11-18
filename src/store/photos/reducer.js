import {
	SET_ERROR_PHOTOS,
	SET_LOADING_PHOTOS,
	SET_DATA_PHOTOS,
} from "./actions";
const initialState = {
	isError: false,
	isLoading: false,
	data: null,
};
export const photosReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING_PHOTOS: {
			return { ...state, isLoading: action.payload };
		}
		case SET_ERROR_PHOTOS: {
			return { ...state, isError: action.payload };
		}
		case SET_DATA_PHOTOS: {
			return { ...state, data: action.payload };
		}
		default: {
			return state;
		}
	}
};

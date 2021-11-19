export const SET_ERROR_PHOTOS = "SET_ERROR_PHOTOS";
export const SET_LOADING_PHOTOS = "SET_LOADING_PHOTOS";
export const SET_DATA_PHOTOS = "SET_DATA_PHOTOS";

export const setLoading = (status) => ({
	type: SET_LOADING_PHOTOS,
	payload: status,
});
export const setError = (status) => ({
	type: SET_ERROR_PHOTOS,
	payload: status,
});
export const setData = (todos) => ({
	type: SET_DATA_PHOTOS,
	payload: todos,
});

const FACTS_API = "https://meowfacts.herokuapp.com/";
const IMAGE_API = "https://api.thecatapi.com/v1/images/search";

export const getRandomAnimals = async (dispatch) => {
	dispatch(setLoading(true));
	dispatch(setError(false));

	try {
		const response = await Promise.all([
			fetch(FACTS_API),
			fetch(IMAGE_API),
		]);
		const [factsReult, imageResult] = await Promise.all(
			response.map((response) => response.json()),
		);
		dispatch(
			setData({
				facts: factsReult.data[0],
				url: imageResult[0].url,
			}),
		);
	} catch (e) {
		console.err(e);
		dispatch(setError(true));
	}
	dispatch(setLoading(false));
};

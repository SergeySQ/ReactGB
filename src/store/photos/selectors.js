export const getPhotosStore = (store) => store.photos;
export const getPhotosData = (store) => getPhotosStore(store).data;
export const getPhotosLoading = (store) => getPhotosStore(store).isLoading;
export const getPhotosError = (store) => getPhotosStore(store).isError;

export const photosSelectors = {
	getPhotosStore,
	getPhotosData,
	getPhotosLoading,
	getPhotosError,
};

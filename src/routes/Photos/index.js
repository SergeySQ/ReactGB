import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { photosSelectors, getRandomPhotos } from "../../store/photos";

import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { Figure } from "../../components/Figure";
import { Button } from "@material-ui/core";

export const Photos = () => {
	const data = useSelector(photosSelectors.getPhotosData);
	const isError = useSelector(photosSelectors.getPhotosError);
	const isLoading = useSelector(photosSelectors.getPhotosLoader);

	const dispatch = useDispatch();

	//Вызывает запрос на получение фото
	const getData = () => {
		dispatch(getRandomPhotos);
	};
	useEffect(() => {
		dispatch(getRandomPhotos);
	}, []);

	return (
		<div>
			<h1> Милафки </h1>
			{!isError && (
				<Button onClick={getData} disabled={isLoading}>
					Перезагрузить
				</Button>
			)}
			{isError && <Error reload={getData} />}
			{isLoading && <Loader />}
			{!isLoading && data && <Figure {...data} />}
		</div>
	);
};

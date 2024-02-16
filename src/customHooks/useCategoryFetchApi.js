import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_CAT_API_KEY;
const API_URL = import.meta.env.VITE_CAT_API_URL;

export default function useCategoryFetchApi(categoryName) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState();

	const getApiData = async () => {
		const response = await fetch(
			`${API_URL}/images/search?limit=10&breed_ids=${categoryName}`,
			{
				headers: {
					"x-api-key": API_KEY,
				},
			}
		);
		const responseData = await response.json();
		if (!response.ok) {
			setIsError(true);
			setError("Data could not be received!");
			throw new Error("Data could not be received!");
		}
		setData(responseData);
		setIsLoading(false);
	};

	useEffect(() => {
		setTimeout(() => getApiData(), 2000);
	}, []);

	return [data, isLoading, isError, error];
}

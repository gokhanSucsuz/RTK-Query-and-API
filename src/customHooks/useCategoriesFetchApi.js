import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_CAT_API_URL;

export default function useCategoriesFetchApi() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState();

	const getApiData = async () => {
		const response = await fetch(`${API_URL}/breeds`);
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

import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const abortCont = new AbortController();

		fetch(url, { singal: abortCont.signal })
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
				setError(false);

				if (Array.isArray(data) === false) {
					setError(true);
				}
			})
			.catch((err) => {
				if (err.message === "AbortError") {
					console.log("fetch aborted");
				} else {
					console.log(err.message);
					setLoading(false);
					setError(true);
					// setData(null);
				}
			});

		return () => {
			abortCont.abort();
		};
	}, [url]);

	return { data, loading, error };
};

export default useFetch;

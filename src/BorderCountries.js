import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const BorderCountries = (props) => {
	const detail = props.data;
	var url;

	if (detail.borders !== undefined) {
		var borders = Object.values(detail.borders);
		url = "https://restcountries.com/v3.1/alpha?codes=" + borders.join(",");
	} else {
		url = "none";
	}

	const { data, loading, error } = useFetch(url);

	return (
		<div className="three">
			<h4>Border Countries: </h4>
			{loading && <p>Loading...</p>}
			{error && <p>Borders not found</p>}
			{data &&
				Array.isArray(data) &&
				data.map((border) => (
					<Link to={"/react-rest-countries/" + border.cca3} key={border.cca3}>
						<p>{border.name.common}</p>
					</Link>
				))}
		</div>
	);
};

export default BorderCountries;

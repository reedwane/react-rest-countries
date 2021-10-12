import { Link, useParams } from "react-router-dom";
import MoreDetails from "./MoreDetails";
import useFetch from "./useFetch";

const CountryDetail = () => {
	const { country } = useParams();
	let url = "https://restcountries.com/v3.1/alpha/" + country;

	const { data, loading, error } = useFetch(url);

	return (
		<div className="specific">
			<Link to="/react-rest-countries">
				<p className="home">&#8592; Back</p>
			</Link>

			{loading && <h2>Loading..</h2>}

			{error && (
				<div>
					<h2>Could not get country details</h2>
					<Link to="/react-rest-countries">Back to homepage</Link>
				</div>
			)}

			{data && Array.isArray(data) && <MoreDetails data={data[0]} />}
		</div>
	);
};

export default CountryDetail;

import { useEffect, useState } from "react";
import CountriesList from "./CountriesList";

const Home = () => {
	const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");

	// this is to change the url only when the filter value gets updated
	useEffect(() => {
		if (filter) {
			if (filter === "all") {
				setUrl("https://restcountries.com/v3.1/all");
			} else {
				console.log(filter);
				setUrl("https://restcountries.com/v3.1/region/" + filter);
			}
		}
	}, [filter]);

	return (
		<div>
			<div className="search-filter">
				<input
					type="search"
					name="search"
					id="search"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					onKeyUp={(e) => {
						if (e.key === "Enter" && search !== "") {
							// this changes the url to fetch from when a search value is entered
							setUrl("https://restcountries.com/v3.1/name/" + search);
						}
					}}
					placeholder="Search for a country by name..."
				/>
				<p
					onClick={() => {
						if (search !== "") {
							setUrl("https://restcountries.com/v3.1/name/" + search);
						}
					}}
				>
					search
				</p>
				<select
					required
					id="filter"
					value={filter || "all"}
					name="filter"
					onChange={(e) => {
						setFilter(e.target.value);
					}}
				>
					<option value="all">Filter by Region</option>
					<option value="Africa">Africa</option>
					<option value="Americas">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>

			<CountriesList url={url} />
		</div>
	);
};

export default Home;

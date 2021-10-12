import { useEffect, useState } from "react";

const SearchFilter = () => {
	const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
	const [search, setSearch] = useState("");

	useEffect(() => {
		console.log(url);
		return url;
	}, [url]);

	return (
		<div className="search-filter">
			<input
				type="search"
				name="search"
				id="search"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					setUrl("https://restcountries.com/v3.1/name/" + search);
				}}
				placeholder="Search for a country by name..."
			/>

			<select required id="filter" defaultValue="none" name="filter">
				<option hidden disabled value="none">
					Filter by Region
				</option>
				<option value="Africa">Africa</option>
				<option value="Americas">America</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</div>
	);
};

export default SearchFilter;

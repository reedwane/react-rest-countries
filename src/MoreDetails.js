import BorderCountries from "./BorderCountries";

const MoreDetails = (props) => {
	// details is the data for the specific country clicked passed down as a prop
	const details = props.data;

	// this is done as there are distinct keys for native names for each country
	let nativeNameKey = Object.keys(details.name.nativeName)[0];
	let nativeName = details.name.nativeName[nativeNameKey].official;

	// we need the keys for the languages as well
	let lang = Object.keys(details.languages);
	let languages = [];
	for (let i = 0; i < lang.length; i++) {
		//pushing the languages into an array
		languages.push(details.languages[lang[i]]);
	}

	return (
		<div className="more-detail">
			<img src={details.flags.png} alt={(details.name.official, "flag")} />

			<div className="one">
				<h2 className="country-name">{details.name.official}</h2>
				<p className="native-name">
					Native Name: <span className="tag">{nativeName}</span>
				</p>

				<p className="population">
					Population:{" "}
					<span className="tag">{details.population.toLocaleString("en")}</span>
				</p>
				<p className="region">
					Region: <span className="tag">{details.region}</span>
				</p>
				<p className="capital">
					Capital: <span className="tag">{details.capital}</span>
				</p>
			</div>

			<div className="two">
				<p className="domain">
					Top Level Domain: <span className="tag">{details.tld}</span>
				</p>
				<p className="currencies">
					Currencies:{" "}
					<span className="tag">{Object.keys(details.currencies)[0]}</span>
				</p>
				<p className="language">
					Languages: <span className="tag">{languages.join(", ")}</span>
				</p>
			</div>

			{<BorderCountries data={details} />}
		</div>
	);
};

export default MoreDetails;

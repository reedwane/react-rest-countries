import BorderCountries from "./BorderCountries";

const MoreDetails = (props) => {
	const details = props.data;
	let nativeNameKey = Object.keys(details.name.nativeName)[0];
	let nativeName = details.name.nativeName[nativeNameKey].official;

	let lang = Object.keys(details.languages);
	let languages = [];
	for (let i = 0; i < lang.length; i++) {
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

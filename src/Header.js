const Header = () => {
	const handleTheme = (e) => {
		let root = document.documentElement;

		const presentTheme = window
			.getComputedStyle(e.target)
			.getPropertyValue("background-color");

		if (presentTheme !== "rgb(43, 57, 69)") {
			root.style.setProperty("--Mode-Elements", "hsl(209, 23%, 22%)");
			root.style.setProperty("--Mode-Text", "hsl(0, 0%, 100%)");
			root.style.setProperty("--Mode-Background", "hsl(207, 26%, 17%)");
		} else {
			root.style.setProperty("--Mode-Elements", "hsl(0, 0%, 100%)");
			root.style.setProperty("--Mode-Text", "hsl(200, 15%, 8%)");
			root.style.setProperty("--Mode-Background", "hsl(0, 0%, 98%)");
		}
	};
	return (
		<div className="header">
			<h1>Where in the world?</h1>
			<p className="theme-toggle" onClick={handleTheme}>
				<i className="far fa-moon"></i> Dark Mode
			</p>
		</div>
	);
};

export default Header;

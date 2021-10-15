const Header = () => {
	const handleTheme = (e) => {
		let root = document.documentElement;
		let body = document.querySelector("body");
		// let searchIcon = document.querySelector(".input-div img");

		body.classList.add("pre-animation");

		// to get the present background of the app
		const presentTheme = window
			.getComputedStyle(e.target)
			.getPropertyValue("background-color");
		setTimeout(() => {
			//if the present theme isn't the dark theme
			if (presentTheme !== "rgb(43, 57, 69)") {
				root.style.setProperty("--Mode-Elements", "hsl(209, 23%, 22%)");
				root.style.setProperty("--Mode-Text", "hsl(0, 0%, 100%)");
				root.style.setProperty("--Mode-Background", "hsl(207, 26%, 17%)");
				// searchIcon.setAttribute("src", "./lens-white.png");
			} else {
				//if the present theme is the white theme
				root.style.setProperty("--Mode-Elements", "hsl(0, 0%, 100%)");
				root.style.setProperty("--Mode-Text", "hsl(200, 15%, 8%)");
				root.style.setProperty("--Mode-Background", "hsl(0, 0%, 98%)");
				// searchIcon.setAttribute("src", "./lens-black.png");
			}

			body.classList.remove("pre-animation");
			body.classList.add("post-animation");
		}, 1200);
	};
	return (
		<div className="header">
			<h1>Where in the world?</h1>
			<p className="theme-toggle">
				<i className="far fa-moon" onClick={handleTheme}></i>{" "}
				<span onClick={handleTheme}> Dark Mode</span>
			</p>
		</div>
	);
};

export default Header;

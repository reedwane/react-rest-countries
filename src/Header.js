const Header = () => {
	const handleTheme = (e) => {
		let root = document.documentElement;
		let body = document.querySelector("body");

		body.classList.add("pre-animation");

		const presentTheme = window
			.getComputedStyle(e.target)
			.getPropertyValue("background-color");
		setTimeout(() => {
			if (presentTheme !== "rgb(43, 57, 69)") {
				root.style.setProperty("--Mode-Elements", "hsl(209, 23%, 22%)");
				root.style.setProperty("--Mode-Text", "hsl(0, 0%, 100%)");
				root.style.setProperty("--Mode-Background", "hsl(207, 26%, 17%)");
				// root.style.setProperty("--search-url", "url('./lens-white.png')");
				// input.style.background =
				// 	"var(--Mode-Elements) url('./lens-white.png') 7% 50% / 5% no-repeat";
				// console.log("whitetheme");
			} else {
				root.style.setProperty("--Mode-Elements", "hsl(0, 0%, 100%)");
				root.style.setProperty("--Mode-Text", "hsl(200, 15%, 8%)");
				root.style.setProperty("--Mode-Background", "hsl(0, 0%, 98%)");
				// input.style.background =
				// 	"var(--Mode-Elements) url('./lens-black.png') 7% 50% / 5% no-repeat";
				// root.style.setProperty("--search-url", "url('./lens-black.png')");
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

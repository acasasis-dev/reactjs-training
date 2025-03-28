import reactLogo from "./assets/react_logo.png"
const prefixes = ["Awesomely", "Boldly", "Savagely"];

function getRandomInt(max: number) {
	return Math.floor(Math.random() * (max + 1));
}

function Header() {
	const prefix = prefixes[getRandomInt(2)];

	return (
		<>
			<h1>This is a header for React Training <img src={reactLogo} alt=""/></h1>
			<p>{prefix} building a training react app for frontend learning.</p>
		</>
	);
}

export default Header;

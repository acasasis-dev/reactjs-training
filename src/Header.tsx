const prefixes = ["Awesomely", "Boldly", "Savagely"];

function getRandomInt(max: number) {
	return Math.floor(Math.random() * (max + 1));
}

function Header() {
	return (
		<>
			<h1>This is a header for React Training</h1>
			<p>{prefixes[getRandomInt(2)]} building a training react app for frontend learning.</p>
		</>
	);
}

export default Header;

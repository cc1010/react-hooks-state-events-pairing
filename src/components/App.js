import video from "../data/video.js";
import react from "react";
import Card from "./card";

function App() {
	//console.log("Here's your data:", video);

	return (
		<div className="App">
			<Card data={video} />
		</div>
	);
}

export default App;

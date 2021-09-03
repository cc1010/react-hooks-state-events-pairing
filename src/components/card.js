import React, { useState } from "react";
import Header from "./Header";
import Likes from "./Buttons";
import Comments from "./Comments";
function Card({ data }) {
	const [upVotes, setUpVotes] = useState(data.upvotes);
	const [downVotes, setDownVotes] = useState(data.downvotes);

	function addVotes() {
		setUpVotes(upVotes + 1);
		//console.log(upVotes);
	}
	function removeVotes() {
		setDownVotes(downVotes - 1);
		//console.log(downVotes);
	}

	return (
		<div>
			<Header
				title={data.title}
				embedUrl={data.embedUrl}
				views={data.views}
				createdAt={data.createdAt}
			/>
			<Likes
				upvotes={upVotes}
				downvotes={downVotes}
				addVotes={addVotes}
				removeVotes={removeVotes}
			/>
			<Comments comments={data.comments} />
		</div>
	);
}
export default Card;

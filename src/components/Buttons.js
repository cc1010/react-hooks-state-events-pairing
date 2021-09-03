import React from "react";

function Likes({ upvotes, downvotes, addVotes, removeVotes }) {
	return (
		<div>
			<button type="button" onClick={addVotes}>
				{upvotes} &#128077;
			</button>
			<button type="button" onClick={removeVotes}>
				{downvotes} &#128078;
			</button>
		</div>
	);
}
export default Likes;

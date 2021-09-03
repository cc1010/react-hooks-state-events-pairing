import react, { useState } from "react";
import Comment from "./Comment";

function Comments({ comments }) {
	const [renderComments, setRenderComments] = useState(true);

	function toggleComments() {
		setRenderComments(!renderComments);
	}

	return (
		<div>
			<button type="button" onClick={toggleComments}>
				{renderComments ? "Hide Comments" : "Show Comments"}
			</button>
			{renderComments ? (
				comments.map((e) => (
					<Comment key={e.id} user={e.user} comment={e.comment} />
				))
			) : (
				<></>
			)}
		</div>
	);
}
export default Comments;

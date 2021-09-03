import React, { useState } from "react";
function Header({ title, embedUrl, views, createdAt }) {
	return (
		<>
			<div style={{ textAlign: "center" }}>
				<iframe
					width="919"
					height="525"
					src={embedUrl}
					frameBorder="0"
					allowFullScreen
					title="Thinking in React"
				/>
				<h1>{title}</h1>
				<p>
					{views} Views | {createdAt}
				</p>
			</div>
		</>
	);
}
export default Header;

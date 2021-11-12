import propTypes from "prop-types";

export const Messages = (props) => {
	return (
		<div>
			[{props.author}]: {props.text}
		</div>
	);
};

Messages.propTypes = {
	text: propTypes.string,
	author: propTypes.string,
};

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	contentStyle: {
		fontSize: 35,
		color: "#4B0082",
		display: "flex",
		justifyContent: "center",
	},
}));

export const Profile = () => {
	const classes = useStyles();
	return (
		<div>
			<h1 className={classes.contentStyle}>
				М-м? Прыгаете из чата в чат, летаете как птицы?
			</h1>
		</div>
	);
};

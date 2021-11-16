import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	contentStyle: {
		color: "#8F8F8F",
		fontSize: "48px",
		justifyContent: "center",
	},
}));

export const HelloChat = () => {
	const classes = useStyles();
	return (
		<div>
			<h2 className={classes.contentStyle}>Добро пожаловать !</h2>
		</div>
	);
};

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const text = "My awesome chat app";
ReactDOM.render(
	<React.StrictMode>
		<App context={text} />,
	</React.StrictMode>,
	document.getElementById("root"),
);
reportWebVitals();

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import { Provider } from "react-redux";
import { HelloChat } from "../routes/Home";
import { Chats } from "../routes/Chats";
import { Profile } from "../routes/Profile";
import { Photos } from "../routes/Photos";

export const ChatMain = () => {
	return (
		<div>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter>
						<AppBar position="static">
							<Toolbar>
								<Button to="/" component={Link} color="inherit">
									Home
								</Button>
								<Button
									to="/profile"
									component={Link}
									color="inherit"
								>
									Profile
								</Button>
								<Button
									to="/chats"
									component={Link}
									color="inherit"
								>
									Chats
								</Button>
								<Button
									to="/photos"
									component={Link}
									color="inherit"
								>
									Photos
								</Button>
							</Toolbar>
						</AppBar>
						<Switch>
							<Route component={Photos} path="/photos" />
							<Route component={Chats} path="/chats" />
							<Route component={Profile} path="/profile" />
							<Route component={HelloChat} path="/" />
						</Switch>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</div>
	);
};

import { ChatMain } from "./components/index";
import { Provider } from "react-redux";
import { store } from "./store/index";

export const App = () => {
	return (
		<Provider store={store}>
			<ChatMain />
		</Provider>
	);
};

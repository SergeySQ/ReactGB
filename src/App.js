import { ChatMain } from "./components/index";
import { Provider } from "react-redux";
import { store } from "./store/profile/index";

const App = () => {
	return (
		<Provider store={store}>
			<ChatMain />
		</Provider>
	);
};

export default App;

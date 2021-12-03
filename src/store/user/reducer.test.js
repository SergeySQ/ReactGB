import { initialState, userReducer } from "./reducer";

describe("userReducer", () => {
	it("вызов userReducer без action вернет initialState", () => {
		const result = userReducer();
		expect(result).toEqual(initialState);
	});
});

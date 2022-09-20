import { createSlice } from "@reduxjs/toolkit";

const initialState: { currentRoute: number; routesHistory: string[] } = {
	currentRoute: 0,
	routesHistory: ["/"],
};

export const historySlice = createSlice({
	name: "history",
	initialState,
	reducers: {
		push: (state, action) => {
			state.currentRoute += 1;
			state.routesHistory.slice(state.currentRoute);
			state.routesHistory.push(action.payload);
		},
		back: (state, action) => {
			if (state.routesHistory.length - 2 < 0) {
				return;
			}
			state.currentRoute -= 1;
		},
		forward: (state, action) => {
			if (state.currentRoute + 1 > state.routesHistory.length - 2) {
				return;
			}

			state.currentRoute += 1;
		},
	},
});

export const { push, back, forward } = historySlice.actions;
export default historySlice.reducer;

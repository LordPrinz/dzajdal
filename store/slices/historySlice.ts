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
			state.routesHistory = state.routesHistory.slice(0, state.currentRoute + 1);
			state.currentRoute = state.routesHistory.length;
			state.routesHistory.push(action.payload);
		},
		back: (state) => {
			state.currentRoute -= 1;
		},
		forward: (state) => {
			state.currentRoute += 1;
		},
	},
});

export const { push, back, forward } = historySlice.actions;
export default historySlice.reducer;

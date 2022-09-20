import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./slices/historySlice";

export const store = configureStore({
	reducer: {
		history: historySlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

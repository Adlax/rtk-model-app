import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
	reducers: {
		increment: (state, action) => {
			state.counter++;
		},
		decrement: (state, action) => {
			state.counter--;
		},
		increase: (state, action) => {
			state.counter = state.counter + action.payload.amount;
		},
		toggleCounter: (state, action) => {
			state.showCounter = !state.showCounter;
		},
	},
});

const counterActions = counterSlice.actions;

export { counterSlice, counterActions };

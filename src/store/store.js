import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { counterSlice } from "./counterSlice";
import { authSlice } from "./authSlice";

const store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };

export default store;

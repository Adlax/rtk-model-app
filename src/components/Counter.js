import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
	const counter = useSelector((store) => store.counter.counter);
	const show = useSelector((store) => store.counter.showCounter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	const handleIncrement = () => {
		dispatch(counterActions.increment());
	};

	const handleDecrement = () => {
		dispatch(counterActions.decrement());
	};

	const handleIncrease = (amount) => {
		dispatch(counterActions.increase({ amount: 5 }));
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>-- {counter} --</div>}
			<div>
				<button onClick={handleDecrement}>Decrement</button>
				<button onClick={() => handleIncrease(5)}>Increase by 5</button>
				<button onClick={handleIncrement}>Increment</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

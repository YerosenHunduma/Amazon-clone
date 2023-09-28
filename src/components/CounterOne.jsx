import { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
	switch (action) {
		case "Increment":
			return currentState + 1;
		case "decrement":
			return currentState - 1;
		case "Reset":
			return initialState;
		default:
			return currentState;
	}
};
function CounterOne() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<div>count -{count}</div>
			<button
				onClick={() => {
					dispatch("Increment");
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					dispatch("decrement");
				}}
			>
				decrement
			</button>
			<button
				onClick={() => {
					dispatch("Reset");
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default CounterOne;

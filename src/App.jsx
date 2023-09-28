import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import CounterOne from "./components/CounterOne";
import Login from "./components/Login/Login";
import { useStateValue } from "./components/StateProvider";
import { useEffect } from "react";
import { auth } from "./components/Firebase";

function App() {
	const [{ basket }, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/Login" element={<Login />}></Route>
					<Route
						path="/Checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					></Route>
					<Route
						path="/"
						element={
							<>
								{/* <CounterOne /> */}
								<Header /> <Home />
							</>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

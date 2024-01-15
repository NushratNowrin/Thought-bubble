import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import "./App.css";
import Loader from "./Utilities/Loader/Loader";

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		// Simulate an asynchronous initialization process
		const initializeApp = async () => {
			// After the initialization is completed, set loading to false
			setLoading(false);
		};

		initializeApp();
	}, []);
	return (
		<Router>
			<Loader loading={loading}>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
					<Route path='/services' component={Services} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</Loader>
		</Router>
	);
}

export default App;

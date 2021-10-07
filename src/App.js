import Genre from "./Containers/Genre/Genre";
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Movies from "./Containers/Movies/Movies";
import {
	BrowserRouter as Router, Switch, Route
} from "react-router-dom";


function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path='/Genre'>
						<Genre />
					</Route>
					<Route path='/Movies/:genreID'>
						<Movies />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;

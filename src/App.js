import React from 'react';
import './App.css';
import Home from './components/Home';
import MatchDetails from './components/MatchDetails';
import { Route, Switch } from 'react-router-dom';
const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/match" component={MatchDetails} />
			</Switch>
		</div>
	);
}

export default App;

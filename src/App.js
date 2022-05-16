import React from 'react';
import './App.css';
import Home from './components/Home';
import MatchDetails from './components/MatchDetails';
import { Route, Switch } from 'react-router-dom';
import BestSlipSelection from './components/BestSlipSelection';
const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/match" component={MatchDetails} />
				<Route path="/selection" component={BestSlipSelection} />
			</Switch>
		</div>
	);
}

export default App;

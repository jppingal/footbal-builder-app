import React from 'react';
import Header from './Header';
import "./index.css";
import MatchListTable from './MatchListTable';

const  Home = () => {
	return (
		<div className="home-container">
			<Header/>
			<MatchListTable/>
		</div>
	);
}

export default Home;
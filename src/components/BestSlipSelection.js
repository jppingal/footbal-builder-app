import React, { useState, useEffect } from "react";
import Select from 'react-select'


const BestSlipSelection = () => {
	const [data, setData] = useState([]);
	// console.log("maket list ", data)
	useEffect(() => {
		const fetchApi = async () => {
			const url = "http://cms.bettorlogic.com/api/BetBuilder/GetMarkets?sports=1";
			const res = await fetch(url);
			const resJson = await res.json();
			setData(resJson);
		}
		fetchApi();
	}, [])
	const [legs, setLeg] = useState([]);
	console.log("maket---legs ", legs)
	useEffect(() => {
		const fetchApi = async () => {
			const url = "http://cms.bettorlogic.com/api/BetBuilder/GetBetBuilderBets?sports=1&matchId=723475&marketId=1&legs=3&language=en";
			const res = await fetch(url);
			const resJson = await res.json();
			setLeg(resJson);
		}
		fetchApi();
	}, [])
	return (
		<>
			<div>
				<span>Bestslip Selection :</span>
				<select>
					{data.map((elem, index) => <option key={index}>{elem.MarketName}</option>
					)}
					<option></option>
				</select>
				<select>
					<option>{legs.Legs}</option>
					{/* {legs.map((elem) => <option>{elem.Legs}</option>
					)} */}
					<option></option>
				</select>
			</div>
		</>
	)
}
export default BestSlipSelection;
import React, { useState, useEffect } from "react";
import Select from 'react-select'
import "./index.css";
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
				<div className='builder-table-container'>
				<div>
					<span className="droupdown-title">Bestslip Selection :</span>
						<select className="select-drop">
							{data.map((elem, index) => <option className="drop" key={index}>{elem.MarketName}</option>
							)}
						</select>
						<span  className="droupdown-title">Legs :</span>
						<select>
							<option>{legs.Legs}</option>
						</select>
					</div>
					<div className="builder-table">

						<table className='table'>
							<thead className="builder-table-thead">
								<tr>
									<th>Pike</th>
									<th>Market</th>
									<th>Sub Market</th>
									<th>Outcome</th>
									<th>Key Stat</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Marketoutcome</td>
									<td>2.5</td>
									<td>Drow</td>
									<td>abcabgggggggg</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Marketoutcome</td>
									<td>2.5</td>
									<td>Drow</td>
									<td>abcabgggggggg</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Marketoutcome</td>
									<td>2.5</td>
									<td>Drow</td>
									<td>abcabgggggggg</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Marketoutcome</td>
									<td>2.5</td>
									<td>Drow</td>
									<td>abcabgggggggg</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}
export default BestSlipSelection;
import React, { useState, useEffect } from "react";
import Select from 'react-select'
import "./index.css";
const BestSlipSelection = () => {
	const [data, setData] = useState([]);
	console.log("market list ", data)
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
	console.log("market---legs ", legs)
	useEffect(() => {
		const fetchApi = async () => {
			const url = "http://cms.bettorlogic.com/api/BetBuilder/GetBetBuilderBets?sports=1&matchId=723475&marketId=1&legs=3&language=en";
			const res = await fetch(url);
			const resJson = await res.json();
			setLeg(resJson);
		}
		fetchApi();
	}, [])

	const [select, setSelect] = useState('')
	const handleChange1 = (e) => {
		e.preventDefault();
		let filterMatchData = data.filter((elem, index) => {
			return e.target.value === elem.MarketName
		})
		if (!!e.target.value) {
			setSelect(filterMatchData);
		}
	}
	const slug = select[0]?.MarketName.substring(select[0].MarketName.indexOf('-') + 1);
	console.log("slug", slug)

	return (
		<>
			<div>
				<div className='builder-table-container'>
					<div>
						<span className="droupdown-title">Bestslip Selection :</span>
						<select className="select-drop" onClick={(e) => handleChange1(e)}>
							{data.map((elem, index) => <option className="drop" key={index} value={elem.MarketName} >{elem.MarketName}</option>
							)}
						</select>
						<span className="droupdown-title">Legs :</span>
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
									<td>{select[0]?.MarketName}</td>
									<td>2.5</td>
									<td>{slug}</td>
									<td>Data not available  in API</td>
								</tr>
							</tbody>
						</table>
						<div className="totalOdds-content">
							<span className="droupdown-title">Best builder Odds :</span>
							<span className="total-Odds"> {legs.TotalOdds}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default BestSlipSelection;
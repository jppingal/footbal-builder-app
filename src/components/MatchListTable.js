import React, { useEffect, useState } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const MatchListTable = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchApi = async () => {
			const url = "http://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1";
			const res = await fetch(url);
			const resJson = await res.json();
			setData(resJson);
		}
		fetchApi();
	}, [])

	const [filterItem, seFilterItem] = useState({})

	const handleDetailMatch = (index) => { }

	return (
		<div className='matchList-container'>
			<div className="table-data">
				<table className='table'>
					<thead className='match-list-thead'>
						<tr>
							<th>Country</th>
							<th>LeagueName</th>
							<th>MatchName</th>
							<th>KickOffUtc</th>
						</tr>
					</thead>
					<tbody>
						{data.map((elem, index) => {
							let date = new Date(elem.KickOffUtc);
							// Coverting to local datetime 
							let dateTime = date.toString().replace("GMT+0530 (India Standard Time)", " ")
							{/* let newDate = date.toLocaleDateString('en-us', { month: 'short', year: 'numeric', day: 'numeric' })
							let time = date.toTimeString().replace("GMT+0530 (India Standard Time)", " ") */}
							return (
								<tr key={index}>
									<td>{elem.Country}</td>
									<td>{elem.LeagueName}</td>
									<td className='link-tag'>
										<Link to={{ pathname: "match", propsFilterItem: elem }}>
											<span onClick={() => handleDetailMatch(elem.MatchId)}>
												{elem.MatchName}
											</span>
										</Link>
									</td>
									<td className='link-tag'>
										<Link to="/selection">
											{dateTime}
											{/* <td>{`${newDate} ${time}`}</td> */}
										</Link>
									</td>

								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
};
export default MatchListTable;
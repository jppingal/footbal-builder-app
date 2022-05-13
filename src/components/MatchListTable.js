import React, { useEffect, useState } from 'react';
import "./index.css";

const MatchListTable = () => {
    const [data, setData] = useState ([]);
    useEffect(() => {
        const fetchApi = async () => {
            const url = "http://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1";

            const res = await fetch(url);

            const resJson = await res.json();
            
            setData(resJson);
        }

        fetchApi();
    }, [])
    return (
        <div className='todoList-container'>
            <div className="table-data">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>LeagueName</th>
                            <th>MatchName</th>
                            <th>KickOffUtc</th>
                        </tr>
                    </thead>
                    <tbody>

                    {data.map((elem)=>{
                        return(
                            <tr >
                            <td>{elem.Country}</td>
                            <td>{elem.LeagueName}</td>
                            <td>{elem.MatchName}</td>
                            <td>{elem.KickOffUtc}</td>
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
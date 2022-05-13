import React from 'react';

const  Header = () => {

    var date = new Date();
date. setDate(date. getDate() - 13);
// console. log( "in react 7 days",date);

    const addDays = (dateObj, numDays) =>{
        dateObj.setDate(dateObj.getDate() + numDays);
        return dateObj;
     }
     
     let today = new Date().toLocaleDateString();
     let tomorrow = addDays(new Date(), 1);
     let firstDay =tomorrow.toLocaleDateString()
     let nextDay = addDays(new Date(), 2);
     let secondDay =nextDay.toLocaleDateString()
     let third = addDays(new Date(), 3);
     let thirdDay =third.toLocaleDateString()
     let forth = addDays(new Date(), 4);
     let forthDay =forth.toLocaleDateString()
     let fifth = addDays(new Date(), 3);
     let fifthDay =fifth.toLocaleDateString()
     let sixth = addDays(new Date(), 4);
     let sixDay =sixth.toLocaleDateString()
     
     
    //  console.log(
    //      'Today: ' + today +
    //      '\nTomorrow: ' + firstDay +
    //      '\nThird-Day: ' + secondDay +
    //      '\nForth-Day: ' + thirdDay +
    //      '\nFifth-Day: ' + forthDay+
    //      '\nSisth-Day: ' + fifthDay +
    //      '\nSeventh-Day: ' + sixDay
    //  );
// let weekDates = []
//     for (let i = 0; i < 7; i++) {
//         let today = new Date();
//         weekDates.push(today);
//         today.setDate(new Date().getDate() + i);
   
//       }
    
//       console.log(weekDates)
	return (
		<div className="header-container">
			<nav className='nav-contents'>
				<span className='dates'>{today}</span>
				<span className='dates'>{secondDay}</span>
				<span className='dates'>{thirdDay}</span>
				<span className='dates'>{forthDay}</span>
                <span className='dates'>{fifthDay}</span>
				<span className='last-date'>{sixDay}</span>
			</nav>
		</div>
	);
}

export default Header;
import React from 'react';

const  Header = () => {

    var date = new Date();
date. setDate(date. getDate() - 13);
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
	return (
		<div className="header-container">
			<nav className='nav-contents'>
				<span className='dates'>{today}</span>
                <span className='dates'>{firstDay}</span>
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
import React, { useState, useEffect } from "react";

export default function Month() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000 * 60); // Update every minute

        return () => clearInterval(interval);
    }, []); // Empty dependency array to run effect only once

    function previousMonth() {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(newDate);
    };

    function nextMonth() {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(newDate);
    };

    function getMonthName(date) {
        return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    }

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const daysArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
    }

    return (
        <>
            <div>
                <button id="leftClickMonth" onClick={previousMonth}> left </button>  
                {getMonthName(currentDate)}
                <button id="rightClickMonth" onClick={nextMonth}> right </button>
            </div>
            <div>
                {daysArray.map(day => (
                    <div key={day}>{day}</div>
                ))}
            </div>
        </>
    );
}
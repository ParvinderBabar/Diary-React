"use client";
import React, { useState } from "react";

export default function Month() {
    const currentDate = new Date();
    const [month, setMonth] = useState(currentDate.getMonth() + 1);
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);

    console.log("Current month number:", month);

    function previousMonth() {
        const previousMonthNumber = month - 1 < 1 ? 12 : month - 1;
        setMonth(previousMonthNumber);
        console.log("show previous month name:", getMonthName(previousMonthNumber));
    };
     
    function nextMonth() {
        const nextMonthNumber = month + 1 > 12 ? 1 : month + 1;
        setMonth(nextMonthNumber);
        console.log("show next month name:", getMonthName(nextMonthNumber));
    };

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    }

    return (
        <div>
            <button id="leftClick" onClick={previousMonth}> left </button>  
            {monthName}
            <button id="rightClick" onClick={nextMonth}> right </button>
        </div> 
    );
}
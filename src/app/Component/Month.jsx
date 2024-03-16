"use client"
import next from "next/";

import React, { useState } from "react";
export default function Month() {
    const [month, setMonth] = useState(monthName);    
    
const currentDate=new Date();
const monthNumber = currentDate.getMonth + 1;
const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);

    console.log("Current month number:", monthNumber); 
    function previousMonth() {
        // console.log(monthName);
        // setMonth(monthName - 1);
        console.log("show previous month name");
    };
     
    function nextMonth() {
        { monthName }
        console.log("show next month name");
    };
    
    return (
        <div>
          <button id="leftClick" onClick={previousMonth}> left </button>  
            
      {monthName}
            
             <button id="rightClick" onClick={nextMonth}> right </button>
       </div> 

)
}
"use client"
import React, { useState, useEffect } from "react";

export default function Year() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000 * 60); // Update every minute

        return () => clearInterval(interval);
    }, []); // Empty dependency array to run effect only once

    function previousYear() {
        const newDate = new Date(currentDate.getFullYear() - 1, 1);
        setCurrentDate(newDate);
    };

    function nextYear() {
        const newDate = new Date(currentDate.getFullYear()+ 1, 1);
        setCurrentDate(newDate);
    };
    const currentYear = currentDate.getFullYear();

    

    return (
        <div>
            <button id="leftClickYear" onClick={previousYear}> left </button>  
            {currentYear}
            <button id="rightClickYear" onClick={nextYear}> right </button>
        </div> 
    );
}
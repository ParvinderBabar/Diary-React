"use client"
import React, { useState, useEffect } from "react";

export default function Month() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [notes, setNotes] = useState("");
    const [diary, setDiary] = useState({});
    const [displayedNotes, setDisplayedNotes] = useState(false);
    const [datesWithNotes, setDatesWithNotes] = useState([]);
     const [displayHeart, setDisplayHeart] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000 * 60); // Update every minute

        return () => clearInterval(interval);
    }, []); // Empty dependency array to run effect only once

    function previousMonth() {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(newDate);
    }

    function nextMonth() {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(newDate);
    }

    function previousYear() {
        const newDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1);
        setCurrentDate(newDate);
    }

    function nextYear() {
        const newDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1);
        setCurrentDate(newDate);
    }

    function getMonthName(date) {
        return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    }

    function handleNotes(day) {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(selectedDate);
        setNotes(diary[selectedDate.toDateString()] || "");
        setDisplayedNotes(false);
    }

    function handleTextAreaChange(event) {
        setNotes(event.target.value);
    }

    function handleSubmit(event) {
    event.preventDefault();
    const newDiary = { ...diary, [selectedDate.toDateString()]: notes };
    setDiary(newDiary);
    setDisplayedNotes(true);
    if (!datesWithNotes.includes(selectedDate.toDateString())) {
        setDatesWithNotes([...datesWithNotes, selectedDate.toDateString()]);
    }
    setDisplayHeart({ ...displayHeart, [selectedDate.toDateString()]: true });
}

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    return (
        <form onSubmit={handleSubmit}>
            <div id="monthAndYear">
                <div id="displayMonth">
                    <button id="leftClickMonth" onClick={previousMonth}>{"<"}</button>
                    {getMonthName(currentDate)}
                    <button id="rightClickMonth" onClick={nextMonth}>{">"}</button>
                </div>
                <div id="displayYear">
                    <button id="leftClickYear" onClick={previousYear}>{"<<"}</button>
                    {currentDate.getFullYear()}
                    <button id="rightClickYear" onClick={nextYear}>{">>"}</button>
                </div>
            </div>

            <div id="parentDivDay">
                {daysArray.map(day => (
                    <div
                        key={day}
                        className="dayChildDiv"
                        style={{
                            backgroundColor: (selectedDate && selectedDate.getDate() === day) ? "#add8e6" : "transparent"
                        }}
                        onClick={() => handleNotes(day)}
                    >
                        {day}
       {selectedDate && displayHeart[selectedDate.toDateString()] && <span>💌</span>}
                    </div>
                ))}
            </div>

            <div>
                Selected Day: {selectedDate ? selectedDate.toDateString() : ""}
            </div>

            {displayedNotes && (
                <div>
                    <label>{notes}</label>
                </div>
            )}

            {!displayedNotes && (
                <div id="displayNotes">
                    <textarea id="textarea" value={notes} onChange={handleTextAreaChange} />
                </div>
            )}

            {!displayedNotes && (
                <div id="submit">
                    <button id="click" type="submit">Submit</button>
                </div>
            )}
        </form>
    );
}
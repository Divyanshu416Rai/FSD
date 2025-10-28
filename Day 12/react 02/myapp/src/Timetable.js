// src/Timetable.js
import React from "react";

function Timetable() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = ["9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "1:00 - 2:00", "2:00 - 3:00"];

  const timetable = [
    ["Maths", "English", "Science", "Computer", "Games"],
    ["English", "Maths", "History", "Science", "Computer"],
    ["Science", "Games", "Maths", "English", "Art"],
    ["Computer", "History", "Science", "Maths", "English"],
    ["Art", "Computer", "English", "Science", "Maths"],
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Simple Timetable</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Time</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, rowIndex) => (
            <tr key={time}>
              <td>{time}</td>
              {days.map((_, colIndex) => (
                <td key={colIndex}>{timetable[rowIndex][colIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;

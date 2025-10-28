// src/App.js
import React from "react";
import Timetable from "./Timetable"; // ✅ imported correctly

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My College Timetable</h1>
      <Timetable /> {/* ✅ Corrected component name */}
    </div>
  );
}

export default App;

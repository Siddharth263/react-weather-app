import React, { useState } from "react";

import Api from "./api/Api";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleKeyPress = (e) => {
    if (e && e.key === "Enter") {
      setSelectedCity(city);
      console.log("city", city);
    }
  };

  return (
    <div className="main-container">
      <input
        className="search"
        value={city}
        placeholder="Search...."
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <Api city={selectedCity} />
    </div>
  );
};

export default App;

import React, { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchT, setSearchT] = useState('');

  const handleS = () => {
    // your search logic here using the searchT state
    console.log('"Button Click" Value =:', searchT);
  }

  const handleSearch = () => {
    // your search logic here using the searchTerm state
    console.log("'Enter Key' Press Value =", searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="text">Press 'Enter' to run Search</div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      {/* 2nd search box */}
      <div className="container">
        <div className="text">Click 'Button' to run Search</div>
        <input
          type="text"
          placeholder="Search..."
          value={searchT}
          onChange={(e) => setSearchT(e.target.value)}
        />
        <button onClick={handleS}>Search</button>
      </div>
    </div>
  );
}

export default Search;

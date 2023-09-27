/* import React, { useState, useEffect } from "react";

function ResultsTabs({ activeTab, onTabChange, analysisData }) {

  const [resultWords, setResultWords] = useState([]);

  // Step 2: Update the state variable conditionally when analysisData changes
  useEffect(() => {
    if (activeTab === "topWords") {
      setResultWords(analysisData.topWords);
    } else if(activeTab === "topCoOccurredWords") {
      // Reset the state when the activeTab changes
      setResultWords(analysisData.topCoOccurredWords);
    } else if(activeTab === "allWords") {
      setResultWords(analysisData.wordFrequency);
    }
    else{
      setResultWords([]);
    }

  }, [activeTab, analysisData]);

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    margin: "0 10px",
    outline: "none", // Remove focus outline
  };

  const activeButtonStyle = {
    backgroundColor: "#0056b3",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    margin: "0 10px",
    outline: "none", // Remove focus outline
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#fff",
    // Add more custom styles as needed
  };


  return (
    <div>
      <div className="tabs">
        <button
          onClick={() => onTabChange("topWords")}
          style={activeTab === "topWords" ? activeButtonStyle : buttonStyle}
        >
          Top Words
        </button>
        <button
          onClick={() => onTabChange("topCoOccurredWords")}
          style={activeTab === "topCoOccurredWords" ? activeButtonStyle : buttonStyle}
        >
          Co-Occurred Words
        </button>
        <button
          onClick={() => onTabChange("allWords")}
          style={activeTab === "allWords" ? activeButtonStyle : buttonStyle}
        >
          All Words
        </button>
      </div>
      <div className="tab-content">
        
        {resultWords.map((word, index) => (
          <div key={index} className="card" style={cardStyle}>
            {word[0]}: {word[1]}
          </div>
        ))}


        
      </div>
    </div>
  );
}

export default ResultsTabs;
 */
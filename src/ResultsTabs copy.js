/* import React from "react";

function ResultsTabs({ activeTab, onTabChange, analysisData }) {

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


  const renderTabContent = () => {
    let tabContent = []; // Initialize an empty array to hold the elements



    if (activeTab === "topWords") {

      const topWordsArray = analysisData.topWords;

      for (const index in topWordsArray) {
        if (topWordsArray.hasOwnProperty(index)) {
          const word = topWordsArray[index];
          tabContent.push (
            <div key={index} className="card" style={cardStyle}>
              {word[0]}: {word[1]}
            </div>
          );
        }
      }






    } else if (activeTab === "topCoOccurredWords") {

      const topCoOccurredWordsArray = analysisData.topCoOccurredWords;

      for (const index in topCoOccurredWordsArray) {
        if (topCoOccurredWordsArray.hasOwnProperty(index)) {
          const word = topCoOccurredWordsArray[index];
          tabContent.push (
            <div key={index} className="card" style={cardStyle}>
              {word[0]}: {word[1]}
            </div>
          );
        }
      }



    } else if (activeTab === "allWords") {
      const wordFrequencyArray = analysisData.wordFrequency;

      for (const index in wordFrequencyArray) {
        if (wordFrequencyArray.hasOwnProperty(index)) {
          const word = wordFrequencyArray[index];
          tabContent.push (
            <div key={index} className="card" style={cardStyle}>
              {word[0]}: {word[1]}
            </div>
          );
        }
      }
    }
    console.log(tabContent)
    return tabContent; // Return the array of elements
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
      {renderTabContent()}
    </div>
  );
}

export default ResultsTabs;
 */
import React from "react";

function ResultsTabs({ activeTab, onTabChange, analysisData }) {

  const cardStyles = {
    container: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '10px',
      width: '200px',
      textAlign: 'center',
      margin: '10px', // Add margin to create spacing between cards
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    value: {
      fontSize: '1rem',
      color: '#007bff', // You can adjust the text color here
    },
  };

  const renderTabContent = () => {
    if (activeTab === "topWords") {
      return (
        <div>
          {Object.keys(analysisData.topWords).map((word, index) => (
            <div key={index} style={cardStyles.container}>
              <div style={cardStyles.title}>{word}</div>
              <div style={cardStyles.value}>{analysisData.topWords[word]}</div>
            </div>
          ))}
        </div>

      );
    } else if (activeTab === "topCoOccurredWords") {
      return (
        <div>
          {Object.keys(analysisData.topCoOccurredWords).map((word, index) => (
            <div key={index} style={cardStyles.container}>
              <div style={cardStyles.title}>{word}</div>
              <div style={cardStyles.value}>{analysisData.topCoOccurredWords[word]}</div>
            </div>
          ))}
        </div>
      );
    } else if (activeTab === "allWords") {
      return (
        <div>
          {Object.keys(analysisData.wordFrequency).map((word, index) => (
            <div key={index} style={cardStyles.container}>
              <div style={cardStyles.title}>{word}</div>
              <div style={cardStyles.value}>{analysisData.wordFrequency[word]}</div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="tabs">
        <button
          onClick={() => onTabChange("topWords")}
          className={activeTab === "topWords" ? "active" : ""}
        >
          Top Words
        </button>
        <button
          onClick={() => onTabChange("topCoOccurredWords")}
          className={activeTab === "topCoOccurredWords" ? "active" : ""}
        >
          Co-Occurred Words
        </button>
        <button
          onClick={() => onTabChange("allWords")}
          className={activeTab === "allWords" ? "active" : ""}
        >
          All Words
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
}

export default ResultsTabs;

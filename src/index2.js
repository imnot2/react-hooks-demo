import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function fetchRandom() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setRandomNumber((Math.random() * 100) | 1);
    }, 2000);
  }

  function handleClick() {
    if (isLoading) return;
    fetchRandom();
  }

  function handleDocumentScroll() {
    //do somethings
  }

  useEffect(() => {
    document.title = `randomNumber  is ${randomNumber}`;
  }, [randomNumber]);

  useEffect(() => {
    document.addEventListener("scroll", handleDocumentScroll);
    return () => {
      document.removeEventListener("scroll", handleDocumentScroll);
    };
  }, []);

  return (
    <div>
      <p>functional component</p>
      {randomNumber !== undefined ? <>randomNumber: {randomNumber}</> : null}
      <br />
      <button onClick={handleClick}>
        {isLoading ? "loading..." : "refresh"}
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bar">
        <div className="step active">1</div>
        <div className="step">2</div>
        <div className="step">3</div>
        <div className="step">4</div>
      </div>
      <div className="setps-buttons"></div>
    </div>
  );
}

export default App;

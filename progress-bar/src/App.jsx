import { useState } from "react";
import "./App.css";

function App() {
  const [actives, setActives] = useState(1);
  const [progressWidth, setProgressWidth] = useState(0);
  const handleActivesNext = () => {
    setActives(actives + 1);
    setProgressWidth(progressWidth + 100 / 3);
  };
  const handleActivesPrev = () => {
    const progress = progressWidth - 100 / 3;
    setActives(actives - 1);
    if (progress < 0) setProgressWidth(0);
    else setProgressWidth(progressWidth - 100 / 3);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="bar">
          <div
            style={{ width: `${progressWidth}%` }}
            className="progress"
          ></div>
          <div id="1" className="step active">
            1
          </div>
          <div id="2" className={`step ${actives >= 2 && "active"}`}>
            2
          </div>
          <div id="3" className={`step ${actives >= 3 && "active"}`}>
            3
          </div>
          <div id="4" className={`step ${actives >= 4 && "active"}`}>
            4
          </div>
        </div>
        <button
          onClick={handleActivesPrev}
          className="btn"
          disabled={actives === 1 && true}
        >
          Prev
        </button>
        <button
          onClick={handleActivesNext}
          className="btn"
          disabled={actives === 4 && true}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

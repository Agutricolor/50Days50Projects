import { useState } from "react";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="App">
      <div className={`search ${isActive ? "active" : ""}`}>
        <input type="text" />
        <button onClick={handleActive}>S</button>
      </div>
    </div>
  );
}

export default App;

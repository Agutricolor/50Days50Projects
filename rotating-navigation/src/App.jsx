import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <div className={`container ${isOpen ? "show-nav" : ""}`}>
        <div className="circle-container">
          <div className="circle">
            <button onClick={handleOpen} id="close">
              <div className="uno">
                <div className="dos"></div>
              </div>
            </button>
            <button onClick={handleOpen} id="open">
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

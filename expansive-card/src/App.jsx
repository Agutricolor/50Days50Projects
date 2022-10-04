import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("");
  const handleActive = (e) => {
    if (e.currentTarget.className.split(" ")[0] == "uno") setActive("uno");
    if (e.currentTarget.className.split(" ")[0] == "dos") setActive("dos");
    if (e.currentTarget.className.split(" ")[0] == "tres") setActive("tres");
    if (e.currentTarget.className.split(" ")[0] == "cuatro")
      setActive("cuatro");
    if (e.currentTarget.className.split(" ")[0] == "cinco") setActive("cinco");
  };
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-gray-400">
      <div className="flex w-screen">
        <div
          onClick={handleActive}
          className={`uno bg-cover bg-center bg-no-repeat relative flex m-3 duration-700 ${
            active == "uno" && "active"
          }`}
        >
          <h3
            className={`absolute bottom-6 left-6 text-white ${
              active !== "uno" && "opacity-0"
            }`}
          >
            Explore The World
          </h3>
        </div>
        <div
          onClick={handleActive}
          className={`dos bg-cover bg-center bg-no-repeat relative flex m-3 duration-700 ${
            active == "dos" && "active"
          }`}
        >
          <h3
            className={`absolute bottom-6 left-6 text-white ${
              active !== "dos" && "opacity-0"
            }`}
          >
            Wild Forest
          </h3>
        </div>
        <div
          onClick={handleActive}
          className={`tres bg-cover bg-center bg-no-repeat relative flex m-3 duration-700 ${
            active == "tres" && "active"
          }`}
        >
          <h3
            className={`absolute bottom-6 left-6 text-white ${
              active !== "tres" && "opacity-0"
            }`}
          >
            Sunny Beach
          </h3>
        </div>
        <div
          onClick={handleActive}
          className={`cuatro bg-cover bg-center bg-no-repeat relative flex m-3 duration-700 ${
            active == "cuatro" && "active"
          }`}
        >
          <h3
            className={`absolute bottom-6 left-6 text-white ${
              active !== "cuatro" && "opacity-0"
            }`}
          >
            City on Winter
          </h3>
        </div>
        <div
          onClick={handleActive}
          className={`cinco bg-cover bg-center bg-no-repeat relative flex m-3 duration-700 ${
            active == "cinco" && "active"
          }`}
        >
          <h3
            className={`absolute bottom-6 left-6 text-white ${
              active !== "cinco" && "opacity-0"
            }`}
          >
            Mountains - Cloud
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-sky-500">
      <div className="flex w-screen">
        <img
          className="bg-cover bg-center bg-no-repeat h-3/4 rounded-3xl m-3 relative w-1"
          src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <img
          className="bg-cover bg-center bg-no-repeat h-3/4 rounded-3xl m-3 relative w-1"
          src="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <img
          className="bg-cover bg-center bg-no-repeat h-3/4 rounded-3xl m-3 relative w-1"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
          alt=""
        />
        <img
          className="bg-cover bg-center bg-no-repeat h-3/4 rounded-3xl m-3 relative w-1"
          src="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          alt=""
        />
        <img
          className="bg-cover bg-center bg-no-repeat h-3/4 rounded-3xl m-3 relative w-1"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;

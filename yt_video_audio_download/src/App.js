// src/App.js
import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonOneClick = () => {
    toast("Video Successfull !!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    console.log("video:", inputValue);
  };

  const handleButtonTwoClick = () => {
    toast("Audio Successfull !!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    console.log("Audio: " + inputValue);
  };

  return (
    <div className="App">
      <h1>Youtube Vide/Audio - guruRZ</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="url..."
      />
      <ToastContainer />
      <div>
        <button onClick={handleButtonOneClick}>Video</button>
        <button onClick={handleButtonTwoClick}>Audio</button>
      </div>
    </div>
  );
}

export default App;

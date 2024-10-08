// src/App.js
import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  // const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVideoDownload = async () => {
    if (!url) {
      setStatus("Please enter a valid YouTube URL.");
      toast("Not valid input!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setStatus("Download started! Check the downloads folder.");
    // setType("video");
    console.log("inside video :");
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/download?url=${encodeURIComponent(url)}`
      );
      console.log(response.data);
      setStatus(response.data.message);
    } catch (error) {
      setIsLoading(false);
      setStatus("Error during download.");
      console.error("Download error:", error);
    } finally {
      setIsLoading(false);
    }
    console.log("video:", url);
  };

  const handleAudioDownload = async () => {
    if (!url) {
      setStatus("Please enter a valid YouTube URL.");
      toast("Not valid input!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    // setType("audio");
    setStatus("Download started! Check the downloads folder.");
    console.log("inside audio :");
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/downloadaudio?url=${encodeURIComponent(url)}`
      );
      console.log(response.data);
      setStatus(response.data.message);
    } catch (error) {
      setIsLoading(false);
      setStatus("Error during download.");
      console.error("Download error:", error);
    } finally {
      setIsLoading(false);
    }
    console.log("Audio: " + url);
  };

  return (
    <div className="App">
      <h1>Youtube Vide/Audio - guruRZ</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="url..."
        disabled={isLoading}
      />
      <ToastContainer />
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Processing download...</p>
        </div>
      )}
      <div>
        <button onClick={handleVideoDownload} disabled={isLoading}>
          Video
        </button>
        <button onClick={handleAudioDownload} disabled={isLoading}>
          Audio
        </button>
      </div>
      <p>{status}</p>
    </div>
  );
}

export default App;

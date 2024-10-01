const express = require("express");
const youtubedl = require("youtube-dl-exec");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for cross-origin requests

const PORT = process.env.PORT || 5000;

app.get("/download", (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "YouTube URL is required" });
  }

  // Use youtube-dl-exec to download video or audio
  youtubedl(url, {
    format: "bestvideo[height<=1080]+bestaudio/best[height<=1080]",
    mergeOutputFormat: "mp4",
    output: path.resolve(__dirname, "./downloads/%(title)s.%(ext)s"),
  })
    .then((output) => {
      res.json({ message: "Download complete", output });
    })
    .catch((error) => {
      console.error("Error downloading video:", error);
      res.status(500).json({ error: "Failed to download video" });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

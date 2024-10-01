const youtubedl = require("youtube-dl-exec");

function downloadVideo(url) {
  youtubedl(url, {
    // Specify options to download the video
    output: "%(title)s.%(ext)s", // Output filename
    format: "bestvideo[height<=1080]+bestaudio/best[height<=1080]", // Best video quality up to 1080p and best audio
    mergeOutputFormat: "mp4", // Specify the format to use for merging
    // mergeOutput: true, // Merge video and audio
  })
    .then((output) => {
      console.log("Download completed!", output);
    })
    .catch((error) => {
      console.error("Error during download:", error);
    });
}

// Specify to download audio only
function downloadAudio(url) {
  youtubedl(url, {
    output: "%(title)s.%(ext)s",
    format: "bestaudio/best",
    extractAudio: true,
    audioFormat: "mp3",
  })
    .then((output) => {
      console.log("Audio download completed!", output);
    })
    .catch((error) => {
      console.error("Error during audio download:", error);
    });
}

// Example usage
const videoUrl = "https://www.youtube.com/watch?v=x_tvE8qmlAs";
downloadVideo(videoUrl);
downloadAudio(videoUrl);

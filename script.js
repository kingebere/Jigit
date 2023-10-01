let isRecording = false;
let isPaused = false;
let screenStream = null;
let webcamStream = null;
let audioStream = null;
let mediaRecorder = null;
const chunks = [];

const startStopButton = document.getElementById("startStopButton");
// const pauseResumeButton = document.getElementById("pauseResumeButton");
const endButton = document.getElementById("endButton");
// const downloadButton = document.getElementById("downloadButton");
// const downloadLink = document.getElementById("downloadLink");

// Get access to the webcam feed
async function getWebcamStream() {
  try {
    webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });
    const webcamVideo = document.getElementById("webcamVideo");
    webcamVideo.srcObject = webcamStream;
    webcamVideo.style.display = "block";
  } catch (error) {
    console.error("Error accessing webcam:", error);
  }
}

// Get access to the audio stream
async function getAudioStream() {
  try {
    audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (error) {
    console.error("Error accessing audio:", error);
  }
}

// startStopButton.addEventListener("click", () => {
//   if (!isRecording) {
//     startRecording();
//   } else {
//     // pauseRecording();
//     stopRecording();
//   }
// });

// pauseResumeButton.addEventListener("click", () => {
//   if (!isPaused) {
//     pauseRecording();
//   } else {
//     resumeRecording();
//   }
// });

endButton.addEventListener("click", () => {
 console.log('yes')
});

async function startRecording() {

  try {
    // Get access to the screen capture stream
    screenStream = await new Promise((resolve) => {
      chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], (streamId) => {
        resolve(streamId);
      });
    });
  
    // Get access to the webcam feed
    await getWebcamStream();

    // Get access to the audio feed
    await getAudioStream();
  console.log("kk",webcamStream)
// Define your message data
// const messageData = {
//     action: 'contentScriptAction',
//     data: webcamStream.getVideoTracks()[0],
//   };
  
//   // Send the message to the background script
//   chrome.runtime.sendMessage(messageData, (response) => {
//     if (chrome.runtime.lastError) {
//       console.error(chrome.runtime.lastError);
//     } else {
//       console.log('Response from background script:', response);
//     }
//   });
    // Combine the screen, webcam, and audio streams into a single stream
    // const combinedStream = new MediaStream();
    // // const screenTrack = screenStream.getVideoTracks()[0];
    // const webcamTrack = webcamStream.getVideoTracks()[0];//chrome-extension://pikemlmfnafcbmpjaghcklehpndhopni/iframe.html
    // const audioTrack = audioStream.getAudioTracks()[0];
    // // combinedStream.addTrack(screenTrack);
    // combinedStream.addTrack(webcamTrack);
    // combinedStream.addTrack(audioTrack);

    // // Create the MediaRecorder
    // mediaRecorder = new MediaRecorder(combinedStream);

    // mediaRecorder.ondataavailable = (event) => {
    //   if (event.data.size > 0) {
    //     chunks.push(event.data);
    //   }
    // };

    // mediaRecorder.onstop = async () => {
    //   const webmBlob = new Blob(chunks, { type: "video/webm" });
    // //   const mp4Blob = await convertWebMtoMP4(webmBlob);

    //   // Display the recorded video
    // //   const video = document.createElement("video");
    // //   video.src = URL.createObjectURL(webmBlob);
    // //   video.controls = true;
    // //   document.body.appendChild(video);

    // //   // Update the download link
    // //   downloadLink.href = URL.createObjectURL(mp4Blob);
    // //   downloadLink.style.display = "block";

    //   // Update button states
    // //   isRecording = false;
    // //   isPaused = false;
    // //   startStopButton.textContent = "Start Recording";
    // //   pauseResumeButton.style.display = "none";
    // //   endButton.style.display = "block";
    // //   downloadButton.style.display = "block";
    // };

    // mediaRecorder.start();
    // isRecording = true;
    // startStopButton.textContent = "Pause Recording";
    // pauseResumeButton.style.display = "block";
    // endButton.style.display = "block";
    // downloadButton.style.display = "none";
  } catch (error) {
    console.error("Error starting recording:", error);
  }
}
startRecording();
// function pauseRecording() {
//   if (mediaRecorder && mediaRecorder.state === "recording") {
//     mediaRecorder.pause();
//     isPaused = true;
//     startStopButton.textContent = "Resume Recording";
//   }
// }

// function resumeRecording() {
//   if (mediaRecorder && mediaRecorder.state === "paused") {
//     mediaRecorder.resume();
//     isPaused = false;
//     startStopButton.textContent = "Pause Recording";
//   }
// }

// function stopRecording() {
//   if (mediaRecorder && mediaRecorder.state !== "inactive") {
//     mediaRecorder.stop();
//     combinedStream.getTracks().forEach((track) => track.stop());
//   }
// }

// ... (rest of your code for conversion to MP4 remains the same)

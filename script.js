
let isRecording = false;
let isPaused = false;
let screenStream = null;
let webcamStream = null;
let combinedStream = null;
let audioStream = null;
let mediaRecorder = null;
const chunks = [];

const startStopButton = document.getElementById("startStopButton");
const pauseResumeButton = document.getElementById("pauseResumeButton");
const endButton = document.getElementById("endButton");
const downloadButton = document.getElementById("downloadButton");
const downloadLink = document.getElementById("downloadLink");
async function getWebcamStream() {
  window.addEventListener("message", (event) => {
    console.log("event",event)})

        // Move this line inside the click event listener
        window.postMessage("hello there!b", "*");
  try {
    const constraints = {
      video: {
        facingMode: 'user', // or 'environment' for rear camera
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    };

    webcamStream = await navigator.mediaDevices.getUserMedia(constraints);

    // const webcamVideo = document.getElementById("webcamVideo");
    // console.log("webcamVideo",webcamVideo)
    // console.log("webcamStream",webcamStream)
    // webcamVideo.srcObject = webcamStream;
    // webcamVideo.style.display = "block";
  } catch (error) {
    console.error("Error accessing webcam:", error.name, error.message);
  }
}

// Function to start capturing the shared screen feed
async function startScreenCapture() {
  try {
  










    const streamId = await new Promise((resolve) => {
      chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], (streamId) => {
          resolve(streamId);
      });
  });

 screenStream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { mandatory: { chromeMediaSource: 'desktop', chromeMediaSourceId: streamId } }
  });
  //  chrome.runtime.sendMessage({ yesib: screenStream });
  // const screenVideo = document.getElementById("screenVideo");
  // console.log("screenVideo",screenVideo)
  // console.log("screenStream",screenStream)
  //  screenVideo.srcObject = screenStream;
  // screenVideo.style.display = "block";
 











  } catch (error) {
    console.error("Error accessing screen:", error);
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
async function startRecording() {
  try {
    // Get access to the screen capture stream
      // Get access to the screen capture stream ID




    const streamId = await new Promise((resolve) => {
      chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], (streamId) => {
        resolve(streamId);
      });
    });
    console.log('oop',streamId)
 // chrome.runtime.sendMessage({ yesi: screenStream });
 
    screenStream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { mandatory: { chromeMediaSource: 'desktop', chromeMediaSourceId: streamId } } });

console.log('oo',screenStream)
// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   const activeTab = tabs[0];
//   console.log("kk",tabs[0])
//   if (activeTab) {
//     // Send a message to the content script of the active tab
//     chrome.tabs.sendMessage(activeTab.id, { message: streamId, type:"stream" });
//   }
// });
  //   //Get access to the webcam feed
    await getWebcamStream();
    // await startScreenCapture()
    // Get access to the audio feed
    await getAudioStream();

    // Combine the screen, webcam, and audio streams into a single stream
    combinedStream = new MediaStream();
    const screenTrack = screenStream.getVideoTracks()[0];
    const webcamTrack = webcamStream.getVideoTracks()[0];
    const audioTrack = audioStream.getAudioTracks()[0];
    combinedStream.addTrack(screenTrack);
    combinedStream.addTrack(webcamTrack);
    combinedStream.addTrack(audioTrack);

     // Display the combined stream in a video element
    //  const combinedVideo = document.getElementById("combinedVideo");
    //  combinedVideo.style.display = "block";
    //  combinedVideo.srcObject = combinedStream;
    // Create the MediaRecorder
    mediaRecorder = new MediaRecorder(combinedStream);
  
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

      mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);

      // You can save the video URL or send it to a server here
      // For demonstration purposes, we'll simply display the video
      const video = document.createElement("video");
      video.src = url;
      video.controls = true;
      document.body.appendChild(video);
  // Update the download link
  downloadLink.href = url;
  downloadLink.style.display = "block";
      isRecording = false;
      startStopButton.textContent = "Start Recording";
    };

    mediaRecorder.start();
    isRecording = true;
    
  
 
  } catch (error) {
    console.error("Error starting recording:", error);
  }
}

function pauseRecording() {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.pause();
    isPaused = true;
    startStopButton.textContent = "Resume Recording";
  }
}

function resumeRecording() {
  if (mediaRecorder && mediaRecorder.state === "paused") {
    mediaRecorder.resume();
    isPaused = false;
    startStopButton.textContent = "Pause Recording";
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
    combinedStream.getTracks().forEach((track) => track.stop());
  }
}
function cde(){
  navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then(() => {
    console.log('ok')
  
    // Access granted, notify the content script
    // console.log(window.location.href)

    //   window.postMessage(  {type : "FROM_PAGE", text : "Hello from the webpage!"}, window.location.href); 

   
    console.log(  {type : "FROM_PAGE", text : "Hello from the webpage!"}, "*");
  })
  .catch((error) => {
    console.error("Error accessing media devices:", error);
  });
}
// const ted = await chrome.storage.sync.get("options");
// console.log("document.referrer",ted)
     // Send a message to the parent page
// window.postMessage({ type: 'des' }, "chrome-extension://fmaaplibpfdndadfmjdgcinnnnplkpml");
   // downloadButton.style.display = "none";
   // Called sometime after postMessage is called
     // Move this line inside the click event listener
    //  window.postMessage("hello there!", "chrome-extension://fmaaplibpfdndadfmjdgcinnnnplkpml");

 startRecording();
 cde();
 // event.source is window.opener
 // event.data is "hello there!"

 // Assuming you've verified the origin of the received message (which
 // you must do in any case), a convenient idiom for replying to a
 // message is to call postMessage on event.source and provide
 // event.origin as the targetOrigin.
//  event.source.postMessage(
//    "hi there yourself!  the secret response " + "is: rheeeeet!",
//    event.origin,
//  );





// Listen for messages from the content script
window.addEventListener('message', (event) => {
  console.log("event",event)
  // Check if the message is from a trusted source (you can add origin validation)
  if (event.source === window && event.data.type === 'clickEventOccurred') {
    // Log a message to the console
    console.log('Click event occurred in the content script.');
  }
});


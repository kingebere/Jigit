let isRecording = false;
let isPaused = false;
let screenStream = null;
let screenId = null;
let webcamStream = null;
let combinedStream = null;
let audioStream = null;
let mediaRecorder = null;
const chunks = [];

// const startStopButton = document.getElementById("startStopButtons");
const pauseResumeButton = document.getElementById("pauseResumeButton");
const endButton = document.getElementById("endButton");
const downloadButton = document.getElementById("downloadButton");
const downloadLink = document.getElementById("downloadLink");



//  async function getWebcamStream() {
// 	try {
// 	  const constraints = {
// 		video: {
// 		  facingMode: 'user', // or 'environment' for rear camera
// 		  width: { ideal: 1280 },
// 		  height: { ideal: 720 },
// 		},
// 	  };
  
// 	  webcamStream = await navigator.mediaDevices.getUserMedia(constraints);
	  
// 	  const webcamVideo = document.getElementById("webcamVideo");
// 	  webcamVideo.srcObject = webcamStream;
// 	  webcamVideo.style.display = "block";
// 	} catch (error) {
// 	  console.error("Error accessing webcam:", error.name, error.message);
// 	}
//   }
//   async function getAudioStream() {
// 	try {
// 	  audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
// 	} catch (error) {
// 	  console.error("Error accessing audio:", error);
// 	}
//   }
//   async function startRecording() {
// 	try {
	
  
// 	  // Get access to the audio feed
// 	  await getAudioStream();
	
//   console.log('screenStream', screenStream)
//       await getWebcamStream();

//     // Get access to the audio feed
//     await getAudioStream();
// 	  // Combine the screen, webcam, and audio streams into a single stream
// 	  combinedStream = new MediaStream();
// 	  const screenTrack = screenStream.getVideoTracks()[0];
// 	  const webcamTrack = webcamStream.getVideoTracks()[0];
// 	  const audioTrack = audioStream.getAudioTracks()[0];
// 	  combinedStream.addTrack(screenTrack);
// 	  combinedStream.addTrack(webcamTrack);
// 	  combinedStream.addTrack(audioTrack);
  
// 	  // Create the MediaRecorder
// 	  mediaRecorder = new MediaRecorder(combinedStream);
  
// 	  mediaRecorder.ondataavailable = (event) => {
// 		if (event.data.size > 0) {
// 		  chunks.push(event.data);
// 		}
// 	  };
  
// 		mediaRecorder.onstop = () => {
// 		const blob = new Blob(chunks, { type: "video/webm" });
// 		const url = URL.createObjectURL(blob);
  
// 		// You can save the video URL or send it to a server here
// 		// For demonstration purposes, we'll simply display the video
// 		const video = document.createElement("video");
// 		video.src = url;
// 		video.controls = true;
// 		document.body.appendChild(video);
// 	// Update the download link
// 	downloadLink.href = url;
// 	downloadLink.style.display = "block";
// 		isRecording = false;
// 		startStopButton.textContent = "Start Recording";
// 	  };
  
// 	  mediaRecorder.start();
// 	  isRecording = true;
// 	  startStopButton.textContent = "Pause Recording";
// 	//   pauseResumeButton.style.display = "block";
// 	  endButton.style.display = "block";
// 	//   downloadButton.style.display = "none";
// 	} catch (error) {
// 	  console.error("Error starting recording:", error);
// 	}
//   }

//   function stopRecording() {
// 	if (mediaRecorder && mediaRecorder.state !== "inactive") {
// 	  mediaRecorder.stop();
// 	  combinedStream.getTracks().forEach((track) => track.stop());
// 	}
//   }
//   startStopButton.addEventListener("click", () => {
// 	if (!isRecording) { startRecording();
// 	} else {
// 	  pauseRecording();
// 	}
//   });

//   endButton.addEventListener("click", () => {
// 	stopRecording();
//   });


// let portv = chrome.runtime.connect();

// window.addEventListener("message", (event) => {
// 	console.log('pom',event)
//   // We only accept messages from ourselves
//   if (event.source !== window) {
//     return;
//   }

//   if (event.data.type && (event.data.type === "FROM_PAGE")) {
//     console.log("Content script received: " + event.data.text);
//     portv.postMessage(event.data.text);
//   }
// }, false);
// // Listen for messages from the background script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	if (message.screenStream) {
// 	  // Handle the screen stream received from the background script
// 	  const screenStream = message.screenStream;
  
// 	  // You can use the screenStream in your content script as needed
// 	  const screenVideo = document.createElement("video");
// 	  screenVideo.srcObject = screenStream;
// 	  screenVideo.autoplay = true;
// 	  document.body.appendChild(screenVideo);
// 	}
//   });
  
	///    FUNCTIONALITIES FOR NEW UI ICON ////////
	function addPopUpButtonToPage() {
		
 
		// Send data to the child window (iframe)
		
		// // Create an iframe element
const iframe = document.createElement("iframe");
iframe.src = chrome.runtime.getURL("iframe.html");
// Set the allow attribute for camera and microphone access
iframe.allow = "camera; microphone";
console.log(iframe);
iframe.style.display = "none";
console.log('no')

let port = chrome.runtime.connect();



window.addEventListener("message", (event) => {
	console.log('po',event)
  // We only accept messages from ourselves


  if (event.data.type && (event.data.type === "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);

// Add the iframe to the current page
document.body.appendChild(iframe);


const button = document.createElement("button");
button.id = "startStopButtons";
button.textContent = 'Start Recording';

const endbutton = document.createElement("button");
endbutton.id = "endButton";
endbutton.style.display = "none";
endbutton.textContent = "End Recording";

document.body.appendChild(endbutton);
document.body.appendChild(button);

const startStopButton = document.getElementById("startStopButtons");

if (startStopButton) {
  startStopButton.addEventListener("click", () => {
    const bed = new URL(window.location.href);
    chrome.storage.sync.set({ options: bed.origin });
  window.addEventListener(
      "message",
      (event) => {
        // Do we trust the sender of this message? (might be different from what we originally opened, for example).
        if (event.origin !== "*") return;
        console.log("event", event);
        // event.source is popup
        // event.data is "hi there yourself!  the secret response is: rheeeeet!"
      },
      false
    );
    // Move this line inside the click event listener
    window.postMessage("hello there!", "*");

  });
}


	
	}
this.addPopUpButtonToPage();
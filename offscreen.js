

chrome.runtime.onMessage.addListener(async (message) => {
    if (message.target === 'offscreen') {
      switch (message.type) {
        case 'start-recording':
          startRecording(message.data);
          break;
        case 'stop-recording':
          stopRecording();
          break;
        default:
          throw new Error('Unrecognized message:', message.type);
      }
    }
  });
  
  let recorder;
  let data = [];
  let videoElement; // Added video element
  async function startRecording(streamId) {
    if (recorder?.state === 'recording') {
      throw new Error('Called startRecording while recording is in progress.');
    }
//   const red= documment.querySelector(".apply-btn")
//   console.log("red",red)
//   red.style.background=green
    // const media = await navigator.mediaDevices.getUserMedia({
    //     audio: {
    //       mandatory: {
    //         chromeMediaSource: 'tab',
    //         chromeMediaSourceId: streamId
    //       }
    //     },
    //     video: {
    //       mandatory: {
    //         chromeMediaSource: 'tab',
    //         chromeMediaSourceId: streamId
    //       }
    //     }
    //   });
    // Get the selected screen stream
    // const media = await navigator.mediaDevices.getUserMedia({ audio: true, video: { mandatory: { chromeMediaSource: 'desktop', chromeMediaSourceId: sourceId } } });
    const screenStream = await navigator.mediaDevices.getDisplayMedia({ audio: true, video: true });
      const media=await navigator.mediaDevices.getUserMedia({ video: true });
     const  audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    //  const screenStream = await navigator.mediaDevices.getUserMedia({
    //     audio: false,
    //     video: { mandatory: { chromeMediaSource: 'desktop', chromeMediaSourceId: streamId } }
    // });
      console.log("jjj",media)
    // Continue to play the captured audio to the user.
    // const output = new AudioContext();
    const combinedStream = new MediaStream();
      const screenTrack = screenStream.getVideoTracks()[0];
      const webcamTrack = media.getVideoTracks()[0];//chrome-extension://pikemlmfnafcbmpjaghcklehpndhopni/iframe.html
      const audioTrack = audioStream.getAudioTracks()[0];
      combinedStream.addTrack(screenTrack);
      combinedStream.addTrack(webcamTrack);
      combinedStream.addTrack(audioTrack);
    // const source = output.createMediaStreamSource(combinedStream);
    // source.connect(output.destination);
    
      // Create a video element to display the captured video stream
  videoElement = document.createElement('video');
  videoElement.srcObject = media;
  videoElement.autoplay = true;
  document.body.appendChild(videoElement); // Add the video element to the document

   // Display the combined stream in a video element
    //  const combinedVideo = document.getElementById("combinedVideo");
    //  combinedVideo.style.display = "block";
    //  combinedVideo.srcObject = combinedStream;
    // Start recording.
    recorder = new MediaRecorder(combinedStream, { mimeType: 'video/webm' });
    recorder.ondataavailable = (event) => data.push(event.data);
    recorder.onstop = () => {
      const blob = new Blob(data, { type: 'video/webm' });
      window.open(URL.createObjectURL(blob), '_blank');
  
      // Clear state ready for next recording
      recorder = undefined;
      data = [];
    };
    recorder.start();
  
    // Record the current state in the URL. This provides a very low-bandwidth
    // way of communicating with the service worker (the service worker can check
    // the URL of the document and see the current recording state). We can't
    // store that directly in the service worker as it may be terminated while
    // recording is in progress. We could write it to storage but that slightly
    // increases the risk of things getting out of sync.
    window.location.hash = 'recording';
  }
  
  async function stopRecording() {
    recorder.stop();
  
    // Stopping the tracks makes sure the recording icon in the tab is removed.
    recorder.stream.getTracks().forEach((t) => t.stop());
  
    // Update current state in URL
    window.location.hash = '';
  
    // Note: In a real extension, you would want to write the recording to a more
    // permanent location (e.g IndexedDB) and then close the offscreen document,
    // to avoid keeping a document around unnecessarily. Here we avoid that to
    // make sure the browser keeps the Object URL we create (see above) and to
    // keep the sample fairly simple to follow.
  }
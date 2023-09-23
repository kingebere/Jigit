
// background.js

chrome.runtime.onMessage.addListener( async (message, sender, sendResponse) => {
	console.log('trr',message)
	if (message.red) {
	  // Request access to media devices in the background script
	//   navigator.mediaDevices
	// 	.getUserMedia({ video: true, audio: true })
	// 	.then((stream) => {
	// 	  // Access granted, you can use the stream if needed
	// 	})
	// 	.catch((error) => {
	// 	  console.error("Error accessing media devices:", error);
	// 	});
	const streamId = chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], (streamId) => {
	
		});
		const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
		await chrome.tabs.sendMessage(tab.id,{key:streamId});
	  console.log('oop',streamId)
	}
  });
  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
	try {
	  console.log('Received message:', message);
	//   const mediaStreamURL = URL.createObjectURL(message.screenStream);
	//   console.log('Created URL:', mediaStreamURL);
	  if (message.yes) {
		const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
		console.log('h',tab)
		const messageData = {
			type: "WORKABLE",
		};
		chrome.tabs.sendMessage(tab.id, messageData);
		
		// Request access to media devices in the background script
		console.log('Requesting access to media devices...');
		// Your code for requesting access here
	  }
	  if (message.yesi) {
		const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
		console.log('h',tab)
		const messageData = {
			type: "SCREENSTREAM",
			screenStreamm:message.yesi
		};
		chrome.tabs.sendMessage(tab.id, messageData);
		
		// Request access to media devices in the background script
		console.log('Requesting access to media devices...');
		// Your code for requesting access here
	  }
	} catch (error) {
	  console.error('Error handling message:', error);
	  // Handle the error as needed, e.g., log it or perform some error-specific action
	}
  });
  

//   chrome.browserAction.onClicked.addListener(function (tab) {
// 	console.log("o",tab)
// 	// Send a message to your content script
// 	chrome.tabs.sendMessage(tab.id, { action: "browserActionClicked" });
//   });
  


// Listen for a click on the icon. On that click, populate the data.

chrome.action.onClicked.addListener((tab) => {
	console.log(tab)
	chrome.scripting.executeScript({
	  target: {tabId: tab.id},
	  files: ['lever.js']
	})
  });


// Function to initiate screen capture and send the stream to content script
// async function startScreenCapture(tabId) {
// 	console.log('ggg',tabId)
// 	try {
// 	  const streamId = await new Promise((resolve) => {
// 		chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], (streamId) => {
// 		  resolve(streamId);
// 		});
// 	  });
//   console.log('ff',streamId)
// 	  const screenStream = await navigator.mediaDevices.getUserMedia({
// 		audio: false,
// 		video: { mandatory: { chromeMediaSource: 'desktop', chromeMediaSourceId: streamId } }
// 	  });
//   console.log("screenStream",screenStream)
// 	  // Send the screen stream to the content script
// 	  chrome.tabs.sendMessage(tabId, { screenStream });
// 	} catch (error) {
// 	  console.error("Error accessing screen:", error);
// 	}
//   }
  
//   // Listen for clicks on the extension icon
//   chrome.action.onClicked.addListener((tab) => {
// 	// Pass the current tab ID to the startScreenCapture function
// 	startScreenCapture(tab.id);
//   });
  
 

  
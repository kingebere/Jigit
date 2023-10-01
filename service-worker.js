// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
 let recording = false;
chrome.action.onClicked.addListener(async (tab) => {

  const existingContexts = await chrome.runtime.getContexts({});
 

  const offscreenDocument = existingContexts.find(
    (c) => c.contextType === 'OFFSCREEN_DOCUMENT'
  );

  // If an offscreen document is not already open, create one.
  if (!offscreenDocument) {
    console.log(tab)
	  if (tab.url?.startsWith("chrome://")) return undefined;
chrome.scripting.executeScript({
	  target: {tabId: tab.id},
	  files: ['lever.js']
	})
    // Create an offscreen document.
    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['USER_MEDIA','AUDIO_PLAYBACK','DISPLAY_MEDIA'],
      justification: 'Recording from chrome.tabCapture API'
    });
  } else {
    recording = offscreenDocument.documentUrl.endsWith('#recording');
  }

  if (recording) {
    chrome.runtime.sendMessage({
      type: 'stop-recording',
      target: 'offscreen'
    });
    chrome.action.setIcon({ path: 'icons/not-recording.png' });
    return;
  }

  // Get a MediaStream for the active tab.
  const streamId = await chrome.tabCapture.getMediaStreamId({
    targetTabId: tab.id
  });
  // Send the stream ID to the offscreen document to start recording.
  chrome.runtime.sendMessage({
    type: 'start-recording',
    target: 'offscreen',
    data: streamId
  });

  chrome.action.setIcon({ path: '/icons/recording.png' });
});
// Background script (background.js)

// Listen for messages from content scripts or other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'contentScriptActions') {
    console.log('Message received in background script:', message.data);
  
   
      chrome.runtime.sendMessage({
        type: 'stop-recording',
        target: 'offscreen'
      });
      chrome.action.setIcon({ path: 'icons/not-recording.png' });
      // return;
    
   
    // You can send a response back to the content script if needed
    const response = 'Message received in background script!';
    sendResponse(response);
     return;
  }
});

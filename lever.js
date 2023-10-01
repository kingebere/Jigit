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


    startStopButton.addEventListener("click",()=>{
        console.log("ppp")
        const messageData = {
            action: 'contentScriptActions',
            data: 'Hello from content script!',
          };

          
          // Send the message to the background script
          chrome.runtime.sendMessage(messageData, (response) => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            } else {
              console.log('Response from background script:', response);
            }
          });
    })

// Add the iframe to the current page
document.body.appendChild(iframe);}
addPopUpButtonToPage()







chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toBackgroundFromGoogle") {
    try {
      // Process the message and prepare the response data

      if (message.load ==="reload"){
       let textArea = document.getElementsByTagName("textarea")[0]
        textArea.value = message.text;
        textArea.dispatchEvent(new Event('input', {bubbles:true}));
      }
      const response = "This is the response from the background script.";
      console.log("toBackgroundFromGoogle"+ message.load)
      // Send the response back to the content script
      sendResponse(response);
    } catch (error) {
      console.error("Error sending response to content script:", error);
    }
    // Indicate that we will handle the response asynchronously

  }
});










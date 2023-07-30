
alert('Hello world from content.js');





chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toBackgroundFromGoogle") {
    try {
      // Process the message and prepare the response data

      if (message.load ==="reload"){
        document.getElementsByTagName("textarea")[0].value = "value";
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










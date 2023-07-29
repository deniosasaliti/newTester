
alert('Hello world from content.js');

addEventListener("load", (event) => {
  console.log("page LOADED")
  setTimeout(() => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.action === "backTranslate") {
      let url = "https://translate.google.com/";
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBB")


    }

  });

  }, 1000);
})





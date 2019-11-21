const waitForIframeScrollPosition = (document, callback) => {
  let element = document
    .getElementById("iframe")
    .contentWindow.document.getElementById("iframeScrollPosition");

  if (typeof element === "undefined") {
    let interval = setInterval(() => {
      //get element again
      element = document
        .getElementById("iframe")
        .contentWindow.document.getElementById("iframeScrollPosition");
      //check if it exists yet.
      if (typeof element !== "undefined") {
        //if it does kill the interval and run callback
        clearInterval(interval);
        console.log("Interval cleared");
        callback();
      }
      //if it doesn't keep checking.
    }, 500);
  } else {
    callback();
  }
};
export { waitForIframeScrollPosition };

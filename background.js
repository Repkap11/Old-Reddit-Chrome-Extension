var lastRequestId;
chrome.webRequest.onBeforeRequest.addListener(
  function(request) {
    console.log(request.url);

    newURL = request.url.replace("www.reddit.com", "old.reddit.com");
    return {
      redirectUrl : newURL
    };
  },
  {
      urls : ["*://*.reddit.com/*"]
  },
  ["blocking"]
);
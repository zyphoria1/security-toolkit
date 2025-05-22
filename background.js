const blocklist = ['google-analytics.com', 'facebook.net'];
chrome.webRequest.onBeforeRequest.addListener(
  (details) => blocklist.some(tracker => details.url.includes(tracker)) 
    ? { cancel: true } 
    : { cancel: false },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

document.getElementById('maskData').addEventListener('click', () => {
  chrome.tabs.query({ active: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        document.querySelectorAll('input[type="email"]').forEach(input => {
          input.value = `fake${Math.random().toString(36).slice(2)}@example.com`;
        });
      }
    });
  });
});

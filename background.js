chrome.runtime.onInstalled.addListener(() => {
  });
  
  chrome.runtime.onStartup.addListener(() => {
  });
  
  async function updateClipboardHistory() {
    try {
      const clipboardText = await navigator.clipboard.readText();
      chrome.storage.local.get({ history: [] }, (data) => {
        const history = data.history;
        if (clipboardText && !history.includes(clipboardText)) {
          history.unshift(clipboardText);
          chrome.storage.local.set({ history: history.slice(0, 42) }); 
          
        }
      });
    } catch (error) {
      console.error("Failed to read clipboard:", error);
    }
  }
  
  setInterval(updateClipboardHistory, 1000); // Check clipboard every 1 seconds
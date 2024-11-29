function displayHistory() {
    chrome.storage.local.get({ history: [] }, (data) => {
      const historyList = document.getElementById("historyList");
      historyList.innerHTML = ""; // Clear previous list
  
      data.history.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
  
        const copyButton = document.createElement("button");
        copyButton.textContent = "Copy";
        copyButton.addEventListener("click", () => {
          navigator.clipboard.writeText(item);
          alert("Copied to clipboard!");
        });
  
        listItem.appendChild(copyButton);
        historyList.appendChild(listItem);
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayHistory);
  
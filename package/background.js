chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "toggle-json-yaml") {
    chrome.tabs.sendMessage(tab.id, {
      type: "toggle",
      info: info
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "toggle-json-yaml",
    title: "Toggle JSON/YAML",
    contexts: ["page", "selection"]
  });

});

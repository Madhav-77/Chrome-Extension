chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: '#b4aa12' }, function() {
        console.log("The color is green.");
    });
});
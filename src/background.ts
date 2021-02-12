chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'showPageAction') {
        if (sender?.tab?.id) {
            chrome.pageAction.show(sender.tab.id)
            sendResponse("Successfully shown icon")
        } else {
            console.error(`Error!`)
            console.error(message)
            sendResponse("Showing Icon failed!")
        }
    }
});

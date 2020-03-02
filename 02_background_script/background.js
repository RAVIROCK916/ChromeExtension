console.log('background runnning');

chrome.browserAction.onClicked.addListener(
    function buttonClicked(tab){
        let msg = {
            txt : "button_clicked"
        }
        chrome.tabs.sendMessage(tab.id, msg);
});

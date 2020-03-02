console.log("Hii Ravi Rock!");
let para = document.getElementsByTagName('p');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    if(message.txt=='button_clicked'){
        for(elt of para){
            elt.style['background-color'] = '#FF00FF';
        }
    }
}

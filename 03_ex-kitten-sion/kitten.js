console.log("Kittens of the world!");

let fileNames = [
    "deva-williamson-TiSLq6Gbftg-unsplash.jpg",
    "marco-secchi-yjq31QGOnSY-unsplash.jpg",
    "ines-pimentel-opkaRk20tAw-unsplash.jpg",
    "sven-brandsma-KemTA_72w7Y-unsplash.jpg",
    "wilmer-martinez-8WR86Z_mLms-unsplash.jpg"
];

let imgs = document.getElementsByTagName('img');

for(imgElt of imgs){
    let r = Math.floor(Math.random()*fileNames.length);
    let file = 'kittens/' + fileNames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
}

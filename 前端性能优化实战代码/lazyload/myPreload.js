// 使用XMLHttpRequest对象
// var xmlhttprequest = new XMLHttpRequest();  

// xmlhttprequest.onreadystatechange = callback;

// xmlhttprequest.onprogress = progressCallback;

// xmlhttprequest.open("GET","http://image.baidu.com/mouse.jpg",true);

// xmlhttprequest.send();

// function callback () {
//   if (xmlhttprequest.readyState == 4 && xmlhttprequest.status==200){
//     var responseText = xmlhttprequest.responseText;  
//   }else{
//     console.log("Request was unsuccessful: " + xmlhttprequest.status);
//   }    
// }

// function progressCallback (e) {
//   e = e || event;
//   if (e.lengthComputable){
//       console.log("Received " + e.loaded + " of " + e.total + " bytes")
//   }
// }

// 使用Image对象
// var image = new Image()
// image.src = "http://pic26.nipic.com/20121213/6168183_004444903000_2.jpg"



// 使用preload.js
var queue = new createjs.LoadQueue(false);

queue.on("complete", handleComplete, this);

queue.loadManifest([
  {id: "myImage", src:"http://pic26.nipic.com/20121213/6168183_004444903000_2.jpg"},
  {id: 'myImage2', src:"http://pic9.nipic.com/20100814/2839526_193147158170_2.jpg"}
]);

function handleComplete() {
    var image = queue.getResult("myImage");
    document.body.appendChild(image);
 }
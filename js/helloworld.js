var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);


var hellochiko = function(){
	var message = document.getElementById("hellochiko");
	message.setAttribute("class", "");
};

var showmeHelloWorldButton = document.getElementById("showmeHelloWorld");
showmeHelloWorldButton.addEventListener("click", hellochiko);

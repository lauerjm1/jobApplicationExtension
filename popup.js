function gotoTestApplicationHTML() {
	window.open("testApplication.html");
	console.log("here");
}

var editApplicationButton = document.getElementById("editApplicationButton");

editApplicationButton.addEventListener("click", gotoTestApplicationHTML, false);
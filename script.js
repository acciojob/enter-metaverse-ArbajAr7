//your JS code here. If required.
function changetext(){
	document.getElementById('status').textContent = "Entered Metaverse";
}
document.getElementById('htmlbody').innerHTML += "<p id='status'><h1>Enter the Metaverse<h1></p>";
document.getElementById('htmlbody').innerHTML += "<button id='enterBtn'>Enter</button>";
document.getElementById('enterBtn').addEventListener("click",changetext);

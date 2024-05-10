//your JS code here. If required.
function changetext(){
	document.getElementById('status').textContent = "Entered Metaverse";
	document.getElementById('status').tagName = "h1";
}
document.getElementById('htmlbody').innerHTML += "<h1 id='xyz'><p id='status'>Enter the Metaverse</p></h1>";
document.getElementById('htmlbody').innerHTML += "<button id='enterBtn'>Enter</button>";
document.getElementById('enterBtn').addEventListener("click",changetext);

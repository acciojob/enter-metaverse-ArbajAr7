//your JS code here. If required.
document.getElementById('enterBtn').addEventListener('click', function() {
  var statusElement = document.getElementById('status');
  var newElement = document.createElement('h1');
  newElement.innerHTML = "Entered Metaverse";
  statusElement.parentNode.replaceChild(newElement, statusElement);
});
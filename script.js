document.getElementById("enterBtn").addEventListener("click", function() {
  let e = document.getElementById("status");
  let d = document.createElement('h1');
	d.innerHTML = "Entered Metaverse"
	e.parentNode.insertBefore(d, e);
e.parentNode.removeChild(e);
});
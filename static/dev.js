window.onfocus = location.reload.bind(location)
window.onerror = function(msg, f, l) {
    document.body.style.fontFamily = "monospace"
    document.body.style.fontSize = '2em'
    document.body.innerHTML = f + ':' + l +
	'<hr/>' + '<br/>' + msg
}

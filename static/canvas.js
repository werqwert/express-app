export default function canvas(background='transparent') {
    let c = document.createElement('canvas')
    c.style.background = background
    setInterval(function() {
	if(c.parentNode && c.height != c.parentNode.clientHeight) {
	    c.width = c.parentNode.clientWidth
	    c.height = c.parentNode.clientHeight
	}
    }, 100)
    return c
}

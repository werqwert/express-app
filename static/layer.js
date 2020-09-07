export default function layer(...children) {
    let l = document.createElement('div')
    l.style.position = 'absolute'
    l.style.overflow = 'auto'

    for(let c of children) {
	l.appendChild(c)
    }
    return l
}

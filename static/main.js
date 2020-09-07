export default function main(...children) {
    let element = document.createElement('main')
    for(let c of children) {
	element.appendChild(c)
    }
    return element
}

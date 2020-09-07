export default function div(...children) {
    let division = document.createElement(div)
    for(let c of children) division.appendChild(c)
    return division
}

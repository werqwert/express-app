// shorthand for creating HTMLAnchorElement

export default function a(href, textContent) {
    let aElement = document.createElement('a')
    aElement.href = href
    aElement.textContent = textContent
    return aElement
}

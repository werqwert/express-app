export default function img(src, width, height, borderRadius) {
    let image = document.createElement('img')
    image.src = src
    if(width) image.style.width = width
    if(height) image.style.height = height
    if(borderRadius) image.style.borderRadius = borderRadius
    return image
}

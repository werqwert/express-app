class Slidebar {
    constructor(options = {}, value = 0) {
	this.options = Object.assign(
	    {
		min: 0,
		max: 1,
		step: 0.1,
		cssUnit: '100vw',
	    }, options
	)
	
	this.element = document.createElement("div")
	this.element.className = 'slidebar'
	
	this.element.style.width = this.options.width
	this.element.style.position = 'absolute'
	this.element.style.background = 'rgba(0,0,0,0.5)'
	this.element.style.border = '1px solid gray'
	this.element.textContent = 'slidebar'

    }
}

export default function slidebar(options, value) {
    return new Slidebar(options, value).element
}

const sensor = new RelativeOrientationSensor({frequency: 60})
let matrix = new Float32Array(16)
export default function relativeOrientation(callback) {
    sensor.addEventListener('reading', function() {
	sensor.populateMatrix(matrix)
	callback(matrix)
    })
}
sensor.start()

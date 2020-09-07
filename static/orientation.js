
const sensor = new RelativeOrientationSensor({frequency: 60})
var orientationHandler = ()=>null
sensor.addEventListener('reading', function() {
    orientationHandler()
})
sensor.start()

export default function onOrientation()

import { useEffect, useState } from 'react'

const Accel = callback => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [z, setZ] = useState(0)

  useEffect(() => {
    let sensor = new window.Accelerometer({ frequency: 2 })

    if (sensor) {
      sensor.start()
      sensor.onreading = () => {
        console.log('Acceleration X-axis ' + sensor.x)
        console.log('Acceleration Y-axis ' + sensor.y)
        console.log('Acceleration Z-axis ' + sensor.z)
        // setState(...sensor)
        setX(sensor.x)
        setY(sensor.y)
        setZ(sensor.z)
      }
      sensor.onerror = event => console.log(event.error.name, event.error.message)
    }

    return () => {}
  }, [callback])

  return (
    <div>
      ACCEL
      <div>X: {x}</div>
      <div>Y: {y}</div>
      <div>Z: {z}</div>
    </div>
  )
}

export default Accel

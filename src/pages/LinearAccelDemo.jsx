import { useState, useEffect } from 'react'

// Source: https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor
const sensor = new window.LinearAccelerationSensor({ frequency: 1 })

const LinearAccelDemo = props => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [z, setZ] = useState(0)

  useEffect(() => {
    if (sensor) {
      sensor.start()
      sensor.onreading = () => {
        console.log(`LinearAccel along the X-axis ${sensor.x}`)
        console.log(`LinearAccel along the Y-axis ${sensor.y}`)
        console.log(`LinearAccel along the Z-axis ${sensor.z}`)

        setX(sensor.x)
        setY(sensor.y)
        setZ(sensor.z)
      }
      sensor.onerror = event => console.log(event.error.name, event.error.message)
    }

    return () => {}
  }, [])

  return (
    <div>
      <div>X: {x}</div>
      <div>Y: {y}</div>
      <div>Z: {z}</div>
    </div>
  )
}

export default LinearAccelDemo

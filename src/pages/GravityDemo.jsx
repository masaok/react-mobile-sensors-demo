import { useState, useEffect } from 'react'

// Source: https://developer.mozilla.org/en-US/docs/Web/API/GravitySensor
let sensor = new window.GravitySensor({ frequency: 1 })

const GravityDemo = props => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [z, setZ] = useState(0)

  useEffect(() => {
    if (sensor) {
      sensor.start()
      sensor.onreading = () => {
        console.log(`Gravity along the X-axis ${sensor.x}`)
        console.log(`Gravity along the Y-axis ${sensor.y}`)
        console.log(`Gravity along the Z-axis ${sensor.z}`)

        setData({ ...sensor })

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
      <div>HASH STATE:</div>
      <div>X: {data.x}</div>
      <div>Y: {data.y}</div>
      <div>Z: {data.z}</div>
      <div>SEPARATE STATE:</div>
      <div>X: {x}</div>
      <div>Y: {y}</div>
      <div>Z: {z}</div>
    </div>
  )
}

export default GravityDemo

import { useState, useEffect } from 'react'

// Source: https://developer.mozilla.org/en-US/docs/Web/API/GravitySensor

const GravityDemo = props => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  useEffect(() => {
    let sensor = new window.GravitySensor({ frequency: 1 })

    if (sensor) {
      sensor.start()
      sensor.onreading = () => {
        console.log(`Gravity along the X-axis ${sensor.x}`)
        console.log(`Gravity along the Y-axis ${sensor.y}`)
        console.log(`Gravity along the Z-axis ${sensor.z}`)
        setData({ ...sensor })
      }
      sensor.onerror = event => console.log(event.error.name, event.error.message)
    }

    return () => {}
  }, [])

  return (
    <div>
      <div>X: {data.x}</div>
      <div>Y: {data.y}</div>
      <div>Z: {data.z}</div>
    </div>
  )
}

export default GravityDemo

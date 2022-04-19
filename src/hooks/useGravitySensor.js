import { useEffect, useState } from 'react'

const sensor = new window.GravitySensor({ frequency: 1 })

const useGravitySensor = ({ frequency } = {}, callback) => {
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

        setX(sensor.x)
        setY(sensor.y)
        setZ(sensor.z)
      }
      sensor.onerror = event => console.log(event.error.name, event.error.message)
    }
  }, [frequency, callback])

  return { x, y, z }
}

export default useGravitySensor

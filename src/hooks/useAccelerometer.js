import { useEffect, useState } from 'react'

const useAccelerometer = ({ frequency } = {}) => {
  const [linearAcceleration, setLinearAcceleration] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  useEffect(() => {
    let sensor = new window.Accelerometer({ frequency })

    if (sensor) {
      sensor.start()
      sensor.onreading = () => {
        const readings = {
          x: sensor.x,
          y: sensor.y,
          z: sensor.z,
        }

        setLinearAcceleration({
          ...readings,
        })
      }

      sensor.onerror = event => {
        console.log(event.error.name, event.error.message)
        setLinearAcceleration({
          x: null,
          y: null,
          z: null,
        })
      }
    }
  }, [frequency])

  return linearAcceleration
}

export default useAccelerometer

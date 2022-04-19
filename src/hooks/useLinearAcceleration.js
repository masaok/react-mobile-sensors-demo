import { useEffect, useState } from 'react'

const sensor = new window.LinearAccelerationSensor({ frequency: 1 })

const useLinearAcceleration = ({ frequency } = {}) => {
  const [linearAcceleration, setLinearAcceleration] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  useEffect(() => {
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

export default useLinearAcceleration

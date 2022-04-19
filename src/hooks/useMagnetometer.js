import { useEffect, useState } from 'react'

const sensor = new window.Magnetometer({ frequency: 1 })

const useMagnetometer = ({ frequency } = {}) => {
  const [data, setData] = useState({
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

        setData({
          ...readings,
        })
      }

      sensor.onerror = event => {
        console.log(event.error.name, event.error.message)
        setData({
          x: null,
          y: null,
          z: null,
        })
      }
    }
  }, [frequency])

  return data
}

export default useMagnetometer

import { useEffect, useState } from 'react'

const useAbsoluteOrientationSensor = ({ frequency, referenceFrame } = {}, callback) => {
  const [quaternion, setQuaternion] = useState([])

  useEffect(() => {
    const options = { frequency, referenceFrame }
    let sensor = new window.AbsoluteOrientationSensor(options)

    if (sensor) {
      sensor.start()

      sensor.onreading = () => {
        const readings = [...sensor.quaternion]

        setQuaternion([...readings])

        if (callback instanceof Function) {
          callback({
            ...readings,
          })
        }
      }
    }

    return () => {}
  }, [callback, frequency, referenceFrame])

  return quaternion
}

export default useAbsoluteOrientationSensor

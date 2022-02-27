import { useState, useEffect } from 'react'

// Source: https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor

const AbsoluteOrientationDemo = props => {
  const [quaternion, setQuaternion] = useState(null)

  const options = { frequency: 60, referenceFrame: 'device' }

  // TODO: 'AbsoluteOrientationSensor' is not defined (skipping this sensor for now)
  // const sensor = new AbsoluteOrientationSensor(options)

  useEffect(() => {
    // sensor.addEventListener('reading', () => {
    //   // model is a Three.js object instantiated elsewhere.
    //   // model.quaternion.fromArray(sensor.quaternion).inverse()
    //   setQuaternion(sensor.quaternion)
    // })
    // sensor.addEventListener('error', error => {
    //   if (error.name === 'NotReadableError') {
    //     console.log('Sensor is not available.')
    //   }
    // })
    // sensor.start()
  }, [])

  console.log(quaternion)

  return <div>{quaternion}</div>
}

export default AbsoluteOrientationDemo

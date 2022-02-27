import { useState, useEffect } from 'react'

// Source: https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor

const options = { frequency: 1, referenceFrame: 'device' }

// TODO: 'AbsoluteOrientationSensor' is not defined (skipping this sensor for now)
const sensor = new window.AbsoluteOrientationSensor(options)

const AbsoluteOrientationDemo = props => {
  const [quaternion, setQuaternion] = useState([])

  useEffect(() => {
    sensor.addEventListener('reading', () => {
      // model is a Three.js object instantiated elsewhere.
      // model.quaternion.fromArray(sensor.quaternion).inverse()
      setQuaternion(sensor.quaternion)
    })
    sensor.addEventListener('error', error => {
      if (error.name === 'NotReadableError') {
        console.log('Sensor is not available.')
      }
    })
    sensor.start()
  }, [])

  console.log(quaternion)

  return (
    <div>
      <pre>{JSON.stringify(quaternion, null, 2)}</pre>
      <div>
        Rounded to 0.01
        {quaternion.map(item => {
          console.log(item)
          return <div>{Math.round(100 * item) / 100}</div>
        })}
      </div>
      <div>
        Rounded to 0.1
        {quaternion.map(item => {
          console.log(item)
          return <div>{Math.round(10 * item) / 10}</div>
        })}
      </div>
    </div>
  )
}

export default AbsoluteOrientationDemo

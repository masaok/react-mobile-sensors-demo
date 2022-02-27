import { useState, useEffect } from 'react'

import { Canvas } from '@react-three/fiber'

import AbsBox from '../three/AbsBox'

// Source: https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor

const options = { frequency: 5, referenceFrame: 'device' }

// TODO: 'AbsoluteOrientationSensor' is not defined (skipping this sensor for now)
const sensor = new window.AbsoluteOrientationSensor(options)

const AbsoluteOrientationBox = props => {
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
    <Canvas
      camera={{
        // fov: 90,
        position: [0, 0, 20],
      }}
      // style={{ height: '100vh', width: '100vw' }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <AbsBox position={[0, 0, 0]} gyro={{ x: 0, y: 0, z: 0 }} />
    </Canvas>
  )
}

export default AbsoluteOrientationBox

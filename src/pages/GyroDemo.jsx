import { Canvas } from '@react-three/fiber'

import Box from '../three/Box'

import useGyroscope from '../hooks/useGyroscope'

const onGyroscopeUpdate = gyro => {
  console.log('NEW GYRO INFO: ', gyro)
}

const GyroDemo = props => {
  const gyro = useGyroscope({ frequency: 10 }, onGyroscopeUpdate)
  // console.log(gyro)

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
      <Box position={[-10.2, 0, 0]} gyro={gyro} />
      <Box position={[10.2, 0, 0]} gyro={gyro} />
    </Canvas>
  )
}

export default GyroDemo

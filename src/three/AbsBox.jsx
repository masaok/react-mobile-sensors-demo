import { useRef, useState } from 'react'
import {
  useFrame,
  // useThree
} from '@react-three/fiber'

function AbsBox(props) {
  const { gyro } = props
  // console.log(gyro)

  // FAIL
  // https://docs.pmnd.rs/react-three-fiber/getting-started/examples#basic-examples
  // const three = useThree()

  // FAIL
  // https://threejs.org/docs/#api/en/math/Quaternion
  // const quaternion = three.Quaternion(0, 0, 0, 1)

  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()

  // FAIL
  // https://stackoverflow.com/questions/58009236/buffergeometry-setfrompoints-with-react-three-fiber
  // const ref = useUpdate(geometry => {
  //   // geometry.setFromPoints(vertices)
  //   return geometry
  // }, [])

  // FAIL
  // https://threejs.org/docs/#api/en/core/BufferGeometry.applyQuaternion
  // const ref = useRef(geometry => {
  //   // geometry.setFromPoints(vertices)
  //   geometry.applyQuaternion(quaternion)
  //   // return geometry
  // }, [])

  // FAIL
  // https://stackoverflow.com/questions/68796567/react-three-fiber-lock-object-position-in-canvas
  // ref.current.quaternion = quaternion

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // useFrame((state, delta) => (ref.current.rotation.y += 0.01))

  // Apply Gyro angular velocity
  useFrame((state, delta) => (ref.current.rotation.x = gyro.x))
  useFrame((state, delta) => (ref.current.rotation.y = gyro.y))
  useFrame((state, delta) => (ref.current.rotation.z = gyro.z))

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += 0.01
  //   // ref.current.rotation.y += 0.01
  //   // ref.current.rotation.z += 0.01
  // })

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => click(!clicked)}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
    >
      <boxGeometry args={[15, 15, 15]} />
      {/* <bufferGeometry attach="geometry" ref={ref} /> */}

      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default AbsBox

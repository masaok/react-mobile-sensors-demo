import useGyroscope from '../hooks/useGyroscope'

const onUpdate = data => {
  console.log('GYRO ON UPDATE: ', data)
}

const GyroHook = props => {
  const gyro = useGyroscope({ frequency: 5 }, onUpdate)

  return (
    <div>
      GYRO
      <pre>{JSON.stringify(gyro, null, 2)}</pre>
    </div>
  )
}

export default GyroHook

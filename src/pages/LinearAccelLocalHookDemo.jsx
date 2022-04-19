import useLinearAccelerationSensor from '../hooks/useLinearAcceleration'

const LinearAccelLocalHookDemo = props => {
  const sensor = useLinearAccelerationSensor({ frequency: 2 })
  console.log(sensor)

  return (
    <div>
      <div>useLinearAccelerationSensor Local Hook Demo</div>
      <pre>{JSON.stringify(sensor, null, 2)}</pre>
    </div>
  )
}

export default LinearAccelLocalHookDemo

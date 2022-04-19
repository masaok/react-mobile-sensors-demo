import useLinearAccelerationSensor from 'react-hook-linear-acceleration'

const LinearAccelRealHookDemo = props => {
  const sensor = useLinearAccelerationSensor({ frequency: 2 })
  console.log(sensor)

  return (
    <div>
      <div>useLinearAccelerationSensor Real Hook Demo</div>
      <pre>{JSON.stringify(sensor, null, 2)}</pre>
    </div>
  )
}

export default LinearAccelRealHookDemo

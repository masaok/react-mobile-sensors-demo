import useAccelerometer from '../hooks/useAccelerometer'

const AccelHookDemo = props => {
  const sensor = useAccelerometer({ frequency: 2 })
  console.log(sensor)

  return (
    <div>
      <div>Accelerometer Hook Demo</div>
      <pre>{JSON.stringify(sensor, null, 2)}</pre>
    </div>
  )
}

export default AccelHookDemo

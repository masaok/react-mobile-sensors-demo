import useGravitySensor from '../hooks/useGravitySensor'

const GravityLocalHookDemo = props => {
  const sensor = useGravitySensor({ frequency: 2 })
  console.log(sensor)

  return (
    <div>
      <div>useGravitySensor Local Hook Demo</div>
      <pre>{JSON.stringify(sensor, null, 2)}</pre>
    </div>
  )
}

export default GravityLocalHookDemo

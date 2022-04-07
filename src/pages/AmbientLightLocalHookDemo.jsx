import useAmbientLightSensor from '../hooks/useAmbientLightSensor'

const onUpdate = data => {
  console.log('NEW INFO: ', data)
}

const AmbientLightLocalHookDemo = props => {
  const sensor = useAmbientLightSensor({ frequency: 10 }, onUpdate)
  console.log(sensor)

  return (
    <div>
      <div>AmbientLightSensor Local Hook Demo</div>
      <pre>{JSON.stringify(sensor, null, 2)}</pre>
    </div>
  )
}

export default AmbientLightLocalHookDemo

import useMagnetometer from '../hooks/useMagnetometer'

const MagnetometerLocalHookDemo = props => {
  const sensor = useMagnetometer({ frequency: 2 })
  console.log(sensor)

  return (
    <div>
      <div>useMagnetometer Local Hook Demo</div>
      <pre>{JSON.stringify(sensor, null, 2)}</pre>
    </div>
  )
}

export default MagnetometerLocalHookDemo

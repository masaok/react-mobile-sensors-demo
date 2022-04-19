import useMagnetometer from 'react-hook-magnetometer'

const MagnetometerRealHookDemo = props => {
  const sensor = useMagnetometer({ frequency: 2 })
  console.log(sensor)
  return (
    <div>
      <div>useMagnetometer Real Hook Demo</div>
      <pre>{JSON.stringify(sensor, null, 2)}</pre>
    </div>
  )
}

export default MagnetometerRealHookDemo

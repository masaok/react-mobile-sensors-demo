// Source: https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor
import useAbsoluteOrientationSensor from '../hooks/useAbsoluteOrientationSensor'

const onUpdate = info => {
  // console.log('NEW INFO: ', info)
}

const AbsoluteOrientationHook = props => {
  const quaternion = useAbsoluteOrientationSensor(
    { frequency: 3, referenceFrame: 'device' },
    onUpdate
  )

  // console.log(quaternion)

  return (
    <div>
      <div>Absolute Orientation Sensor Hook Demo</div>
      <pre>{JSON.stringify(quaternion, null, 2)}</pre>
      <div>
        Rounded to 0.01
        {quaternion.map((item, index) => {
          return <div key={index}>{Math.round(100 * item) / 100}</div>
        })}
      </div>
      <div>
        Rounded to 0.1
        {quaternion.map((item, index) => {
          return <div key={index}>{Math.round(10 * item) / 10}</div>
        })}
      </div>
    </div>
  )
}

export default AbsoluteOrientationHook

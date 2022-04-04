// Source: https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor
import useAbsoluteOrientationSensor from '../hooks/useAbsoluteOrientationSensor2'

const onUpdate = info => {
  // console.log('NEW INFO: ', info)
}

const AbsoluteOrientationHook = props => {
  const quaternion = useAbsoluteOrientationSensor(
    { frequency: 5, referenceFrame: 'device' },
    onUpdate // function required, cannot be anonymous empty function
  )

  // console.log(quaternion)
  // console.log(JSON.stringify(quaternion, null, 2))

  return (
    <div>
      <div>Absolute Orientation Sensor Hook 2 Demo</div>
      <pre>{JSON.stringify(quaternion, null, 2)}</pre>
      <div>
        Rounded to 0.01
        {quaternion.map(item => {
          // console.log(item)
          return <div>{Math.round(100 * item) / 100}</div>
        })}
      </div>
      <div>
        Rounded to 0.1
        {quaternion.map(item => {
          // console.log(item)
          return <div>{Math.round(10 * item) / 10}</div>
        })}
      </div>
    </div>
  )
}

export default AbsoluteOrientationHook

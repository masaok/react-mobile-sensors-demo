import { useState, useEffect } from 'react'

// Source: https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor

let acl = new window.Accelerometer({ frequency: 1 })

const AbsoluteOrientationDemo = props => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const [dx, setDx] = useState(0) // sanity check (this works)

  useEffect(() => {
    acl.addEventListener('reading', () => {
      console.log('Accel X-axis ' + acl.x)
      console.log('Accel Y-axis ' + acl.y)
      console.log('Accel Z-axis ' + acl.z)

      console.log(typeof acl) // object

      setDx(acl.x) // sanity check

      // setData({ ...acl }) // FAIL: data becomes {}
      setData(acl) // this works
    })
    acl.start()
  }, [])

  console.log(data)

  return (
    <div>
      <div>X: {data.x}</div>
      <div>X: {dx}</div>
      <div>Y: {data.y}</div>
      <div>Z: {data.z}</div>
    </div>
  )
}

export default AbsoluteOrientationDemo

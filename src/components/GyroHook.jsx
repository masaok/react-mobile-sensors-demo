import { useEffect, useState } from 'react'

import useGyroscope from '../hooks/useGyroscope'

const onGyroscopeUpdate = gyro => {
  console.log('NEW GYRO INFO: ', gyro)
}

const GyroHook = props => {
  const gyro = useGyroscope({ frequency: 5 }, onGyroscopeUpdate)

  // console.log(gyro)

  return <div>GYRO</div>
}

export default GyroHook

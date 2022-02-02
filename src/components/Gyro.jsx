import { useEffect, useState } from 'react'

const Gyro = ({ enableHighAccuracy, maximumAge, timeout } = {}, callback) => {
  const [coordinates] = useState({
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  })

  useEffect(() => {
    //   let didCancel
    //   const updateCoordinates = ({ coords = {}, timestamp }) => {
    //     const { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed } = coords
    //     if (!didCancel) {
    //       setCoordinates({
    //         accuracy,
    //         altitude,
    //         altitudeAccuracy,
    //         heading,
    //         latitude,
    //         longitude,
    //         speed,
    //         timestamp,
    //         error: null,
    //       })
    //       if (callback instanceof Function) {
    //         callback({
    //           accuracy,
    //           altitude,
    //           altitudeAccuracy,
    //           heading,
    //           latitude,
    //           longitude,
    //           speed,
    //           timestamp,
    //           error: null,
    //         })
    //       }
    //     }
    //   }

    let sensor = new window.Gyroscope({ frequency: 5 })

    if (sensor) {
      sensor.start()
      sensor.onreading = () => {
        console.log('Angular velocity around the X-axis ' + sensor.x)
        console.log('Angular velocity around the Y-axis ' + sensor.y)
        console.log('Angular velocity around the Z-axis ' + sensor.z)
      }
      sensor.onerror = event => console.log(event.error.name, event.error.message)
    }

    return () => {}
  }, [callback, enableHighAccuracy, maximumAge, timeout])

  console.log(coordinates)
  return <div>GYRO</div>
}

export default Gyro

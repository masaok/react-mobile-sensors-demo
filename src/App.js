import './App.css'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import GyroDemo from './pages/GyroDemo'
import Homepage from './pages/Homepage'
import GravityDemo from './pages/GravityDemo'

import Geo from './components/Geo'
import Gyro from './components/Gyro'
import GyroLocalHook from './components/GyroLocalHook'
import GyroHook from './components/GyroHook'

import AbsoluteOrientationDemo from './pages/AbsoluteOrientationDemo'
import AbsoluteOrientationBox from './pages/AbsoluteOrientationBox'
import AbsoluteOrientationHook from './pages/AbsoluteOrientationHook'
import AbsoluteOrientationHook2 from './pages/AbsoluteOrientationHook2'

import Accel from './components/Accel'
import AccelLocalHookDemo from './pages/AccelLocalHookDemo'
import AccelHookDemo from './pages/AccelHookDemo'
import AmbientLightLocalHookDemo from './pages/AmbientLightLocalHookDemo'

const App = () => {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Mobile Sensors</title>
        </Helmet>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />

            {/* Gyro */}
            <Route path="gyro/r" element={<Gyro />} />
            <Route path="gyro/o" element={<GyroLocalHook />} />
            <Route path="gyro/h" element={<GyroHook />} />
            <Route path="gyro/d" element={<GyroDemo />} />

            {/* Geo */}
            <Route path="geo/r" element={<Geo />} />

            {/* Absolute Orientation */}
            <Route path="abs" element={<AbsoluteOrientationDemo />} />
            <Route path="abs/b" element={<AbsoluteOrientationBox />} />
            <Route path="abs/h" element={<AbsoluteOrientationHook />} />
            <Route path="abs/h2" element={<AbsoluteOrientationHook2 />} />

            {/* Accelerometer */}
            <Route path="acc" element={<Accel />} />
            <Route path="acc/lh" element={<AccelLocalHookDemo />} />
            <Route path="acc/h" element={<AccelHookDemo />} />

            {/* Ambient Light Sensor */}
            <Route path="amb" element={<AmbientLightLocalHookDemo />} />

            {/* Gravity */}
            <Route path="grav" element={<GravityDemo />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  )
}

export default App

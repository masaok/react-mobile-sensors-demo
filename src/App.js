import './App.css'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import GyroDemo from './pages/GyroDemo'
import Homepage from './pages/Homepage'

import Geo from './components/Geo'
import Gyro from './components/Gyro'
import GyroHook from './components/GyroHook'
import AbsoluteOrientationDemo from './pages/AbsoluteOrientationDemo'
import AbsoluteOrientationBox from './pages/AbsoluteOrientationBox'

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
            <Route path="gyro/r" element={<Gyro />} />
            <Route path="gyro/h" element={<GyroHook />} />
            <Route path="gyro/d" element={<GyroDemo />} />
            <Route path="geo/r" element={<Geo />} />
            <Route path="abs" element={<AbsoluteOrientationDemo />} />
            <Route path="abs/b" element={<AbsoluteOrientationBox />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  )
}

export default App

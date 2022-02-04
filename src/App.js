import './App.css'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import Homepage from './components/Homepage'

import Geo from './components/Geo'
import Gyro from './components/Gyro'
import GyroHook from './components/GyroHook'

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
            <Route path="geo/r" element={<Geo />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  )
}

export default App

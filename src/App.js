import './App.css'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import Gyro from './components/Gyro'

const App = () => {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Mobile Sensors</title>
        </Helmet>
        <Router>
          <Routes>
            <Route path="//*" element={<Gyro />} />
            {/* <Route path="//*" element={<GoogleHomepage />} /> */}
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  )
}

export default App

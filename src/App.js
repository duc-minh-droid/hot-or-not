import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import HotOrNot from './pages/HotOrNot'
import Rankings from './pages/Rankings'
import Insert from './pages/Insert'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HotOrNot />} />
          <Route path='/rankings' element={<Rankings />} />
          <Route path='/insert' element={<Insert />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
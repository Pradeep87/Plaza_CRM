import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Features, NotFound } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/features' element={<Features />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App

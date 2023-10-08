import React, { useEffect } from 'react'
import WebFont from 'webfontloader';
import { Routes, Route } from 'react-router-dom'
import { Home, Features, NotFound } from './pages'
import { Navbar, Footer, } from './layouts'

const App = () => {


  useEffect(() => {
    WebFont.load({
      google: { families: [ 'Nunito', 'sans-serif'] }
    });
  }, [])

  return (
    <main>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>

  )
}

export default App

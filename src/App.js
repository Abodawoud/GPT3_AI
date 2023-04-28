import React from 'react'
import './app.css'
import { Footer, Blog, Header, Features, Posibility, WhatGpt3 } from './container'
import { Navbar, Brand, CTA } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

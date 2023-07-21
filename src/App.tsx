// import { useState } from 'react'
import './App.css'
import Navigasi_Mobile from '@/components/moleculs/navigasi_mobile'
import Hero from '@/components/template/hero'

function App() {

 


  return (
    <div  className='app' data-tilt>
      <Navigasi_Mobile/>

        <header className='my-12'>

        <Hero/>

      </header>
    </div>
  )
}

export default App

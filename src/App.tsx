// import { useState } from 'react'
import './App.css'
import Navigasi_Mobile from '@/components/moleculs/navigasi_mobile'
import Hero from '@/components/template/hero'
import Loading_Page from './components/moleculs/Loading_Page'
import {useEffect,useState} from 'react'
function App() {
  const [loading,setLoading] = useState(false)

   useEffect(() => {
     setLoading(true)
     document.onreadystatechange = () => {
        setLoading(false)   
      }
    },[]);setTimeout(() => {
      setLoading(false)
    },1000)

  return (
    <>
    {loading && <Loading_Page/> }
    <div  className={`app app_shadow realtive ${loading ? 'hidden transition-all' : 'inline transition-all'  }
    before:absolute before:h-0 md:before:h-96 before:w-64 before:bg-white before:-left-64 before:top-0 `} data-tilt>
      
      <Navigasi_Mobile/>

        <header className='my-12'>

        <Hero/>

      </header>
    </div>
    </>
  )
}

export default App

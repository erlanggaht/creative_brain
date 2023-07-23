// import { useState } from 'react'
import './App.css'
import Navigasi_Mobile from '@/components/moleculs/navigasi_mobile'
import Hero from '@/components/template/hero'
import Loading_Page from './components/moleculs/Loading_Page'
import {useEffect,useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Follow_Cursor from './utility/follow_cursor'


function App() {
  const [loading,setLoading] = useState(false)

  // Loading
  useEffect(() => {
    if(document.readyState === 'interactive') {
      setLoading(true)
    }
    var x = window.matchMedia("(max-width: 640px)")
    if(x.matches) {
      setLoading(true);setTimeout(() => setLoading(false),3000)
    }

    window.onload = function () {
      setLoading(false)
    }
    return () => {
      window.onload = function () {
        setLoading(false)
      }
    }
  },[]);
  
  // Follow Cursor && AOS 
  useEffect(()=>{
    Follow_Cursor()
    setTimeout(() => {
      AOS.init({ })
    },100)
  },[])
  
  
  return (
    <>
    
    {loading && <Loading_Page/> }
    <div id="mouse"></div>
    <div  className={`app app_shadow realtive ${loading ? 'hidden transition-all' : 'inline transition-all'  }
    before:absolute before:h-0 md:before:h-96 before:w-64 before:bg-white before:-left-64 before:top-0 `} data-tilt>

<section data-aos="zoom-out" data-aos-duration='2500' data-aos-delay="1000" >
      <Navigasi_Mobile/>
  </section>

        <header className='my-12'>

        <Hero/>

      </header>
</div>
    </>
  )
}

export default App

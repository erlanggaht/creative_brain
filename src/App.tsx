// import { useState } from 'react'
import '@/App.css'
import Navigasi_Mobile from '@/HEADER/components/moleculs/navigasi_mobile'
import Hero from '@/HEADER/components/template/hero'
import Loading_Page from '@/HEADER/components/moleculs/Loading_Page'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Follow_Cursor from '@/utility/follow_cursor'
import mouse_move_bg from '@/utility/mouse_move_bg'
import Content_Main from '@/MAIN-CONTENT/template/content_main'
import Design_Pattern from './DESIGN-PATTERN/template/design_pattern'


function App() {
  const [loading, setLoading] = useState(false)


  // Loading
  useEffect(() => {
    if (document.readyState === 'interactive') {
      setLoading(true)
    }
    var x = window.matchMedia("(max-width: 640px)")
    if (x.matches) {
      setLoading(true); setTimeout(() => setLoading(false), 3000)
    }
    window.onload = function () {
      setLoading(false)
    }
    return () => {
      window.onload = function () {
        setLoading(false)
      }

    }
  }, []);


  // Follow Cursor && AOS 
  useEffect(() => {
    Follow_Cursor()
    setTimeout(() => {
      window.addEventListener('load', AOS.refresh)
      AOS.init({})
    }, 1000)

    mouse_move_bg()

  }, [])


  return (
    <>
      {/* lOADING */}
      {loading && <Loading_Page />}
      <div id="mouse" className='hidden md:inline'></div>
      <div className={`app  realtive ${loading ? 'hidden transition-all' : 'inline transition-all'}
      `} data-tilt>


        {/* HEADER */}
        <header className='app_shadow before:absolute before:h-0 md:before:h-96 before:w-64 before:bg-white before:-left-64 before:top-0 ' >
          <Navigasi_Mobile />
          <Hero />
        </header>

        {/* MAIN CONTENT */}
        <main className='mt-16 mb-16' >
          <Content_Main />
        </main>

        {/*  */}
        <main className='design_pattern my-12 md:my-32'>
            <Design_Pattern/>
        </main>

      </div>
    </>
  )
}

export default App

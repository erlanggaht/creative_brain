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
import Design_Pattern from '@/DESIGN-PATTERN/template/design_pattern'
import Writer_Terminal from '@/MAIN-CONTENT/atoms/writer_terminal'
import Main_Stack from '@/MY-EXPERTISE/template/main_stack'
import Main_Dev_Suport from '@/DEV&SUPORT/template/main_dev&suport'
import Main_Experience from './EXPERIENCE/template/main_experience'
import Main_Footer from './FOOTER/template/main_footer'





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
      AOS.init({
      })
    }, 1000)

    mouse_move_bg()

  }, [])

  // UserAgent Block
  useEffect(() => {
    (function (agent) {
      switch (true) {
        case agent.indexOf('firefox') > -1: console.log("Your browser : " + agent); break
        case agent.indexOf('chrome') > -1: console.log("Your browser : " + agent); break
        // @ts-ignore
        case agent.indexOf("opr") > -1 && !!window.opr: console.log("Your browser : " + agent); break
        case agent.indexOf("safari") > -1: console.log("Your browser : " + agent); break
        case agent.indexOf("edge") > -1: console.log("Your browser : " + agent); break
        case agent.indexOf("edg/") > -1: console.log("Your browser : " + agent); break
        default: alert('sorry, this web must use the latest browser! ')
      }
    })(window.navigator.userAgent.toLowerCase())

  }, [])




  return (
    <>
      {/* lOADING */}
      {loading && <Loading_Page />}
      <div id="mouse" className='hidden md:inline'></div>
      <section className={`app  realtive ${loading ? 'hidden transition-all' : 'inline transition-all'}
      `} data-tilt>

                                        {/* Start */}
                                        <div className='st2 '></div>
                                        <div className='st3 '></div>

        {/* HEADER */}
        <span className="typed-cursor typed-cursor--blink "><Writer_Terminal props={{ text_string: "", cursor: '_', delay: 40, pause: 5000 }} /></span>
        <header className='app_shadow before:absolute before:h-0 md:before:h-96 before:w-64 before:bg-white before:-left-64 before:top-0 ' >
          <Navigasi_Mobile />
          <Hero />
        </header>
        
                                        {/* Start */}
                                        <div className='st2 '></div>
                                        <div className='st3 '></div>
      
        {/* MAIN CONTENT */}
        <main className='mt-16 mb-16' >
          <Content_Main />
        </main>

                                        {/* Start */}
                                        <div className='st2 '></div>
                                        <div className='st3 '></div>

        {/* DESIGN PATTERN  */}
        <main className='design_pattern my-20 md:my-3'>
          <Design_Pattern />
        </main>

        {/* MY EXPRERTISE */}
        <main className='my_expertise relative mt-20 md:mt-60
        before:h-[3px] before:w-full before:bg-ungu before:absolute before:top-0 before:bg-gradient-to-r   before:from-transparent before:via-ping to-transparent before:-rotate-6
        '>
          <Main_Stack />
        </main>
        
                                      {/* Start */}
                                      <div className='st '></div>
                                      <div className='st2 '></div>
                                      <div className='st3 '></div>
        {/* Experience */}
        <main className=' mt-32 md:mt-40'>

          <Main_Experience/>

        </main>



        {/* Dev */}
        <main className='mt-32 md:mt-40 '>  
          <Main_Dev_Suport/>
          
        </main>


        <footer className='mt-28 md:mt-56 mb-6 p-6 px-0 md:px-6' data-aos='fade-in'>

          <Main_Footer/>

        </footer>

      </section>
    </>
  )
}

export default App

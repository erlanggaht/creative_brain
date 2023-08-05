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
import Avatar_Erlangga from '@/DEV&SUPORT/atoms/avatar_erlangga'
import Avatar_Suport from './DEV&SUPORT/moleculs/avatar_suport'
import Scroll_X from './utility/scroll_x'





function App() {
  const [loading, setLoading] = useState(false)
  const [screenWindow,setScreenWindow] = useState(false)

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

  // Avatar Scroll X 
  useEffect(() => {
    Scroll_X()
    const mobile_queries = window.matchMedia("(min-width:1024px)").matches // >> true | false
    mobile_queries && setScreenWindow(true)
    window.addEventListener('resize', function() {
      // viewport and full window dimensions will change
      var viewport_width = window.innerWidth;
      if( viewport_width > 1024 ) setScreenWindow(true)
      else setScreenWindow(false)
    });
  },[])


  return (
    <>
      {/* lOADING */}
      {loading && <Loading_Page />}
      <div id="mouse" className='hidden md:inline'></div>
      <section className={`app  realtive ${loading ? 'hidden transition-all' : 'inline transition-all'}
      `} data-tilt>


        {/* HEADER */}
        <span className="typed-cursor typed-cursor--blink "><Writer_Terminal props={{ text_string: "", cursor: '_', delay: 40, pause: 5000 }} /></span>
        <header className='app_shadow before:absolute before:h-0 md:before:h-96 before:w-64 before:bg-white before:-left-64 before:top-0 ' >
          <Navigasi_Mobile />
          <Hero />
        </header>

        {/* MAIN CONTENT */}
        <main className='mt-16 mb-16' >
          <Content_Main />
        </main>

        {/* DESIGN PATTERN  */}
        <main className='design_pattern my-20 md:my-32'>
          <Design_Pattern />
        </main>

        {/* MY EXPRERTISE */}
        <main className='my_expertise relative mt-20 md:mt-60
        before:h-[3px] before:w-full before:bg-ungu before:absolute before:top-0 before:bg-gradient-to-r   before:from-transparent before:via-ping to-transparent before:-rotate-6
        '>
          <Main_Stack />
        </main>

        {/* Dev */}
        <main className='mt-32 md:mt-40'>
          <h1 className='text-4xl md:text-5xl text-center md:text-right'>Developer Brain./Me</h1>

          <section className='card_avatar avatar_erlangga mt-32 flex justify-center '>
            <Avatar_Erlangga/>
          </section>

        <p className='mt-40 text-right'>Suport Me</p>
        <section className='card_avatar avatar_suport flex gap-12 gap-x-8  mt-12  overflow-x-auto lg:overflow-visible lg:flex-wrap lg:justify-center snap-x ' id="scroll_container">
            
        {!screenWindow ? <div className='wrapper'>
            <Avatar_Suport/>
            </div> : <Avatar_Suport/>
        }
        </section>


          

        </main>

      </section>
    </>
  )
}

export default App

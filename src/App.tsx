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

import reactjs_logo from '@/assets/reactjs_logo.svg'
import vuejs_logo from '@/assets/vuejs_logo.svg'
import tailwind_logo from '@/assets/tailwindcss_logo.svg'
import postgresql_logo from '@/assets/postgresql_logo.svg'
import firebase_logo from '@/assets/firebase_logo.svg'
import github_logo from '@/assets/github_logo.svg'
import typescript_logo from '@/assets/typescript_logo.svg'
import eslint_logo from '@/assets/eslint_logo.svg'
import vite_logo from '@/assets/vite_logo.svg'

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

  // UserAgent Block
  useEffect(() => {
      (function(agent){
        switch(true) {
          case agent.indexOf('firefox') > -1: console.log("Your browser : " + agent );break
          case agent.indexOf('chrome') > -1: console.log("Your browser : " + agent );break
            // @ts-ignore
          case agent.indexOf("opr") > -1 && !!window.opr :  console.log("Your browser : " + agent ); break
          case agent.indexOf("safari") > -1: console.log("Your browser : " + agent ); break
          case agent.indexOf("edge") > -1: console.log("Your browser : " + agent ); break
          case agent.indexOf("edg/") > -1:  console.log("Your browser : " + agent ); break
          default: alert('sorry, this web must use the latest browser! ')
        }
      })(window.navigator.userAgent.toLowerCase())
  },[])


  return (
    <>
      {/* lOADING */}
      {loading && <Loading_Page />}
      <div id="mouse" className='hidden md:inline'></div>
      <section className={`app  realtive ${loading ? 'hidden transition-all' : 'inline transition-all'}
      `} data-tilt>


        {/* HEADER */}
        <span className="typed-cursor typed-cursor--blink "><Writer_Terminal props={{text_string:"", cursor:'_',delay:40,pause : 5000}} /></span>
        <header className='app_shadow before:absolute before:h-0 md:before:h-96 before:w-64 before:bg-white before:-left-64 before:top-0 ' >
          <Navigasi_Mobile />
          <Hero />
        </header>

        {/* MAIN CONTENT */}
        <main className='mt-16 mb-16' >
          <Content_Main />
        </main>

        {/* DESIGN PATTERN  */}
        <main className='design_pattern my-12 md:my-32'>
            <Design_Pattern/>
        </main>

        {/* MY EXPRERTISE */}
        <main className='my_expertise relative mt-20 md:mt-60
        before:h-[3px] before:w-full before:bg-ungu before:absolute before:top-0 before:bg-gradient-to-r   before:from-transparent before:via-ping to-transparent before:-rotate-6
        '>
          
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight p-12 py-8 -rotate-6 text-white' ><span className='bg-gradient-to-tl from-ping to-ungu inline-block p-1 px-6'>My Expertise</span></h1>

        <section className='mt-20 flex flex-wrap justify-center md:justify-start md:p-12 items-center  gap-6 '>
          <img src={reactjs_logo} height={32} width={170}  className='h-[90px] w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt='react_logo' 
          data-aos="fade-up" data-aos-duration={300} data-aos-delay={300} />
          <img src={vuejs_logo} height={32} width={170}  className='h-[90px] w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt='vuejs_logo'
          data-aos-duration={300} data-aos="fade-down" data-aos-delay={500}/>
          <img src={tailwind_logo} height={32} width={170}  className='h-[90px] w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt='tailwind_logo'
          data-aos-duration={300} data-aos="fade-up" data-aos-delay={700}/>
         <div className=' h-[90px] w-[170px] flex items-center justify-center grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' data-aos-duration={300} data-aos="fade-down" data-aos-delay={900}><p className='text-4xl text-[#00d8ff] tracking-wider pb-2  text-center'>express</p></div>
          <img src={postgresql_logo} height={32} width={170}  className='h-[90px] w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt='postgresql'
          data-aos-duration={300} data-aos="fade-up" data-aos-delay={1100}/>
          <img src={firebase_logo} height={32} width={170}  className='h-[90px] w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt='firebase'
          data-aos-duration={300} data-aos="fade-down" data-aos-delay={1300}/>
          <img src={github_logo} height={32} width={170}  className='h-[90px] w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt='github'
          data-aos-duration={300} data-aos="fade-up" data-aos-delay={1500}/>
          <img src={typescript_logo} height={32} width={170}  className='h-[90px] w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt='typescript'
          data-aos-duration={300} data-aos="fade-down" data-aos-delay={1700}/>
          <img src={eslint_logo} height={32} width={170}  className='h-[90px] w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt='eslint'
          data-aos-duration={300} data-aos="fade-up" data-aos-delay={1900}/>
          <img src={vite_logo} height={32} width={170}  className='h-[90px] w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt='eslint'
          data-aos-duration={300} data-aos="fade-down" data-aos-delay={2000}/>
        </section>



        </main>    

      </section>
    </>
  )
}

export default App

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
import VerticalTimeline from './DESIGN-PATTERN/moleculs/timeline'
import Tilt from 'react-parallax-tilt'
import atomic from '@/assets/atomic.png'
import { HiOutlineArrowRight } from 'react-icons/hi';

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
        <h1 className='md:text-center text-6xl font-bold tracking-tight'>This website design pattern</h1>
        <p className='md:text-center md:max-w-[1000px] break-keep md:mx-auto text-lg text-gray-400 my-6'><span className='text-ping'>Atomic Design</span> is a design methodology that takes inspiration from how an atomic element forms more complex molecules to form an organism. Every web page interface, says Frost, is actually formed from various basic components, just as atoms form complex creatures like humans. So, in applying Atomic Design, a UI designer must build the basic components first.</p>

        <Tilt  glareMaxOpacity={0.1} transitionSpeed={5000} tiltMaxAngleX={4} tiltMaxAngleY={4} >
          <section className='  shadow lg:p-20 lg:pb-32 pb-36 p-6
            lg:gap-20  gap-16 border-2 border-ping mt-12
          '>
            <h4 className='text-sm text-gray-500'>brain_creative.tsx</h4>
            <h6 className='mb-12 text-sm font-thin text-gray-500'>atomic_design</h6>
            <div className='p-6 pb-0 lg:p-12'>
            <VerticalTimeline/>
            </div>
          </section>
        </Tilt>

        <div className='relative lg:flex'>
          <img src={atomic} alt='atomic_design' width={470} height={470} className='border-2 border-ping p-[2px] rounded-lg lg:absolute -top-16 right-6 -mt-16 mx-12'/>
          <div className='p-6 py-28 lg:p-28 max-w-[580px]'>
          <p className='text-gray-500 text-2xl'>
            <span className='text-white'>Want to Learn Atomic Design </span>
            to make your project more neat and clean.
            <br/>
            <br/>
            <a href='https://atomicdesign.bradfrost.com/' target={'_blank'} className='group  text-white text-2xl hover:text-white   items-center transition-all  hover:transition-all  shadow ' > visit docs by bradfrost  <HiOutlineArrowRight className=" w-0 group-hover:h-5 group-hover:w-5 transition-all inline" /></a>
          </p>
          </div>
        </div>
        </main>

      </div>
    </>
  )
}

export default App

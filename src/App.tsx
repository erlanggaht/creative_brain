// import { useState } from 'react'
import '@/App.css'
import Navigasi_Mobile from '@/HEADER/components/moleculs/navigasi_mobile'
import Hero from '@/HEADER/components/template/hero'
import Loading_Page from '@/HEADER/components/moleculs/Loading_Page'
import {useEffect,useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Follow_Cursor from '@/utility/follow_cursor'
import Git_Erlangga from '@/MAIN-CONTENT/moleculs/git_erlangga'
import Card1 from '@/MAIN-CONTENT/template/card1'
import Tilt from 'react-parallax-tilt'
import Terminal from '@/MAIN-CONTENT/moleculs/terminal'
import copy_clone from '@/utility/copy_clone'
import Card2 from '@/MAIN-CONTENT/template/card2'
import Card3 from '@/MAIN-CONTENT/template/card3'
import mouse_move_bg from './utility/mouse_move_bg'

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
      AOS.init()
    },1000)

   mouse_move_bg()
      
    },[])
    

  return (
    <>
      {/* lOADING */}
      {loading && <Loading_Page/> }
      <div id="mouse" className='hidden md:inline'></div>
      <div  className={`app  realtive ${loading ? 'hidden transition-all' : 'inline transition-all'  }
      `} data-tilt>


      {/* HEADER */}
      <header className='app_shadow before:absolute before:h-0 md:before:h-96 before:w-64 before:bg-white before:-left-64 before:top-0 ' >
      <Navigasi_Mobile/>
        <Hero/>
      </header>

      {/* MAIN CONTENT */}
      <main className='mt-16 mb-16'>

         <section className='h-full relative
          before:h-full before:w-1 before:bg-gradient-to-t   before:from-transparent before:via-ping before:to-transparent before:block before:absolute md:px-4'>
              <Git_Erlangga/>
        </section>

        <section className='mt-20 mb-6 lg:mt-6 ' >
          <Tilt  glareMaxOpacity={0.1} transitionSpeed={5000} tiltMaxAngleX={4} tiltMaxAngleY={4} >
          <div className='bg-[#171717] shadow lg:p-16 p-6 rounded-xl 
          mouse-cursor-gradient-tracking flex flex-col-reverse lg:flex-row lg:gap-20  gap-16' style={{border:'solid 2px #2e343b'}}>
          <Card1/>
          <div className='flex-grow '>
          <Terminal/>
          <p className='text-center mt-6 relative  text-md font-thin'><span className='cursor-copy hover:opacity-50' 
          onClick={() => copy_clone('git clone https://github.com/erlanggaht/creative_brain.git')}>Clone Repo</span></p>
          </div>
          </div>
          </Tilt>
        </section>

        <section className='flex flex-col lg:flex-row gap-6'>
        <Card2/>
        <Card3/>
        </section>


      </main>

</div>
    </>
  )
}

export default App

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
import Tilt from 'react-parallax-tilt'

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

    let btn = document.querySelector<any>('.mouse-cursor-gradient-tracking');
    btn.addEventListener('mousemove', (e :any)=> {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    });
      
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
      <main>

         <section className='h-full relative
          before:h-full before:w-1 before:bg-gradient-to-t   before:from-transparent before:via-ping before:to-transparent before:block before:absolute md:px-4'>
              <Git_Erlangga/>
        </section>

        <section className='my-6 ' >
          <Tilt glareEnable={true} glareColor="#f86f7f" glarePosition='right' glareMaxOpacity={0.3} transitionSpeed={5000} tiltMaxAngleX={5} tiltMaxAngleY={5} glareBorderRadius='0'>
          <div className='bg-[#171717] shadow p-16 rounded-xl 
          mouse-cursor-gradient-tracking' style={{border:'solid 2px #2e343b'}}>
            <p className='text-gray-500 text-3xl'><span className='text-white'>Brain./Me </span>is a website used to store personal projects. it is made with reactjs typescript technology with tailwindcss styling.
            Want to see the source code for this website?</p>
            <p className='text-right mt-12'>
            <a href='https://github.com/erlanggaht' className='link_border text-white text-xl md:text-3xl hover:text-white relative' >See Repository</a>
            </p>
          </div>
          </Tilt>
        </section>


      </main>

</div>
    </>
  )
}

export default App

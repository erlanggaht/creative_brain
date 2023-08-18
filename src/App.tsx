// import { useState } from 'react'
import '@/App.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Navigasi_Mobile from '@/HEADER/components/moleculs/navigasi_mobile'
import Hero from '@/HEADER/components/template/hero'
import Loading_Page from '@/HEADER/components/moleculs/Loading_Page'
import { useEffect, useState } from 'react'
import Follow_Cursor from '@/utility/follow_cursor'
import mouse_move_bg from '@/utility/mouse_move_bg'
import Content_Main from '@/MAIN-CONTENT/template/content_main'
import Design_Pattern from '@/DESIGN-PATTERN/template/design_pattern'
import Writer_Terminal from '@/MAIN-CONTENT/atoms/writer_terminal'
import Main_Stack from '@/MY-EXPERTISE/template/main_stack'
import Main_Dev_Suport from '@/DEV&SUPORT/template/main_dev&suport'
import Main_Experience from '@/EXPERIENCE/template/main_experience'
import Main_Footer from '@/FOOTER/template/main_footer'
import { Garisfull } from "@/FOOTER/atoms/Garisfull";
import Footer_Content_Bottom from '@/FOOTER/moleculs/footer_content_bottom'
import { GlobalContext } from '@/Context/Global_Context'
import GuestBook from '@/FOOTER/template/guestbook'
import LineScroll from '@/utility/scroll_line'
import 'react-lazy-load-image-component/src/effects/blur.css'

// Icon Assets
import icon_assets from '@/assets/imported/icon_assets';const {button_top} = icon_assets


function App() {
  const [loading, setLoading] = useState(false)
  const [setengahPage,setSetengahPage] = useState(false)
  const Context = GlobalContext

  // GlobalState
  const [loginGuest_active, setLoginGuest_active] = useState(false)
  const [wait, setWait] = useState(false)

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



  //Scroll Button Top
  function topFunction() {
    if(setengahPage) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    }else {
      window.scrollTo(0,document.body.scrollHeight  );// For Safari
      window.scrollTo(0,document.documentElement.scrollHeight);  // For Chrome, Firefox, IE and Opera

    }
  }
  useEffect(() => {
    let mybutton: any = document.getElementById("myBtn");

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      const size_page = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
      const size_page_round = Math.round(size_page)
      

      // TO TOP
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.bottom = "1.5rem";
      } else {
        mybutton.style.bottom = "-4rem";
      }

      // TO BOTTOM 
      
      if(size_page_round > 50) {
        mybutton.style.transform = `rotate(${size_page * 3 + 60}deg)`
        setSetengahPage(true)
      }
      else {
        mybutton.style.transform = `rotate(180deg)`
        setSetengahPage(false)

      }
    }

    
  }, [])



  return (
    <>

      {/* To Top Button Scroll   */}
      <button onClick={() => topFunction()} id="myBtn" title="Go to top"
        className='fixed bottom-[20px] active:scale-95 right-4 md:right-2 z-50 border-0 outline-none bg-gradient-to-tl from-ping to-ungu text-white cursor-pointer p-3 rounded-full text-md hover:opacity-80 active:opacity-50' style={{transition:'ease-in-out .4s'}}>
          <img src={button_top} alt='t/b' height={28} width={28} />
        </button>

      {/* Line Scroll */}
      <LineScroll />

      {/* lOADING */}
      {loading && <Loading_Page />}
      <div id="mouse" className='hidden md:inline'></div>
      <section className={`app  realtive ${loading ? 'hidden transition-all' : 'inline transition-all'}
      `} data-tilt>

        {/* @ts-ignore */}
        <Context.Provider value={{
          loginGuest_active,
          setLoginGuest_active,
          wait,
          setWait
        }}>

          {/* Start */}
          <div className='st2 '></div>
          <div className='st3 '></div>

          {/* HEADER */}
          <span className="typed-cursor typed-cursor--blink "><Writer_Terminal props={{ text_string: "", cursor: '_', delay: 40, pause: 5000, loop: true }} /></span>
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
          {/* MY EXPRERTISE */}
          <main className='my_expertise relative mt-20 md:mt-32
        before:h-[3px] before:w-full before:bg-ungu before:absolute before:top-0 before:bg-gradient-to-r   before:from-transparent before:via-ping to-transparent before:-rotate-6
        '>
            <Main_Stack />
          </main>

          {/* DESIGN PATTERN  */}
          <main className='design_pattern my-20 md:mt-40 md:my-3'>
            <Design_Pattern />
          </main>


          {/* Start */}
          <div className='st '></div>
          <div className='st2 '></div>
          <div className='st3 '></div>
          {/* Experience */}
          <main className=' mt-32 md:mt-40'>

            <Main_Experience />

          </main>



          {/* Dev */}
          <main className='mt-32 md:mt-40 '>
            <Main_Dev_Suport />

          </main>


          <footer className='mt-20 md:mt-56 mb-6 p-6 px-0 md:px-6' data-aos='fade-in'>
            <div className={' h-full absolute left-0 sm:left-6'}>
              <Garisfull />
            </div>

            <Main_Footer />

            {/* Guestbook */}
            <section id='guestbook' className='md:mt-32 mt-20 pl-12 sm:pl-0'>
              <GuestBook />
            </section>


            {/* Footer Content Bottom */}
            <Footer_Content_Bottom />
          </footer>

        </Context.Provider>

      </section>

    </>
  )
}

export default App

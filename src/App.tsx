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
import mouse_move_bg from '@/utility/mouse_move_bg'
import Line_Gradient from '@/MAIN-CONTENT/atoms/line'
import project_icon from '@/assets/projects_icon.svg'
import Card_Project from './MAIN-CONTENT/template/card_project'
import projects_fav from './utility/projects_fav'
import { HiOutlineArrowRight } from 'react-icons/hi';


function App() {
  const [loading,setLoading] = useState(false)
  const [projectsFav,setProjectsFav] = useState([])

  // Projects_Fav
  useEffect(() => {
    setProjectsFav(projects_fav())

  },[])
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
      window.addEventListener('load', AOS.refresh)
      AOS.init({})
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
      <main className='mt-16 mb-16' >

         <section  className='h-full relative
          before:h-full before:w-1 before:bg-gradient-to-t   before:from-transparent before:via-ping before:to-transparent before:block before:absolute md:px-4' >
              <Git_Erlangga/>
        </section>

        <section className='mt-20 mb-6 lg:mb-16 lg:mt-6 relative

        before:h-[67px] before:w-1 before:bg-gradient-to-t   before:from-transparent before:via-ping before:to-transparent  before:absolute before:-z-50 before:left-32 before:-bottom-16 before:lg:block before:hidden 

        after:h-[67px] after:w-1 after:bg-gradient-to-t   after:from-transparent after:via-ungu after:to-transparent  after:absolute after:-z-50 after:right-32 after:-bottom-16 after:lg:block after:hidden 
        ' >
          <Tilt  glareMaxOpacity={0.1} transitionSpeed={5000} tiltMaxAngleX={4} tiltMaxAngleY={4} >
          <div className='bg-[#171717] shadow lg:p-16 p-6 rounded-xl 
          mouse-cursor-gradient-tracking flex flex-col-reverse lg:flex-row lg:gap-20  gap-16
          ' style={{border:'solid 2px #2e343b'}}>
            
          <Card1/>
          <div className='flex-grow  ' data-aos="flip-left" data-aos-duration={1000}>
          <Terminal/>
          <p className='text-center mt-6 relative  text-md font-thin'><span className='cursor-copy hover:opacity-50' 
          onClick={() => copy_clone('git clone https://github.com/erlanggaht/creative_brain.git')}>Clone Repo</span></p>
          </div>
          </div>
          </Tilt>
        </section>

        

        <section className='flex flex-col lg:flex-row gap-6 relative z-50
        '>
        <Tilt glareEnable={true} glareColor='#333' glarePosition='all' glareMaxOpacity={0.1} transitionSpeed={5000} tiltMaxAngleX={2} tiltMaxAngleY={2} >
        <Card2/>
        </Tilt>
        <Tilt  glareEnable={true} glareColor='#333' glarePosition='all' glareMaxOpacity={0.1} transitionSpeed={5000} tiltMaxAngleX={2} tiltMaxAngleY={2} >
        <Card3/>
        </Tilt>
        </section>
        
        <section className='Projects relative h-full md:mt-12'>
        <Line_Gradient props={{via:"before:via-ungu",positionY:"",positionX:"before:right-0",}} />
        <div className='lg:py-16 lg:px-6 p-6 pl-0'>
        <img src={project_icon} alt='project_icon' width={43} height={43} className='md:absolute md:-right-3 bg-transparent px-1 py-4 rounded drop-shadow-[0px_1px_30px_#7079FE]'/>
      
          <h1 className='text-2xl text-right items-center py-4 px-5 lg:px-4 mb-20'>.all<span className='text-transparent  bg-clip-text bg-gradient-to-r from-ungu to-ping'>_projects</span> </h1>

          <div className='Projects_card lg:mx-12'>
            
            {projectsFav && projectsFav.map ((m : any,i) =>  {
              return <Card_Project 
              key={i}
              props={{
                 image : m.image,
                 link : m.link,
                 title : m.title,
                 desc : m.desc,
                 project_detail : m.project_detail,
                 clone :  m.clone
               }}
             />
            })}
            
          </div>

            <p className='text-right px-6 py-4 ' data-aos='zoom-out' data-aos-once={true}><a href='https://erlanggaht.vercel.app/projects' target={'_blank'} className='group  text-white text-2xl hover:text-white   items-center transition-all  hover:transition-all' > See All Projects  <HiOutlineArrowRight className=" w-0 group-hover:h-5 group-hover:w-5 transition-all inline" /></a></p> 
          
        </div>
        </section>

        

      </main>

</div>
    </>
  )
}

export default App

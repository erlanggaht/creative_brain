import VerticalTimeline, { VerticalTimeline_down } from '@/DESIGN-PATTERN/moleculs/timeline'
import Tilt from 'react-parallax-tilt'
import atomic from '@/assets/atomic.png'
import { HiOutlineArrowRight } from 'react-icons/hi';

export default function Design_Pattern() {
  return (
    <>
         <h1 className='md:text-center text-5xl md:text-6xl font-bold tracking-tight'>This website design pattern</h1>
        <p className='md:text-center md:max-w-[1000px] md:mx-auto text-lg text-gray-400 my-6'><span className='text-ping'>Atomic Design</span> is a design methodology that takes inspiration from how an atomic element forms more complex molecules to form an organism. Every web page interface, says Frost, is actually formed from various basic components, just as atoms form complex creatures like humans. So, in applying Atomic Design, a UI designer must build the basic components first.</p>

        <Tilt  glareMaxOpacity={0.1} transitionSpeed={5000} tiltMaxAngleX={4} tiltMaxAngleY={4} >
          <section className='  shadow lg:p-20 lg:pb-32 pb-36 p-6
            lg:gap-20  gap-16 border-2 border-ping mt-12 relative
            before:w-12 before:h-12 before:bg-ping before:absolute before:right-4 before:top-4 before:rotate-12
            after:w-9 after:h-9 after:bg-white after:absolute after:left-4 after:bottom-4 after:-rotate-12 after:rounded-sm
          '>
            <h4 className='text-sm text-gray-500'>brain_creative.tsx</h4>
            <h5 className='mb-12 text-sm font-thin text-gray-500'>atomic_design</h5>
            <div className='p-6 pb-0 lg:p-12'>
            <VerticalTimeline/>
            <VerticalTimeline_down/>
            </div>
          </section>
        </Tilt>

        <div className='relative md:flex md:flex-row-reverse '>
          <img src={atomic} alt='atomic_design' width={470} height={470} className='border-2 border-ping p-[0px]   hidden md:inline  mx-auto atomic_image_shadow border-t-[#222] ' data-aos={'fade-zoom'} data-aos-delay={1500} data-aos-once={true}/>
          <div className='p-0 py-0 md:p-12 xl:py-28 max-w-[580px]'>
          <p className='text-gray-500 text-2xl mt-12 xl:mt-2'>
            <span className='text-white'>Want to Learn Atomic Design </span>
            to make your project more neat and clean.
            <br/>
            <br/>
            <a href='https://atomicdesign.bradfrost.com/' target={'_blank'} className='group  text-white md:text-2xl text-xl hover:text-white   items-center transition-all  hover:transition-all  shadow ' > visit docs by bradfrost  <HiOutlineArrowRight className=" w-0 group-hover:h-5 group-hover:w-5 transition-all inline" /></a>
          </p>
          </div>
        </div>
    </>
  )
}

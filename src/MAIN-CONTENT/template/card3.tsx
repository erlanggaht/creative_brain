import mobile from '@/assets/project_image/mobile.png'
import tablet from '@/assets/project_image/tablet.png'


export default function Card3() {

  return (
    <div className="w-full relative bg-gradient-to-r from-dasar to-[#171717] shadow  rounded-xl 
     overflow-hidden group  h-[860px] md:h-[930px]
     before:h-full before:w-1 before:bg-gradient-to-t   before:from-transparent before:via-ungu before:to-transparent before:block before:absolute before:right-0 before:z-50
     " style={{ border: 'solid 2px #2e343b' }} >

    <section className='p-6 lg:p-16'>
      <p className='text-gray-500 text-2xl sm:text-3xl font-thin'><a href="#" className='text-white hover:text-ping'>Bio/Erlanggaht </a>is a website-based Linkbio made with gatsbyJS technology with server side rendering. and this web is made to store all my previous projects.</p>
      <p className='text-left mt-10 pr-2'>
        <a href='https://github.com/erlanggaht' className='link_border text-white text-xl md:text-2xl hover:text-white relative drop-shadow' >View LinkBio</a>
      </p>
      </section>
    
        <figure className='flex justify-center relative'>
          {/* <img alt='erlanggaht' src={mobile} className='max-w-full h-auto mt-32 opacity-75 shadow rounded-xl group-hover:opacity-100 ' /> */}
          <img alt='erlanggaht' src={tablet} className='max-w-full h-auto mt-24 sm:mt-20 rotate-45 p-3  shadow rounded-xl group-hover:opacity-100 absolute left-1 -top-20' />
          <img alt='erlanggaht' src={mobile} className='max-w-full h-auto mt-24 sm:mt-20  p-3 opacity-95 shadow rounded-xl absolute right-1 drop-shadow' />
        </figure>

    </div>
  )
}

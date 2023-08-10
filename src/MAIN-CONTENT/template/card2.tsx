import erlanggaht93 from '@/assets/project_image/erlanggaht93.webp'

export default function Card2() {

  return (
    <div className="w-full relative bg-gradient-to-r from-dasar to-[#171717] shadow  rounded-xl 
     overflow-hidden group h-[860px] md:h-[930px]
     before:h-full before:w-1 before:bg-gradient-to-t   before:from-transparent before:via-ping before:to-transparent before:block before:absolute before:z-50
     " style={{ border: 'solid 2px #2e343b' }} >

    <section className='p-6 lg:p-16'>
      <p className='text-gray-500 text-2xl sm:text-3xl font-thin'><a href="#" className='text-white'>./Erlanggaht93 </a>is a website portfolio which can be said to be the first version of a web-type portfolio that was created. made with reactjs with dark and light themes</p>
      <p className='text-left mt-10 pr-2'>
        <a href='https://github.com/erlanggaht' className='link_border text-white text-xl md:text-2xl hover:text-white relative drop-shadow' >View Portofolio</a>
      </p>
      </section>
    
        <figure className='absolute bottom-0 md:inline'>
          <img alt='erlanggaht' src={erlanggaht93} height={320} width={320} className='md:w-full scale-125 md:scale-100 sm:ml-16 mt-32  shadow sm:rounded-xl ' />
        </figure>

    </div>
  )
}

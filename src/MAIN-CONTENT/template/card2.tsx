import erlanggaht93 from '@/assets/erlanggaht93.png'

export default function Card2() {

  return (
    <div className="w-full relative bg-gradient-to-r from-dasar to-[#171717] shadow  rounded-xl 
     overflow-hidden group h-[860px] md:h-[930px]" style={{ border: 'solid 2px #2e343b' }} >

    <section className='p-6 lg:p-16'>
      <p className='text-gray-500 text-2xl sm:text-3xl font-thin'><a href="#" className='text-white'>Brain./Me </a>is a website used to store personal projects. it is made with reactjs typescript technology with tailwindcss styling.
        Want to see the source code for this website?</p>
      <p className='text-left mt-10 pr-2'>
        <a href='https://github.com/erlanggaht' className='link_border text-white text-xl md:text-2xl hover:text-white relative drop-shadow' >See Repository</a>
      </p>
      </section>
    
        <figure className='absolute bottom-0 md:inline'>
          <img alt='erlanggaht' src={erlanggaht93} className='max-w-full h-auto scale-125 md:scale-100 sm:ml-16 mt-32  shadow sm:rounded-xl ' />
        </figure>

    </div>
  )
}

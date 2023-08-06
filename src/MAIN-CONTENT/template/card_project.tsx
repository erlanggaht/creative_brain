import copy_clone from '@/utility/copy_clone'
import Modal_Button from '@/MAIN-CONTENT/moleculs/modal'
import Button_Gradient from '@/HEADER/components/atoms/button_popover'

interface Card_Project {
  props: {
    image: string,
    link: string,
    title: string,
    desc: string,
    project_detail: Array<Object>,
    clone: string
  }
}


export default function Card_Project({ props }: Card_Project) {
  const { image, link, title, desc, project_detail, clone } = props
  return (
    <>
      <div className='card_project1 flex flex-col md:flex-row gap-5 md:justify-between group'>
        <div className='card_main md:w-96'>
          <h2 className='text-4xl lg:text-5xl  sm:w-full tracking-normal'>{title}</h2>
          <p className='py-3 text-gray-500'>{desc}</p>
          <div className='flex justify-between items-center gap-3 mt-6 md:mt-36'>

            <div className='flex items-center gap-3'>
              <Modal_Button props_modal={{ project_detail }} />
              <p onClick={() => copy_clone('git clone ' + clone)} className='cursor-pointer hover:text-ungu active:text-gray-500'>Clone &#9672;</p>
            </div>
            <a href={clone} target={'_blank'}  data-aos="zoom-in" data-aos-once={true}><picture className='hover:cursor-pointer' >
              <source srcSet="https://erlanggaht.vercel.app/static/25df963aa00abf53615958ba7c39b899/dbc4a/github.webp" /><img decoding="async" loading="lazy" alt="githubIcon" src="https://erlanggaht.vercel.app/static/25df963aa00abf53615958ba7c39b899/dbc4a/github.webp" srcSet="https://erlanggaht.vercel.app/static/25df963aa00abf53615958ba7c39b899/dbc4a/github.webp 25w,https://erlanggaht.vercel.app/static/25df963aa00abf53615958ba7c39b899/dbc4a/github.webp 100w" width={42} height={42} />
            </picture>
            </a>
          </div>
        </div>
      
          <div className=' flex flex-col md:opacity-90 group-hover:opacity-100  transition-transform hover:transition-transform mt-12 md:mt-0  ' data-aos="fade-in" >
            <img src={image} alt={title} className='shadow-[0_0_12px_1px_#7079FE]  md:w-[525px]   ' width={525} height={525}  />
            <a href={link} target={'_blank'}>
              <Button_Gradient props={{ text: 'Visit', classN: 'rounded-none shadow-[0_0_12px_1px_#7079FE] w-full ' }} />
            </a>
          </div>

      </div>
      <div className='h-[2px] w-full bg-gradient-to-r   from-transparent via-ungu to-transparent my-20 '></div>
    </>
  )
}



import sandhika from '@/assets/suport_avatar/sandhika.jpg'
import eko from '@/assets/suport_avatar/eko.jpg'
import dea_afrizal from '@/assets/suport_avatar/dea_afrizal.jpg'
import david_alfa from '@/assets/suport_avatar/david_alfa.jpg'
import code_kyra from '@/assets/suport_avatar/code_kyra.jpg'
import bang_taro from '@/assets/suport_avatar/bang_taro.jpeg'
import ahmad_muhyidin from '@/assets/suport_avatar/ahmad_muhyidin.jpeg'
import no_image from '@/assets/suport_avatar/no_image.svg'
import Tilt from 'react-parallax-tilt'


export const avatar_card = [

    {
        name : "Mother",
        image : no_image,
        desc : "My Prayer",
        link_ig : "#",
        disable : true ,
        text_content : "youtube",
        link_content : '#'

    },
    {
        name : "Sandhika Galih",
        image : sandhika,
        desc : "Web Programming Unpas",
        link_ig : "https://www.instagram.com/sandhikagalih/",
        disable : false ,
        text_content : "youtube",
        link_content : 'https://www.youtube.com/@sandhikagalihWPU'
    },
    {
        name : "Eko Khannedy",
        image : eko,
        desc : "Programming Zaman Now",
        link_ig : "#",
        disable : false ,
        text_content : "youtube",
        link_content : 'https://www.youtube.com/@ProgrammerZamanNow'
    },
    {
        name : "Dea Afrizal",
        image : dea_afrizal,
        desc : "Programming Bandung",
        link_ig : "https://www.instagram.com/dea.afrizal/",
        disable : false ,
        text_content : "youtube",
        link_content : 'https://www.youtube.com/@deaafrizal'
    },
    {
        name : "David Alfa",
        image : david_alfa,
        desc : "CTO Web Ekspor",
        link_ig : "https://www.instagram.com/davidalfasunarna/",
        disable : false ,
        text_content : "tiktok",
        link_content : 'https://www.tiktok.com/@davidalfasunarna'
    },
    {
        name : "Code Kyra",
        image : code_kyra,
        desc : "FrontEnd Content Creator ",
        link_ig : "https://www.instagram.com/code.kyra/",
        disable : false ,
        text_content : "tiktok",
        link_content : 'https://www.youtube.com/@codekyra'
    },
    {
        name : "Bang Taro",
        image : bang_taro,
        desc : "programming content creator tiktok",
        link_ig : "https://www.instagram.com/taroleague/",
        disable : false ,
        text_content : "tiktok",
        link_content : 'https://www.tiktok.com/@taroleague'
    },
    {
        name : "Ahmad Muhyidin",
        image : ahmad_muhyidin,
        desc : "WebDev Content Creator  Tiktok",
        link_ig : "https://www.tiktok.com/@muhyidin_dev",
        disable : false ,
        text_content : "tiktok",
        link_content : 'https://www.tiktok.com/@muhyidin_dev'
    }

]


// Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { afterLoadingImage, beforeLoadingImage } from "@/utility/loader_image";



export default function Avatar_Suport() {
  return (
    <>

    {avatar_card.map ((m,i) => {
        return <div className='card_avatar bloc w-72 md:w-60 snap-start opacity-100 md:opacity-70 md:hover:opacity-100 transition-all hover:transition-all group' key={i} data-aos='zoom-in'>
        <Tilt>
        <LazyLoadImage
                alt={m.name}
                src={m.image}
                height={'100%'}
                width={'100%'}
                wrapperClassName='lazy-loader'
                beforeLoad={() => beforeLoadingImage()}
                afterLoad={() => afterLoadingImage()}
                effect='blur'
                className='hover:opacity-90 transition-all h-20 w-20 mx-auto rounded-full'
              />
        </Tilt>
        <p className='text-center pt-5 text-xl'>{m.name}</p>
        <p className='text-center pt-2 text-sm text-[#464957] h-8 capitalize group-hover:text-ungu transition-all hover:transition-all  duration-150'>{m.desc}</p>

        <div className='flex justify-center gap-2 my-6'>
        <a href={m.link_ig} className="text-white">
            <button className='py-2 text-sm disabled:cursor-not-allowed disabled:hover:bg-[#171717] disabled:hover:text-white disabled:hover:opacity-100 px-3 bg-[#171717] hover:opacity-80 rounded' disabled={m.disable}> Instgram </button>
        </a>
          <a href={m.link_content} className="text-white">
            <button className='py-2 text-sm disabled:cursor-not-allowed disabled:hover:bg-[#171717] disabled:hover:text-white disabled:hover:opacity-100 px-3 bg-[#171717] hover:opacity-80 rounded capitalize' disabled={m.disable} >{m.text_content}</button>
           </a>
        </div>
      </div>
    })}
        

    </>
  )
}

import Tilt from 'react-parallax-tilt'
import erlangga from '@/assets/suport_avatar/erlangga.webp'


// Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { afterLoadingImage, beforeLoadingImage } from "@/utility/loader_image";

export default function Avatar_Erlangga() {
    return (
        <div className='card_avatar  w-72 md:w-60 snap-start opacity-100  cursor-text transition-all hover:transition-all group' data-aos='fade-in'>
            <Tilt>
           
              <LazyLoadImage
                alt={'erlanggaht_tablet'}
                src={erlangga}
                height={'100%'}
                width={'100%'}
                wrapperClassName='lazy-loader'
                beforeLoad={() => beforeLoadingImage()}
                afterLoad={() => afterLoadingImage()}
                effect='blur'
                className='hover:opacity-90 transition-all h-36 w-36 mx-auto rounded-full'
              />
            
            </Tilt>
            <p className='text-center pt-5 text-2xl'>Erlangga Hidayatullah</p>
            <p className='text-center pt-2 text-md text-[#464957] group-hover:text-ungu ' >Full-Stack Developer</p>
            <div className='flex justify-center gap-2 my-6'>
                <a href='https://www.instagram.com/erlanggaht93/' className="text-white"><button className='py-2 text-sm px-5 bg-[#171717] hover:opacity-80 rounded'>Follow</button></a>
                <a href='https://ig.me/m/erlanggaht93' className="text-white"><button className='py-2 text-sm px-5 bg-[#171717] hover:opacity-80 rounded'>Message</button></a>
            </div>

        </div>
    )
}

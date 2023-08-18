import mobile from '@/assets/project_image/mobile.webp'
import tablet from '@/assets/project_image/tablet.webp'


// Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { afterLoadingImage, beforeLoadingImage } from "@/utility/loader_image";


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
          <LazyLoadImage
                alt={'erlanggaht_tablet'}
                src={tablet}
                height={'100%'}
                width={'100%'}
                wrapperClassName='lazy-loader'
                beforeLoad={() => beforeLoadingImage()}
                afterLoad={() => afterLoadingImage()}
                effect='blur'
                className='md:w-full mt-24 sm:mt-20 rotate-45 p-3  shadow rounded-xl group-hover:opacity-100 absolute left-1 top-20 '
              />
                        <LazyLoadImage
                alt={'erlanggaht_linkbio_Mobile'}
                src={mobile}
                height={'100%'}
                width={'100%'}
                wrapperClassName='lazy-loader'
                beforeLoad={() => beforeLoadingImage()}
                afterLoad={() => afterLoadingImage()}
                effect='blur'
                className='md:w-full mt-24 sm:mt-20  p-3  shadow rounded-xl group-hover:opacity-100 absolute -left-3   top-6'
              />
        </figure>

    </div>
  )
}

import Button_Gradient from "@/HEADER/components/atoms/button_popover";
import Button_Default from "@/HEADER/components/atoms/button_default";
import { style_hover } from "@/utility/gradient_color";
import Tilt from 'react-parallax-tilt'
import Absolute_Brain, { InBrain } from "@/HEADER/components/moleculs/absolute_brain";
import { useEffect, useState } from "react";
import Venus_Anim from "@/HEADER/components/moleculs/venus_anim";
import ActiveStart from "@/utility/active_star_theme";

// Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { afterLoadingImage, beforeLoadingImage } from "@/utility/loader_image";


// Icon small
import icon_assets from '@/assets/imported/icon_assets';const { hero_brain, Line,brain_lazy } = icon_assets


// Gradient Color
const { hover_text_gradient, hover_button_gradient } = style_hover()

export default function Hero() {
  const [loading_show, setLoading_show] = useState(false)


  useEffect(() => {

    if (document.readyState === 'interactive') {
      setLoading_show(true)

    }
    setTimeout(() => {
      setLoading_show(false)

    }, 3000)

    var x = window.matchMedia("(max-width: 640px)")
    if (x.matches) {
      setLoading_show(true); setTimeout(() => setLoading_show(false), 3000)
    }

    window.onload = function () {
      setLoading_show(false)
    }
    return () => {
      window.onload = function () {
        setLoading_show(false)
      }
    }
  }, [])




  return (
    <>

      <section className="flex flex-col-reverse md:flex-row md:items-center my-10 md:px-4   ">
        {loading_show ?
          <section className="flex-grow-0 md:w-7/12 w-full justify-center  flex md:justify-center " data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-duration='1000' >
            <Venus_Anim />
          </section> :
          <>
            {/* Left */}
            <div className="flex-grow-0 md:w-7/12" data-aos="fade-in" data-aos-duration='3000' data-aos-once={true} data-aos-offset={-10} >
              <Button_Gradient props={{ text: 'Trust by Erlanggaht', classN: "active:scale-95", ActiveStar: () => ActiveStart() }} />
              <h1 className="hero_title font-extrabold text-6xl md:7xl md:py-3 pt-9">More Than Just A
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-ping to-ungu"> Creative </span>
                Project</h1>
              <p className="font-[200] py-12 w-8/12 opacity-80 hover:opacity-100 transition-color hover:transition-color">Welcome to the web project storage erlangga hidayatullah. if you want to edit, publish or git fork my project, feel free. and if you want to ask questions about my project, contact or DM Instagram.</p>

              <div className="flex gap-2">
                <Button_Default props={{ text: "Let's Talk", icon: false, className: `bg-white text-dasar font-[700] ${hover_button_gradient}`, link: "https://ig.me/m/erlanggaht93" }} />
                <Button_Default props={{ text: "Star Theme", icon: true, className: `bg-transparent enabled:hover:bg-transparent ${hover_text_gradient}`, ActiveStar: () => ActiveStart() }} />
              </div>

            </div> </>
        }

        {/* Right */}

        <div className="hero mx-auto p-2 md:w-80 md:h-80 md:mb-12 my-20 relative group" data-aos="fade-in" >
          <Line clas='absolute -top-[110px] right-[20px] z-50 hidden lg:block' />
          {/* Absolute */}
          <section>
            <Absolute_Brain />
          </section>




          <Tilt transitionSpeed={20000}>

            {/* in brain */}
            <section>
              <InBrain />
            </section>

            <div className="md:w-[350px] md:h-[320px]">
              <LazyLoadImage
                alt={'hero_brain'}
                src={hero_brain}
                height={'100%'}
                width={'100%'}
                wrapperClassName='lazy-loader'
                placeholderSrc={brain_lazy}
                beforeLoad={() => beforeLoadingImage()}
                afterLoad={() => afterLoadingImage()}
                effect='blur'
                className='md:w-[350px] md:h-[320px] hero_img  '
              />
            </div>
          </Tilt>
          <div className="hero_shadow"></div>
        </div>
      </section>
    </>

  )
}

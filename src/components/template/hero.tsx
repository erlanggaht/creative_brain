import Button_Gradient  from "@/components/atoms/button_popover";
import Button_Default from "@/components/atoms/button_default";
import { style_hover } from "@/utility/gradient_color";
import Tilt from 'react-parallax-tilt'
// Gradient Color
const {hover_text_gradient,hover_button_gradient} = style_hover()

export default function Hero() {

  return (
    <section className="flex flex-col-reverse md:flex-row md:items-center ">

    {/* Left */}

    <div className="flex-grow-0 md:w-1/2">
        <Button_Gradient props={{text:'Trust By Erlanggaht'}}/>
        <h1 className="font-extrabold text-6xl md:text-7xl pt-6">More Than just A  
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-ping to-ungu"> Creative </span> 
         Agency</h1>
        <p className="font-[200] py-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quaerat culpa voluptate molestias optio suscipit porro. Quis earum dolorum aut.</p>
        
        <div className="flex gap-2">
          <Button_Default props={{text:"Let's Talk",icon:false,className:`bg-white text-dasar font-[700] ${hover_button_gradient}`}}/>
          <Button_Default props={{text:"Projects",icon:true,className:`bg-transparent enabled:hover:bg-transparent ${hover_text_gradient} `}}/>
        </div>

    </div>

    {/* Right */}

    <div className="hero mx-auto  p-2 md:w-80 md:h-80 md:mb-12 my-28 relative" >
    <Tilt  transitionSpeed={4000}>
      <div className="md:w-[350px] md:h-[320px]">
    <img src="/src/assets/business-3d-pink-brain (1).png" alt="brain" className="w-[350px] h-[320px] hero_img " />
    </div>
   </Tilt>
   <div className="hero_shadow"></div>
    </div>
    </section>

    
  )
}

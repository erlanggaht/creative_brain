// icon stack_image
import icon_stackImage from "@/assets/imported/icon_stackImage";const {reactjs_logo,vuejs_logo,tailwind_logo,postgresql_logo,firebase_logo,github_logo,typescript_logo,eslint_logo,vite_logo} = icon_stackImage

export const stack_image = [
    {
        src : reactjs_logo,
        alt : 'reactjs_logo',
        data_delay : 300,
        data_aos : 'fade-up'
    },
    {
        src : vuejs_logo,
        alt : 'vuejs_logo',
        data_delay : 500,
        data_aos : 'fade-down'
    },
    {
        src : tailwind_logo,
        alt : 'tailwind_logo',
        data_delay : 700,
        data_aos : 'fade-up'
    },

    {
        src : postgresql_logo,
        alt : 'postgresql_logo',
        data_delay : 900,
        data_aos : 'fade-down'
    },
    {
        src : firebase_logo,
        alt : 'firebase_logo',
        data_delay : 1100,
        data_aos : 'fade-up'
    },
    {
        src : github_logo,
        alt : 'github_logo',
        data_delay : 1300,
        data_aos : 'fade-down'
    },
    {
        src : typescript_logo,
        alt : 'typescript_logo',
        data_delay : 1500,
        data_aos : 'fade-up'
    },
    {
        src : eslint_logo,
        alt : 'eslint_logo',
        data_delay : 1700,
        data_aos : 'fade-down'
    },
    {
        src : vite_logo,
        alt : 'vite_logo',
        data_delay : 1900,
        data_aos : 'fade-up'
    }
]

export default function Tech_Image() {

    return (
        <>

        {stack_image.map ((m,i) => {
           return <div key={i}>
           <img src={m.src} height={32} width={170} className='h-[90px] w-[130px] sm:w-[170px] grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' alt={m.alt}
            data-aos={m.data_aos} data-aos-duration={300} data-aos-delay={m.data_delay} />
            </div>
        })}
            
            {/* Logo Express */}
            <div className=' h-[90px] w-[130px] sm:w-[170px] flex items-center justify-center grayscale hover:grayscale-0 hover:cursor-text transition-all hover:transition' data-aos-duration={300} data-aos="fade-down" data-aos-delay={2100}><p className='text-4xl text-[#00d8ff] tracking-wider pb-2  text-center'>express</p></div>

        </>
    )
}

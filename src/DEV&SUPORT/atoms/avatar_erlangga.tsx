import { Avatar } from 'flowbite-react'

export default function Avatar_Erlangga() {
    return (
        <div className='card_avatar  w-72 md:w-60 snap-start opacity-100  cursor-text transition-all hover:transition-all group' data-aos='fade-in'>

            <Avatar
                img="https://res.cloudinary.com/djsizjaee/image/upload/v1690981554/qjau8vdofmufxojclprq.jpg"
                size="xl"
                rounded={true}
                className='hover:opacity-90 transition-all'
            />
            <p className='text-center pt-5 text-2xl'>Erlangga Hidayatullah</p>
            <p className='text-center pt-2 text-md text-[#464957] group-hover:text-ungu ' >Full-Stack Developer</p>
            <div className='flex justify-center gap-2 my-6'>
                <a href='https://www.instagram.com/erlanggaht93/' className="text-white"><button className='py-2 text-sm px-5 bg-[#171717] hover:opacity-80 rounded'>Follow</button></a>
                <a href='' className="text-white"><button className='py-2 text-sm px-5 bg-[#171717] hover:opacity-80 rounded'>Message</button></a>
            </div>

        </div>
    )
}

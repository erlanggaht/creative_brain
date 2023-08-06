import Tab_Experience from '@/EXPERIENCE/moleculs/tabs'

export default function Main_Experience() {
  return (
    <>
    <h1 className='md:text-center text-6xl font-bold tracking-tight'>Experience</h1>

    <p className='md:text-center md:max-w-[1000px] break-keep md:mx-auto text-lg text-gray-400 my-6'><span className='font-bold text-ungu capitalize'>experience and certificate</span> that have been obtained after working in a company and self-taught in the world of programmers </p>


    <section className='mt-28 md:px-6'>
        <Tab_Experience/>
    </section></>
  )
}

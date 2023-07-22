
export default function Absolute_Brain() {
    return (
        <>

            <div className="absolute -top-[55px] left-[135px] p-1 text-gray-300">Fullstack</div>
            <div className="absolute top-5 left-0 p-1 -translate-x-3 -rotate-45 text-gray-300">Javascript</div>
            <div className="absolute top-36 left-0 p-1 -translate-x-[52px] md:-translate-x-[65px] -rotate-90 text-gray-300">Framework</div>
            <div className="absolute top-36 right-0 p-1 translate-x-[40px] md:translate-x-[95px] -rotate-90 text-gray-300">Logical</div>
            <div className="absolute top-5 right-0 p-1 translate-x-4 md:translate-x-9 rotate-45 text-gray-300">Python</div>

        </>
    )
}

export function InBrain() {
    return (
        <>
            <div className="absolute top-[86px] md:font-[400] font-[200] cursor-pointer left-[60px] px-1 text-white z-50 drop-shadow -rotate-12 bg-sky-900 scale-90" >ReactJs</div>
            <div className="absolute top-[47px] md:font-[400] font-[200] cursor-pointer left-[80px] px-1 text-white z-50 drop-shadow rotate-2 bg-[#222]" >NextJS</div>
            <div className="absolute top-[119px] md:font-[400] font-[200] cursor-pointer left-[90px] px-1 text-white z-50 drop-shadow -rotate-6 bg-green-700 " >VueJs</div>
            <div className="absolute top-[180px] md:font-[400] font-[200] cursor-pointer left-[40px] px-1 text-sky-800 z-50 drop-shadow -rotate-6 bg-white" >Tailwinds</div>

            <div className="absolute top-[36px] md:font-[400] font-[200] cursor-pointer right-[60px] px-1 text-black z-50 drop-shadow rotate-12 bg-white" >Expressjs</div>
            <div className="absolute top-[97px] md:font-[400] font-[200] cursor-pointer right-[10px] px-1 text-white z-50 drop-shadow rotate-45 bg-red-800" >NestJs</div>
            <div className="absolute top-[138px] md:font-[400] font-[200] cursor-pointer right-[60px] px-1 text-white z-50 drop-shadow rotate-12 bg-yellow-400 " >Django</div>
            <div className="absolute top-[200px] md:font-[400] font-[200] cursor-pointer right-[80px] px-1 text-white z-50 drop-shadow rotate-1 bg-green-800" >MongoDB</div>
            <div className="absolute top-[168px] md:font-[400] font-[200] cursor-pointer right-[10px] px-1 text-yellow-400 z-50 drop-shadow -rotate-45 bg-white scale-75" >MySql</div>
            <div className="absolute top-[90px] scale-75 bg-neutral-400 md:font-[400] font-[200] cursor-pointer right-[60px] px-1 text-gray-200 z-50 drop-shadow rotate-2 " >PostgresSQL</div>
        </>
    )
}

import { useState } from "react"

export default function Git_Erlangga() {
  const [readMore_h, setReadMore_h] = useState({
    style: 'max-h-[85px] md:max-h-[83px]',
    boolean: false
  }); // @ts-ignore 
  const { style, boolean } = readMore_h;

  return (
    <>
      <div className='px-6 md:px-12 md:py-32 relative'  >
      
      {/* <div id='starss'></div>
      <div id='starss2'></div>
      <div id='starss3'></div> */}


        <div className="flex ">
        <p className="hover:bg-gray-200 hover:cursor-text hover:border-transparent hover:text-ping flex items-center gap-2 rounded py-2 px-3 hover:transition-all transition border border-ping shadow-sm">
        <img src="https://erlanggaht93.vercel.app/assets/ghost-halloween-horror-svgrepo-com-74d2419c.svg" alt="logo_erlangga" height={32} width={32} />
        <span className='leading-4' data-aos='fade-left'>hello world! <br/><span className="inline-block text-gray-400 text-sm">my name ...</span> </span></p></div>
        <div   data-aos="fade-in" data-aos-easing="ease-in" data-aos-delay="500">
        <h1 className='text-5xl md:text-6xl text-ping font-bold py-2 '>Erlangga Hidayatullah</h1>
        <div className={`md:w-[360px] ${style} overflow-hidden px-1 pt-2`}>Being a Sofware Enginer having more than 1 year of experience in one of the world's gadget industries is
          {!boolean && <span className="opacity-60 text-sm cursor-pointer hover:opacity-40" onClick={() => setReadMore_h({ style: 'h-full md:w-[640px] leading-7', boolean: true })}>... Read More &raquo; </span>}
          
          

          <span className="pl-2"><br/>a source of pride. I have mastered many frameworks, and the ones with the most experience in them are <span className="uppercase font-bold italic">react, vue, next, nuxt </span> as javascript framework libraries.</span>
          <p className="px-9 py-6">for the css style library I have a lot of experience with <span className="font-bold italic uppercase">Tailwinds, Scss, DaisyUI, Bootstrap.</span> does not limit the framework or library requested by the company or client.</p>

            Was once a fullstack developer at a gadget company to manage databases and create optimized and responsive website pages. <span className="opacity-60 text-sm cursor-pointer hover:opacity-40" onClick={() => setReadMore_h({ style: 'h-[103px] md:h-[83px]', boolean: false })}> Read Less &laquo; </span>
            
        </div>
        <p className='text-right mt-12'>
          <a href='https://github.com/erlanggaht' className='link_border text-white text-xl md:text-3xl hover:text-white relative drop-shadow' >Check My Github</a>
        </p>
        </div>
      </div>
    </>
  )
}

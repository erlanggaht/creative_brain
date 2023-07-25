import Writer_Terminal from "@/MAIN-CONTENT/atoms/writer_terminal";
import {useState} from 'react'

export default function Terminal() {
  const [switchTerminal,setSwitchTerminal] = useState(false)


  return (
    <>
         <div className='bg-[#060606] border-t-2 border-t-[#2e343b] pt-1 px-3 lg:p-3 mt-5 sm:mt-0 relative flex-grow rounded-xl shadow-xl lg:h-[300px] h-[320px] overflow-auto overflow-x-hidden hover:bg-[#151515] transition-all hover:transition-all ease-out w-full'>
          
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4 text-sm font-thin lg:font-normal text-gray-400 '>
            
            {/* Mobile */}
            <p className="hidden md:block cursor-pointer hover:opacity-75">Problem (0) </p>
            <div className="flex gap-6 items-center lg:hidden cursor-pointer hover:opacity-75">Terminal<p className="text-2xl md:hidden pb-2">...</p> </div>
            {/* Mobile */}

            <p className="hidden lg:block cursor-pointer hover:opacity-75">Terminal</p>
            <p className="hidden lg:block cursor-pointer hover:opacity-75">Output</p>
            <p className="hidden lg:block cursor-pointer hover:opacity-75">Debug Console</p>

            </div>

            <div className='flex gap-5 text-xl items-center'>
                <p className="hover:text-ungu cursor-pointer">&#x2b;</p>
                <p className="hover:text-ungu cursor-pointer">...</p>
                <p className="hover:text-ungu cursor-pointer">&#10514;</p>
                <p className="hover:text-ungu cursor-pointer">&#x78;</p>
              </div>
          </div>

          <div className='flex flex-col-reverse lg:flex-row justify-between mt-5 '>
          
          <div className="text-sm font-[400] w-full  mt-12 lg:mt-0 pr-2">
          { switchTerminal ?   <Writer_Terminal2/> : <Writer_Terminal1/>
        }
          </div> 
          <div className='border-l border-l-[#2e343b] px-4 sm:pr-5 text-sm flex flex-col gap-2 '>
            <p className={`flex items-center gap-1 ${!switchTerminal && 'bg-[#2e343b] transition-colors'} p-1 cursor-pointer hover:opacity-75 pr-2 `} onClick={() => setSwitchTerminal (false)}><span>&#x21f2;</span> bash</p>
            <p className={`flex items-center gap-1 ${switchTerminal && 'bg-[#2e343b] transition-colors'} p-1 cursor-pointer hover:opacity-75 pr-2`} onClick={() => setSwitchTerminal (true)}><span>&#x21f2;</span> cmd</p>
          </div>
          </div> 
        </div>
    </>
  )
}


function Writer_Terminal2 () {
  return <Writer_Terminal props={{text_string:"<p>Microsoft Windows [Version xx.x.xxxxx.1933] <p> (c) Microsoft Corporation. All rights reserved. </p> <p>root :\ toor\ code\project\ reactjs \ brain_creative> </p> <br/> </p><p>mkdir creative_brain</p></p><p style=''>git clone https://github.com/erlanggaht/creative_brain.git</p> <p>cd creative_brain</p> <br/> <p>code .</p> <p>npm install</p> <p>npm run dev</p> <br/> <p style='padding-left:16px'> &gt;  web_3d@0.0.0 dev </p> <p style='padding-left:16px'> vite . </p> <br/> </p> <br><span style='color:white'>VITE</span> v4.4.4  ready in 698 ms</br> <p><span style='color:gray'>➜</span>  Local:   http://localhost:5173/ </p> <p> <span style='color:gray'>➜</span>  Network: use --host to expose </p> <p> <span style='color:gray'>➜</span>  press h to show help </p> </br> Happy Hacking .. ", cursor:'|',delay:40,pause : 9700}} />
}

function Writer_Terminal1 () {
  return <Writer_Terminal props={{text_string:"<p>mkdir creative_brain</p></p><p style=''>gh repo clone erlanggaht/creative_brain</p> <p>cd creative_brain</p> <p>npm install</p> <p>npm run dev</p> <br/> <p style='padding-left:16px'> &gt;  web_3d@0.0.0 dev </p> <p style='padding-left:16px'> vite . </p> <br/> </p> <br><span style='color:yellow'>VITE</span> v4.4.4  ready in 698 ms</br> <p><span style='color:yellow'>➜</span>  Local:   http://localhost:5173/ </p> <p> <span style='color:yellow'>➜</span>  Network: use --host to expose </p> <p> <span style='color:yellow'>➜</span>  press h to show help </p> </br> Happy Hacking .. ", cursor:'|',delay:40,pause : 9700}} />
}
import { useEffect, useState } from 'react'
import Avatar_Erlangga from '@/DEV&SUPORT/atoms/avatar_erlangga'
import Avatar_Suport from '@/DEV&SUPORT/moleculs/avatar_suport'
import Scroll_X from '@/utility/scroll_x'

export default function Main_Dev_Suport() {
    const [screenWindow, setScreenWindow] = useState(false)

    // Avatar Scroll X 
    useEffect(() => {
        Scroll_X()
        const mobile_queries = window.matchMedia("(min-width:1024px)").matches // >> true | false
        mobile_queries && setScreenWindow(true)
        window.addEventListener('resize', function () {
            // viewport and full window dimensions will change
            var viewport_width = window.innerWidth;
            if (viewport_width > 1024) setScreenWindow(true)
            else setScreenWindow(false)
        });
    }, [])

    return (
        <>
            <h1 className='text-4xl md:text-5xl text-center md:text-right'>Developer Brain./Me</h1>

            <section className='card_avatar avatar_erlangga mt-32 flex justify-center '>
                <Avatar_Erlangga />
            </section>

            <p className='mt-40 text-right'>Suport Me</p>

            <section className='card_avatar avatar_suport flex gap-12 gap-x-8  mt-12  overflow-x-auto lg:overflow-visible lg:flex-wrap lg:justify-center snap-x 

' id="scroll_container">

                {!screenWindow ? <div className='wrapper'>
                    <Avatar_Suport />
                </div> : <Avatar_Suport />
                }
            </section>


        </>
    )
}

import Avatar_Erlangga from '@/DEV&SUPORT/atoms/avatar_erlangga'
import Avatar_Suport from '@/DEV&SUPORT/moleculs/avatar_suport'
import { useEffect } from 'react'

export default function Main_Dev_Suport() {

    useEffect(() => { 
        const slider : any = document.querySelector('.list-x');
        let isDown = false;
        let startX : any;
        let scrollLeft : any;
        
        slider.addEventListener('mousedown', (e : any) =>  {
          isDown = true;
          slider.classList.add('active');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e : any) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 1; //scroll-fast
          slider.scrollLeft = scrollLeft - walk;
          console.log(walk);
        });
    }, [])


    return (
        <>
            <h1 className='text-4xl md:text-5xl text-center md:text-right'>Developer Brain./Me</h1>

            <section className='card_avatar avatar_erlangga mt-32 flex justify-center '>
                <Avatar_Erlangga />
            </section>


            <p className='mt-28 md:mt-40 text-right'>Suport Me</p>
            <section className='list-x card_avatar avatar_suport flex gap-12 gap-x-20 md:gap-12  mt-12 p-12 pt-3 px-6 md:p-2  overflow-x-auto w-full lg:overflow-visible lg:flex-wrap lg:justify-center  cursor-grab active:cursor-grabbing' id="scroll_container">


                <Avatar_Suport />

            </section>


        </>
    )
}

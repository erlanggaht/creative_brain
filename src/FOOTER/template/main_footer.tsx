import InputFooter from "@/FOOTER/moleculs/input_footer";

export default function Main_Footer() {
  return (
    <>
    <section className={'footerGrid relative'}>
       
      
   
       <div className={'footertop sm:flex sm:flex-row flex-col flex justify-end a gap-20  py-2 '}>
         <div className={'aboutFooter sm:px-10 sm:text-left  text-right px-8'}>
         <h2 className={'text-4xl font-bold uppercase'}> About</h2>
         <menu className={'mt-10 flex flex-col gap-5 font-thin text-md text-color-base-100 dark:text-bg-base'}>
         <li><a className={'linkfooterAbout text-white'} href={'https://erlanggaht.vercel.app'}>Link Bio</a></li>
         <li> <a className={'linkfooterAbout text-white'} href={'https://instagram.com/erlanggaht93'}>Instagram</a></li>
         <li><a className={'linkfooterAbout text-white'} href={'https://www.linkedin.com/in/erlangga-hidayatullah-60b53b262/'}>Linkedin</a></li>
         <li><a className={'linkfooterAbout text-white'} href={'https://medium.com/@erlanggahidayat.md'}>Medium</a></li>
         </menu>
         </div>
   
         <div className={'letsConnectFooter text-right px-5 sm:px-8 '}>
         <h2 className={'text-4xl font-bold uppercase'}>Let's connect</h2>
         <div className={'mt-10'}>
           <p className={'mb-10 text-lg '}><span className={'inline-block w-3/4'}>if you want to learn to make a portfolio and learn programming. can send email to me. free</span></p>
           <InputFooter/>
         </div>
         </div>
       </div>
       </section>
   
   
     
    </>
  )
}

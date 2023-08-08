import {useEffect,useState} from 'react'
export default function Footer_Content_Bottom() {
    const [windowLocation,setWindowLocation] = useState<String>('')

    useEffect(() => {
      // @ts-ignore
    setWindowLocation(window.navigator.oscpu)
    
    }, [])
    

  return (
    <section className={'flex justify-between mt-20 ml-6 sm:mx-16 flex-wrap gap-3 pt-6 px-0  text-sm border-t-2 border-ungu '}>
    <p>OSCPU You : {windowLocation}</p>
    <p className="text-left">©2023 Erlangga Hidayatullah. All Rights Reserved.</p>
    <div className={'flex gap-4'}>
      <p className={'bg-color-other-200 text-bg-base '}>Thanks to <a href={'https://flowbite.com/'}>Flowbite.</a></p>
      <a href={'https://erlanggaht.vercel.app/terms/'}>Terms of use</a>
      <a href={'https://erlanggaht.vercel.app/privacy_policy/'}>Pripacy Policy</a>
    </div>
  </section>
  )
}

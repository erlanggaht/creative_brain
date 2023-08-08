export default function LineScroll() {

  // Scroll Follow
  if(typeof window !== 'undefined' ) {
    window.addEventListener("scroll", () => {
      const b = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
      document.querySelector('#lineScroll')?.setAttribute("style",`width:${b}vw;transition:.1s all`)
   })
  }
 

  return (
    <>
      <div id={'lineScroll'} className={` h-1 rounded-e shadow bg-gradient-to-r from-ping to-ungu fixed top-0 left-0 z-50`} style={{zIndex:99999}}></div>
    </>
  )
}

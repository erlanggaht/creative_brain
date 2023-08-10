// Audio
import audio from '@/assets/imported/audio';const {logout} = audio
  

// Active Start
  export default function ActiveStart() {
    document.querySelectorAll('.st').forEach(m => m.classList.toggle('stars') )
    document.querySelectorAll('.st2').forEach(m => m.classList.toggle('stars2') )
    document.querySelectorAll('.st3').forEach(m => m.classList.toggle('stars3') )

    const audio_logout =  new Audio(logout)
    setTimeout(() => { audio_logout.play()},100)

  }
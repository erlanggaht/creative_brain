import { GlobalContext } from '@/Context/Global_Context';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useRef, useContext, useEffect } from 'react'


// Audio
import audio from '@/assets/imported/audio';const {submit_guest,join} = audio

export default function Login_Guestbook() {
    const { loginGuest_active, setLoginGuest_active, wait, setWait }: any = useContext(GlobalContext)
    const [openModal, setOpenModal] = useState<Boolean | false>(false);
    const nameRef: any = useRef<HTMLInputElement>(null)
    const websiteRef: any = useRef<HTMLInputElement>(null)

    // const props = { openModal, setOpenModal, nameRef, websiteRef };


    // Submit Name 
    function SubmitName() {

        // Validation
        const required_http = websiteRef.current?.value.includes('htt')
        const required_https = websiteRef.current?.value.includes('://')

        if (nameRef.current?.value == '') {
            setTimeout(() => { 
                alert('please fill in the name column!')
            },100)
            const audio_error =  new Audio(submit_guest)
            audio_error.preload = 'auto';
            audio_error.play()
            return
        } 
        if (!required_http) {
            setTimeout(() => { 
                alert('please use " http:// "  or " https:// " ')            
            },100)
            const audio_error =  new Audio(submit_guest)
            audio_error.preload = 'auto';
            audio_error.play()
            return
        } 
        if (!required_https) {
            setTimeout(() => { 
                alert('please use " http:// "  or " https:// " ')            
            },100)
            const audio_error =  new Audio(submit_guest)
            audio_error.preload = 'auto';
            audio_error.play()
            return
        } 

        localStorage.setItem('guest_name', nameRef.current?.value)
        localStorage.setItem('website_link', websiteRef.current?.value == '' ? "" : websiteRef.current?.value)
        localStorage.setItem('login_actv', 'true')
        setOpenModal(false)
        setLoginGuest_active(true)
        const audio_submit =  new Audio(submit_guest)
        setTimeout(() => { audio_submit
            .preload = 'auto'
            audio_submit.play()},100)
}


    // Get Login Guestbook Local_Storage >> if Login Active
    useEffect(() => {
        const name_guest = window.localStorage.getItem('guest_name')
        const login_actv = window.localStorage.getItem('login_actv')

        if (!name_guest || !login_actv || 1) console.log('login as guestbook skuy! in Footer ')
       

        return () => {
            if (name_guest || loginGuest_active) {
                setLoginGuest_active(true)
                   
            }
        }
    }, [])

    // Login Guest
    function Fnlogin_guest() {
        setWait(true)
        
        setTimeout(async() => {
            setOpenModal(true)
            setWait(false)
            const audio_show =  new Audio(join)
                setTimeout(() => { audio_show
                    .preload = 'auto'
                    audio_show.title = 'gudd'
                    audio_show.play()},100)
        }, 1500);


    }



    return (
        <>
            <p className='md:px-40 mt-20 text-gray-600' data-aos='zoom-out' data-aos-once={true}><span className='font-bold text-ungu cursor-pointer hover:text-ping' onClick={() => Fnlogin_guest()}>Login</span> {wait ? "please wait.." : 'as guestbook'}</p>

            <Modal
                show={openModal === true}
                size="md"
                popup
                onClose={() => setOpenModal(false)}
                // @ts-ignore
                initialFocus={nameRef}

            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in as guestbook</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your name" />
                            </div>
                            <TextInput id="name" ref={nameRef} placeholder="name" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="website" value="Your Website - opsional" />
                            </div>
                            <TextInput id="website" ref={websiteRef} placeholder="https://yourweb.com" />
                        </div>
                        <div className="w-full">
                            <Button className='bg-ping hover:bg-ungu' onClick={() => SubmitName()}>Log in as guestbook</Button>

                        </div>
                        <div className="flex flex-row-reverse justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            <span onClick={() => setOpenModal(false)} className='hover:text-ungu cursor-pointer hover:underline'>Cancel&nbsp;</span>
                            <a href="#" onClick={(e) => { e.preventDefault(); alert("Sorry, it's still under development") }} className="text-ping hover:underline dark:text-ping">
                                Login with github
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

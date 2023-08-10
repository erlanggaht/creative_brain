import { GlobalContext } from '@/Context/Global_Context'
import { useContext, useEffect, useState, useRef } from 'react'
import { HiUserCircle } from 'react-icons/hi';
import Login_Guestbook from '@/FOOTER/moleculs/login_guestbook'
import { HiOutlineArrowRight } from 'react-icons/hi';
import Writer_Terminal from '@/MAIN-CONTENT/atoms/writer_terminal'
import { Tooltip } from 'flowbite-react';
import axios from 'axios';


// Endpoint
// @ts-ignore
const url_get_guestbook = `${ __HOST__}/guest_comment`;const url_add_guestbook = `${ __HOST__}/guest_add`

type User = {
name : String,
comment : String,
id : Number,
website : String

}
export default function GuestBook() {

    const { loginGuest_active, setLoginGuest_active, setWait, wait }: any = useContext(GlobalContext)
    const [data_guestbook, setDataGuestbook] = useState<User[] | Boolean>([])
    const [dataChange,setDataChange] = useState(false)
    const refComment = useRef<HTMLInputElement>(null)
    const [wait_data,setWait_data] = useState(false)
    
    function Logout_Guest(e: MouseEvent | any) {
        e.preventDefault()
        localStorage.clear()
        setWait(true)
        setTimeout(() => {
            setLoginGuest_active(false)
            setWait(false)
            const audio_logout =  new Audio('/src/assets/logout.mp3')
            setTimeout(() => { audio_logout.play()},100)
        }, 3000)
        
    }
    //   Get GuestBook API
    useEffect(() => {

        let controller: any = new AbortController();
        setWait_data(true)
        setTimeout(() => {
            (async () => {
                try {
                    const response = await axios.get<User[]>(url_get_guestbook, {
                        signal: controller.signal
                    })
                    setDataGuestbook(response.data)
                    controller = null
                } catch (error) {
                    // @ts-ignore
                    console.log("hello dev : failed get data guestbook! " + error)
                    setDataGuestbook(false)
                }
            })()
            setWait_data(false)
        },7000)
 
                // refresh getData
                if(dataChange == true) {
                    (async () => {
                        try {
                            const response = await axios.get(url_get_guestbook, {
                                signal: controller.signal
                            })
                            setDataGuestbook(response.data)
                            controller = null
                        } catch (error) {
                            // @ts-ignore
                            console.log("hello dev : failed get data guestbook! " + error?.response?.status + ' ' + error?.response?.statusText)
                            setDataGuestbook(false)
                        }
                    })()
                }

        return () => {controller?.abort();setDataChange(false)}
    }, [dataChange])


    // Add Submit Guest Comment 
    function Submit_Comment(e: any) {
        if (e.code == 'Enter') {
            try {

                setTimeout(async () => {
                    await axios(url_add_guestbook, {
                        method: "POST",
                        data: {
                            name: localStorage.getItem('guest_name'),
                            website: localStorage.getItem('website_link'),
                            comment: refComment.current?.value,
                        }
                    })
                        // Get Data for refresh comment 
                        const response = await axios.get(url_get_guestbook)
                        setDataGuestbook(response.data)
                        setDataChange(true)
                                 // @ts-ignore
                        refComment.current.value = ''
                        const audio_show =  new Audio('/src/assets/send.mp3')
                        setTimeout(() => { audio_show.play()},200)
                    }, 400)
            }
            catch (error) {
                console.log({ error })
            }

        }

    }


    return (
        <>

            <h1 className='text-5xl text-right'>Guestbook</h1>

            {loginGuest_active ?
                <div className='text-left md:pl-32 mt-20 flex flex-col sm:flex-row  md:items-center items-start' data-aos='zoom-out' data-aos-once={true}>
                    <div>
                    <Tooltip
                        content="Press Enter for comment"
                        placement="top"
                    >
                        <input placeholder='comment' className='text-sm pr-2 p-1 ml-3 text-ungu bg-transparent w-full md:w-40 mr-12 border-b border-ungu focus:text-sm6 focus:outline-none' onKeyDown={(e) => Submit_Comment(e)} ref={refComment} />
                    </Tooltip>
                    </div>
                    <div className='flex items-center mt-4 ml-4'>
                    <a href='#' className=' group  text-lg items-center transition-all  hover:transition-all active:scale-90 active:text-gray-500 pt-1' onClick={(e) => Logout_Guest(e)} > Logout   <HiOutlineArrowRight className=" w-0 group-hover:h-5 group-hover:w-5 transition-all inline mr-2" />
                    </a>
                    <div className='text-gray-600 pt-1'>
                        {wait ? <Writer_Terminal props={{ text_string: "Wait. is logging out ...", cursor: '|', delay: 80, pause: 3000,loop:true }} /> : "from " + localStorage.getItem('guest_name')}
                    </div>
                    </div>
                </div>
                : <Login_Guestbook />}


            <div className='max-h-[420px] pt-6 pb-12 pl-0 md:pl-32 mt-4 md:mt-0 overflow-auto '>
                <div className='admin flex items-center'>
                    <div className=' text-gray-300 flex items-center'><HiUserCircle className='mr-1 ' /> erlanggaht: </div>
                    <div className='text-sm text-gray-500 ml-3 italic'>
                        <Writer_Terminal props={{ text_string: "Hello, thanks for viewing the Brain./Me website. please leave a comment and login as a guest. - <span className='text-ping'>Master Admin</span>", cursor: '|', delay: 80, pause: 15000,loop:false }} />
                    </div>
                </div>

                <div className='guest_comment mt-20 sm:mt-2' >
                    {/* @ts-ignore */}
                    {data_guestbook && wait_data ? <div className='text-sm text-gray-500 ml-3 italic lowercase flex flex-col md:inline'> <Writer_Terminal props={{ text_string: "Wait. is fetching data...", cursor: '.', delay: 80, pause: 5000 }} /></div> : data_guestbook&&data_guestbook.map((m:any, i) => {
                        return <div className='flex items-center mt-6 ml-1' key={i} data-aos='fade-right'>
                            <a href={m.website == 'no_website' ? '#' : m.website} target='_blank' className='w-[70px]'> <p className='text-gray-300 text-sm hover:text-ping lowercase'>{m.name == 'null' ? "not_name" : m.name}: </p> </a>
                            <p className='text-sm text-gray-500 ml-3 italic lowercase flex flex-col md:inline'>{m.comment}  <span className='pl-0 md:pl-0 not-italic font-thin opacity-80'>- {m.website}</span></p>
                        </div>
                    })}

                    {/* if data fetch guestbook error */}
                    {!data_guestbook && <p className='text-sm text-gray-500 ml-5 italic lowercase md:inline'>sorry friend :  fetching data guestbook failed.. try reloading! </p>}
                </div>

            </div>



        </>
    )
}

import { Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi'
export const data_experience = [

    {
        time: "August 2018",
        title: "DUTA PASARAYA",
        desc: " an internship at a company DUTA PASARAYA. selling and promoting clothing became my experience and the start of my work.",
        view_cert: false,
        link_cert: '#',
        text_button: ""
    },
    {
        time: "November 2018",
        title: "RAMENYA!",
        desc: " I used to be an assistant chef at one of the biggest ramen noodle restaurant companies in RAMENYA! Located at Summarecon Mall Bekasi and Transmart Bandung.",
        view_cert: false,
        link_cert: '#',
        text_button: ""
    },
    {
        time: "August 2019 - November 2022 ",
        title: "PT. World Innovative Telecommunication",
        desc: "I have worked in a gadget company, especially a smartphone called OPPO, for 3 years and it was the best experience and learning at that time.",
        view_cert: false,
        link_cert: '#',
        text_button: ''
    },
    {
        time: "July 2020 - November 2022 ",
        title: "Junior Fullstack Developer",
        desc: "interested in the world of programmers in the field of websites and started trying to make a Gadget company Company Profile at Sinar Asih Sumedang as a full stack web developer",
        view_cert: false,
        link_cert: '#',
        text_button: ''
    },
    {
        time: "March 2023 ",
        title: "Freelance",
        desc: "Armed with fullstack web programmer knowledge, I decided to find clients while learning a lot of technologies. and want to enter the world of work as a professional programmer in a company that requires an IT workforce",
        view_cert: false,
        link_cert: '#',
        text_button: ''
    }

]



export default function Work_Timeline() {
    return (
        <>

            <Timeline  data-aos="fade-in">

                {data_experience.map((m, i) => {
                    return <Timeline.Item key={i}>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                {m.time}
                            </Timeline.Time>
                            <Timeline.Title className='text-white tracking-wide text-xl '>
                                {m.title}
                            </Timeline.Title>
                            <Timeline.Body>
                                <p className='text-sm mt-2'>
                                    {m.desc}

                                </p>
                                {m.view_cert && <div className='flex justify-end mt-28'>
                                    <button className="p-2 px-3 bg-ungu text-white rounded-sm  flex  items-center">View Certificates             <HiArrowNarrowRight className="ml-2 h-3 w-3" /> </button>
                                </div>
                                }
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                })}
            </Timeline>
        </>
    )
}

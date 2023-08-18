import { Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi'
export const data_experience = [

    {
        time: "July 2023",
        title: "HackerRank - ID.24a0611a57a5 ",
        desc: " Javascript Intermediate",
        view_cert: true,
        link_cert: 'https://www.hackerrank.com/certificates/24a0611a57a5',
        text_button: "View Certificate"
    },
    {
        time: "July 2018",
        title: "HackerRank - ID.348984f0bb73",
        desc: " Problem Solving ( Intermediate ) With Javascript",
        view_cert: true,
        link_cert: 'https://www.hackerrank.com/certificates/348984f0bb73',
        text_button: "View Certifacate"
    },
    {
        time: "August 2023 ",
        title: "HackerRank - ID.f1822875acf8",
        desc: "Javascript Basic",
        view_cert: true,
        link_cert: 'https://www.hackerrank.com/certificates/f1822875acf8',
        text_button: 'View Certificate'
    },
    {
        time: "August 2023 ",
        title: "HackerRank - ID.f1822875acf8",
        desc: "Javascript REST API",
        view_cert: true,
        link_cert: 'https://www.hackerrank.com/certificates/7f2cc120b1cf',
        text_button: 'View Certificate'
    },
    

]



export default function Certifacate_Timeline() {
    return (
        <>

            <Timeline  >

                {data_experience.map((m, i) => {
                    return <Timeline.Item key={i}>
                        <Timeline.Point />
                        <Timeline.Content data-aos='zoom-out'>
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
                                {m.view_cert && <div className='flex justify-end mt-6'>
                                    <a href={m.link_cert} target='_blank'><button className="p-2 px-3 bg-ungu text-white rounded-sm  flex  items-center hover:opacity-80 active:opacity-70 mb-12 md:mb-0">{m.text_button} <HiArrowNarrowRight className="ml-2 h-3 w-3" /> </button></a>
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

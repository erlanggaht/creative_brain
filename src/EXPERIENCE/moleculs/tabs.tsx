import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import Work_Timeline from '@/EXPERIENCE/moleculs/work_timeline';
import Certifacate_Timeline from '@/EXPERIENCE/moleculs/certifacate';

export default function Tab_Experience() {
    return (
        <>

            <Tabs.Group
                aria-label="Default tabs"
                style="default"
                className=' md:flex'
            >
                <Tabs.Item
                    active
                    icon={HiUserCircle}
                    title="Work"
                    
                >
                    <section className='mt-12 px-6'>
                        <Work_Timeline />
                    </section>

                </Tabs.Item>
                <Tabs.Item
                    icon={HiClipboardList}
                    title="Certificate"
                >

                    <section className='mt-12 px-6'>
                        <Certifacate_Timeline />
                    </section>

                </Tabs.Item>
                <Tabs.Item
                    icon={HiAdjustments}
                    title="Settings"
                    onClick={() => alert(`Sorry, it's still under development`)}
                >

                    <section className='mt-12 px-6'>
                        <p>
                            Sorry, it's still under development

                        </p>
                    </section>
                </Tabs.Item>


            </Tabs.Group>

        </>
    )
}

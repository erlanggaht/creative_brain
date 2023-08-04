import { Timeline } from 'flowbite-react';
import { HiHashtag } from 'react-icons/hi';




export default function VerticalTimeline() {
  return (
    <Timeline horizontal>
    <Timeline.Item data-aos="fade-right" data-aos-duration={600} data-aos-delay={500}>
      <Timeline.Point icon={HiHashtag} className='md:inline hidden' />
      <Timeline.Content>
        <Timeline.Title className='text-ping mt-12 [data-testid="timeline-point"]'>
          Atoms
        </Timeline.Title>
        <Timeline.Time  className='text-white'>
        smallest component        
        </Timeline.Time>
        <Timeline.Body>
        basic HTML elements like form labels, inputs, buttons, and others
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item data-aos="fade-right" data-aos-duration={1000} data-aos-delay={900}>
      <Timeline.Point icon={HiHashtag} className='md:inline hidden' />
      <Timeline.Content>
        <Timeline.Title className='text-ping mt-12 [data-testid="timeline-point"]'>
          Moleculs
        </Timeline.Title>
        <Timeline.Time  className='text-white'>
        component atoms that are combined
          </Timeline.Time>
        <Timeline.Body>
         molecules are relatively simple groups of UI elements functioning together as a unit.
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item data-aos="fade-right" data-aos-duration={1000} data-aos-delay={1100}>
      <Timeline.Point icon={HiHashtag} className='md:inline hidden' />
      <Timeline.Content>
        <Timeline.Title className='text-ping mt-12 '>
          Organism
        </Timeline.Title>
        <Timeline.Time  className='text-white'>
          atomic and molecule components that are combined
        </Timeline.Time>
        <Timeline.Body>
        Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms.         
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>

  
  </Timeline>
  )
}

export function VerticalTimeline_down() {
  return <Timeline data-aos="fade-down" data-aos-duration={1000} data-aos-delay={1250}>
    <Timeline.Item >
      <Timeline.Point icon={HiHashtag} className='md:inline hidden' />
      <Timeline.Content>
        <Timeline.Title className='text-ping mt-12 '>
          Templates
        </Timeline.Title>
        <Timeline.Time  className='text-white'>
        combination of 3 atomic elements 
        </Timeline.Time>
        <Timeline.Body>
        Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.       
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>

    <Timeline.Item>
      <Timeline.Point icon={HiHashtag} className='md:inline hidden' />
      <Timeline.Content>
        <Timeline.Title className='text-ping mt-12 '>
          Pages
        </Timeline.Title>
        <Timeline.Time  className='text-white'>
        all atomic elements and already an app
        </Timeline.Time>
        <Timeline.Body>
        Pages are specific instances of templates that show what a UI looks like with real representative content in place. 
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline>
}




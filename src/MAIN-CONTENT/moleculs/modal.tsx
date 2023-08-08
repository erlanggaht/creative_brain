
import Button_Gradient from '@/HEADER/components/atoms/button_popover';
import { Button, Modal } from 'flowbite-react';
import {useState} from 'react'
import Tack_Stack from './tack_stack';


interface Modal_Button {
  props_modal : {
    project_detail : Array<Object>,
  }
}

export default function Modal_Button({props_modal} : Modal_Button) {
  const {project_detail} =  props_modal
  const [openModal, setOpenModal] = useState<string | undefined>();

  return (
    <>
      <div  onClick={() => setOpenModal('default')}><Button_Gradient props={{text:'Project Detail',classN:'rounded '}} /></div>
      <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)} data-aos='zoom-out' data-aos-once={true}>
        <Modal.Header>Detail Project</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
           <Tack_Stack stack={project_detail} 
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(undefined)} color='light' >Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


